"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CuratedWalksSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-[950px] w-full items-center justify-center overflow-hidden bg-[#B23F27] px-4 py-20">
      <div className="relative w-full max-w-[1600px]">
        {/* Small Image 1 - Top Left */}
        <motion.div
          className="absolute left-[155px] top-[174px] h-[204px] w-[204px]"
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

        {/* Large Image - Top Right */}
        <motion.div
          className="absolute right-[57px] top-[80px] h-[324px] w-[324px] rounded-lg border-[12px] border-[#F7F8DF]"
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

        {/* Small Image 2 - Middle Right */}
        <motion.div
          className="absolute right-[104px] top-[365px] h-[181px] w-[181px]"
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

        {/* Center Content */}
        <div className="relative z-10 mx-auto max-w-[902px] px-4 pt-[276px] text-center">
          {/* Title */}
          <h2 className="mb-12 font-rajdhani text-6xl font-semibold leading-[1.07em] text-white md:text-7xl lg:text-[84px]">
            Curated Walks, Deeper connections
          </h2>

          {/* Body Text */}
          <p className="mb-16 font-rajdhani text-xl font-medium leading-[1.5em] text-white md:text-2xl">
            Cities are full of stories. We bring them alive, not as guides but
            as hosts. Our walks are led by people from diverse interests, each
            bringing their own lens to the city. With kaapi in hand, hidden
            corners to explore, and tales beyond the guidebook, we&apos;ll show
            you the ooru as it&apos;s meant to be felt. Walk with us and you
            won&apos;t just see the city, you&apos;ll belong to the ooru.
          </p>

          {/* CTA Button */}
          <Link href="/about" className="border-2 border-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-4 rounded-lg px-4 py-2 font-rajdhani text-2xl font-semibold uppercase text-[#F5EF86] transition-all hover:bg-[#F5EF86] hover:text-[#B23F27] md:text-3xl lg:text-[32px]">
            get to know us
          </Link>
        </div>

        {/* Small Image 3 - Bottom Left */}
        <motion.div
          className="absolute bottom-[56px] left-[37px] h-[210px] w-[210px]"
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

        {/* Small Image 4 - Bottom Right */}
        <motion.div
          className="absolute bottom-[62px] right-[104px] h-[180px] w-[180px]"
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
