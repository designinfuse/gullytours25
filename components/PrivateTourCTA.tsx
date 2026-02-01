"use client";

import PerforatedCard from "./PerforatedCard";

export default function PrivateTourCTA() {
  return (
    <section className="w-full bg-[#B23F27] px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <PerforatedCard
          bgColor="#F7F8DF"
          edges={{ top: true, bottom: true }}
          perforationSize={10}
          perforationSpacing={28}
          className="w-full"
        >
          <div className="p-8 md:p-12 lg:p-16">
            {/* Double Border */}
            <div className="flex min-h-[200px] items-center justify-center border-2 border-[#B8A887] p-2 md:min-h-[250px] md:p-2">
              <div className="flex min-h-[200px] items-center justify-center border-2 border-[#B8A887] p-8 md:min-h-[250px] md:p-12">
                {/* Text Content */}
                <h2 className="text-center font-rajdhani text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl lg:leading-tight">
                  Do you want to book this as a private tour for your group?
                </h2>
              </div>
            </div>
          </div>
        </PerforatedCard>
      </div>
    </section>
  );
}
