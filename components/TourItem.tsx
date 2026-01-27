"use client";

import Image from "next/image";

interface TourItemProps {
  id: string;
  location: string;
  title: string;
  subtitle: string;
  price: string;
  image?: string;
  bgColor?: string;
  when?: string; // ISO date string for upcoming tours
}

// Format date for display
function formatTourDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TourItem({
  id,
  location,
  title,
  subtitle,
  price,
  bgColor = "#DE6D11",
  when,
}: TourItemProps) {
  // Use tour-specific thumb image from public/tours/{id}/
  // Encode the ID to handle spaces and special characters
  const thumbImage = `/tours/${encodeURIComponent(id)}/thumb.jpg`;

  return (
    <div className="relative flex w-[440px] h-full flex-col cursor-pointer transition-transform hover:scale-[1.02]" style={{ backgroundColor: bgColor }}>
      {/* Main Image */}
      <div className="relative h-[430px] w-full overflow-hidden bg-[#D9D9D9] p-4">
        <Image src={thumbImage} alt={title} fill className="object-cover transition-transform duration-300 hover:scale-105" />

        {/* Location Badge */}
        <div className="absolute left-4 top-4 flex h-[33px] w-[137px] items-center justify-center bg-[#F7F8DF]">
          <p className="font-dm-sans text-xl font-normal uppercase leading-[1.98em] text-black">
            {location}
          </p>
        </div>

        {/* Date Badge for Upcoming Tours */}
        {when && (
          <div className="absolute bottom-4 left-4 flex items-center justify-center bg-[#F5EF86] px-3 py-1.5">
            <p className="font-rajdhani text-base font-semibold text-[#262626]">
              {formatTourDate(when)}
            </p>
          </div>
        )}
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
          <span className="rounded-2xl bg-[#FDF6D8] px-4 py-2.5 font-rajdhani text-base font-semibold leading-[1.2em] text-[#262626] transition-all group-hover:bg-[#F5EF86]">
            VIEW TOUR
          </span>
        </div>
      </div>
    </div>
  );
}
