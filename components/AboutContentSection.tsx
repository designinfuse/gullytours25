"use client";

import { motion } from "framer-motion";

export default function AboutContentSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-[950px] w-full items-center justify-center overflow-hidden bg-[#4F8C7D] px-4 py-20">
      {/* Decorative Rectangles */}
      <div className="absolute right-[109px] top-[101px] h-[200px] w-[200px] border-[8px] border-[#F5EF86] bg-[#D9D9D9]" />
      <div className="absolute bottom-[55px] left-[97px] h-[200px] w-[200px] border-[8px] border-[#F5EF86] bg-[#D9D9D9]" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[904px] flex-col items-center gap-9">
        {/* Title */}
        <motion.h2
          className="w-full max-w-[720px] text-center font-rajdhani text-6xl font-semibold uppercase leading-[1.07em] text-white md:text-7xl lg:text-[84px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          Step into Stories
          <br />
          Not Schedules
        </motion.h2>

        {/* Description */}
        <motion.p
          className="w-full text-center font-rajdhani text-xl font-medium leading-[1.5em] text-white md:text-2xl lg:text-[24px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={slideUpVariants}
        >
          At Gully Tours, our walks are about more than checking off sights —
          they're about stepping into a community. Led by people from diverse
          careers and backgrounds, each walk unfolds through hidden corners,
          local legends, and real stories from the streets themselves. Explore
          like a local, connect with fellow curious minds, and discover the city
          as it's truly lived.
        </motion.p>
      </div>
    </section>
  );
}
