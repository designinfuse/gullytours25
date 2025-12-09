import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RunningBand from "@/components/RunningBand";
import CityExplorerIntroSection from "@/components/CityExplorerIntroSection";
import WhatsProgramSection from "@/components/WhatsProgramSection";

export default function CityExplorerPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#D9D9D9]">
          <Image
            src="/city-explorer-hero-background.png"
            alt="City Explorer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Text Container */}
        <div className="relative flex h-full w-full items-start justify-center px-4">
          <div className="flex w-full max-w-[1275px] items-center justify-center mt-[150px]">
            <h1
              className="text-center font-rajdhani text-6xl font-bold uppercase leading-[1em] text-[#F5EF86] md:text-7xl lg:text-[84px]"
              style={{
                textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
              }}
            >
              Because every city
              <br />
              deserves its storytellers
            </h1>
          </div>
        </div>

        {/* Running Band at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <RunningBand items={["ಬೆಂಗಳೂರು", "Bangalore", "ಮೈಸೂರು", "Mysore"]} />
        </div>
      </section>

      {/* City Explorer Intro Section */}
      <CityExplorerIntroSection />

      {/* What's Program Section */}
      <WhatsProgramSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
