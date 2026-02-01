"use client";

import PerforatedCard from "./PerforatedCard";

export default function RegisterInterestSection() {
  return (
    <section className="w-full bg-[#B23F27] px-6 py-20 md:px-12 md:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1224px]">
        <PerforatedCard
          bgColor="#F7F8DF"
          edges={{ top: true, bottom: true }}
          perforationSize={10}
          perforationSpacing={28}
          className="w-full"
        >
          {/* Inner content with double border */}
          <div className="px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20">
            {/* Outer border */}
            <div className="rounded border border-[#B23F27] p-3 md:p-4">
              {/* Inner border */}
              <div className="flex items-center justify-center rounded border border-[#B23F27] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
                <p className="max-w-[912px] text-center font-rajdhani text-3xl font-bold leading-[1em] text-black md:text-4xl lg:text-5xl xl:text-[64px]">
                  Think you&apos;d make an awesome city ambassador? Register
                  your interest for future editions
                </p>
              </div>
            </div>
          </div>
        </PerforatedCard>
      </div>
    </section>
  );
}
