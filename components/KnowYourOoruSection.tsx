"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KnowYourOoruSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const triviaItems = [
    {
      image: "/carousel-auto-raja.png",
      link: "https://www.instagram.com/reel/DBga-YLyKcp/?igsh=NTh4dXgwem41c3h3",
      title: "Auto Raja",
    },
    {
      image: "/carousel-corner-house.png",
      link: "https://www.instagram.com/reel/DCEYu0QyiPa/?igsh=MTkzZHZlM2drZjliaw==",
      title: "Corner House",
    },
    {
      image: "/carousel-girish.png",
      link: "https://www.instagram.com/reel/DA8RpfVyAK9/?igsh=NGwxMjJvZHQ1cjhh",
      title: "Girish Karnad",
    },
    {
      image: "/carousel-sapna.png",
      link: "https://www.instagram.com/reel/DBOUf4Zy0m6/?igsh=bnlvY3dwenh1aTRl",
      title: "Sapna",
    },
    {
      image: "/carousel-ngma.png",
      link: "https://www.instagram.com/reel/C-ZmcxHSiUw/?igsh=MWI3czdrcjE3eWhoMA==",
      title: "NGMA",
    },
    {
      image: "/carousel-mark-cubbon.png",
      link: "https://www.instagram.com/reel/C9RiiEOyAMb/?igsh=MWdiZGdsdWxreTdjOQ==",
      title: "Mark Cubbon",
    },
    {
      image: "/carousel-elec-city.png",
      link: "https://www.instagram.com/reel/C8cA20WyAd4/?igsh=MWs0YzJsbDFpYno5Mw==",
      title: "Electronic City",
    },
    {
      image: "/carousel-trignometry.png",
      link: "https://www.instagram.com/reel/C8t82RgSOhl/?igsh=cnY1OWc2cm8waWJt",
      title: "Trigonometry",
    },
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
          <div className="carousel-track flex w-max gap-6 pr-6">
            {/* First set of frames */}
            {triviaItems.map((item, index) => (
              <a
                key={`frame-1-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[443px] w-[249px] flex-shrink-0"
              >
                <div className="absolute inset-0 z-10 hidden items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {triviaItems.map((item, index) => (
              <a
                key={`frame-2-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[443px] w-[249px] flex-shrink-0"
              >
                <div className="absolute inset-0 z-10 hidden items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
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
