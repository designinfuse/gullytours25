"use client";

import Image from "next/image";

interface Benefit {
  title: string;
  bgColor: string;
  image: string;
}

export default function CorporateBenefitsSection() {
  const benefits: Benefit[] = [
    {
      title: "Host your guests in a way \nthey'll never forget.",
      bgColor: "#DE6D11",
      image: "/corporate/benefit-1.jpg",
    },
    {
      title: "Ditch the cubicles, \nhit the gullies",
      bgColor: "#247DA6",
      image: "/corporate/benefit-2.jpg",
    },
    {
      title: "Forget the intros—stories \nbond teams faster..",
      bgColor: "#B23F27",
      image: "/corporate/benefit-3.jpg",
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
        <div className="flex w-full flex-col gap-6 lg:w-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex h-auto min-h-[220px] w-full items-center overflow-hidden rounded-3xl lg:w-[565px]"
              style={{ backgroundColor: benefit.bgColor }}
            >
              {/* Background Decorative Shape */}
              <div className="absolute inset-0 overflow-hidden">
                <svg
                  className="absolute left-0 top-0 h-full w-full"
                  viewBox="0 0 565 240"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 0 H565 V240 H100 Q50 200 50 120 Q50 40 100 0 Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>

              {/* Content Container */}
              <div className="relative flex w-full items-center gap-6 p-6">
                {/* Image */}
                <div className="relative h-[182px] w-[182px] flex-shrink-0 overflow-hidden rounded-2xl bg-white/10">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="whitespace-pre-line font-inter text-xl leading-[1.21em] text-white lg:text-[25px]">
                    {benefit.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
