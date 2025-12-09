import Image from "next/image";
import Navbar from "@/components/Navbar";
import RunningBand from "@/components/RunningBand";
import OfferingsSection from "@/components/OfferingsSection";
import CuratedWalksSection from "@/components/CuratedWalksSection";
import CorporateSection from "@/components/CorporateSection";
import CityExplorerSection from "@/components/CityExplorerSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import GullyGivesSection from "@/components/GullyGivesSection";
import InTheNewsSection from "@/components/InTheNewsSection";
import KnowYourOoruSection from "@/components/KnowYourOoruSection";
import GiftAWalkSection from "@/components/GiftAWalkSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background-1480a4.png"
            alt="Malleshwaram"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Content */}
        <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-32">
          {/* Hero Title */}
          <h1
            className="mb-16 max-w-5xl text-center font-rajdhani text-6xl font-bold uppercase leading-tight tracking-tight text-[#F5EF86] md:text-7xl lg:text-8xl xl:text-[112px]"
            style={{
              textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
            }}
          >
            YOUR BEST HOST TO THE OORU&apos;s SOUL
          </h1>

          {/* CTA Button */}
          <Link href="/tours" className="rounded-lg border-2 border-[#F5EF86] outline-2 outline-[#F5EF86] outline-offset-4 px-4 py-2 font-rajdhani text-3xl font-semibold uppercase text-[#F5EF86] transition-all hover:bg-[#F5EF86] hover:text-black">
            EXPLORE TOURS & EXPERIENES
          </Link>
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

      {/* Offerings Section */}
      <OfferingsSection />

      {/* Curated Walks Section */}
      <CuratedWalksSection />

      {/* Corporate Section */}
      <CorporateSection />

      {/* City Explorer Section */}
      <CityExplorerSection />

      {/* Collaborations Section */}
      <CollaborationsSection />

      {/* Gully Gives Section */}
      <GullyGivesSection />

      {/* In The News Section */}
      <InTheNewsSection />

      {/* Know Your Ooru Section */}
      <KnowYourOoruSection />

      {/* Gift A Walk Section */}
      <GiftAWalkSection />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}
