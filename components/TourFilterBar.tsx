"use client";

import { tourCategoryColors } from "@/types/tour";

interface TourFilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CATEGORIES = [
  { id: "All", label: "All", bgColor: "#DE6D11" },
  { id: "Upcoming Tours", label: "Upcoming Tours", bgColor: "#247DA6" },
  { id: "Weekend Tours", label: "Weekend Tours", bgColor: tourCategoryColors["Weekend Tours"] },
  {
    id: "Corporate Experiences",
    label: "Corporate Experiences",
    bgColor: tourCategoryColors["Corporate Experiences"],
  },
  { id: "Educational Walks", label: "Educational Walks", bgColor: tourCategoryColors["Educational Walks"] },
  { id: "Custom Walks", label: "Custom Walks", bgColor: tourCategoryColors["Custom Walks"] },
] as const;

export default function TourFilterBar({
  activeCategory,
  onCategoryChange,
}: TourFilterBarProps) {
  return (
    <nav className="flex w-full justify-center bg-[#EDEDE7] px-4 py-6">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <div
              key={category.id}
              className="relative"
            >
              {/* Outer border ring for active state */}
              {isActive && (
                <div
                  className="absolute -inset-[5px] rounded-[25px] border-2"
                  style={{ borderColor: category.bgColor }}
                />
              )}
              <button
                onClick={() => onCategoryChange(category.id)}
                className="relative rounded-[20px] px-4 py-4 transition-all hover:opacity-90 focus:outline-none"
                style={{
                  backgroundColor: category.bgColor,
                }}
                aria-pressed={isActive}
                aria-label={`Filter by ${category.label}`}
              >
                <span
                  className={`whitespace-nowrap text-[#FDF6D8] ${
                    isActive
                      ? "font-rajdhani text-[20px] font-semibold"
                      : "font-inter text-[18px] font-normal"
                  }`}
                >
                  {category.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
