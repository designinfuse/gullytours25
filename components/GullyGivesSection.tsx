"use client";

import { motion } from "framer-motion";

export default function GullyGivesSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex h-[950px] w-full items-center justify-center overflow-hidden bg-[#DE6D11] px-4 py-20">
      {/* Decorative Rectangles */}
      <div className="absolute left-[112px] top-[88px] h-[200px] w-[200px] bg-[#D9D9D9] opacity-30" />
      <div className="absolute bottom-[117px] left-[70px] h-[200px] w-[200px] bg-[#D9D9D9] opacity-30" />
      <div className="absolute right-[73px] top-[197px] h-[200px] w-[200px] bg-[#D9D9D9] opacity-30" />

      {/* Content */}
      <div className="flex w-full max-w-[857px] flex-col items-center gap-16">
        {/* Text Content */}
        <motion.div
          className="flex w-full max-w-[487px] flex-col items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          <h2 className="w-full text-center font-rajdhani text-6xl font-semibold uppercase leading-[1.07em] text-white md:text-7xl lg:text-[84px]">
            GULLY GIVES
          </h2>
          <p className="w-full text-center font-rajdhani text-2xl font-semibold leading-none text-white md:text-3xl lg:text-[32px]">
            Walking the Talk, One Story at a Time
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="flex w-full flex-col items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={slideUpVariants}
        >
          <p className="w-full text-center font-rajdhani text-xl font-medium leading-[1.5em] text-white md:text-2xl lg:text-[24px]">
            We open up the city to those who rarely get to experience its magic.
            Through curated free city walks for children, people with
            disabilities, and young learners, we offer new ways to see, hear, and
            feel their city.
            <br />
            <br />
            You can sponsor a walk for one of our NGO partners or an organization
            close to your heart — we&apos;ll handle everything from curation to
            logistics, ensuring every participant discovers the city through a
            fresh, inclusive lens.
          </p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={slideUpVariants}
          >
            <button className="rounded-lg border-2 border-[#F5EF86] px-3 py-4 font-rajdhani text-3xl font-semibold uppercase text-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-3 transition-all hover:cursor-pointer hover:bg-[#F5EF86] hover:text-[#DE6D11] lg:text-[32px]">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
