"use client";

import Image from "next/image";
import Link from "next/link";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      number: "1.",
      title: "Make a request",
      description:
        "Schedule a discovery call or send a message to your expert to discuss the destination and any ideas or hopes you have for the trip. This call is free, with no obligation to continue.",
    },
    {
      number: "2.",
      title: "We Craft the Walk",
      description:
        '"Think of it like a tailor-made adventure — your host will design a custom route, plan the stops, and add all the little details that make a walk memorable (minus the blisters)."',
    },
    {
      number: "3.",
      title: "Walk, Bond, Repeat",
      description:
        '"Confirm your walk, show up with comfy shoes and curious eyes — we\'ll handle the rest. Stories, laughter, and a few great photos for LinkedIn included.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#4F8C7D] px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-rajdhani text-[64px] font-bold uppercase leading-[1em] text-white md:text-[84px]">
            How it Works
          </h2>
          <div className="mt-5 flex justify-center">
            <svg
              width="241"
              height="19"
              viewBox="0 0 241 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[200px] md:w-[241px]"
            >
              <path
                d="M1 9.5C1 9.5 120.5 1 240 9.5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Left side - Steps */}
          <div className="w-full lg:w-[445px]">
            {/* Steps content */}
            <div className="relative flex gap-[43px]">
              {/* Numbers and lines */}
              <div className="relative flex w-[25px] flex-col items-center">
                {/* Step 1 */}
                <div className="font-inter text-[28px] font-semibold leading-[1.21em] text-white">
                  1.
                </div>
                {/* Line between 1 and 2 */}
                <div className="my-3 h-[180px] w-0 border-l-2 border-white"></div>
                {/* Step 2 */}
                <div className="font-inter text-[28px] font-normal leading-[1.21em] text-white">
                  2.
                </div>
                {/* Line between 2 and 3 */}
                <div className="my-3 h-[180px] w-0 border-l-2 border-white"></div>
                {/* Step 3 */}
                <div className="font-inter text-[28px] font-normal leading-[1.21em] text-white">
                  3.
                </div>
              </div>

              {/* Step descriptions */}
              <div className="flex flex-col gap-[5px]">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className="font-rajdhani text-[28px] font-bold leading-[1.276em] text-white">
                      {step.title}
                    </h3>
                    <p className="font-rajdhani text-[24px] font-medium leading-[1.583em] text-white">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-xl border-2 border-[#F5EF86] px-4 py-2"
              >
                <span className="font-rajdhani text-[32px] font-semibold uppercase leading-none text-[#F5EF86]">
                  CRAFT YOUR TRIP
                </span>
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative ml-auto hidden lg:block">
            <div className="relative h-[556px] w-[556px] overflow-hidden rounded-lg border-8 border-[#F5EF86]">
              <Image
                src="/how-it-works-image-2c66c4.png"
                alt="Team walking experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
