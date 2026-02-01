"use client";

import { CSSProperties, ReactNode } from "react";

interface PerforatedCardProps {
  children: ReactNode;
  edges?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
  bgColor?: string;
  className?: string;
  perforationSize?: number; // Size of each perforation circle (default: 10px)
  perforationSpacing?: number; // Spacing between perforations (default: 30px)
}

export default function PerforatedCard({
  children,
  edges = { top: true, bottom: true },
  bgColor = "#DE6D11",
  className = "",
  perforationSize = 6,
  perforationSpacing = 20,
}: PerforatedCardProps) {
  // Build the mask using repeating radial gradients that adapt to any size
  const createAdaptiveMask = () => {
    const masks: string[] = [];
    const maskSizes: string[] = [];
    const maskPositions: string[] = [];
    const maskRepeats: string[] = [];

    // For left edge: circles centered at x=0 (left boundary) to create semicircles
    if (edges.left) {
      const leftPattern = `radial-gradient(circle at 0px ${perforationSpacing / 2}px, transparent ${perforationSize}px, black ${perforationSize}px)`;
      masks.push(leftPattern);
      maskSizes.push(`100% ${perforationSpacing}px`);
      maskPositions.push("0 0");
      maskRepeats.push("repeat-y");
    }

    // For right edge: circles centered at the right boundary to create semicircles
    if (edges.right) {
      const rightPattern = `radial-gradient(circle at 100% ${perforationSpacing / 2}px, transparent ${perforationSize}px, black ${perforationSize}px)`;
      masks.push(rightPattern);
      maskSizes.push(`100% ${perforationSpacing}px`);
      maskPositions.push("0 0");
      maskRepeats.push("repeat-y");
    }

    // For top edge: circles centered at y=0 (top boundary) to create semicircles
    if (edges.top) {
      const topPattern = `radial-gradient(circle at ${perforationSpacing / 2}px 0px, transparent ${perforationSize}px, black ${perforationSize}px)`;
      masks.push(topPattern);
      maskSizes.push(`${perforationSpacing}px 100%`);
      maskPositions.push("0 0");
      maskRepeats.push("repeat-x");
    }

    // For bottom edge: circles centered at the bottom boundary to create semicircles
    if (edges.bottom) {
      const bottomPattern = `radial-gradient(circle at ${perforationSpacing / 2}px 100%, transparent ${perforationSize}px, black ${perforationSize}px)`;
      masks.push(bottomPattern);
      maskSizes.push(`${perforationSpacing}px 100%`);
      maskPositions.push("0 0");
      maskRepeats.push("repeat-x");
    }

    return {
      maskImage: masks.join(", "),
      maskSize: maskSizes.join(", "),
      maskPosition: maskPositions.join(", "),
      maskRepeat: maskRepeats.join(", "),
      maskComposite: "intersect",
      WebkitMaskImage: masks.join(", "),
      WebkitMaskSize: maskSizes.join(", "),
      WebkitMaskPosition: maskPositions.join(", "),
      WebkitMaskRepeat: maskRepeats.join(", "),
      WebkitMaskComposite: "source-in",
    };
  };

  const style: CSSProperties = {
    backgroundColor: bgColor,
    ...createAdaptiveMask(),
  };

  return (
    <div className={`relative ${className}`} style={style}>
      {children}
    </div>
  );
}
