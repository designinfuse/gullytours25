"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function CityExplorerSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#4F8C7D] px-4 py-16 md:py-20 lg:py-28">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-12">
        {/* Decorative Diamond Separator */}
        <motion.div
          className="flex justify-center gap-1"
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
            height={19}
            className="object-contain"
          />
        </motion.div>

        {/* Mobile/Tablet Layout - Vertical Stack */}
        <div className="flex w-full flex-col gap-8 lg:hidden">
          {/* Title Card */}
          <motion.div
            className="mx-auto w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideUpVariants}
          >
            <div className="flex flex-col items-center gap-3 bg-[#F7F8DF] px-6 py-6">
              <div className="h-0.5 w-full border-t-2 border-dashed border-black" />
              <h2 className="text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
                Urban Explorer
                <br />
                Program
              </h2>
              <div className="h-0.5 w-full border-t-2 border-dashed border-black" />
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            className="relative mx-auto aspect-[645/617] w-full max-w-xl overflow-hidden rounded-lg border-8 border-white md:border-[10px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={slideUpVariants}
          >
            <Image
              src="/city-explorer-main.svg"
              alt="Urban Explorer Program"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content Card */}
          <motion.div
            className="mx-auto w-full max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={slideUpVariants}
          >
            <div className="bg-[#F5EF86] p-3">
              <div className="bg-[#F7F8DF] p-6">
                <p className="text-justify font-rajdhani text-lg font-medium leading-relaxed text-black sm:text-xl md:text-2xl md:leading-[28px]">
                  Our yearly flagship program at Gully Tours for people
                  interested in designing and leading experiences in the city.
                  Learn the art of designing and leading themed experiences in
                  your city for fun, passion, and also a great way to make some
                  extra income on the side.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - CSS Grid with Overlaps */}
        <div className="hidden w-full lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:gap-8">
          {/* Text Content Card - Left (overlaps image) */}
          <motion.div
            className="col-span-3 col-start-2 row-span-3 row-start-2 self-start z-20 mt-15 -mr-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideUpVariants}
          >
            <div className="bg-[#F5EF86] p-3.5">
              <div className="bg-[#F7F8DF] p-6">
                <p className="text-justify font-rajdhani text-xl font-medium leading-[28px] text-black xl:text-2xl">
                  Our yearly flagship program at Gully Tours for people
                  interested in designing and leading experiences in the city.
                  Learn the art of designing and leading themed experiences in
                  your city for fun, passion, and also a great way to make some
                  extra income on the side.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Image - Center */}
          <motion.div
            className="col-span-6 col-start-4 row-span-3 row-start-1 z-10 overflow-hidden rounded-lg border-[10px] border-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={slideUpVariants}
          >
            <div className="relative aspect-[645/617] w-full">
              <Image
                src="/city-explorer-main.svg"
                alt="Urban Explorer Program"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Title Card - Right (overlaps image) */}
          <motion.div
            className="col-span-4 col-start-9 row-span-1 row-start-2 self-start z-20 -ml-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={slideUpVariants}
          >
            <div className="flex flex-col items-center gap-3 bg-[#F7F8DF] px-6 py-6">
              <div className="h-0.5 w-full border-t-2 border-dashed border-black" />
              <h2 className="text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-black xl:text-[48px] xl:leading-[48px]">
                Urban Explorer
                <br />
                Program
              </h2>
              <div className="h-0.5 w-full border-t-2 border-dashed border-black" />
            </div>
          </motion.div>

          {/* Decorative SVG - Bottom Right (overlaps image) */}
          <div className="relative col-span-2 col-start-9 row-span-1 row-start-3 self-end justify-self-end z-20 -mt-8 -ml-20">
            <motion.div
              className="relative h-48 w-44 xl:h-[203px] xl:w-[195px]"
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
          <CTAButton href="/city-explorer">LEARN MORE</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
