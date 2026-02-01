"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, LayoutGroup } from "framer-motion";

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 0,
    number: "1.",
    title: "Make a request",
    description:
      "Schedule a discovery call or send a message to your expert to discuss the destination and any ideas or hopes you have for the trip. This call is free, with no obligation to continue.",
  },
  {
    id: 1,
    number: "2.",
    title: "We Craft the Walk",
    description:
      "Think of it like a tailor-made adventure — your host will design a custom route, plan the stops, and add all the little details that make a walk memorable (minus the blisters).",
  },
  {
    id: 2,
    number: "3.",
    title: "Walk, Bond, Repeat",
    description:
      "Confirm your walk, show up with comfy shoes and curious eyes — we'll handle the rest. Stories, laughter, and a few great photos for LinkedIn included.",
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // We'll use a longer scroll container to allow for the "scroll-through" effect
  // The content will be sticky.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepCount = steps.length;
      const stepIndex = Math.min(
        Math.floor(latest * stepCount),
        stepCount - 1
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="bg-[#4F8C7D]">
      {/* 
        Container:
        Desktop: Tall for scrolling (250vh)
        Mobile: Auto height
      */}
      <div
        ref={containerRef}
        className="relative h-auto lg:h-[250vh]"
      >
        <div className="flex flex-col px-6 py-12 md:px-12 md:py-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:px-24">

          <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col">

            {/* Title */}
            <div className="mb-8 flex shrink-0 flex-col items-center gap-2 text-center lg:mb-12">
              <h2 className="font-rajdhani text-[48px] font-semibold uppercase leading-none text-white md:text-[64px] lg:text-[84px]">
                How it Works
              </h2>
              <div className="relative h-[15px] w-[180px] md:h-[19px] md:w-[241px]">
                <Image
                  src="/how-it-works-underline.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-24 lg:overflow-visible">

              {/* Left: Image */}
              <div className="relative flex shrink-0 flex-col items-center lg:block">
                <div className="relative aspect-square w-[300px] md:w-[400px] lg:w-[556px] shrink-0 border-8 border-[#F5EF86]">
                  <Image
                    src="/how-it-works-image.jpg"
                    alt="Tour group having fun"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right: Steps */}
              <div className="flex w-full flex-col justify-center pt-4 lg:h-full lg:justify-center">

                <div className="flex flex-col w-full">

                  {/* Desktop: Animated Accordion */}
                  <div className="hidden lg:flex lg:flex-col">
                    <LayoutGroup>
                      {steps.map((step, index) => {
                        const isActive = activeStep === index;
                        const isLast = index === steps.length - 1;

                        return (
                          <div key={step.id} className="grid grid-cols-[40px_1fr] gap-x-8">
                            {/* Timeline Column */}
                            <div className="flex flex-col items-center h-full">
                              {/* Number */}
                              <motion.div
                                layout
                                className={`flex items-center justify-center font-rajdhani font-bold leading-none transition-all duration-300 ${isActive ? 'text-[#F5EF86] text-5xl' : 'text-white/40 text-3xl'}`}
                                style={{ height: '40px', width: '40px' }}
                              >
                                {index + 1}
                              </motion.div>

                              {/* Connecting Line */}
                              {!isLast && (
                                <div className="w-[2px] bg-white/40 flex-1 min-h-[40px] mt-2 mb-2" />
                              )}
                            </div>

                            {/* Content Column */}
                            <motion.div
                              layout
                              className={`flex flex-col ${isLast ? '' : 'pb-12'}`}
                            >
                              <div className="flex items-center h-[40px]"> {/* Height matches number for alignment */}
                                <h3 className={`font-rajdhani text-3xl font-bold uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40'}`}>
                                  {step.title}
                                </h3>
                              </div>

                              <motion.div
                                layout
                                initial={false}
                                animate={{
                                  height: isActive ? "auto" : 0,
                                  opacity: isActive ? 1 : 0,
                                  marginTop: isActive ? 16 : 0
                                }}
                                style={{ overflow: "hidden" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                              >
                                <p className="max-w-lg font-rajdhani text-2xl font-medium leading-relaxed text-white">
                                  {step.description}
                                </p>
                              </motion.div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </LayoutGroup>
                  </div>

                  {/* Mobile: Static List */}
                  <div className="flex flex-col lg:hidden">
                    {steps.map((step, index) => {
                      const isLast = index === steps.length - 1;
                      return (
                        <div key={step.id} className="grid grid-cols-[40px_1fr] gap-x-6">
                          {/* Timeline Column */}
                          <div className="flex flex-col items-center h-full">
                            {/* Number */}
                            <div
                              className="flex items-center justify-center font-rajdhani font-bold leading-none text-[#F5EF86] text-4xl"
                              style={{ height: '40px', width: '40px' }}
                            >
                              {index + 1}
                            </div>

                            {/* Connecting Line */}
                            {!isLast && (
                              <div className="w-[2px] bg-white/40 flex-1 min-h-[40px] mt-2 mb-2" />
                            )}
                          </div>

                          {/* Content Column */}
                          <div className={`flex flex-col ${isLast ? '' : 'pb-10'}`}>
                            <div className="flex items-center h-[40px]">
                              <h3 className="font-rajdhani text-2xl font-bold uppercase text-white md:text-3xl">
                                {step.title}
                              </h3>
                            </div>
                            <p className="mt-4 font-rajdhani text-lg font-medium leading-relaxed text-white md:text-2xl">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-12 md:pl-[64px]">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center border border-[#F5EF86] p-1 transition-transform hover:scale-105 rounded-xl"
                    >
                      <div className="flex items-center justify-center border border-[#F5EF86] px-8 py-3 bg-[#4F8C7D] rounded-lg">
                        <span className="font-rajdhani text-2xl font-semibold uppercase leading-none text-[#F5EF86] md:text-3xl">
                          CRAFT YOUR TRIP
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
