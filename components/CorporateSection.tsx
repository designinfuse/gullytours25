"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PerforatedCard from "./PerforatedCard";

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
      slug: "google-colonial-crawl",
    },
    {
      icon: "/corporate-icon-2.png",
      iconBg: "#4F8C7D",
      title: "CRED – Pete by Night",
      description:
        "Centuries-old markets, local bites, and shared laughter—curated into a walk that helped CRED's team see the city, and each other, anew.",
      slug: "cred-pete-by-night",
    },
    {
      icon: "/corporate-icon-3-4d920f.png",
      iconBg: "#B23F27",
      title: "Hyatt Centric – High on Death by Dosa",
      description:
        "We built a journey along Bangalore's iconic dosa trail, filled with conversation, culture, and culinary delights for Hyatt Centric.",
      slug: "hyatt-centric-death-by-dosa",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#EDEDE7] px-4 py-16 md:py-20 lg:py-28">
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 md:mb-16">
          <h2 className="text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-[#262626] sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[84px]">
            CORPORATE TOURS
            <br />& CONFERENCES
          </h2>
          <p className="text-center font-rajdhani text-xl font-semibold leading-tight text-[#262626] sm:text-2xl md:text-[26px] md:leading-[32px]">
            Discovering stories together to foster genuine connections
          </p>
        </div>

        {/* Content - Flexbox Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Large Blue Card with Perforated Edges */}
          <motion.div
            className="relative w-full overflow-visible lg:w-[55%] xl:w-[672px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <PerforatedCard
              edges={{ top: true, bottom: true }}
              bgColor="#247DA6"
              className="w-full"
              perforationSize={8}
              perforationSpacing={24}
            >
              {/* Background Pattern - decorative overlay */}
              <div className="hidden absolute inset-0 pointer-events-none">
                <Image
                  src="/corporate-pattern.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container - Flexbox */}
              <div className="relative flex flex-col gap-6 p-6 md:p-8 lg:gap-8 lg:p-8">
                {/* Main Image */}
                <div className="relative aspect-[614/334] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/corporate-main-image-65029c.png"
                    alt="Corporate team experience"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4">
                  <p className="font-rajdhani text-lg font-medium capitalize leading-relaxed text-white sm:text-xl md:text-[20px] md:leading-[24px]">
                    Looking Beyond Icebreakers And Offsites? We Bring Teams And
                    Leaders Together Through The City - It&apos;s History, Culture,
                    Food And Hidden Corners
                  </p>
                  <Link
                    href="/tours/corporate"
                    className="font-rajdhani text-lg font-semibold uppercase text-[#F5EF86] underline decoration-solid underline-offset-2 transition-colors hover:text-white sm:text-xl"
                  >
                    EXPLORE CORPORATE EXPERIENCES
                  </Link>
                </div>
              </div>
            </PerforatedCard>
          </motion.div>

          {/* Case Studies Cards - Flexbox */}
          <div className="flex w-full flex-col gap-6 md:gap-8 lg:w-[45%] lg:justify-start xl:w-[590px]">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="flex gap-4 md:gap-7 group"
                >
                  {/* Icon */}
                  <div
                    className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-32 sm:w-32 md:h-[154px] md:w-[153px] transition-transform group-hover:scale-105"
                    style={{ backgroundColor: study.iconBg }}
                  >
                    <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-[130px] md:w-[130px]">
                      <Image
                        src={study.icon}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-1 py-1">
                    <h3 className="font-rajdhani text-xl font-semibold uppercase leading-tight text-[#262626] sm:text-2xl md:text-[24px] group-hover:text-[#B23F27] transition-colors">
                      {study.title}
                    </h3>
                    <p className="font-rajdhani text-sm font-medium capitalize leading-relaxed text-[#262626] sm:text-base md:text-[16px] md:leading-[20px]">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
