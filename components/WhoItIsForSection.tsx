"use client";

import MasonryGallery from "./MasonryGallery";

interface GalleryImage {
  src: string;
  alt: string;
}

interface WhoItIsForSectionProps {
  images?: GalleryImage[];
}

export default function WhoItIsForSection({
  images = [],
}: WhoItIsForSectionProps) {
  return (
    <section
      className="w-full bg-[#EDEDE7] px-6 md:px-12 lg:px-24"
      style={{
        paddingTop: "153px",
        paddingBottom: "194px",
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Title and Subtitle */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center md:mb-16">
          <h2 className="font-rajdhani text-5xl font-bold uppercase leading-[1em] text-[#262626] md:text-6xl lg:text-[80px]">
            Who it is for
          </h2>
          <p className="max-w-[765px] font-rajdhani text-lg font-semibold leading-[1.25em] text-[#262626] md:text-xl lg:text-[26px] lg:leading-[1.23em]">
            Whether you&apos;re an educator, student, cultural enthusiast, or
            just endlessly curious, City Explorer – Bangalore Edition gives you
            the tools to engage with Bengaluru in meaningful and memorable ways.
          </p>
        </div>

        {/* Masonry Gallery */}
        <MasonryGallery images={images} />
      </div>
    </section>
  );
}
