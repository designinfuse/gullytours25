"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CorporateSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const caseStudies = [
    {
      icon: "/corporate-icon-1-69d3f3.png",
      iconBg: "#DE6D11",
      title: "Google – Creative Connections",
      description:
        "A walk stitched with stories and art, designed to bring Google's team closer to Bengaluru—and to each other.",
    },
    {
      icon: "/corporate-icon-2.png",
      iconBg: "#4F8C7D",
      title: "CRED – Pete by Night",
      description:
        "Centuries-old markets, local bites, and shared laughter—curated into a walk that helped CRED's team see the city, and each other, anew.",
    },
    {
      icon: "/corporate-icon-3-4d920f.png",
      iconBg: "#B23F27",
      title: "Hyatt Centric – High on Death by Dosa",
      description:
        "We built a journey along Bangalore's iconic dosa trail, filled with conversation, culture, and culinary delights for Hyatt Centric.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#EDEDE7] px-4 py-20">
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <h2 className="text-center font-rajdhani text-6xl font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]">
            CORPORATE TOURS
            <br />& CONFERENCES
          </h2>
          <p className="text-center font-rajdhani text-2xl font-semibold leading-none text-[#262626] md:text-3xl lg:text-[32px]">
            Discovering stories together to foster genuine connections
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[109px]">
          {/* Large Blue Card */}
          <motion.div
            className="group relative h-[532px] w-full overflow-hidden rounded-lg bg-[#247DA6] lg:w-[672px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <Image
                src="/corporate-pattern.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Main Image */}
            <div className="absolute left-[30px] top-[35px] h-[334px] w-[614px]">
              <Image
                src="/corporate-main-image-65029c.png"
                alt="Corporate team experience"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-[60px] left-[30px] right-[30px]">
              <p className="mb-4 font-rajdhani text-xl font-medium capitalize leading-[1.2em] text-white">
                Looking beyond icebreakers and offsites? We bring teams and
                leaders together through the city - It&apos;s History, Culture,
                Food and Hidden Corners
              </p>
              <a
                href="#"
                className="font-rajdhani text-xl font-semibold uppercase text-[#F5EF86] transition-colors hover:text-white"
              >
                EXPLORE CORPORATE EXPERIENCES
              </a>
            </div>
          </motion.div>

          {/* Case Studies Cards */}
          <div className="flex w-full flex-col gap-8 lg:w-[590px]">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="flex gap-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                {/* Icon */}
                <div
                  className="flex h-[154px] w-[153px] shrink-0 items-center justify-center overflow-hidden rounded-lg"
                  style={{ backgroundColor: study.iconBg }}
                >
                  <div className="relative h-[130px] w-[130px]">
                    <Image
                      src={study.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 py-1">
                  <h3 className="font-rajdhani text-2xl font-semibold uppercase leading-tight text-[#262626] md:text-[28px]">
                    {study.title}
                  </h3>
                  <p className="font-rajdhani text-base font-medium capitalize leading-[1.25em] text-[#262626]">
                    {study.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
