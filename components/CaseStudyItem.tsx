"use client";

import Image from "next/image";
import {
  categoryColors,
  categoryLabels,
  type CaseStudy,
} from "@/data/caseStudies";

interface CaseStudyItemProps {
  caseStudy: CaseStudy;
  bgColor?: string;
}

export default function CaseStudyItem({ caseStudy, bgColor }: CaseStudyItemProps) {
  // Use case study image or fallback
  const thumbImage = caseStudy.image || "/tours/default-case-study.jpg";

  // Use provided color or get from central category colors
  const cardColor = bgColor || categoryColors[caseStudy.category] || "#DE6D11";

  // Get category label from central labels
  const categoryLabel = categoryLabels[caseStudy.category] || caseStudy.category;

  return (
    <div
      className="relative flex h-full w-full max-w-[440px] flex-col cursor-pointer transition-transform hover:scale-[1.02]"
      style={{ backgroundColor: cardColor }}
    >
      {/* Main Image */}
      <div className="relative h-[390px] w-full overflow-hidden bg-[#D9D9D9] p-4">
        <Image
          src={thumbImage}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute left-4 top-4 flex h-[33px] items-center justify-center bg-[#F7F8DF] px-4">
          <p className="font-dm-sans text-lg font-normal uppercase leading-[1.98em] text-black">
            {categoryLabel}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-2 px-4 pb-6 pt-6">
        {/* Title */}
        <h3 className="font-rajdhani text-[28px] font-semibold leading-tight text-white md:text-3xl">
          {caseStudy.title}
        </h3>

        {/* Divider Line */}
        <div className="my-1 h-[0.68px] w-full bg-white" />

        {/* Client & Experience */}
        <p className="font-dm-sans text-lg font-normal leading-relaxed text-white">
          {caseStudy.client} | {caseStudy.experienceTailored}
        </p>

        {/* View Button - Push to bottom */}
        <div className="mt-auto flex items-center justify-end pt-4">
          <span className="rounded-2xl bg-[#FDF6D8] px-4 py-2.5 font-rajdhani text-base font-semibold leading-[1.2em] text-[#262626] transition-all hover:bg-[#F5EF86]">
            VIEW CASE STUDY
          </span>
        </div>
      </div>
    </div>
  );
}
