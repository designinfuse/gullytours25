"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const newsCards = [
  {
    title: "Ken's Article - The Gifting Guide 2024",
    date: "15.11.2025",
  },
  {
    title: "The Print Article -",
    date: "15.11.2025",
  },
  {
    title: "South China - Morning Post -\nWomen only night walks",
    date: "15.11.2025",
  },
  {
    title: "Ken's Article - The Gifting Guide 2024",
    date: "15.11.2025",
  },
  {
    title: "The Print Article -",
    date: "15.11.2025",
  },
  {
    title: "South China - Morning Post -\nWomen only night walks",
    date: "15.11.2025",
  },
];

const NewsCard = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="relative group h-[240px] w-full transition-transform duration-300 hover:scale-[1.02]">
      {/* Ticket Shape with clip-path */}
      <div
        className="absolute inset-0 bg-[#BFD3A0]"
        style={{
          clipPath: "polygon(0% 10%, 2% 10%, 2% 15%, 0% 15%, 0% 20%, 2% 20%, 2% 25%, 0% 25%, 0% 30%, 2% 30%, 2% 35%, 0% 35%, 0% 40%, 2% 40%, 2% 45%, 0% 45%, 0% 50%, 2% 50%, 2% 55%, 0% 55%, 0% 60%, 2% 60%, 2% 65%, 0% 65%, 0% 70%, 2% 70%, 2% 75%, 0% 75%, 0% 80%, 2% 80%, 2% 85%, 0% 85%, 0% 90%, 2% 90%, 2% 95%, 0% 95%, 0% 100%, 100% 100%, 100% 95%, 98% 95%, 98% 90%, 100% 90%, 100% 85%, 98% 85%, 98% 80%, 100% 80%, 100% 75%, 98% 75%, 98% 70%, 100% 70%, 100% 65%, 98% 65%, 98% 60%, 100% 60%, 100% 55%, 98% 55%, 98% 50%, 100% 50%, 100% 45%, 98% 45%, 98% 40%, 100% 40%, 100% 35%, 98% 35%, 98% 30%, 100% 30%, 100% 25%, 98% 25%, 98% 20%, 100% 20%, 100% 15%, 98% 15%, 98% 10%, 100% 10%, 100% 0%, 0% 0%)",
          WebkitClipPath: "polygon(0% 10%, 2% 10%, 2% 15%, 0% 15%, 0% 20%, 2% 20%, 2% 25%, 0% 25%, 0% 30%, 2% 30%, 2% 35%, 0% 35%, 0% 40%, 2% 40%, 2% 45%, 0% 45%, 0% 50%, 2% 50%, 2% 55%, 0% 55%, 0% 60%, 2% 60%, 2% 65%, 0% 65%, 0% 70%, 2% 70%, 2% 75%, 0% 75%, 0% 80%, 2% 80%, 2% 85%, 0% 85%, 0% 90%, 2% 90%, 2% 95%, 0% 95%, 0% 100%, 100% 100%, 100% 95%, 98% 95%, 98% 90%, 100% 90%, 100% 85%, 98% 85%, 98% 80%, 100% 80%, 100% 75%, 98% 75%, 98% 70%, 100% 70%, 100% 65%, 98% 65%, 98% 60%, 100% 60%, 100% 55%, 98% 55%, 98% 50%, 100% 50%, 100% 45%, 98% 45%, 98% 40%, 100% 40%, 100% 35%, 98% 35%, 98% 30%, 100% 30%, 100% 25%, 98% 25%, 98% 20%, 100% 20%, 100% 15%, 98% 15%, 98% 10%, 100% 10%, 100% 0%, 0% 0%)",
        }}
      />

      {/* Ticket Inner Border */}
      <div className="pointer-events-none absolute inset-5 border-2 border-white/30 z-10" />
      <div className="pointer-events-none absolute inset-6 border border-white/20 z-10" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-10 text-center">
        <p className="whitespace-pre-line font-rajdhani text-xl font-bold uppercase leading-tight text-black md:text-2xl lg:text-[22px]">
          {title}
        </p>
      </div>

      <div className="absolute right-8 bottom-8 z-10">
        <p className="font-rajdhani text-sm font-semibold uppercase text-black/50">
          {date}
        </p>
      </div>
    </div>
  );
};

export default function InTheNewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 bg-[#F7F8DF] px-6 py-20 lg:gap-20 lg:px-20">
      {/* Title */}
      <motion.h2
        className="w-full text-center font-rajdhani text-5xl font-semibold uppercase leading-tight text-black md:text-7xl lg:text-[84px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        IN THE NEWS
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 lg:gap-8">
          {newsCards.map((card, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-22px)]"
            >
              <NewsCard title={card.title} date={card.date} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and Bottom Layout */}
      <div className="flex w-full items-end justify-end">
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] text-white transition-opacity hover:opacity-80 active:scale-95 shadow-md"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] text-white transition-opacity hover:opacity-80 active:scale-95 shadow-md"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
