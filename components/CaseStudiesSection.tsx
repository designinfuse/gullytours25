"use client";

import TourItem from "./TourItem";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      location: "BENGALURU",
      title: "Coffee & Cantonment",
      subtitle: "Weekend Walk: Church Street | 3 Hrs",
      price: "From Rs1500",
      image: "/tours/coffee-cantonment.jpg",
      bgColor: "#4F8C7D",
    },
    {
      location: "BENGALURU",
      title: "Coffee & Cantonment",
      subtitle: "Weekend Walk: Church Street | 3 Hrs",
      price: "From Rs1500",
      image: "/tours/coffee-cantonment.jpg",
      bgColor: "#4F8C7D",
    },
    {
      location: "BENGALURU",
      title: "Coffee & Cantonment",
      subtitle: "Weekend Walk: Church Street | 3 Hrs",
      price: "From Rs1500",
      image: "/tours/coffee-cantonment.jpg",
      bgColor: "#4F8C7D",
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto flex max-w-[1368px] flex-col items-center gap-16">
        {/* Title */}
        <h2 className="font-rajdhani text-[64px] font-bold uppercase leading-[1.026em] text-black md:text-[78px]">
          Case Studies
        </h2>

        {/* Tour Cards Grid */}
        <div className="flex w-full flex-wrap items-center justify-center gap-6">
          {caseStudies.map((study, index) => (
            <TourItem key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
