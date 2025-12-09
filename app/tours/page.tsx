"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TourItem from "@/components/TourItem";
import TourFilterBar from "@/components/TourFilterBar";
import TourSkeleton from "@/components/TourSkeleton";
import type { Tour, ApiTour, ApiResponse } from "@/types/tour";

// Sample tours for Corporate, Educational, and Custom categories
const SAMPLE_CORPORATE_TOURS: Tour[] = [
  {
    id: "corp-1",
    location: "Bangalore",
    title: "Innovation District Walk",
    subtitle: "Corporate Experience: Team Building & History | 2.5 Hrs",
    price: "From Rs2500",
    image: "/tours/corporate-innovation.jpg",
    bgColor: "#B23F27",
    category: "Corporate Experiences",
  },
  {
    id: "corp-2",
    location: "Bangalore",
    title: "Startup Ecosystem Tour",
    subtitle: "Corporate Experience: Networking & Insights | 3 Hrs",
    price: "From Rs3000",
    image: "/tours/corporate-startup.jpg",
    bgColor: "#B23F27",
    category: "Corporate Experiences",
  },
  {
    id: "corp-3",
    location: "Mysore",
    title: "Heritage Leadership Walk",
    subtitle: "Corporate Experience: Leadership & Culture | 3 Hrs",
    price: "From Rs2800",
    image: "/tours/corporate-heritage.jpg",
    bgColor: "#B23F27",
    category: "Corporate Experiences",
  },
];

const SAMPLE_EDUCATIONAL_TOURS: Tour[] = [
  {
    id: "edu-1",
    location: "Bangalore",
    title: "Architecture & Urban Planning",
    subtitle: "Educational Walk: Design History | 3 Hrs",
    price: "From Rs1800",
    image: "/tours/educational-architecture.jpg",
    bgColor: "#DE6D11",
    category: "Educational Walks",
  },
  {
    id: "edu-2",
    location: "Bangalore",
    title: "Colonial History Trail",
    subtitle: "Educational Walk: British Legacy & Independence | 2.5 Hrs",
    price: "From Rs1500",
    image: "/tours/educational-colonial.jpg",
    bgColor: "#DE6D11",
    category: "Educational Walks",
  },
  {
    id: "edu-3",
    location: "Mysore",
    title: "Arts & Crafts Workshop Walk",
    subtitle: "Educational Walk: Traditional Crafts | 3.5 Hrs",
    price: "From Rs2000",
    image: "/tours/educational-crafts.jpg",
    bgColor: "#DE6D11",
    category: "Educational Walks",
  },
];

const SAMPLE_CUSTOM_TOURS: Tour[] = [
  {
    id: "custom-1",
    location: "Bangalore",
    title: "Private Culinary Journey",
    subtitle: "Custom Walk: Personalized Food Trail | 2-4 Hrs",
    price: "From Rs3500",
    image: "/tours/custom-culinary.jpg",
    bgColor: "#4F8C7D",
    category: "Custom Walks",
  },
  {
    id: "custom-2",
    location: "Bangalore",
    title: "Photography Walk",
    subtitle: "Custom Walk: Street & Heritage Photography | 3 Hrs",
    price: "From Rs2500",
    image: "/tours/custom-photography.jpg",
    bgColor: "#4F8C7D",
    category: "Custom Walks",
  },
  {
    id: "custom-3",
    location: "Mysore",
    title: "Family Heritage Experience",
    subtitle: "Custom Walk: Tailored for Families | 2.5 Hrs",
    price: "From Rs4000",
    image: "/tours/custom-family.jpg",
    bgColor: "#4F8C7D",
    category: "Custom Walks",
  },
];

// Transform API tour to our Tour format
function transformApiTour(apiTour: ApiTour): Tour {
  // Normalize location to just "Bangalore" or "Mysore"
  const normalizeLocation = (place: string): string => {
    const lowerPlace = place.toLowerCase();
    if (lowerPlace.includes("mysore") || lowerPlace.includes("mysuru")) {
      return "Mysore";
    }
    return "Bangalore"; // Default to Bangalore for all other locations
  };

  return {
    id: apiTour._id,
    location: normalizeLocation(apiTour.place),
    title: apiTour.tour_name,
    subtitle: `Weekend Walk: ${apiTour.activity || "Exploration"} | ${apiTour.duration}`,
    price: `From Rs${apiTour.price}`,
    image: apiTour.image || "/tours/default-weekend.jpg",
    bgColor: "#53A3B1",
    category: "Weekend Tours",
  };
}

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tours from API on mount
  useEffect(() => {
    let isCancelled = false;

    async function fetchAndMergeTours() {
      setIsLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch("https://gullytours-api.fly.dev/tours/", {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (!isCancelled) {
          // Transform API tours
          const apiTours = data.docs.map(transformApiTour);

          // Merge with sample data
          const allTours = [
            ...apiTours,
            ...SAMPLE_CORPORATE_TOURS,
            ...SAMPLE_EDUCATIONAL_TOURS,
            ...SAMPLE_CUSTOM_TOURS,
          ];

          setTours(allTours);
        }
      } catch (err) {
        console.error("Failed to fetch tours:", err);

        if (!isCancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load tours"
          );

          // Fallback to sample data only
          setTours([
            ...SAMPLE_CORPORATE_TOURS,
            ...SAMPLE_EDUCATIONAL_TOURS,
            ...SAMPLE_CUSTOM_TOURS,
          ]);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchAndMergeTours();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Filter tours based on active category
  const filteredTours = useMemo(() => {
    if (activeCategory === "All") {
      return tours;
    }
    return tours.filter((tour) => tour.category === activeCategory);
  }, [tours, activeCategory]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll to top of tours grid
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Filter Bar */}
      <div className="mt-[120px]">
        <TourFilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Tours Grid Section */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#EDEDE7] px-4 py-20">
        <div className="relative z-10 flex w-full max-w-[1368px] flex-col items-center gap-16">
          {/* Loading State */}
          {isLoading && (
            <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <TourSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          )}

          {/* Error State */}
          {!isLoading && error && (
            <div className="col-span-full mx-auto max-w-2xl rounded-lg bg-orange-50 p-6 text-center">
              <p className="font-rajdhani text-xl text-orange-800">
                Some tours couldn&apos;t be loaded. Showing available tours.
              </p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredTours.length === 0 && (
            <div className="col-span-full mx-auto max-w-2xl py-20 text-center">
              <p className="font-rajdhani text-3xl font-semibold text-[#262626]">
                No tours available in this category
              </p>
              <p className="mt-4 font-dm-sans text-xl text-gray-600">
                Check back soon for new experiences!
              </p>
            </div>
          )}

          {/* Tours Grid */}
          {!isLoading && filteredTours.length > 0 && (
            <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredTours.map((tour) => (
                <TourItem key={tour.id} {...tour} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}
