"use client";

import Image from "next/image";

interface Celebrity {
  name: string;
  description: string;
  image: string;
}

export default function FamousFacesSection() {
  const celebrities: Celebrity[] = [
    {
      name: "Sanjeev Kapoor",
      description:
        "In August 2022, we hosted him in Bangalore as he was shooting for this travel and food show",
      image: "/celebrities/sanjeev-kapoor.jpg",
    },
    {
      name: "Kofi Annan",
      description: "In 2014, we hosted Kofi Ann in Mysore",
      image: "/celebrities/kofi-annan.jpg",
    },
    {
      name: "Trevor Nova",
      description: "In September 2023, Vinay met Trevor Nova.",
      image: "/celebrities/trevor-nova.jpg",
    },
    {
      name: "Michael, Catherine & Dylan Douglas",
      description:
        "In December 2023, we hosted the Michael Douglas family at a Coorg Experience.",
      image: "/celebrities/douglas-family.jpg",
    },
    {
      name: "Ranveer Brar",
      description:
        "In June 2023.. we hosted him in Mysore as he was curating food show",
      image: "/celebrities/ranveer-brar.jpg",
    },
  ];

  return (
    <section className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#247DA6] px-4 py-20">
      {/* Dashed Border Rectangle */}
      <div className="absolute left-9 top-10 h-[640px] w-[calc(100%-72px)] max-w-[1368px] rounded-none border-[3px] border-dashed border-[#262626]" />

      {/* Content Container */}
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center gap-12">
        {/* Title */}
        <h2 className="max-w-[756px] text-center font-rajdhani text-6xl font-bold uppercase leading-none text-white md:text-7xl lg:text-[84px]">
          Famous Faces we have hosted
        </h2>

        {/* Celebrity Cards Container */}
        <div className="relative flex w-full max-w-[1368px] flex-wrap items-center justify-center gap-8 px-4">
          {celebrities.map((celebrity, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center gap-3 bg-[#F7F8DF] p-4 shadow-lg transition-transform hover:scale-105"
              style={{
                width: index === 0 ? "262px" : index === 4 ? "285px" : "275px",
                minHeight: index === 0 ? "336px" : index === 4 ? "352px" : "345px",
              }}
            >
              {/* Yellow Star Decoration */}
              <div className="absolute -right-4 -top-8 h-9 w-9">
                <svg
                  viewBox="0 0 36 76"
                  fill="none"
                  className="h-full w-full"
                >
                  <path
                    d="M18 0L22.5 28.5L36 38L22.5 47.5L18 76L13.5 47.5L0 38L13.5 28.5L18 0Z"
                    fill="#F5EF86"
                  />
                </svg>
              </div>

              {/* Image Placeholder */}
              <div className="relative w-full bg-white" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={celebrity.image}
                  alt={celebrity.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-center font-rajdhani text-sm font-semibold leading-[1.43em] text-[#262626]">
                <span className="font-bold">{celebrity.name}</span> -{" "}
                {celebrity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Wavy Line */}
        <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-[1324px]">
          <svg
            viewBox="0 0 1324 234"
            fill="none"
            className="h-auto w-full opacity-30"
          >
            <path
              d="M0 117C165.5 20 331 214 496.5 117C662 20 827.5 214 993 117C1158.5 20 1324 214 1324 117"
              stroke="#C8C2C2"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Additional Yellow Stars */}
        <div className="absolute right-16 top-32 h-9 w-9">
          <svg viewBox="0 0 36 76" fill="none" className="h-full w-full">
            <path
              d="M18 0L22.5 28.5L36 38L22.5 47.5L18 76L13.5 47.5L0 38L13.5 28.5L18 0Z"
              fill="#F5EF86"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
