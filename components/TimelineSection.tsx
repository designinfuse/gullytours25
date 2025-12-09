"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  description: string;
}

export default function TimelineSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2009",
      description: "Launched as Royal Mysore Walks in Mysore.",
    },
    {
      year: "2010",
      description:
        "Expanded our storytelling approach, introducing heritage walks that bring local history to life through personal narratives.",
    },
    {
      year: "2011",
      description:
        "Reached 1,000 walkers milestone, establishing ourselves as Mysore's premier walking tour experience.",
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

  const [selectedYear, setSelectedYear] = useState(timelineEvents[0].year);

  const getEventDescription = (year: string) => {
    const event = timelineEvents.find((e) => e.year === year);
    return event?.description || "";
  };

  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#EDEDE7] px-4 py-20">
      {/* Content Container */}
      <div className="relative z-10 flex w-full max-w-[1368px] flex-col items-center gap-8">
        {/* Title */}
        <motion.div
          className="flex w-full max-w-[777px] flex-col items-center gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          <h2 className="w-full text-center font-rajdhani text-6xl font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]">
            A journey through
            <br />
            our gullies
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={slideUpVariants}
        >
          {/* Timeline Visual */}
          <div className="relative mb-5 flex w-full items-center justify-center">
            <div className="relative h-[21px] w-full">
              {/* Horizontal Line */}
              <div className="absolute left-0 top-0 h-[20px] w-full bg-[#F5EF86]">
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 border-t-1 border-[#262626] border-dashed" />
              </div>

              {/* Dots for each year */}
              <div className="relative flex w-full items-center justify-between">
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.year}
                    onClick={() => setSelectedYear(event.year)}
                    className="group relative flex h-[20px] w-[20px] items-center justify-center transition-transform hover:scale-125"
                    aria-label={`View ${event.year} milestone`}
                  >
                    {/* Dot */}
                    <div
                      className={`h-[20px] w-[20px] rounded-full transition-colors ${
                        selectedYear === event.year
                          ? "bg-[#262626]"
                          : "bg-white"
                      } border-2 border-[#262626]`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Years Row */}
          <div className="mb-12 flex w-full items-center justify-between px-1">
            {timelineEvents.map((event) => (
              <button
                key={event.year}
                onClick={() => setSelectedYear(event.year)}
                className={`font-rajdhani text-xl transition-all hover:scale-110 ${
                  selectedYear === event.year
                    ? "font-bold text-[#262626]"
                    : "font-semibold text-[#262626]"
                }`}
              >
                {event.year}
              </button>
            ))}
          </div>

          {/* Description Text */}
          <div className="flex w-full justify-start px-2">
            <motion.p
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-[429px] font-rajdhani text-2xl font-semibold leading-[1.58em] text-black"
            >
              {getEventDescription(selectedYear)}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
