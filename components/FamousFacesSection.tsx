"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Celebrity {
  name: string;
  description: string;
  image: string;
  rotation: number;
  yOffsetDesktop: number;
  yOffsetMobile: number;
}

const PaperClipIcon = () => (
  <svg width="24" height="66" viewBox="0 0 20 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.019 0C7.73229 0 4.18052 3.55781 4.18052 7.85181V46.5874C4.18052 49.7281 6.79335 52.3454 9.92874 52.3454C13.0641 52.3454 15.677 49.7281 15.677 46.5874V13.0863H13.5867V46.5874C13.5867 48.5749 11.9128 50.2516 9.92874 50.2516C7.94466 50.2516 6.27078 48.5749 6.27078 46.5874V7.85181C6.27078 4.71109 8.88361 2.09382 12.019 2.09382C15.1544 2.09382 17.7672 4.71109 17.7672 7.85181V56.0096C17.7672 60.3036 14.2154 63.8614 9.92874 63.8614C5.64203 63.8614 2.09026 60.3036 2.09026 56.0096V13.0863H0V56.0096C0 61.4527 4.4949 65.9552 9.92874 65.9552C15.3626 65.9552 19.8575 61.4527 19.8575 56.0096V7.85181C19.8575 3.55781 16.3057 0 12.019 0Z" fill="#F5EF86" />
  </svg>
);

export default function FamousFacesSection() {
  const celebrities: Celebrity[] = [
    {
      name: "Ranveer Brar",
      description: "In June 2023.. we hosted him in Mysore as he was curating food show",
      image: "/celebrities/ranveer-brar.jpg",
      rotation: -8.48,
      yOffsetDesktop: 0,
      yOffsetMobile: 0,
    },
    {
      name: "Sanjeev Kapoor",
      description: "In August 2022, we hosted him in Bangalore as he was shooting for this travel and food show",
      image: "/celebrities/sanjeev-kapoor.jpg",
      rotation: 4.12,
      yOffsetDesktop: 40,
      yOffsetMobile: 20,
    },
    {
      name: "Kofi Annan",
      description: "In 2014, we hosted Kofi Ann in Mysore",
      image: "/celebrities/kofi-annan.jpg",
      rotation: -3.64,
      yOffsetDesktop: 60,
      yOffsetMobile: -20,
    },
    {
      name: "Trevor Nova",
      description: "In September 2023, Vinay met Trevor Nova.",
      image: "/celebrities/trevor-nova.jpg",
      rotation: 6.2,
      yOffsetDesktop: 20,
      yOffsetMobile: 30,
    },
    {
      name: "Michael, Catherine & Dylan Douglas",
      description: "In December 2023, we hosted the Michael Douglas family at a Coorg Experience.",
      image: "/celebrities/douglas-family.jpg",
      rotation: -2.5,
      yOffsetDesktop: -30,
      yOffsetMobile: 10,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#247DA6] px-6 py-20 md:px-12 md:py-32 lg:px-24">
      {/* Background Dashed Border */}
      <div className="absolute inset-4 z-0 border-[3px] border-dashed border-[#262626] opacity-30 md:inset-10" />

      <div className="mx-auto flex w-full max-w-[1368px] flex-col items-center gap-16 md:gap-24">
        {/* Title */}
        <div className="relative z-10 text-center">
          <h2 className="max-w-[800px] font-rajdhani text-[40px] font-bold uppercase leading-[0.9] text-white md:text-7xl lg:text-[84px]">
            Famous Faces we have hosted
          </h2>
        </div>

        {/* Hanging Wire */}
        <div className="absolute top-[30%] left-0 right-0 z-10 md:top-[230px]">
          <svg width="100%" height="400" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none" className="opacity-40">
            {/* Desktop Path */}
            <path
              d="M0 100C200 20 400 300 720 160C1040 20 1240 240 1440 80"
              stroke="white"
              strokeWidth="1.5"
              className="hidden md:block"
            />
            {/* Mobile Path */}
            <path
              d="M0 50C100 80 200 20 300 150C400 280 100 400 200 550"
              stroke="white"
              strokeWidth="1.5"
              className="block md:hidden"
            />
          </svg>
        </div>

        {/* Polaroid Gallery */}
        <div className="relative z-20 grid w-full grid-cols-2 gap-x-4 gap-y-12 md:flex md:flex-row md:items-start md:justify-between md:gap-4 lg:gap-8">
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative w-full bg-[#F7F8DF] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:w-1/5 md:p-4 ${index === 4 ? "col-span-2 mx-auto max-w-[180px] md:max-w-none" : ""
                }`}
              style={{
                rotate: `${celebrity.rotation}deg`,
                // Use a CSS variable for the offset that we can override with a media query in the top-level style tag
                // Or just use responsive classes if possible, but offsets are dynamic.
                // Let's use a simple approach: inline style with a check for window width is hard in SSR.
                // Better: just use the desktop offset and slightly scale it for mobile.
                marginTop: `${celebrity.yOffsetDesktop}px`
              } as any}
            >
              {/* Paper Clip Decoration */}
              <div className="absolute -top-8 left-1/2 z-30 -translate-x-1/2">
                <PaperClipIcon />
              </div>

              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                {celebrity.image ? (
                  <Image
                    src={celebrity.image}
                    alt={celebrity.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-300">
                    Image
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="mt-3 text-center md:mt-4">
                <p className="font-rajdhani text-[10px] font-semibold leading-tight text-[#262626] md:text-sm lg:text-base">
                  <span className="font-bold">{celebrity.name}</span> - {celebrity.description}
                </p>
              </div>

              {/* Hover Sway Effect */}
              <motion.div
                className="absolute inset-0 z-[-1]"
                whileHover={{ rotate: index % 2 === 0 ? 2 : -2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        section {
          background: radial-gradient(circle at center, #247DA6 0%, #1a5e7d 100%);
        }
        @media (max-width: 767px) {
          .group {
            margin-top: 0 !important; /* Reset desktop offsets on mobile grid */
          }
        }
      `}</style>
    </section>
  );
}
