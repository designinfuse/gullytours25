"use client";

import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const heroImage = caseStudy.image || "/tours/default-case-study.jpg";

  return (
    <section className="w-full bg-[#EDEDE7] pt-[120px] pb-[120px]">
      <div className="mx-auto flex w-full max-w-[1368px] flex-col items-center px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h1 className="py-8 text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-black md:py-10 md:text-5xl lg:py-12 lg:text-[64px] lg:leading-[64px]">
          {caseStudy.title}
        </h1>

        {/* Hero Image */}
        <div className="relative aspect-[1240/493] w-full max-w-[1240px] overflow-hidden bg-white">
          <Image
            src={heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
