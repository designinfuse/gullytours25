"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PerforatedCard from "./PerforatedCard";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

// Decorative diamond icon
const DiamondIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
    <path d="M13.3232 14.8692L0 7.44437L26.6455 7.44437L13.3232 14.8692ZM26.6797 7.42484L0.0341797 7.42484L13.3564 3.05176e-05L26.6797 7.42484Z" fill="#FDF6D8"/>
    <path d="M40.0225 14.8692L26.6992 7.44437L53.3447 7.44437L40.0225 14.8692ZM53.3809 7.42484L26.7354 7.42484L40.0576 3.05176e-05L53.3809 7.42484Z" fill="#FDF6D8"/>
    <path d="M66.6436 14.8692L53.3203 7.44437L79.9658 7.44437L66.6436 14.8692ZM80 7.42484L53.3545 7.42484L66.6768 3.05176e-05L80 7.42484Z" fill="#FDF6D8"/>
  </svg>
);

// Parse outcome text into bullet points if it contains line breaks or bullet markers
const parseOutcome = (outcome: string): string[] => {
  // Split by newlines and filter empty lines
  const lines = outcome
    .split(/\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // If we have multiple lines, return them as bullet points
  if (lines.length > 1) {
    return lines;
  }

  // Otherwise return as single item
  return [outcome];
};

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Create a testimonial from the case study data
  const testimonial =
    caseStudy.theConnection ||
    "A wonderful experience that brought our team closer together through stories, discovery, and shared moments.";

  const outcomePoints = parseOutcome(caseStudy.theOutcome);

  // Calculate preview text (first ~300 characters of theExperience)
  const previewLength = 300;
  const experiencePreview =
    caseStudy.theExperience.length > previewLength
      ? caseStudy.theExperience.substring(0, previewLength) + "..."
      : caseStudy.theExperience;

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F8DF] py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-[1368px] flex-col gap-10 px-4 md:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left Side - Testimonial Card */}
        <div className="flex w-full items-start justify-center lg:w-auto lg:justify-start">
          <PerforatedCard
            bgColor="#4F8C7D"
            edges={{ top: true, bottom: true }}
            perforationSize={8}
            perforationSpacing={24}
            className="w-full max-w-[500px] lg:w-[500px]"
          >
            <div className="flex min-h-[400px] flex-col items-center justify-center px-8 py-12 md:min-h-[450px] md:px-12 md:py-16 lg:min-h-[500px]">
              {/* Top Decorative Icons */}
              <div className="mb-8 text-[#FDF6D8]">
                <DiamondIcon />
              </div>

              {/* Testimonial Text */}
              <p className="text-center font-rajdhani text-xl font-semibold italic leading-relaxed text-[#FDF6D8] md:text-2xl lg:text-[28px] lg:leading-[37px]">
                {testimonial}
              </p>

              {/* Bottom Decorative Icons */}
              <div className="mt-8 text-[#FDF6D8]">
                <DiamondIcon />
              </div>
            </div>
          </PerforatedCard>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Client */}
            <p className="font-rajdhani text-xl leading-relaxed text-black">
              <span className="font-bold">Client:</span>{" "}
              <span className="font-normal">{caseStudy.client}</span>
            </p>

            {/* Their Ask */}
            <p className="font-rajdhani text-xl leading-relaxed text-black">
              <span className="font-bold">Their Ask:</span>{" "}
              <span className="font-normal">{caseStudy.theirAsk}</span>
            </p>

            {/* Experience Tailored */}
            <p className="font-rajdhani text-xl leading-relaxed text-black">
              <span className="font-bold">Experience we tailored:</span>{" "}
              <span className="font-normal">{caseStudy.experienceTailored}</span>
            </p>

            {/* Team Description (if available) */}
            {caseStudy.teamDescription && (
              <p className="font-rajdhani text-xl leading-relaxed text-black">
                <span className="font-bold">The Team:</span>{" "}
                <span className="font-normal">{caseStudy.teamDescription}</span>
              </p>
            )}

            {/* The Experience - with Read More/Less toggle */}
            <div>
              <p className="font-rajdhani text-xl leading-relaxed text-black">
                <span className="font-bold">The Experience:</span>{" "}
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.span
                      key="full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-normal"
                    >
                      {caseStudy.theExperience}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-normal"
                    >
                      {experiencePreview}
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col gap-6 overflow-hidden"
                >
                  {/* The Connection (if available) */}
                  {caseStudy.theConnection && (
                    <p className="font-rajdhani text-xl leading-relaxed text-black">
                      <span className="font-bold">The Connection:</span>{" "}
                      <span className="font-normal">{caseStudy.theConnection}</span>
                    </p>
                  )}

                  {/* The Outcome */}
                  <div>
                    <p className="mb-3 font-rajdhani text-xl font-bold leading-relaxed text-black">
                      The Outcome
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      {outcomePoints.map((point, index) => (
                        <li
                          key={index}
                          className="font-rajdhani text-xl font-normal leading-relaxed text-black"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Read Less Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 w-fit font-rajdhani text-xl font-bold text-[#B23F27] underline decoration-solid transition-colors hover:text-[#8A2E1D]"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
