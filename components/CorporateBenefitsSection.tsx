"use client";

import Image from "next/image";
import PerforatedCard from "./PerforatedCard";

interface Benefit {
  title: string;
  description: string;
  bgColor: string;
  rotation: string;
  icon: string;
}

interface BenefitsConfig {
  sectionTitle: string;
  benefits: Benefit[];
}

const benefitsData: Record<"corporate" | "educational" | "custom", BenefitsConfig> = {
  corporate: {
    sectionTitle: "What corporate\nwalks can do",
    benefits: [
      {
        title: "TEAM BONDING",
        description: "Forget the intros—stories bond teams faster.",
        bgColor: "#B23F27",
        rotation: "rotate-[6deg]",
        icon: "/benefits/corporate-team-bonding.png",
      },
      {
        title: "ONBOARDING JOURNEYS",
        description: "Ditch the cubicles, hit the gullies.",
        bgColor: "#247DA6",
        rotation: "rotate-[1deg]",
        icon: "/benefits/corporate-onboarding.png",
      },
      {
        title: "HOSTING DELEGATES",
        description: "Host your guests in a way they'll never forget.",
        bgColor: "#DE6D11",
        rotation: "rotate-[5deg]",
        icon: "/benefits/corporate-hosting.png",
      },
    ],
  },
  educational: {
    sectionTitle: "What educational\nwalks can do",
    benefits: [
      {
        title: "EDU WALKS",
        description: "Walks that teach beyond the syllabus.",
        bgColor: "#B23F27",
        rotation: "rotate-[6deg]",
        icon: "/benefits/educational-edu-walks.png",
      },
      {
        title: "LEARNING WORKSHOPS",
        description: "When stories always beat slideshows.",
        bgColor: "#247DA6",
        rotation: "rotate-[1deg]",
        icon: "/benefits/educational-learning.png",
      },
      {
        title: "RESIDENCIES",
        description: "Live, learn and luru, storytelling at its core.",
        bgColor: "#DE6D11",
        rotation: "rotate-[5deg]",
        icon: "/benefits/educational-residencies.png",
      },
    ],
  },
  custom: {
    sectionTitle: "What custom\nwalks can do",
    benefits: [
      {
        title: "CELEBRATIONS",
        description: "Give new hire a sense of place and belonging.",
        bgColor: "#B23F27",
        rotation: "rotate-[6deg]",
        icon: "/benefits/custom-celebrations.png",
      },
      {
        title: "HOMETOWN HOSTS",
        description: "Play city hosts for your out-of-town guests.",
        bgColor: "#247DA6",
        rotation: "rotate-[1deg]",
        icon: "/benefits/custom-hometown.png",
      },
      {
        title: "REUNIONS",
        description: "Walk down memory gullies with your old gang.",
        bgColor: "#DE6D11",
        rotation: "rotate-[5deg]",
        icon: "/benefits/custom-reunions.png",
      },
    ],
  },
};

interface CorporateBenefitsSectionProps {
  variant?: "corporate" | "educational" | "custom";
}

export default function CorporateBenefitsSection({
  variant = "corporate",
}: CorporateBenefitsSectionProps) {
  const config = benefitsData[variant];
  const titleLines = config.sectionTitle.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F8DF] px-4 py-20">
      <div className="mx-auto flex w-full max-w-[1299px] flex-col items-center gap-8 lg:flex-row lg:gap-8">
        {/* Left Side - Title */}
        <div className="flex-shrink-0">
          <h2 className="font-rajdhani text-4xl font-bold uppercase leading-[1.1] text-black sm:text-5xl lg:text-[64px]">
            {titleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/connector.svg"
            alt="Decorative"
            width={112}
            height={125}
            className="mt-4 lg:mt-0"
          />
        </div>

        {/* Right Side - Benefits Cards */}
        <div className="flex w-full flex-col gap-4 lg:w-auto">
          {config.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.rotation} transition-transform hover:rotate-0 hover:scale-105 duration-300`}
            >
              <PerforatedCard
                edges={{ left: true, right: true }}
                bgColor={benefit.bgColor}
                className="relative h-[164px] w-full lg:w-[482px]"
              >
                {/* Double Border Frame */}
                <div className="absolute left-1/2 top-1/2 h-[138px] w-[calc(100%-42px)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[3px] border border-[#F7F8DF]" />
                <div className="absolute left-1/2 top-1/2 h-[130px] w-[calc(100%-52px)] max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#F7F8DF]" />

                {/* Content */}
                <div className="relative flex h-full w-full items-center px-6 py-6 sm:px-10">
                  {/* Icon/Illustration on left */}
                  <div className="relative mr-4 h-[80px] w-[80px] flex-shrink-0 sm:mr-6 sm:h-[100px] sm:w-[100px]">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-1 flex-col gap-2 sm:gap-3">
                    <h3 className="font-rajdhani text-lg font-bold uppercase leading-normal text-[#F7F8DF] sm:text-xl md:text-[22px]">
                      {benefit.title}
                    </h3>
                    <p className="font-rajdhani text-sm font-semibold leading-[1.3em] text-[#F7F8DF] sm:text-base md:text-[18px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </PerforatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
