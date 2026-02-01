"use client";

import Image from "next/image";
import Link from "next/link";
import FooterCard, { FooterCardExpanded } from "./FooterCard";

// Card data for Bangalore slang phrases
const footerCards = [
  {
    title: "ONE AND HALF",
    description:
      "The drivers demand to pay 50% above the meter fare because your destination is not attractive enough.",
    illustration: "/footer/auto-rickshaw.png",
    borderColor: "#B23F27",
    gridColumn: 2, // Row 1, Column 2
  },
  {
    title: "SAAKATH",
    description:
      "To show top appreciation in the local lingo, can be used for food, people, places.",
    illustration: "/footer/dosa-plate.png",
    borderColor: "#DE6D11",
    gridColumn: 3, // Row 1, Column 3
  },
  {
    title: "BY 2 COFFEE",
    description:
      "The instruction in a Darshini that splits your cup of coffee into 2 cups. Same as what 'cutting chai' means in the north of the Vindhyas.",
    illustration: "/footer/coffee-cups.png",
    borderColor: "#DE6D11",
    gridColumn: 1, // Row 2, Column 1
  },
  {
    title: "MACHA",
    description:
      "When South Indians want to say Bro or Bhai. Not to be confused with Japan and Matcha.",
    illustration: "/footer/fist-bump.png",
    borderColor: "#439060",
    gridColumn: 4, // Row 2, Column 4
  },
];

export default function Footer() {
  const leftNavLinks = [
    { label: "Tours & Experiences", href: "/tours" },
    { label: "About", href: "/about" },
    { label: "Urban Explorer", href: "/city-explorer" },
    { label: "Social Commitment", href: "/social-commitment" },
    { label: "Content Collaboration", href: "/collaboration" },
  ];

  const rightNavLinks = [
    { label: "Weekend Tours", href: "/weekend-tours" },
    { label: "Corporate Experiences", href: "/corporate" },
    { label: "Educational Experiences", href: "/educational" },
    { label: "Custom Walks", href: "/custom-walks" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#0B3564] px-4 py-12 lg:py-20">
      {/* Background Decorative SVG */}
      <div className="pointer-events-none absolute left-0 top-[-468px] h-[1560px] w-full opacity-20">
        <Image
          src="/footer-background-decorative.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Interactive Cards Section with Map Background */}
          <div className="relative w-full rounded-xl">
            {/* Map Background */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <Image
                src="/footer-map-background.svg"
                alt=""
                fill
                className="object-cover opacity-30"
              />
            </div>

            {/* Desktop: Grid layout with cards in specific columns */}
            <div className="relative hidden py-8 lg:block">
              <div className="grid grid-cols-4 gap-4 px-4">
                {/* Row 1: Cards in columns 2 and 3 */}
                <div className="col-start-2 flex justify-center">
                  <FooterCard
                    title={footerCards[0].title}
                    description={footerCards[0].description}
                    illustration={footerCards[0].illustration}
                    borderColor={footerCards[0].borderColor}
                  />
                </div>
                <div className="col-start-3 flex justify-center">
                  <FooterCard
                    title={footerCards[1].title}
                    description={footerCards[1].description}
                    illustration={footerCards[1].illustration}
                    borderColor={footerCards[1].borderColor}
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-4 px-4">
                {/* Row 2: Cards in columns 1 and 4 */}
                <div className="col-start-1 flex justify-center">
                  <FooterCard
                    title={footerCards[2].title}
                    description={footerCards[2].description}
                    illustration={footerCards[2].illustration}
                    borderColor={footerCards[2].borderColor}
                  />
                </div>
                <div className="col-start-4 flex justify-center">
                  <FooterCard
                    title={footerCards[3].title}
                    description={footerCards[3].description}
                    illustration={footerCards[3].illustration}
                    borderColor={footerCards[3].borderColor}
                  />
                </div>
              </div>
            </div>

            {/* Mobile/Tablet: Grid of expanded cards */}
            <div className="relative grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:hidden">
              {footerCards.map((card) => (
                <FooterCardExpanded
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  illustration={card.illustration}
                  borderColor={card.borderColor}
                />
              ))}
            </div>
          </div>

          {/* Footer Links and Info */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Logo and Copyright */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="relative h-[70px] w-[301px]">
                <Image
                  src="/footer-logo.svg"
                  alt="Gully Tours"
                  fill
                  className="object-contain object-left"
                />
              </div>
              {/* Copyright */}
              <p className="font-roboto text-xs font-bold text-[#F7F8DF]">
                Gully Tours | 2025
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 lg:gap-24">
              {/* Left Nav Column */}
              <div className="flex flex-col gap-4">
                {leftNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-roboto text-sm font-medium text-[#F7F8DF] transition-opacity hover:opacity-80 lg:text-[15px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right Nav Column */}
              <div className="flex flex-col gap-4">
                {rightNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-roboto text-sm font-medium text-[#F7F8DF] transition-opacity hover:opacity-80 lg:text-[15px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect with Us */}
            <div className="flex flex-col gap-4 lg:gap-8">
              <h3 className="font-dm-sans text-2xl leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] lg:text-[34px]">
                Connect with Us
              </h3>
              {/* Tagline */}
              <p className="font-roboto text-base font-bold text-[#F7F8DF] lg:text-[17px]">
                Local stories | Real scenes
              </p>

              {/* Social Icons */}
              <div className="relative h-[23px] w-[175px]">
                <Image
                  src="/footer-social-icons.svg"
                  alt="Social Media Links"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
