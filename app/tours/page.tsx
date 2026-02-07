"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TourItem from "@/components/TourItem";
import TourFilterBar from "@/components/TourFilterBar";
import TourSkeleton from "@/components/TourSkeleton";
import type { Tour, ApiTour, ApiResponse, CalendarEvent, TourCategory } from "@/types/tour";
import { tourCategoryColors } from "@/types/tour";
import {
  getCaseStudiesByCategory,
  type CaseStudy,
} from "@/data/caseStudies";

// Map case study categories to tour categories
const caseStudyCategoryToTourCategory: Record<string, TourCategory> = {
  corporate: "Corporate Experiences",
  conference: "Custom Walks",
  educational: "Educational Walks",
  collaboration: "Custom Walks",
  custom: "Custom Walks",
  social: "Custom Walks",
};

// Transform case study to Tour format
function transformCaseStudyToTour(caseStudy: CaseStudy): Tour {
  const tourCategory = caseStudyCategoryToTourCategory[caseStudy.category] || "Custom Walks";

  // Omit subtitle for Custom Walks category
  const subtitle = tourCategory === "Custom Walks"
    ? caseStudy.client
    : `${caseStudy.client} | ${caseStudy.experienceTailored}`;

  return {
    id: `case-study-${caseStudy.slug}`,
    location: "Bangalore", // Default location for case studies
    title: caseStudy.title,
    subtitle,
    price: "Custom Pricing",
    image: caseStudy.image || "/card-weekend-walks.png",
    bgColor: tourCategoryColors[tourCategory],
    category: tourCategory,
    buttonLabel: "VIEW CASE STUDY",
  };
}

// Get case studies as tours
function getCaseStudyTours(): Tour[] {
  const corporateStudies = getCaseStudiesByCategory("corporate").map(transformCaseStudyToTour);
  const educationalStudies = getCaseStudiesByCategory("educational").map(transformCaseStudyToTour);
  const customStudies = [
    ...getCaseStudiesByCategory("custom"),
    ...getCaseStudiesByCategory("conference"),
    ...getCaseStudiesByCategory("collaboration"),
    ...getCaseStudiesByCategory("social"),
  ].map(transformCaseStudyToTour);

  return [...corporateStudies, ...educationalStudies, ...customStudies];
}

// Tours to hide from the listing
const hiddenTourIds = new Set([
  "blr-fest-archietectural-trail",
  "blr-fest-malleshwaram-hogona-art-culture-walk",
  "bookmarking-blr-literary-walk",
  "cheers-before-the-whistle",
  "love-actually",
  "startup-trail",
  "bangalore-biodiversity-trail",
  "cantt-by-night-maverick-farmer",
  "cantt-by-night-womens-only",
  "Culinary Tour",
  "the-nandi-valley-walk",
  "death-by-dosa-womens-only",
  "the-soba-walk",
  "the-yelahanka-diaries",
  "Palace Walk",
  "Best of Mysore",
]);

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

  // Handle broken image paths from API
  let imageUrl = apiTour.image;
  if (imageUrl && imageUrl.startsWith("/assets/")) {
    imageUrl = undefined;
  }

  return {
    id: apiTour._id,
    location: normalizeLocation(apiTour.place),
    title: apiTour.tour_name,
    subtitle: `Weekend Walk: ${apiTour.activity || "Exploration"} | ${apiTour.duration}`,
    price: `From Rs${apiTour.price}`,
    image: imageUrl || `/tours/${apiTour._id}/thumb.jpg`,
    bgColor: tourCategoryColors["Weekend Tours"],
    category: "Weekend Tours",
  };
}

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [tours, setTours] = useState<Tour[]>([]);
  const [upcomingTours, setUpcomingTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tours and upcoming tours from API on mount
  useEffect(() => {
    let isCancelled = false;

    async function fetchAllTours() {
      setIsLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        // Fetch both regular tours and upcoming tours in parallel
        const [toursResponse, upcomingResponse] = await Promise.all([
          fetch("https://gullytours-api.fly.dev/tours/", {
            signal: controller.signal,
          }),
          fetch("https://gullytours-api.fly.dev/tours/upcoming", {
            signal: controller.signal,
          }),
        ]);

        clearTimeout(timeoutId);

        if (!toursResponse.ok) {
          throw new Error(`API Error: ${toursResponse.status}`);
        }

        const toursData: ApiResponse = await toursResponse.json();

        if (!isCancelled) {
          // Transform API tours (excluding hidden ones)
          const apiTours = toursData.docs
            .filter((tour) => !hiddenTourIds.has(tour._id))
            .map(transformApiTour);

          // Process upcoming tours if available
          if (upcomingResponse.ok) {
            const calendarEvents: CalendarEvent[] = await upcomingResponse.json();
            const now = new Date();

            // Filter future events and sort by date
            const futureEvents = calendarEvents
              .filter((event) => new Date(event.start.dateTime) > now)
              .sort(
                (a, b) =>
                  new Date(a.start.dateTime).getTime() -
                  new Date(b.start.dateTime).getTime()
              );

            // Match calendar events with tour data
            const matchedUpcoming: Tour[] = [];
            futureEvents.forEach((event) => {
              const matchedTour = toursData.docs.find((t) => {
                const name = t.tour_name.trim().toLowerCase();
                const summary = event.summary.trim().toLowerCase();
                return (
                  name === summary ||
                  name === `the ${summary}` ||
                  summary === `the ${name}`
                );
              });

              if (matchedTour && !hiddenTourIds.has(matchedTour._id)) {
                matchedUpcoming.push({
                  id: matchedTour._id,
                  location:
                    matchedTour.place.toLowerCase().includes("mysore") ||
                      matchedTour.place.toLowerCase().includes("mysuru")
                      ? "Mysore"
                      : "Bangalore",
                  title: matchedTour.tour_name,
                  subtitle: `${matchedTour.activity || "Walk"} | ${matchedTour.duration}`,
                  price: `From Rs${matchedTour.price}`,
                  image: matchedTour.image || `/tours/${matchedTour._id}/thumb.jpg`,
                  bgColor: "#247DA6",
                  category: "Weekend Tours",
                  when: event.start.dateTime,
                });
              }
            });

            setUpcomingTours(matchedUpcoming);
          }

          // Merge API tours with case study tours
          const caseStudyTours = getCaseStudyTours();
          const allTours = [...apiTours, ...caseStudyTours];

          setTours(allTours);
        }
      } catch (err) {
        console.error("Failed to fetch tours:", err);

        if (!isCancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load tours"
          );

          // Fallback to case study tours only
          setTours(getCaseStudyTours());
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchAllTours();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Filter tours based on active category
  const filteredTours = useMemo(() => {
    // "Upcoming Tours" shows only the matched upcoming tours
    if (activeCategory === "Upcoming Tours") {
      return upcomingTours;
    }

    // "All" shows all tours (API + Case Studies)
    if (activeCategory === "All") {
      return tours;
    }

    // Other categories filter normally
    return tours.filter((tour) => tour.category === activeCategory);
  }, [tours, upcomingTours, activeCategory]);

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
            <div
              key={activeCategory}
              className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredTours.map((tour, index) => {
                // Check if this is a case study tour
                const isCaseStudy = tour.id.startsWith("case-study-");
                const href = isCaseStudy
                  ? `/case-studies/${tour.id.replace("case-study-", "")}`
                  : `/tours/${tour.id}`;

                return (
                  <Link
                    key={`${activeCategory}-${tour.id}-${index}`}
                    href={href}
                  >
                    <TourItem {...tour} />
                  </Link>
                );
              })}
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
