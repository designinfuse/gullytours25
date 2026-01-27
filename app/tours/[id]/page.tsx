"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TourHero from "@/components/TourHero";
import TourOverview from "@/components/TourOverview";
import TourHighlights from "@/components/TourHighlights";
import TourItinerary from "@/components/TourItinerary";
import TourInclusions from "@/components/TourInclusions";
import UpcomingToursSection from "@/components/UpcomingToursSection";
import PrivateTourCTA from "@/components/PrivateTourCTA";
import type { ApiTour } from "@/types/tour";

export default function TourDetailsPage() {
    const params = useParams();
    const rawId = params.id as string;
    // Decode the URL-encoded ID (e.g., "Best%20of%20Mysore" -> "Best of Mysore")
    const id = decodeURIComponent(rawId);
    const [tour, setTour] = useState<ApiTour | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTour() {
            if (!id) return;

            setIsLoading(true);
            setError(null);

            try {
                // Encode the ID for the API request
                const encodedId = encodeURIComponent(id);
                // Fetch from API
                const response = await fetch(`https://gullytours-api.fly.dev/tours/${encodedId}`);

                if (!response.ok) {
                    // Fallback: try fetching all and finding it
                    const allResponse = await fetch("https://gullytours-api.fly.dev/tours/");
                    if (allResponse.ok) {
                        const data = await allResponse.json();
                        const found = data.docs.find((t: ApiTour) => t._id === id);
                        if (found) {
                            setTour(found);
                            return;
                        }
                    }
                    throw new Error("Tour not found");
                }

                const data = await response.json();
                setTour(data);
            } catch (err) {
                console.error("Error fetching tour:", err);
                setError("Could not load tour details. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchTour();
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen w-full items-center justify-center bg-[#EDEDE7]">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#247DA6] border-t-transparent"></div>
            </div>
        );
    }

    if (error || !tour) {
        return (
            <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#EDEDE7]">
                <h1 className="font-rajdhani text-3xl font-bold text-[#262626]">Oops!</h1>
                <p className="font-dm-sans text-lg text-gray-600">{error || "Tour not found"}</p>
                <Link
                    href="/tours"
                    className="rounded-lg bg-[#247DA6] px-6 py-3 font-rajdhani font-bold text-white transition-colors hover:bg-[#1A5E7D]"
                >
                    Back to Tours
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EDEDE7]">
            <Navbar />

            <TourHero tour={tour} />

            <TourOverview description={tour.description} />

            <TourHighlights highlights={Array.isArray(tour.highlights) ? tour.highlights : tour.highlights?.items} />

            <TourItinerary itinerary={tour.itinerary} />

            <TourInclusions inclusions={tour.inclusions} />

            <UpcomingToursSection excludeTourId={tour._id} />

            <PrivateTourCTA />

            <Newsletter />
            <Footer />
        </div>
    );
}
