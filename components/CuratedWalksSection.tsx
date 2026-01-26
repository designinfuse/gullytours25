"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function CuratedWalksSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-[#B23F27] px-4 py-16 md:py-20 lg:py-32">
      {/* Mobile/Tablet Layout (Flexbox - Vertical Stack) */}
      <div className="mx-auto flex max-w-sm flex-col items-center gap-8 lg:hidden">
        {/* Title */}
        <h2 className="font-rajdhani text-4xl font-bold uppercase leading-tight text-white text-center sm:text-5xl">
          Curated Walks, Deeper connections
        </h2>

        {/* Body Text */}
        <p className="text-center font-rajdhani text-lg font-medium leading-relaxed text-white sm:text-xl">
          Cities are full of stories. We bring them alive, not as guides but
          as hosts. Our walks are led by people from diverse interests, each
          bringing their own lens to the city. With kaapi in hand, hidden
          corners to explore, and tales beyond the guidebook, we&apos;ll show
          you the ooru as it&apos;s meant to be felt. Walk with us and you
          won&apos;t just see the city, you&apos;ll belong to the ooru.
        </p>

        {/* Images Row */}
        <div className="flex w-full gap-3 justify-center">
          <motion.div
            className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={slideUpVariants}
          >
            <Image
              src="/curated-walks-1-2cd54c.png"
              alt="Curated walk experience"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideUpVariants}
          >
            <Image
              src="/curated-walks-2-3ffb07.png"
              alt="Walking experience"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={slideUpVariants}
          >
            <Image
              src="/curated-walks-3-3a13e0.png"
              alt="Local experience"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <CTAButton href="/about">get to know us</CTAButton>
      </div>

      {/* Desktop Layout (CSS Grid) */}
      <div className="mx-auto hidden max-w-[1440px] lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:gap-8 xl:gap-12">
        {/* Top Left Image */}
        <motion.div
          className="relative col-span-2 row-span-1 h-48 w-48 xl:h-52 xl:w-52"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={slideUpVariants}
        >
          <Image
            src="/curated-walks-1-2cd54c.png"
            alt="Curated walk experience"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Center Content Area */}
        <div className="col-span-8 col-start-3 row-span-1 row-start-2 flex flex-col items-center justify-center gap-8 px-4 text-center">
          {/* Title */}
          <h2 className="font-rajdhani text-6xl font-bold uppercase leading-tight text-white xl:text-[84px] xl:leading-[90px]">
            Curated Walks,<br />Deeper connections
          </h2>

          {/* Body Text */}
          <p className="max-w-[810px] font-rajdhani text-xl font-medium leading-relaxed text-white xl:text-2xl xl:leading-[31px]">
            Cities are full of stories. We bring them alive, not as guides but
            as hosts. Our walks are led by people from diverse interests, each
            bringing their own lens to the city. With kaapi in hand, hidden
            corners to explore, and tales beyond the guidebook, we&apos;ll show
            you the ooru as it&apos;s meant to be felt. Walk with us and you
            won&apos;t just see the city, you&apos;ll belong to the ooru.
          </p>

          {/* CTA Button */}
          <CTAButton href="/about">get to know us</CTAButton>
        </div>

        {/* Top Right Image with Border */}
        <motion.div
          className="relative rotate-[90deg] col-span-2 col-start-11 row-span-2 row-start-1 h-64 w-64 justify-self-end rounded-lg border-[12px] border-[#F7F8DF] xl:h-72 xl:w-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={slideUpVariants}
        >
          <Image
            src="/curated-walks-large-1480a4.png"
            alt="Malleshwaram street view"
            fill
            className="rounded object-cover"
          />
        </motion.div>

        {/* Middle Right Image */}
        <motion.div
          className="relative col-span-2 col-start-11 row-span-1 row-start-2 h-40 w-40 justify-self-end self-center xl:h-44 xl:w-44"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={slideUpVariants}
        >
          <Image
            src="/curated-walks-2-3ffb07.png"
            alt="Walking experience"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Bottom Left Image */}
        <motion.div
          className="relative col-span-2 row-span-1 row-start-3 h-48 w-48 self-end xl:h-52 xl:w-52"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={slideUpVariants}
        >
          <Image
            src="/curated-walks-3-3a13e0.png"
            alt="Local experience"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Bottom Right Image */}
        <motion.div
          className="relative col-span-2 col-start-11 row-span-1 row-start-3 h-44 w-44 justify-self-end self-end xl:h-48 xl:w-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={slideUpVariants}
        >
          <Image
            src="/curated-walks-4-6b4dc2.png"
            alt="Cultural exploration"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
