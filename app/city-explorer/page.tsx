import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RunningBand from "@/components/RunningBand";
import CityExplorerIntroSection from "@/components/CityExplorerIntroSection";
import WhatsProgramSection from "@/components/WhatsProgramSection";
import WhatYoullGainSection from "@/components/WhatYoullGainSection";
import WhoItIsForSection from "@/components/WhoItIsForSection";
import RegisterInterestSection from "@/components/RegisterInterestSection";
import FAQSection from "@/components/FAQSection";

const cityExplorerFaqs = [
  {
    question: "Do I need to have a background in history?",
    answer: "No, but an interest in it will certainly help",
  },
  {
    question: "Is the program refundable?",
    answer: "Unfortunately, we don't offer refunds.",
  },
  {
    question: "Can I attend the whole program virtually?",
    answer:
      "Some sessions are more immersive when in person, so you will miss out on learning this virtually",
  },
  {
    question: "Can I transfer my candidature in case I can't continue?",
    answer: "Sorry, we can't do that",
  },
  {
    question: "I didn't get selected in this session. Can I reapply?",
    answer: "You're always welcome to in the future",
  },
  {
    question: "Will I get a certificate for this?",
    answer: "Yes",
  },
];

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
            alt="Urban Explorer"
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

      {/* What You'll Gain Section */}
      <WhatYoullGainSection />

      {/* Who It Is For Section */}
      <WhoItIsForSection />

      {/* Register Interest Section */}
      <RegisterInterestSection />

      {/* FAQ Section */}
      <FAQSection
        faqs={cityExplorerFaqs}
        headerBgColor="#4C9F7C"
        headerTextColor="#F5EF86"
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
