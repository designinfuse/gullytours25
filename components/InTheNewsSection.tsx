"use client";

import { motion } from "framer-motion";

export default function InTheNewsSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
      title: "South China - Morning Post -\nWomen only night walks",
      date: "15.11.2025",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-hidden px-9 py-20 bg-[#EDEDE7]">
      {/* Title */}
      <motion.h2
        className="w-full text-center font-rajdhani text-6xl font-semibold uppercase leading-[1.07em] text-black md:text-7xl lg:text-[84px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        IN THE NEWS
      </motion.h2>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="carousel-track flex gap-6">
          {/* First set of cards */}
          {newsCards.map((card, index) => (
            <div
              key={`card-1-${index}`}
              className="relative h-[216px] w-[400px] flex-shrink-0 bg-[#BFD3A0]"
            >
              {/* Title */}
              <div className="absolute left-9 top-[88px] w-[327px]">
                <p className="whitespace-pre-line text-center font-rajdhani text-xl font-bold uppercase leading-[1.28em] text-black">
                  {card.title}
                </p>
              </div>
              {/* Date */}
              <div className="absolute bottom-7 right-[17px]">
                <p className="font-rajdhani text-sm font-semibold uppercase text-[#6D6D6D]">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {newsCards.map((card, index) => (
            <div
              key={`card-2-${index}`}
              className="relative h-[216px] w-[400px] flex-shrink-0 bg-[#BFD3A0]"
            >
              {/* Title */}
              <div className="absolute left-9 top-[88px] w-[327px]">
                <p className="whitespace-pre-line text-center font-rajdhani text-xl font-bold uppercase leading-[1.28em] text-black">
                  {card.title}
                </p>
              </div>
              {/* Date */}
              <div className="absolute bottom-7 right-[17px]">
                <p className="font-rajdhani text-sm font-semibold uppercase text-[#6D6D6D]">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: carousel-scroll 30s linear infinite;
        }

        @keyframes carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
