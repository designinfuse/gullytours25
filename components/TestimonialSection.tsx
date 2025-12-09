"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#BFD3A0] px-6 py-16 md:px-12 md:py-20 lg:px-24">
      <div className="mx-auto flex max-w-[1367px] flex-col items-center justify-center">
        {/* Diamond Separator - Top */}
        <div className="mb-12">
          <Image
            src="/diamond-separator.svg"
            alt=""
            width={96}
            height={19}
            className="h-auto w-[96px]"
          />
        </div>

        {/* Testimonial Quote */}
        <div className="mb-10 max-w-[815px]">
          <p className="text-center font-rajdhani text-[40px] font-medium leading-[1.083em] text-[#262626] md:text-[48px]">
            The experience helped our new team feel like locals in just a few
            hours.
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Author Image */}
          <div className="h-[93px] w-[132px] overflow-hidden">
            <Image
              src="/testimonial-author-3b698c.png"
              alt="Anjali Nair"
              width={132}
              height={93}
              className="object-cover"
            />
          </div>

          {/* Author Details */}
          <div>
            <p className="font-inter text-[20px] font-extrabold leading-[1.21em] text-[#262626]">
              Anjali Nair, HR Manager,
              <br />
              MAP
            </p>
          </div>
        </div>

        {/* Decorative SVG Pattern - Bottom */}
        <div className="absolute bottom-[226px] left-0 right-0 flex items-center justify-between px-[78px]">
          <div className="h-[27px] w-[13.5px]" />
          <div className="h-[27px] w-[13.5px]" />
        </div>
      </div>
    </section>
  );
}
