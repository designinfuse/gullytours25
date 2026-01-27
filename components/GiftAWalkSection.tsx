"use client";

import { motion } from "framer-motion";

export default function GiftAWalkSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex w-full items-center justify-center bg-[#4F8C7D] px-6 py-24 md:px-12 lg:px-20 lg:py-32 overflow-hidden">
      <div className="relative w-full max-w-[1224px]">
        {/* Ticket Background with Scalloped Edges and Decorations */}
        <div className="relative aspect-[1224/415] w-full min-h-[400px] overflow-hidden rounded-lg">
          <img
            src="/gift-a-walk-card.svg"
            alt="Gift a walk decorative card"
            className="absolute inset-0 h-full w-full object-fill md:object-contain"
          />

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-10 text-center md:gap-12">
            <motion.div
              className="flex w-full flex-col items-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={slideUpVariants}
            >
              <h2 className="font-rajdhani text-5xl font-bold uppercase leading-tight text-black md:text-7xl lg:text-[80px]">
                Gift A walk
              </h2>
              <p className="max-w-[851px] font-rajdhani text-xl font-semibold leading-relaxed text-black/80 md:text-2xl lg:text-[26px] lg:leading-[32px]">
                Our walks offer stories, flavours, and hidden corners that
                <br className="hidden md:block" />
                bring the city alive in unforgettable ways
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={slideUpVariants}
            >
              <button
                className="group relative h-[64px] w-[239px] overflow-hidden rounded-xl border-2 border-[#247da6] transition-all hover:bg-[#247da6]/5 active:scale-95"
              >
                {/* Inner Border Frame */}
                <div className="absolute left-[5px] top-1/2 h-[50px] w-[225px] -translate-y-1/2 rounded-lg border-2 border-[#247da6]" />
                <span className="relative z-10 font-rajdhani text-[28px] font-semibold uppercase text-[#247da6]">
                  Get in touch
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
