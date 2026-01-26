import Image from "next/image";
import Navbar from "@/components/Navbar";
import RunningBand from "@/components/RunningBand";
import CTAButton from "@/components/ui/CTAButton";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/malleshwaram.jpg"
          alt="Malleshwaram"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content - Using Flexbox for centering */}
      <main className="relative flex min-h-screen flex-col items-center justify-between px-4 py-32">
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
