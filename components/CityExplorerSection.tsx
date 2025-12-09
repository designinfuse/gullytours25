"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CityExplorerSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-[#4F8C7D] px-4 py-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-8">
        {/* Row 1: Decorative Stars */}
        <motion.div
          className="flex justify-center gap-0.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={slideUpVariants}
        >
          <Image
            src="/diamond-separator.svg"
            alt=""
            width={100}
            height={18}
            className="object-contain"
          />
        </motion.div>

        {/* Row 2: Content with Main Image Background */}
        <div className="relative h-[700px] w-full">
          {/* Main Image - Background */}
          <motion.div
            className="absolute left-1/2 top-0 h-[689px] w-[719px] -translate-x-1/2 overflow-hidden rounded-lg border-[10px] border-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideUpVariants}
          >
            <Image
              src="/city-explorer-main.svg"
              alt="City Explorer Program"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Title Card - Absolutely Positioned */}
          <motion.div
            className="absolute right-[106px] top-[130px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={slideUpVariants}
          >
            <div className="relative h-[151px] w-[390px] bg-[#F7F8DF]">
              <div className="absolute left-5 top-[17px] w-[348px] border-t-2 border-dashed border-black" />
              <h2 className="absolute left-5 top-[28px] w-[346px] text-center font-rajdhani text-5xl font-bold uppercase leading-none text-black">
                City Explorer
                <br />
                Program
              </h2>
              <div className="absolute bottom-[17px] left-5 w-[348px] border-t-2 border-dashed border-black" />
            </div>
          </motion.div>

          {/* Text Card - Absolutely Positioned */}
          <motion.div
            className="absolute left-[36px] top-[90px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={slideUpVariants}
          >
            <div className="relative h-[500px] w-[400px] bg-white">
              <div className="absolute left-5 top-2.5 h-[480px] w-[360px] bg-[#F7F8DF] p-3">
                <p className="text-justify font-rajdhani text-2xl font-medium leading-[1.5em] text-black">
                  Our yearly flagship program at Gully Tours for people
                  interested in designing and leading experiences in the city.
                  Learn the art of designing and leading themed experiences in
                  your city for fun, passion, and also a great way to make some
                  extra income on the side.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative SVG - Background Element */}
          <motion.div
            className="absolute bottom-0 right-[266px] h-[203px] w-[195px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            variants={slideUpVariants}
          >
            <Image
              src="/city-explorer-decorative.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Row 3: CTA Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={slideUpVariants}
        >
          <Link href="/city-explorer" className="rounded-lg border-2 border-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-3 px-3 py-1 font-rajdhani text-3xl font-semibold uppercase text-[#F5EF86] transition-all hover:bg-[#F5EF86] hover:text-[#4F8C7D] hover:cursor-pointer lg:text-[32px]">
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
