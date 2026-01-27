"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TourItem from "./TourItem";
import type { ApiTour } from "@/types/tour";

interface UpcomingToursSectionProps {
  excludeTourId?: string;
}

export default function UpcomingToursSection({ excludeTourId }: UpcomingToursSectionProps) {
  const [tours, setTours] = useState<ApiTour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomTours() {
      try {
        const response = await fetch("https://gullytours-api.fly.dev/tours/");
        if (response.ok) {
          const data = await response.json();
          let allTours = data.docs || [];

          // Exclude current tour if provided
          if (excludeTourId) {
            allTours = allTours.filter((tour: ApiTour) => tour._id !== excludeTourId);
          }

          // Shuffle and select 3 random tours
          const shuffled = [...allTours].sort(() => Math.random() - 0.5);
          const randomTours = shuffled.slice(0, 3);

          setTours(randomTours);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRandomTours();
  }, [excludeTourId]);

  if (isLoading) {
    return (
      <section className="w-full bg-[#EDEDE7] px-4 py-16">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#247DA6] border-t-transparent"></div>
        </div>
      </section>
    );
  }

  if (tours.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#EDEDE7] px-4 py-16">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-16">
        {/* Title */}
        <h2 className="text-center font-rajdhani text-5xl font-bold leading-none text-black md:text-6xl">
          UPCOMING TOURS
        </h2>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 justify-items-center items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => {
            // Extract data from tour
            const location = tour.place || "Mumbai";
            const title = tour.tour_name || "Untitled Tour";
            const subtitle = [tour.activity, tour.duration]
              .filter(Boolean)
              .join(" | ") || "";
            const price = tour.price
              ? `From Rs${tour.price}`
              : "Price TBD";
            const image = tour.image || "/malleshwaram.jpg";

            // Generate random color (you can adjust these colors)
            const colors = ["#DE6D11", "#247DA6", "#D62828", "#2A9D8F", "#E76F51"];
            const bgColor = colors[Math.floor(Math.random() * colors.length)];

            return (
              <Link key={tour._id} href={`/tours/${tour._id}`}>
                <TourItem
                  location={location.toUpperCase()}
                  title={title}
                  subtitle={subtitle}
                  price={price}
                  image={image}
                  bgColor={bgColor}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
