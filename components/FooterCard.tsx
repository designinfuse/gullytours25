"use client";

import Image from "next/image";
import { useState } from "react";
import PerforatedCard from "./PerforatedCard";

interface FooterCardProps {
  title: string;
  description: string;
  illustration: string;
  borderColor: string;
  className?: string;
  expandDirection?: "right" | "left";
}

export default function FooterCard({
  title,
  description,
  illustration,
  borderColor,
  className = "",
  expandDirection = "right",
}: FooterCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const expandsLeft = expandDirection === "left";

  return (
    <div
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // For left-expanding cards, we need to offset the container
        marginLeft: expandsLeft ? (isHovered ? "-210px" : "0px") : undefined,
        transition: "margin-left 300ms ease-out",
      }}
    >
      {/* Outer colored container that expands on hover */}
      <div
        className="relative h-[160px] overflow-hidden rounded-lg transition-[width] duration-300 ease-out"
        style={{
          backgroundColor: borderColor,
          width: isHovered ? "370px" : "160px",
        }}
      >
        {/* Inner content - always full width, clipped by parent */}
        <div
          className="absolute inset-y-0 flex w-[370px] items-center"
          style={{ left: expandsLeft ? undefined : 0, right: expandsLeft ? 0 : undefined }}
        >
          {expandsLeft ? (
            <>
              {/* Text content first for left-expanding */}
              <div className="ml-4 flex w-[190px] flex-col justify-center gap-2">
                <h4
                  className="font-dm-sans text-sm font-bold uppercase tracking-wide"
                  style={{ color: "#FDF6D8" }}
                >
                  {title}
                </h4>
                <p
                  className="font-roboto text-xs leading-relaxed"
                  style={{ color: "#FDF6D8" }}
                >
                  {description}
                </p>
              </div>
              {/* Inner perforated card with illustration */}
              <div className="mr-[15px] flex-shrink-0">
                <PerforatedCard
                  bgColor="#FDF6D8"
                  edges={{ top: true, bottom: true }}
                  perforationSize={5}
                  perforationSpacing={12}
                  className="flex h-[130px] w-[130px] items-center justify-center p-3"
                >
                  <Image
                    src={illustration}
                    alt={title}
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </PerforatedCard>
              </div>
            </>
          ) : (
            <>
              {/* Inner perforated card with illustration */}
              <div className="ml-[15px] flex-shrink-0">
                <PerforatedCard
                  bgColor="#FDF6D8"
                  edges={{ top: true, bottom: true }}
                  perforationSize={5}
                  perforationSpacing={12}
                  className="flex h-[130px] w-[130px] items-center justify-center p-3"
                >
                  <Image
                    src={illustration}
                    alt={title}
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </PerforatedCard>
              </div>
              {/* Text content - always positioned, revealed by parent width */}
              <div className="ml-4 flex w-[190px] flex-col justify-center gap-2 pr-4">
                <h4
                  className="font-dm-sans text-sm font-bold uppercase tracking-wide"
                  style={{ color: "#FDF6D8" }}
                >
                  {title}
                </h4>
                <p
                  className="font-roboto text-xs leading-relaxed"
                  style={{ color: "#FDF6D8" }}
                >
                  {description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile-friendly version that's always expanded
export function FooterCardExpanded({
  title,
  description,
  illustration,
  borderColor,
  className = "",
}: FooterCardProps) {
  return (
    <div className={`${className}`}>
      {/* Outer colored container - always expanded */}
      <div
        className="flex items-center overflow-hidden rounded-lg"
        style={{ backgroundColor: borderColor }}
      >
        {/* Inner perforated card with illustration */}
        <div className="m-2 flex-shrink-0">
          <PerforatedCard
            bgColor="#FDF6D8"
            edges={{ top: true, bottom: true }}
            perforationSize={5}
            perforationSpacing={12}
            className="flex h-[120px] w-[120px] items-center justify-center p-2 sm:h-[130px] sm:w-[130px] sm:p-3"
          >
            <Image
              src={illustration}
              alt={title}
              width={110}
              height={110}
              className="object-contain"
            />
          </PerforatedCard>
        </div>

        {/* Text content - always visible */}
        <div className="flex flex-col justify-center gap-2 py-3 pr-3 sm:py-4 sm:pr-4">
          <h4
            className="font-dm-sans text-sm font-bold uppercase tracking-wide"
            style={{ color: "#FDF6D8" }}
          >
            {title}
          </h4>
          <p
            className="font-roboto text-xs leading-relaxed"
            style={{ color: "#FDF6D8" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
