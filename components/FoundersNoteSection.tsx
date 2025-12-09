"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundersNoteSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-[900px] w-full items-center justify-center overflow-hidden bg-[#DE6D11] px-4 py-20">
      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-[1224px] flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex w-full max-w-[584px] flex-col gap-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          <h2 className="w-full font-rajdhani text-6xl font-bold uppercase leading-none text-white md:text-7xl lg:text-[84px]">
            FOUNDERS NOTE
          </h2>
          <p className="w-full font-rajdhani text-xl font-medium leading-[1.5em] text-white md:text-2xl lg:text-[24px]">
            Back in 2008 while working in Singapore, I realised that Singapore
            as a city country gets more tourists than the whole of India. I went
            on a chance walking tour with Singapore Walks and the experience.
            This inspired me to start walking tours back in Mysore in 2009.
            <br />
            <br />
            When we travel to Europe or South East Asia we are enamoured by the
            travel experience, that is largely because the person who guides you
            is as well read and well travelled as you are. Which was not the case
            in India.
            <br />
            <br />
            Over the years more than a 100 storytellers have passionately carried
            this tradition forward. We at look at the city not just for
            exploration and fun but a way to engage and learn from!
          </p>
          {/* CTA Button */}
          <motion.div
            className="self-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={slideUpVariants}
          >
            <button className="rounded-lg border-2 border-[#F5EF86] px-3 py-1 font-rajdhani text-3xl font-semibold uppercase text-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-3 transition-all hover:cursor-pointer hover:bg-[#F5EF86] hover:text-[#DE6D11] lg:text-[32px]">
              Learn more
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative h-[692px] w-full max-w-[521px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={slideUpVariants}
        >
          <Image
            src="/founders-note-image.svg"
            alt="Founder"
            fill
            className="object-contain"
          />

          {/* Decorative SVG */}
          <div className="absolute bottom-[90px] right-[-95px] h-[190px] w-[190px]">
            <Image
              src="/founders-note-decorative.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
