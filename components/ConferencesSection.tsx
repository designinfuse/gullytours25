"use client";

import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  title: string;
  description: string;
  color: string;
}

export default function ConferencesSection() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Google – Creative Connections",
      description:
        "A walk stitched with stories and art, designed to bring Google's team closer to Bengaluru—and to each other.",
      color: "#247DA6",
    },
    {
      title: "CRED – Pete by Night",
      description:
        "Centuries-old markets, local bites, and shared laughter—curated into a walk that helped CRED's team see the city, and each other, anew.",
      color: "#4F8C7D",
    },
    {
      title: "Hyatt Centric – \nHigh on Death by Dosa",
      description:
        "We built a journey along Bangalore's iconic dosa trail, filled with conversation, culture, and culinary delights for Hyatt Centric.",
      color: "#DE6D11",
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-rajdhani text-[64px] font-bold uppercase leading-[1em] text-[#262626] md:text-[84px]">
            Conferences
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[109px]">
          {/* Left side - Main Image Card */}
          <div className="flex flex-col items-start justify-start w-full lg:w-[672px] h-[513px] bg-[#247DA6]">
            {/* Image */}
            <Image
              src="/conferences-main-image-65029c.png"
              alt="Conference experience"
              fill
              className=""
            />
            {/* Text content */}
            <div className="space-y-3">
              <p className="font-rajdhani text-[20px] font-medium uppercase leading-[1.2em] text-white">
                Looking beyond icebreakers and offsites? We bring teams and
                leaders together through the city - It&apos;s History, Culture,
                Food and Hidden Corners
              </p>
              <Link
                href="/tours/corporate"
                className="inline-block font-rajdhani text-[20px] font-semibold uppercase leading-[5.45em] text-white underline"
              >
                EXPLORE CORPORATE EXPERIENCES
              </Link>
            </div>
          </div>

          {/* Right side - Case Studies */}
          <div className="flex w-full flex-col gap-8 lg:w-[590px]">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex gap-7">
                {/* Icon/Image placeholder */}
                <div
                  className="h-[153px] w-[153px] flex-shrink-0 rounded-lg"
                  style={{ backgroundColor: study.color }}
                />

                {/* Text content */}
                <div className="flex flex-col gap-1 py-1">
                  <h3 className="whitespace-pre-line font-rajdhani text-[28px] font-semibold uppercase leading-[1em] text-[#262626]">
                    {study.title}
                  </h3>
                  <p className="h-[73px] font-rajdhani text-[16px] font-medium leading-[1.25em] text-[#262626]">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
