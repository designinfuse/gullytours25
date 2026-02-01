"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyContent from "@/components/CaseStudyContent";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#EDEDE7]">
        <Navbar />
        <h1 className="font-rajdhani text-3xl font-bold text-[#262626]">
          Case Study Not Found
        </h1>
        <p className="font-dm-sans text-lg text-gray-600">
          The case study you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/tours/corporate"
          className="rounded-lg bg-[#247DA6] px-6 py-3 font-rajdhani font-bold text-white transition-colors hover:bg-[#1A5E7D]"
        >
          Back to Corporate Tours
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDEDE7]">
      <Navbar />

      {/* Hero Section */}
      <CaseStudyHero caseStudy={caseStudy} />

      {/* Case Study Content */}
      <CaseStudyContent caseStudy={caseStudy} />

      {/* Related Case Studies */}
      <RelatedCaseStudies currentCaseStudy={caseStudy} />

      <Newsletter />
      <Footer />
    </div>
  );
}
