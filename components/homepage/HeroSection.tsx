"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RunningBand from "@/components/RunningBand";
import CTAButton from "@/components/ui/CTAButton";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/home-hero-1.jpg",
  "/home-hero-2.jpg",
  "/home-hero-3.jpg",
  "/home-hero-4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Hero Background ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Content - Using Flexbox for centering */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-32">
        {/* Hero Title */}
        <h1
          className="mb-16 max-w-5xl text-center font-rajdhani text-6xl font-bold uppercase leading-tight tracking-tight text-[#F5EF86] md:text-7xl"
          style={{
            textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
          }}
        >
          YOUR BEST HOST TO<br />THE OORU&apos;s SOUL
        </h1>

        {/* CTA Button */}
        <CTAButton href="/tours">
          EXPLORE TOURS & EXPERIENES
        </CTAButton>
      </main>

      {/* Running Band at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <RunningBand
          items={[
            "Since 2009",
            "Winner Outlook Responsible Tourism Award 2025",
          ]}
        />
      </div>
    </div>
  );
}
