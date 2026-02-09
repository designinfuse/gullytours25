"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const corporateClients: Client[] = [
  { name: "Client 1", logo: "/clients/logo-1.png", width: 160, height: 54 },
  { name: "Client 2", logo: "/clients/logo-2.png", width: 160, height: 56 },
  { name: "Client 3", logo: "/clients/logo-3.png", width: 160, height: 98 },
  { name: "Client 4", logo: "/clients/logo-4.png", width: 80, height: 80 },
  { name: "Client 5", logo: "/clients/logo-5.png", width: 160, height: 160 },
  { name: "Client 6", logo: "/clients/logo-6.png", width: 180, height: 47 },
  { name: "Client 7", logo: "/clients/logo-7.png", width: 160, height: 70 },
];

const educationalClients: Client[] = [
  { name: "Oxford University", logo: "/clients/educational/oxford.png", width: 140, height: 140 },
  { name: "MIT", logo: "/clients/educational/mit.png", width: 160, height: 80 },
  { name: "Kings College", logo: "/clients/educational/kings-college.png", width: 140, height: 140 },
  { name: "Cambridge University", logo: "/clients/educational/cambridge.png", width: 140, height: 140 },
  { name: "Yale", logo: "/clients/educational/yale.png", width: 120, height: 120 },
  { name: "Trinity College", logo: "/clients/educational/trinity-college.png", width: 140, height: 140 },
  { name: "University of Gastronomy", logo: "/clients/educational/unisg.png", width: 140, height: 140 },
  { name: "Aditi Mallya", logo: "/clients/educational/aditi-mallya.png", width: 140, height: 80 },
  // { name: "Inventure Academy", logo: "/clients/educational/inventure-academy.png", width: 140, height: 140 },
  // { name: "Vidyashilp Academy", logo: "/clients/educational/vidyashilp.png", width: 140, height: 80 },
  { name: "Christ University", logo: "/clients/educational/christ-university.png", width: 140, height: 140 },
  { name: "Srishti Manipal", logo: "/clients/educational/srishti-manipal.png", width: 140, height: 140 },
  { name: "Canadian International School", logo: "/clients/educational/canadian-international.png", width: 160, height: 80 },
];

interface CorporateClientsCarouselProps {
  variant?: "corporate" | "educational";
}

export default function CorporateClientsCarousel({ variant = "corporate" }: CorporateClientsCarouselProps) {
  const clients = variant === "educational" ? educationalClients : corporateClients;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden bg-[#EDEDE7] px-4 py-20">
      <div className="mx-auto w-full max-w-[1368px]">
        {/* Section Title */}
        <h2 className="mb-9 font-rajdhani text-4xl font-semibold leading-[1.44em] text-black">
          Who&apos;s been walking with us
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#F5EF86] transition-all hover:scale-110"
            aria-label="Previous"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              className="mr-0.5"
            >
              <path
                d="M9 1L1 9L9 17"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: `${client.width}px`,
                    height: "160px",
                  }}
                >
                  <div
                    className="relative grayscale transition-all hover:grayscale-0"
                    style={{
                      width: `${client.width}px`,
                      height: `${client.height}px`,
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#F5EF86] transition-all hover:scale-110"
            aria-label="Next"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              className="ml-0.5"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
