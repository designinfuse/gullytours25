"use client";

import { useState } from "react";
import Image from "next/image";
import PerforatedCard from "./PerforatedCard";

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  companyLogo?: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote:
        "The experience helped our new team feel like locals in just a few hours.",
      authorName: "Anjali Nair",
      authorRole: "HR Manager",
      company: "MAP",
      companyLogo: "/testimonials/map-logo.png",
    },
    {
      id: "2",
      quote:
        "An unforgettable journey through the city's hidden gems. Our team bonded like never before.",
      authorName: "Rahul Sharma",
      authorRole: "Team Lead",
      company: "Google",
    },
    {
      id: "3",
      quote:
        "Perfect blend of culture, food, and storytelling. Highly recommended for corporate offsites.",
      authorName: "Priya Menon",
      authorRole: "Culture Manager",
      company: "CRED",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#BFD3A0] px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-4 md:gap-8">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 p-2 text-[#262626] transition-opacity hover:opacity-70"
          aria-label="Previous testimonial"
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 md:h-10 md:w-6"
          >
            <path
              d="M20 4L4 20L20 36"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className="w-full max-w-[1061px]">
          <PerforatedCard
            bgColor="#F7F8DF"
            edges={{ top: true, bottom: true }}
            perforationSize={10}
            perforationSpacing={28}
            className="w-full"
          >
            {/* Inner content with double border */}
            <div className="relative px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-12">
              {/* Outer orange border */}
              <div className="rounded border border-[#DE6D11] p-2 md:p-3">
                {/* Inner orange border */}
                <div className="flex flex-col items-center rounded border border-[#DE6D11] px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-14">
                  {/* Diamond Separator */}
                  <div className="mb-6 md:mb-8">
                    <Image
                      src="/testimonials/diamond-separator.svg"
                      alt=""
                      width={52}
                      height={15}
                      className="h-auto w-10 md:w-[52px]"
                    />
                  </div>

                  {/* Testimonial Quote */}
                  <div className="mb-8 max-w-[815px] md:mb-10">
                    <p className="text-center font-rajdhani text-2xl font-medium leading-[1.25em] text-[#262626] md:text-3xl lg:text-[40px] lg:leading-[1.25em]">
                      {currentTestimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* Company Logo */}
                    {currentTestimonial.companyLogo && (
                      <div className="relative h-10 w-14 overflow-hidden md:h-[54px] md:w-[77px]">
                        <Image
                          src={currentTestimonial.companyLogo}
                          alt={currentTestimonial.company}
                          fill
                          className="object-contain mix-blend-multiply"
                        />
                      </div>
                    )}

                    {/* Author Details */}
                    <div>
                      <p className="font-inter text-xs font-extrabold leading-[1.4em] text-[#262626] md:text-sm">
                        {currentTestimonial.authorName},{" "}
                        {currentTestimonial.authorRole},
                        <br />
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PerforatedCard>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 p-2 text-[#262626] transition-opacity hover:opacity-70"
          aria-label="Next testimonial"
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 md:h-10 md:w-6"
          >
            <path
              d="M4 4L20 20L4 36"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-6 flex justify-center gap-2 md:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#DE6D11]" : "bg-[#262626]/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
