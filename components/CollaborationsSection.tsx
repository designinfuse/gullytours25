"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function CollaborationsSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const collaborations = [
    {
      bgColor: "#DE6D11",
      image: "/collaboration-card-1.svg",
      title: "UBER DASARA\nEXPERIENCES",
      description:
        "The Mysore Dasara was made extra special with Gully's Uber Ambari.",
    },
    {
      bgColor: "#247DA6",
      image: "/collaboration-card-2.svg",
      title: "NETFLIX - RAJA, rASOI, AUR ANYA KAHANIYAAN",
      description:
        "When food travels with royal history, you get a melange of stories for generations to come.",
    },
    {
      bgColor: "#B23F27",
      image: "/collaboration-card-3.svg",
      title: "EXCLUSIVE VIDHAN\nSOUDHA WALK",
      description:
        "From archives to avenues, we curated Bengaluru's first official heritage walk at Vidhana Soudha.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center px-4 py-20 bg-[#EDEDE7]">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-16">
        {/* Header */}
        <div className="flex w-full max-w-[720px] flex-col items-center gap-4">
          <h2 className="w-full text-center font-rajdhani text-6xl font-bold uppercase leading-none text-black md:text-7xl lg:text-[84px]">
            COLLABORATIONS
          </h2>
          <p className="w-full text-center font-rajdhani text-2xl font-semibold leading-none text-black md:text-3xl lg:text-[32px]">
            Because the best stories are made together
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid w-full max-w-[1368px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collaborations.map((collab, index) => (
            <motion.div
              key={index}
              className="flex h-[640px] w-full flex-col overflow-hidden"
              style={{ backgroundColor: collab.bgColor }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              variants={slideUpVariants}
            >
              {/* Card Image with Stamp Wavy Effect */}
              <div className="relative mx-auto mt-8 w-[85%] max-w-[360px]">
                {/* Top wavy edge SVG */}
                <svg
                  viewBox="0 0 353 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.494141 6.31055C5.30111 0.441406 18.6908 0.441406 23.4978 6.31055C28.3048 12.1797 41.6945 12.1797 46.5015 6.31055C51.3084 0.441406 64.6981 0.441406 69.5051 6.31055C74.3121 12.1797 87.7018 12.1797 92.5088 6.31055C97.3158 0.441406 110.705 0.441406 115.512 6.31055C120.319 12.1797 133.709 12.1797 138.516 6.31055C143.323 0.441406 156.713 0.441406 161.52 6.31055C166.327 12.1797 179.717 12.1797 184.524 6.31055C189.331 0.441406 202.72 0.441406 207.527 6.31055C212.334 12.1797 225.724 12.1797 230.531 6.31055C235.338 0.441406 248.728 0.441406 253.535 6.31055C258.342 12.1797 271.731 12.1797 276.538 6.31055C281.345 0.441406 294.735 0.441406 299.542 6.31055C304.349 12.1797 317.739 12.1797 322.546 6.31055C327.353 0.441406 340.742 0.441406 345.549 6.31055C347.953 8.74512 351.2 10.4624 353.494 11.2109V0H0.494141V6.31055Z"
                    fill="white"
                  />
                </svg>

                {/* White box with image */}
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={collab.image}
                    alt={collab.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom wavy edge SVG (rotated) */}
                <svg
                  viewBox="0 0 353 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full rotate-180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.494141 6.31055C5.30111 0.441406 18.6908 0.441406 23.4978 6.31055C28.3048 12.1797 41.6945 12.1797 46.5015 6.31055C51.3084 0.441406 64.6981 0.441406 69.5051 6.31055C74.3121 12.1797 87.7018 12.1797 92.5088 6.31055C97.3158 0.441406 110.705 0.441406 115.512 6.31055C120.319 12.1797 133.709 12.1797 138.516 6.31055C143.323 0.441406 156.713 0.441406 161.52 6.31055C166.327 12.1797 179.717 12.1797 184.524 6.31055C189.331 0.441406 202.72 0.441406 207.527 6.31055C212.334 12.1797 225.724 12.1797 230.531 6.31055C235.338 0.441406 248.728 0.441406 253.535 6.31055C258.342 12.1797 271.731 12.1797 276.538 6.31055C281.345 0.441406 294.735 0.441406 299.542 6.31055C304.349 12.1797 317.739 12.1797 322.546 6.31055C327.353 0.441406 340.742 0.441406 345.549 6.31055C347.953 8.74512 351.2 10.4624 353.494 11.2109V0H0.494141V6.31055Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center gap-5 px-6 py-12 text-center">
                <h3 className="whitespace-pre-line font-rajdhani text-4xl font-bold uppercase leading-none text-white">
                  {collab.title}
                </h3>
                <p className="font-rajdhani text-xl font-semibold leading-[1.4em] text-white">
                  {collab.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={slideUpVariants}
        >
          <CTAButton
            href="/contact"
            borderColor="#262626"
            textColor="#262626"
            hoverBgColor="#262626"
            hoverTextColor="#FFFFFF"
          >
            COLLABORATE WITH US
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
