"use client";

import Link from "next/link";
import CaseStudyItem from "./CaseStudyItem";
import {
  getCaseStudiesByCategory,
  categoryColors,
  type CaseStudyCategory,
  type CaseStudy,
} from "@/data/caseStudies";
import { useMemo } from "react";

interface CaseStudiesSectionProps {
  category?: CaseStudyCategory;
  count?: number;
  title?: string;
}

// Helper to shuffle and pick random items
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function CaseStudiesSection({
  category,
  count = 3,
  title = "Case Studies",
}: CaseStudiesSectionProps) {
  // Get case studies filtered by category if provided
  const filteredCaseStudies = useMemo(() => {
    if (category) {
      return getCaseStudiesByCategory(category);
    }
    return [];
  }, [category]);

  // Pick random case studies
  const displayedCaseStudies = useMemo(() => {
    return getRandomItems(filteredCaseStudies, count);
  }, [filteredCaseStudies, count]);

  // Get the color for this category
  const bgColor = category ? categoryColors[category] : undefined;

  // Don't render if no case studies
  if (displayedCaseStudies.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto flex max-w-[1368px] flex-col items-center gap-16">
        {/* Title */}
        <h2 className="font-rajdhani text-[64px] font-bold uppercase leading-[1.026em] text-black md:text-[78px]">
          {title}
        </h2>

        {/* Case Study Cards Grid */}
        <div className="grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedCaseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/case-studies/${caseStudy.slug}`}
              className="flex w-full justify-center"
            >
              <CaseStudyItem caseStudy={caseStudy} bgColor={bgColor} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
