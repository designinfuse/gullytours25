import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RunningBand from "@/components/RunningBand";
import CorporateClientsCarousel from "@/components/CorporateClientsCarousel";
import CorporateBenefitsSection from "@/components/CorporateBenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ConferencesSection from "@/components/ConferencesSection";
import CorporateSection from "@/components/CorporateSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";

export default function CorporateWalksPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/corporate-hero-plansee.png"
            alt="Corporate Walks and Experiences"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(45, 45, 45, 0.47) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Hero Text Container */}
        <div className="relative flex h-full w-full items-start justify-center px-4 mt-[120px]">
          <div className="flex w-full max-w-[1030px] items-center justify-center">
            <h1
              className="text-center font-rajdhani text-6xl font-bold uppercase leading-none text-[#F5EF86] md:text-7xl lg:text-[84px] my-12"
              style={{
                textShadow: "10px 10px 5px rgba(57, 54, 50, 0.23)",
              }}
            >
              Mark milestones, reunite
              <br />
              with friends, or just show
              <br />
              off your city
            </h1>
          </div>
        </div>

        {/* Running Band at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <RunningBand items={["ಬೆಂಗಳೂರು", "Bangalore", "ಮೈಸೂರು", "Mysore"]} />
        </div>
      </section>

      {/* Corporate Clients Carousel */}
      <CorporateClientsCarousel />

      {/* Corporate Benefits Section */}
      <CorporateBenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Conferences Section */}
      {/* <ConferencesSection /> */}
      <CorporateSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
