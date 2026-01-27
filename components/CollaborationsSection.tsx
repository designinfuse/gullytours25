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
              className="flex w-full flex-col overflow-hidden"
              style={{ backgroundColor: collab.bgColor }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              variants={slideUpVariants}
            >
              {/* Card Image with Stamp Wavy Effect */}
              <div className="relative aspect-square flex flex-1 items-center justify-center px-5 pt-12">
                {/* Masked Background Image */}
                <div
                  className="relative h-full w-full"
                  style={{
                    maskImage: "url(/pattern-left.svg), url(/pattern-right.svg)",
                    maskSize: "60%, 60%",
                    maskPosition: "left center, right center",
                    maskRepeat: "no-repeat, no-repeat",
                    WebkitMaskImage:
                      "url(/pattern-left.svg), url(/pattern-right.svg)",
                    WebkitMaskSize: "60%, 60%",
                    WebkitMaskPosition: "left center, right center",
                    WebkitMaskRepeat: "no-repeat, no-repeat",
                  }}
                >
                  <Image
                    src={collab.image}
                    alt={collab.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                  />
                </div>
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
