import HeroSection from "@/components/homepage/HeroSection";
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

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
