import Image from "next/image";

export default function WhatsProgramSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4F8C7D]">
      <div className="w-full flex flex-row">
        {/* Left Content Column */}
        <div className="flex w-1/2 flex-col gap-10 px-6 py-24 md:px-12 md:py-32 lg:pl-[152px] lg:pr-[60px]">
          {/* Title */}
          <h2 className="font-rajdhani text-[64px] font-bold uppercase leading-[1em] text-white md:text-[84px]">
            What&apos;s<br />Program?
          </h2>

          {/* Body Text */}
          <div className="font-rajdhani text-[20px] font-medium leading-[1.5em] text-white md:text-[24px]">
            <p className="mb-6">
              The best way to introduce someone to a city is to walk them through
              it—stories, sights, and lived culture included.
            </p>
            <p className="mb-6">
              In City Explorer, you'll learn to design immersive tours that go
              beyond the guidebook. From research to storytelling, you'll discover
              how to host walks that feel personal and memorable.
            </p>
            <p>
              By the end, you'll be more than a guide—you'll be a storyteller and
              companion who helps guests truly belong to your city. Join as an
              independent explorer or with the Gully Tribe.
            </p>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative h-[950px] w-1/2">
          <Image
            src="/city-explorer-program-image-6111b7.png"
            alt="City Explorer Program"
            fill
            className="object-cover"
          />
        </div>

        {/* Decorative SVG Element - Positioned Absolutely */}
        <div className="absolute bottom-[121px] left-[493px] h-[203px] w-[195px]">
          <Image
            src="/city-explorer-decorative-group.svg"
            alt="Decorative element"
            width={195}
            height={203}
          />
        </div>
      </div>
    </section>
  );
}
