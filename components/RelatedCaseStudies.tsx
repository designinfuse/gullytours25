"use client";

import Link from "next/link";
import CaseStudyItem from "./CaseStudyItem";
import {
  getCaseStudiesByCategory,
  type CaseStudy,
  type CaseStudyCategory,
} from "@/data/caseStudies";

interface RelatedCaseStudiesProps {
  currentCaseStudy: CaseStudy;
  maxItems?: number;
}

export default function RelatedCaseStudies({
  currentCaseStudy,
  maxItems = 3,
}: RelatedCaseStudiesProps) {
  // Get all case studies from the same category
  const sameCategoryStudies = getCaseStudiesByCategory(currentCaseStudy.category);

  // Filter out the current case study and shuffle
  const otherStudies = sameCategoryStudies
    .filter((cs) => cs.id !== currentCaseStudy.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, maxItems);

  // If not enough from same category, fill with random from other categories
  if (otherStudies.length < maxItems) {
    const allCategories: CaseStudyCategory[] = [
      "corporate",
      "conference",
      "educational",
      "collaboration",
      "custom",
      "social",
    ];

    const otherCategoryStudies = allCategories
      .filter((cat) => cat !== currentCaseStudy.category)
      .flatMap((cat) => getCaseStudiesByCategory(cat))
      .filter((cs) => cs.id !== currentCaseStudy.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, maxItems - otherStudies.length);

    otherStudies.push(...otherCategoryStudies);
  }

  if (otherStudies.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#EDEDE7] px-4 pt-[140px] pb-[240px]">
      <div className="mx-auto flex max-w-[1368px] flex-col items-center gap-16">
        {/* Title */}
        <h2 className="text-center font-rajdhani text-4xl font-bold leading-none text-black md:text-5xl lg:text-[64px] lg:leading-[64px]">
          MORE EXPERIENCES LIKE THIS
        </h2>

        {/* Case Studies Grid */}
        <div className="grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {otherStudies.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/case-studies/${caseStudy.slug}`}
              className="w-full max-w-[440px]"
            >
              <CaseStudyItem caseStudy={caseStudy} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
