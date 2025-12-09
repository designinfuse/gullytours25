import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import RunningBand from "@/components/RunningBand";
import AboutContentSection from "@/components/AboutContentSection";
import FoundersNoteSection from "@/components/FoundersNoteSection";
import TeamSection from "@/components/TeamSection";
import TimelineSection from "@/components/TimelineSection";
import FamousFacesSection from "@/components/FamousFacesSection";
import GiftAWalkSection from "@/components/GiftAWalkSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero-background.png"
            alt="About Gully Tours"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Content */}
        <main className="relative flex min-h-screen flex-col items-center justify-start px-4 py-32">
          {/* Hero Title */}
          <h1
            className="max-w-5xl text-center font-rajdhani text-6xl font-bold uppercase leading-[0.89em] tracking-tight text-[#F5EF86] md:text-7xl lg:text-8xl xl:text-[112px] my-12"
            style={{
              textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
            }}
          >
            BRINGING CITIES
            <br />
            TO LIFE WITH HEART
          </h1>
        </main>

        {/* Running Band at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <RunningBand items={["ಬೆಂಗಳೂರು", "Bangalore", "ಮೈಸೂರು", "Mysore"]} />
        </div>
      </div>

      {/* About Content Section */}
      <AboutContentSection />

      {/* Founders Note Section */}
      <FoundersNoteSection />

      {/* Team Section */}
      <TeamSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Famous Faces Section */}
      {/* <FamousFacesSection /> */}

      {/* Gift A Walk Section */}
      <GiftAWalkSection />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}
