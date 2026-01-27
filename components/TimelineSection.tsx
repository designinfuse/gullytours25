"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  description: string;
}

export default function TimelineSection() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2009",
      description: "Launched as Royal Mysore Walks in Mysore.",
    },
    {
      year: "2010",
      description:
        "Secured our first major institutional client - Administrative Training Institute, Mysore. 5,000+ officers experienced our walks over 4 years.",
    },
    {
      year: "2011",
      description:
        "Reached 1,000+ walkers milestone, establishing ourselves as Mysore's premier walking tour experience.",
    },
    {
      year: "2012",
      description:
        "Launched night walks exploring Mysore's illuminated palaces and nocturnal street life.",
    },
    {
      year: "2013",
      description:
        "Expanded to Bangalore, bringing our unique storytelling approach to India's Silicon Valley.",
    },
    {
      year: "2016",
      description:
        "Introduced food walks, combining culinary heritage with cultural storytelling across hidden local eateries.",
    },
    {
      year: "2018",
      description:
        "Rebranded to Gully Tours, reflecting our focus on exploring the authentic gullies and lanes of Indian cities.",
    },
    {
      year: "2019",
      description:
        "Launched corporate team-building experiences, bringing our community-building approach to organizations.",
    },
    {
      year: "2020",
      description:
        "Adapted to virtual walks during the pandemic, connecting global audiences to local stories through digital storytelling.",
    },
    {
      year: "2021",
      description:
        "Returned to in-person experiences with enhanced safety protocols, welcoming back our community of explorers.",
    },
    {
      year: "2023",
      description:
        "Celebrated hosting international celebrities and dignitaries, sharing India's cultural wealth with global icons.",
    },
    {
      year: "2024",
      description:
        "Won the Outlook Responsible Tourism Award 2025, recognizing our commitment to sustainable and community-focused tourism.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeYearRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeYearRef.current) {
      activeYearRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  const prevEvent = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineEvents.length - 1));
  };

  const nextEvent = () => {
    setActiveIndex((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : 0));
  };

  const currentEvent = timelineEvents[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#EDEDE7] px-6 py-20 md:px-12 md:py-24 lg:px-24">
      <div className="mx-auto flex w-full max-w-[1368px] flex-col items-center gap-12 md:gap-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-rajdhani text-[32px] font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]">
            A journey through
            <br />
            our gullies
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Desktop Timeline (Hidden on Mobile) */}
          <div className="hidden w-full flex-col gap-8 md:flex">
            {/* Horizontal Line Container */}
            <div className="relative flex h-[21px] w-full items-start">
              {/* The Yellow Bar */}
              <div className="absolute h-[21px] w-full bg-[#F5EF86] z-0" />
              {/* Dashed Line */}
              <div className="absolute top-1/2 w-full border-t-2 border-dashed border-black/50 z-10" />

              {/* Year Dots */}
              <div className="relative flex w-full justify-between items-center px-4 z-20">
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.year}
                    onClick={() => setActiveIndex(index)}
                    className="relative flex flex-col items-center group"
                  >
                    <div
                      className={`h-5 w-5 rounded-full border-2 border-black transition-all ${index === activeIndex ? "scale-125 bg-black" : "bg-white"
                        }`}
                    />
                    <span className={`mt-4 font-rajdhani text-lg font-bold transition-opacity ${index === activeIndex ? "opacity-100" : "opacity-60"
                      }`}>
                      {event.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description and Navigation (Desktop) */}
            <div className="mt-8 flex w-full items-end justify-between">
              <div className="max-w-[600px]">
                <motion.p
                  key={currentEvent.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-rajdhani text-2xl font-semibold leading-snug text-[#262626]"
                >
                  {currentEvent.description}
                </motion.p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prevEvent}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] transition-transform hover:scale-110 active:scale-95"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={nextEvent}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] transition-transform hover:scale-110 active:scale-95"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Timeline (Hidden on Desktop) */}
          <div className="flex w-full flex-col items-center gap-8 md:hidden">
            {/* Circular Node Selector */}
            <div
              ref={scrollContainerRef}
              className="relative flex w-full items-center overflow-x-auto pb-4 hide-scrollbar"
            >
              <div className="flex items-center gap-4 px-[40%]">
                {timelineEvents.map((event, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={event.year}
                      ref={isActive ? activeYearRef : null}
                      onClick={() => setActiveIndex(index)}
                      className={`relative flex shrink-0 items-center justify-center rounded-full bg-[#F5EF86] transition-all duration-300 ${isActive ? "h-[80px] w-[80px]" : "h-[40px] w-[40px]"
                        }`}
                    >
                      <span className={`font-rajdhani font-bold text-black ${isActive ? "text-2xl" : "text-sm"
                        }`}>
                        {event.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description Text (Mobile) */}
            <div className="w-full text-center">
              <motion.p
                key={`mobile-${currentEvent.year}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-rajdhani text-lg font-semibold leading-relaxed text-[#262626]"
              >
                {currentEvent.description}
              </motion.p>
            </div>

            {/* Navigation Arrows (Mobile) */}
            <div className="mt-4 flex gap-6">
              <button
                onClick={prevEvent}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#247DA6] text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={nextEvent}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#247DA6] text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
