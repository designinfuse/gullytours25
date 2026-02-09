import CollaborationsHero from "@/components/CollaborationsHero";
import CollaborationsIntroSection from "@/components/CollaborationsIntroSection";
import CollaborationsHowSection from "@/components/CollaborationsHowSection";
import CollaborationsTypesSection from "@/components/CollaborationsTypesSection";
import ContentCollaborationsSection from "@/components/ContentCollaborationsSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import CollaborationsCTASection from "@/components/CollaborationsCTASection";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Collaborations | Gully Tours",
  description: "Gully Gives - Walking the Talk, One Story at a Time. Discover our community collaborations and social impact initiatives.",
};

export default function CollaborationsPage() {
  return (
    <>
      <CollaborationsHero />
      <CollaborationsIntroSection />
      <CollaborationsHowSection />
      <CollaborationsTypesSection />
      <ContentCollaborationsSection />
      <VideoTestimonialsSection />
      <CollaborationsCTASection />

      {/* Additional sections will be added here */}

      <Newsletter />
      <Footer />
    </>
  );
}
