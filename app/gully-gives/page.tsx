import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import RunningBand from "@/components/RunningBand";
import GullyGivesSection from "@/components/GullyGivesSection";
import GullyGivesImpactSection from "@/components/GullyGivesImpactSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import JoinTribeSection from "@/components/JoinTribeSection";
import GullyGivesJoinSection from "@/components/GullyGivesJoinSection";
import GullyGivesDifferenceSection from "@/components/GullyGivesDifferenceSection";
import GullyGivesCollaborationSection from "@/components/GullyGivesCollaborationSection";

export default function GullyGivesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/gully-gives-3.jpeg"
            alt="Gully Gives - Community and Impact"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Content */}
        <main className="relative flex min-h-screen flex-col items-center justify-start px-4 py-32">
          {/* Hero Title */}
          <h1
            className="max-w-5xl text-center font-rajdhani text-6xl font-bold uppercase leading-[0.89em] tracking-tight text-[#F5EF86] md:text-7xl lg:text-8xl xl:text-[112px] my-12"
            style={{
              textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
            }}
          >
            WALKING THE TALK,
            <br />
            ONE STORY AT A TIME
          </h1>
        </main>

        {/* Running Band at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <RunningBand items={["ಬೆಂಗಳೂರು", "Bangalore", "ಮೈಸೂರು", "Mysore"]} />
        </div>
      </div>

      {/* Impact Section from Figma */}
      <GullyGivesImpactSection />

      {/* How to join section from Figma */}
      <GullyGivesJoinSection />

      {/* Walks that make a difference from Figma */}
      <GullyGivesDifferenceSection />

      {/* Collaboration with a cause section from Figma */}
      <GullyGivesCollaborationSection />

      <Newsletter />
      <Footer />
    </>
  );
}
