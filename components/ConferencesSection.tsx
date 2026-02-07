"use client";

import Image from "next/image";
import Link from "next/link";
import PerforatedCard from "./PerforatedCard";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  borderColor: string;
  image: string;
  slug: string;
}

export default function ConferencesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "google",
      title: "Google – Creative Connections",
      description:
        "A walk stitched with stories and art, designed to bring Google's team closer to Bengaluru—and to each other.",
      borderColor: "#DE6D11",
      image: "/conferences/google-case-study.jpg",
      slug: "google-colonial-crawl",
    },
    {
      id: "cred",
      title: "CRED – Pete by Night",
      description:
        "Centuries-old markets, local bites, and shared laughter—curated into a walk that helped CRED's team see the city, and each other, anew.",
      borderColor: "#4F8C7D",
      image: "/conferences/cred-case-study.jpg",
      slug: "cred-pete-by-night",
    },
    {
      id: "hyatt",
      title: "Hyatt –\nHigh on Death by Dosa",
      description:
        "We built a journey along Bangalore's iconic dosa trail, filled with conversation, culture, and culinary delights for Hyatt.",
      borderColor: "#B23F27",
      image: "/conferences/hyatt-case-study.jpg",
      slug: "hyatt-centric-death-by-dosa",
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Title */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-rajdhani text-5xl font-bold uppercase leading-[1em] text-[#262626] md:text-6xl lg:text-[80px]">
            Conferences
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          {/* Left side - Perforated Card */}
          <div className="w-full max-w-[672px] lg:w-[55%]">
            <PerforatedCard
              bgColor="#247DA6"
              edges={{ top: true, bottom: true }}
              perforationSize={8}
              perforationSpacing={24}
              className="w-full"
            >
              <div className="flex flex-col p-6 md:p-8">
                {/* Main Image */}
                <div className="relative mb-6 aspect-[614/334] w-full overflow-hidden">
                  <Image
                    src="/conferences/main-image.jpg"
                    alt="Conference experience"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="space-y-4">
                  <p className="font-rajdhani text-base font-medium capitalize leading-[1.2em] text-white md:text-lg lg:text-xl">
                    Looking beyond icebreakers and offsites? We bring teams and
                    leaders together through the city - It&apos;s History,
                    Culture, Food and Hidden Corners
                  </p>
                  <Link
                    href="/tours/corporate"
                    className="inline-block font-rajdhani text-lg font-semibold uppercase text-[#F5EF86] underline decoration-solid underline-offset-2 transition-opacity hover:opacity-80 md:text-xl"
                  >
                    EXPLORE CORPORATE EXPERIENCES
                  </Link>
                </div>
              </div>
            </PerforatedCard>
          </div>

          {/* Right side - Case Studies */}
          <div className="flex w-full flex-col gap-8 lg:w-[45%] lg:max-w-[590px]">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="flex gap-5 md:gap-7 transition-transform hover:scale-[1.02]"
              >
                {/* Image with colored border */}
                <div
                  className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden p-2 md:h-[154px] md:w-[153px]"
                  style={{ backgroundColor: study.borderColor }}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col justify-center gap-1 py-1">
                  <h3 className="whitespace-pre-line font-rajdhani text-xl font-semibold uppercase leading-[1.2em] text-[#262626] md:text-2xl">
                    {study.title}
                  </h3>
                  <p className="font-rajdhani text-sm font-medium capitalize leading-[1.25em] text-[#262626] md:text-base">
                    {study.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
