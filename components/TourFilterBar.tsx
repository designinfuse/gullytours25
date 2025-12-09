"use client";

interface TourFilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CATEGORIES = [
  { id: "All", label: "All", bgColor: "#DE6D11" },
  { id: "Weekend Tours", label: "Weekend Tours", bgColor: "#53A3B1" },
  {
    id: "Corporate Experiences",
    label: "Corporate Experiences",
    bgColor: "#B23F27",
  },
  { id: "Educational Walks", label: "Educational Walks", bgColor: "#DE6D11" },
  { id: "Custom Walks", label: "Custom Walks", bgColor: "#4F8C7D" },
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
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="rounded-[20px] border border-[#FDF6D8] px-4 py-4 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#FDF6D8] focus:ring-offset-2"
              style={{
                backgroundColor: isActive ? "#DE6D11" : category.bgColor,
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
          );
        })}
      </div>
    </nav>
  );
}
