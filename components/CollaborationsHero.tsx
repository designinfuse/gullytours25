"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import RunningBand from "@/components/RunningBand";

export default function CollaborationsHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/collaborations-hero.jpg"
          alt="Gully Gives - Walking the Talk"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Radial gradient behind text */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 50%, rgba(45, 45, 45, 0.4) 0%, rgba(150, 150, 150, 0.2) 50%, transparent 100%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <h1
          className="max-w-5xl text-center font-rajdhani text-4xl font-bold uppercase leading-tight text-[#F5EF86] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
          }}
        >
          THE BEST STORIES DON'T JUST LIVE ONLINE - THEY WALK THE STREETS
        </h1>
      </div>

      {/* Running Band at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <RunningBand items={["ಬೆಂಗಳೂರು", "Bangalore", "ಮೈಸೂರು", "Mysore"]} />
      </div>
    </section>
  );
}
