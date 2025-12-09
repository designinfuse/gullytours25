"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KnowYourOoruSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const carouselFrames = [
    "/carousel-auto-raja.png",
    "/carousel-corner-house.png",
    "/carousel-girish.png",
    "/carousel-sapna.png",
    "/carousel-ngma.png",
    "/carousel-mark-cubbon.png",
    "/carousel-elec-city.png",
    "/carousel-trignometry.png",
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-[#EDEDE7] px-4 py-[80px]">
      <div className="flex w-full flex-col items-center gap-12">
        {/* Header */}
        <motion.div
          className="flex w-full max-w-[720px] flex-col items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          <h2 className="w-full text-center font-rajdhani text-6xl font-bold uppercase leading-none text-black md:text-7xl lg:text-[84px]">
            KNOW YOUR OORU
          </h2>
          <p className="w-full text-center font-rajdhani text-2xl font-semibold leading-none text-black md:text-3xl lg:text-[32px]">
            Bengaluru Trivia Through Reels
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="carousel-track flex gap-6">
            {/* First set of frames */}
            {carouselFrames.map((frame, index) => (
              <div
                key={`frame-1-${index}`}
                className="relative h-[443px] w-[249px] flex-shrink-0"
              >
                <Image
                  src={frame}
                  alt={`Bengaluru trivia frame ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {carouselFrames.map((frame, index) => (
              <div
                key={`frame-2-${index}`}
                className="relative h-[443px] w-[249px] flex-shrink-0"
              >
                <Image
                  src={frame}
                  alt={`Bengaluru trivia frame ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: carousel-scroll 40s linear infinite;
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
