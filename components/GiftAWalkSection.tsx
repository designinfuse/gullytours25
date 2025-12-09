"use client";

import { motion } from "framer-motion";

export default function GiftAWalkSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-[calc(100% - 16px)] items-center justify-center bg-[#4F8C7D] px-4 py-20 mx-4 my-[120px]">
      <div className="flex w-full max-w-[1368px] items-center justify-center">
        {/* Outer Border Rectangle */}
        <div className="relative h-[400px] w-full rounded border border-[#FDF6D8]">
          {/* Inner Border Rectangle */}
          <div className="absolute left-5 top-5 h-[360px] w-[calc(100%-40px)] rounded border border-[#FDF6D8]">
            {/* Content */}
            <div className="flex h-full w-full items-center justify-center">
              <motion.div
                className="flex w-full max-w-[903px] flex-col items-center gap-11"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={slideUpVariants}
              >
                {/* Text Content */}
                <div className="flex w-full flex-col items-center gap-4">
                  <h2 className="w-full text-center font-rajdhani text-6xl font-bold uppercase leading-none text-white md:text-7xl lg:text-[84px]">
                    Gift A walk
                  </h2>
                  <p className="w-full max-w-[851px] text-center font-rajdhani text-2xl font-semibold leading-none text-white md:text-3xl lg:text-[32px]">
                    Our walks offer stories, flavours, and hidden corners that
                    <br />
                    bring the city alive in unforgettable ways
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  className="flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  variants={slideUpVariants}
                >
                  <button className="rounded-lg border-2 border-[#F5EF86] px-3 py-4 font-rajdhani text-3xl font-semibold uppercase text-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-3 transition-all hover:cursor-pointer hover:bg-[#F5EF86] hover:text-[#4F8C7D] lg:text-[32px]">
                    Get in touch
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
