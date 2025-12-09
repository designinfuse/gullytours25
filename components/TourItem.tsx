"use client";

import Image from "next/image";

interface TourItemProps {
  location: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  bgColor?: string;
}

export default function TourItem({
  location,
  title,
  subtitle,
  price,
  image,
  bgColor = "#DE6D11",
}: TourItemProps) {
  return (
    <div className="relative flex w-[440px] flex-col" style={{ backgroundColor: bgColor }}>
      {/* Main Image */}
      <div className="relative h-[430px] w-full overflow-hidden bg-[#D9D9D9] p-4">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Location Badge */}
        <div className="absolute left-4 top-4 flex h-[33px] w-[137px] items-center justify-center bg-[#F7F8DF]">
          <p className="font-dm-sans text-xl font-normal uppercase leading-[1.98em] text-black">
            {location}
          </p>
        </div>
      </div>

      {/* Content Section - Flexible height */}
      <div className="flex flex-col gap-2 px-4 pb-6 pt-6">
        {/* Title - Dynamic height */}
        <h3 className="font-rajdhani text-4xl font-semibold leading-[1.44em] text-white">
          {title}
        </h3>

        {/* Divider Line */}
        <div className="my-1 h-[0.68px] w-full bg-white" />

        {/* Subtitle */}
        <p className="font-dm-sans text-xl font-normal leading-[2em] text-white">
          {subtitle}
        </p>

        {/* Price and Button Row */}
        <div className="mt-2 flex items-center justify-between">
          <p className="font-dm-sans text-xl font-normal leading-[2em] text-white">
            {price}
          </p>
          <button className="rounded-2xl bg-[#FDF6D8] px-4 py-2.5 font-rajdhani text-base font-semibold leading-[1.2em] text-[#262626] transition-all hover:bg-[#F5EF86]">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
