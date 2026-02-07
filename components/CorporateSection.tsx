"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PerforatedCard from "./PerforatedCard";
import CTAButton from "./ui/CTAButton";

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
      title: "Hyatt – High on Death by Dosa",
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
                <div className="flex gap-4 md:gap-7 group">
                  {/* Icon */}
                  <div
                    className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-32 sm:w-32 md:h-[154px] md:w-[153px] transition-transform"
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
                    <h3 className="font-rajdhani text-xl font-semibold uppercase leading-tight text-[#262626] sm:text-2xl md:text-[24px]">
                      {study.title}
                    </h3>
                    <p className="font-rajdhani text-sm font-medium capitalize leading-relaxed text-[#262626] sm:text-base md:text-[16px] md:leading-[20px]">
                      {study.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Logos */}
        <div className="mt-20 flex flex-col items-center">
          <h3 className="mb-10 font-rajdhani text-2xl font-bold uppercase text-[#262626] md:text-3xl">
            WHO&apos;S BEEN WALKING WITH US
          </h3>
          <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { name: "Client 1", logo: "/clients/logo-1.png", width: 140 },
              { name: "Client 2", logo: "/clients/logo-2.png", width: 140 },
              { name: "Client 3", logo: "/clients/logo-3.png", width: 140 },
              { name: "Client 4", logo: "/clients/logo-4.png", width: 80 },
              { name: "Client 5", logo: "/clients/logo-5.png", width: 140 },
              { name: "Client 6", logo: "/clients/logo-6.png", width: 160 },
              { name: "Client 7", logo: "/clients/logo-7.png", width: 140 },
            ].map((client, i) => (
              <div
                key={i}
                className="relative h-20 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
                style={{ width: `${client.width}px` }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <CTAButton
            href="/tours/corporate"
            borderColor="#247DA6"
            textColor="#247DA6"
            hoverBgColor="#247DA6"
            hoverTextColor="#FFFFFF"
          >
            EXPLORE CORPORATE TOURS
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
