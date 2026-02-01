"use client";

import Image from "next/image";
import PerforatedCard from "./PerforatedCard";

interface Benefit {
  label: string;
  title: string;
  description: string;
  bgColor: string;
  rotation: string;
  icon: string;
}

export default function CorporateBenefitsSection() {
  const benefits: Benefit[] = [
    {
      label: "Team Bonding",
      title: "TEAM BONDING",
      description: "Forget the intros—stories bond teams faster..",
      bgColor: "#B23F27",
      rotation: "rotate-[6deg]",
      icon: "/corporate/team-bonding-icon.svg",
    },
    {
      label: "Onboarding Journeys",
      title: "ONBOARDING JOURNEYS",
      description: "Ditch the cubicles, hit the gullies",
      bgColor: "#247DA6",
      rotation: "rotate-[1deg]",
      icon: "/corporate/onboarding-icon.svg",
    },
    {
      label: "Hosting Delegates",
      title: "HOSTING DELEGATES",
      description: "Host your guests in a way they'll never forget.",
      bgColor: "#DE6D11",
      rotation: "rotate-[5deg]",
      icon: "/corporate/hosting-icon.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#EDEDE7] px-4 py-20">
      <div className="mx-auto flex w-full max-w-[1299px] flex-col items-center gap-8 lg:flex-row lg:gap-8">
        {/* Left Side - Title */}
        <div className="flex-shrink-0">
          <h2 className="font-rajdhani text-5xl font-semibold uppercase leading-[1.25em] text-black lg:text-[64px]">
            What corporate
            <br />
            walks can do
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
          {benefits.map((benefit, index) => (
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
                <div className="absolute left-1/2 top-1/2 h-[138px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[3px] border border-[#F7F8DF]" />
                <div className="absolute left-1/2 top-1/2 h-[130px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#F7F8DF]" />

                {/* Content */}
                <div className="relative flex h-full w-full items-center px-10 py-6">
                  {/* Icon/Illustration on left */}
                  <div className="relative mr-6 h-[100px] w-[100px] flex-shrink-0 mix-blend-multiply">
                    <div className="rotate-[11deg]">
                      <Image
                        src={benefit.icon}
                        alt={benefit.label}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-rajdhani text-xl font-bold uppercase leading-normal text-[#F7F8DF] md:text-[22px]">
                      {benefit.title}
                    </h3>
                    <p className="font-rajdhani text-base font-semibold leading-[1.3em] text-[#F7F8DF] md:text-[18px]">
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
