"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CorporateSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const caseStudies = [
    {
      icon: "/corporate-icon-1-69d3f3.png",
      iconBg: "#DE6D11",
      title: "Google – Creative Connections",
      description:
        "A walk stitched with stories and art, designed to bring Google's team closer to Bengaluru—and to each other.",
    },
    {
      icon: "/corporate-icon-2.png",
      iconBg: "#4F8C7D",
      title: "CRED – Pete by Night",
      description:
        "Centuries-old markets, local bites, and shared laughter—curated into a walk that helped CRED's team see the city, and each other, anew.",
    },
    {
      icon: "/corporate-icon-3-4d920f.png",
      iconBg: "#B23F27",
      title: "Hyatt Centric – High on Death by Dosa",
      description:
        "We built a journey along Bangalore's iconic dosa trail, filled with conversation, culture, and culinary delights for Hyatt Centric.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#EDEDE7] px-4 py-16 md:py-20 lg:py-28">
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 md:mb-16">
          <h2 className="text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-[#262626] sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[84px]">
            CORPORATE TOURS
            <br />& CONFERENCES
          </h2>
          <p className="text-center font-rajdhani text-xl font-semibold leading-tight text-[#262626] sm:text-2xl md:text-[26px] md:leading-[32px]">
            Discovering stories together to foster genuine connections
          </p>
        </div>

        {/* Content - Flexbox Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Large Blue Card with Wavy Frame */}
          <motion.div
            className="relative w-full overflow-visible lg:w-[55%] xl:w-[672px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            {/* Outer container with wavy pattern background (all edges) */}
            <div className="relative w-full">
              {/* Wavy pattern frame SVG - shows on all edges */}
              <svg
                viewBox="0 0 364 382"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M363.495 372.246V353.032C348.744 354.493 348.781 332.516 363.495 333.977V314.858C347.543 314.858 349.87 294.437 363.495 295.803V276.684C348.669 278.145 348.819 256.168 363.495 257.628V238.541C349.72 239.907 347.58 219.486 363.495 219.486V200.367C348.781 201.828 348.781 179.851 363.495 181.312V162.193C347.543 162.193 349.87 141.772 363.495 143.137V124.019C349.795 125.384 347.505 104.963 363.495 104.963V85.8761C348.744 87.3371 348.781 65.3599 363.495 66.8208V47.7019C348.744 49.1628 348.781 27.1856 363.495 28.6466V9.55944C358.128 10.0993 352.234 5.52605 352.234 0H329.338C329.338 12.5448 306.816 12.6083 306.816 0H283.882C283.882 12.5765 261.361 12.6083 261.361 0H238.464C238.464 12.5448 215.943 12.6083 215.943 0H193.008C193.008 12.5765 170.487 12.6083 170.487 0H147.59C147.59 12.5448 125.069 12.6083 125.069 0H102.134C102.134 12.5765 79.6131 12.6083 79.6131 0H56.7164C56.7164 12.5448 34.195 12.6083 34.195 0H11.2607C11.2607 5.04967 6.49367 9.49592 0 9.49592V28.6148C14.8641 28.6148 14.8641 47.6702 0 47.6702V66.789C14.8641 66.789 14.8641 85.8444 0 85.8444V104.963C14.9017 104.963 14.8641 124.019 0 124.019V143.106C14.8641 143.106 14.9017 162.161 0 162.161V181.28C14.8641 181.28 14.8641 200.335 0 200.335V219.454C14.9017 219.454 14.8641 238.51 0 238.51V257.597C14.8641 257.597 14.9017 276.652 0 276.652V295.771C14.8641 295.771 14.8641 314.826 0 314.826V333.945C14.8641 333.945 14.8641 353 0 353V372.151C6.45613 372.119 11.2232 376.502 11.2607 381.615H34.195C34.195 369.007 56.7164 369.039 56.7164 381.615H79.6131C79.6131 369.039 102.134 369.007 102.134 381.615H125.069C125.069 368.975 147.59 369.039 147.59 381.615H170.487C170.487 369.039 193.008 369.039 193.008 381.615H215.943C215.943 369.007 238.464 369.039 238.464 381.615H261.361C261.361 369.039 283.882 369.039 283.882 381.615H306.816C306.816 369.007 329.338 369.039 329.338 381.615H352.234C352.234 376.597 356.776 372.215 363.495 372.215V372.246Z"
                  fill="#EDEDE7"
                />
              </svg>

              {/* Solid blue overlay - covers left and right, reveals top and bottom wavy edges */}
              <div className="relative mx-2 flex flex-col">
                {/* Background Pattern - decorative overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/corporate-pattern.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Container - Flexbox */}
                <div className="relative flex flex-col gap-6 p-6 md:p-8 lg:gap-8 lg:p-8">
                  {/* Main Image */}
                  <div className="relative aspect-[614/334] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/corporate-main-image-65029c.png"
                      alt="Corporate team experience"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-4">
                    <p className="font-rajdhani text-lg font-medium capitalize leading-relaxed text-white sm:text-xl md:text-[20px] md:leading-[24px]">
                      Looking Beyond Icebreakers And Offsites? We Bring Teams And
                      Leaders Together Through The City - It&apos;s History, Culture,
                      Food And Hidden Corners
                    </p>
                    <Link
                      href="/tours/corporate"
                      className="font-rajdhani text-lg font-semibold uppercase text-[#F5EF86] underline decoration-solid underline-offset-2 transition-colors hover:text-white sm:text-xl"
                    >
                      EXPLORE CORPORATE EXPERIENCES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Cards - Flexbox */}
          <div className="flex w-full flex-col gap-6 md:gap-8 lg:w-[45%] lg:justify-start xl:w-[590px]">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="flex gap-4 md:gap-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                {/* Icon */}
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-32 sm:w-32 md:h-[154px] md:w-[153px]"
                  style={{ backgroundColor: study.iconBg }}
                >
                  <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-[130px] md:w-[130px]">
                    <Image
                      src={study.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-1 py-1">
                  <h3 className="font-rajdhani text-xl font-semibold uppercase leading-tight text-[#262626] sm:text-2xl md:text-[24px]">
                    {study.title}
                  </h3>
                  <p className="font-rajdhani text-sm font-medium capitalize leading-relaxed text-[#262626] sm:text-base md:text-[16px] md:leading-[20px]">
                    {study.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
