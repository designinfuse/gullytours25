"use client";

import Image from "next/image";
import type { ApiTour } from "@/types/tour";

interface TourHeroProps {
    tour: ApiTour;
}

export default function TourHero({ tour }: TourHeroProps) {
    return (
        <section className="relative w-full overflow-hidden bg-[#F5EF86] pb-10 pt-[120px] md:pt-[160px]">
            {/* Main Container */}
            <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-4 md:px-0">

                {/* Title Section */}
                <h1 className="font-rajdhani text-4xl text-center font-bold uppercase leading-tight text-[#262626] md:text-6xl lg:text-[77px] lg:leading-[1]">
                    {tour.tour_name}
                </h1>

                {/* Hero Content Section */}
                <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-0 md:justify-stretch">
                    {/* Background */}
                    <div className="absolute inset-0 bg-[#4F8C7D]" />

                    {/* Left: Image */}
                    <div className="relative z-10 flex w-full p-4 md:w-[62%] md:p-8 md:pr-0">
                        <div className="relative min-h-[300px] w-full flex-1">
                            <Image
                                src={`/tours/${encodeURIComponent(tour._id)}/banner.jpg`}
                                alt={tour.tour_name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Details Card */}
                    <div className="relative z-10 flex w-full items-center justify-center p-4 md:w-[38%] md:p-8">
                        <div className="w-full max-w-[400px] bg-white p-8">
                            {/* Details Table */}
                            <div className="mb-8 flex flex-col gap-1">
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Date</span>
                                    <span className="font-rajdhani text-lg text-black">Multiple Options</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Time</span>
                                    <span className="font-rajdhani text-lg text-black">{tour.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Neighborhood</span>
                                    <span className="font-rajdhani text-lg text-black">{tour.place}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Starting Point</span>
                                    <span className="font-rajdhani text-lg text-black">Koshy's St. Marks</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Ending Point</span>
                                    <span className="font-rajdhani text-lg text-black">{tour.place}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Activity</span>
                                    <span className="font-rajdhani text-lg text-black">{tour.activity || "Walk"}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Group Size</span>
                                    <span className="font-rajdhani text-lg text-black">18</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Nearest Metro</span>
                                    <span className="font-rajdhani text-lg text-black">MG Metro Station</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-rajdhani text-lg font-bold text-black">Parking</span>
                                    <span className="font-rajdhani text-lg text-black">Yes</span>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="flex flex-row items-center justify-between gap-3">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-baseline justify-between gap-2">
                                        <span className="font-rajdhani text-lg font-bold text-black">ADULT ₹{tour.price}</span>
                                        <span className="font-dm-sans text-xs text-gray-500">(above 12yrs)</span>
                                    </div>
                                    <div className="flex items-baseline justify-between gap-2">
                                        <span className="font-rajdhani text-lg font-bold text-black">CHILD ₹{Math.round(tour.price * 0.5)}</span>
                                        <span className="font-dm-sans text-xs text-gray-500">(5-12yrs)</span>
                                    </div>
                                    <p className="font-dm-sans text-[10px] text-gray-600">*Inc. food & taxes</p>
                                </div>

                                {/* Book Now Button */}
                                {tour.booking_url && (
                                    <a
                                        href={tour.booking_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[56px] items-center justify-center rounded-full bg-[#262626] px-[32px] font-rajdhani text-lg font-semibold uppercase leading-none text-[#F5EF86] transition-transform hover:scale-[1.02] active:scale-95"
                                    >
                                        Book
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
