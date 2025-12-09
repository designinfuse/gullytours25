"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const leftNavLinks = [
    { label: "Tours & Experiences", href: "/tours" },
    { label: "About", href: "/about" },
    { label: "City Explorer", href: "/city-explorer" },
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
    <footer className="relative w-full overflow-hidden bg-[#0B3564] px-4 py-20">
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
        <div className="flex flex-col gap-16">

          {/* Decorative Card */}
          <div className="relative h-[283px] w-full max-w-[589px] overflow-hidden rounded bg-[#DE6D11]">
            {/* Card Image */}
            <div className="absolute left-[33px] top-[21px] h-[246px] w-[259px]">
              <Image
                src="/footer-decorative-card-image-132499.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Card Text */}
            <div className="absolute right-8 top-[67px] w-[218px]">
              <p className="font-dm-sans text-lg leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] lg:text-[23px]">
                One and half
                <br />
                <br />
                The drivers demand to pay 50% above the meter fare because
                your destination is not attractive enough.
              </p>
            </div>
          </div>

          {/* Left Side - Logo and Nav Links */}
          <div className="flex flex-row gap-12 justify-between items-end mt-[320px]">
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
            <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-24">
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
            {/* Right Side - Connect with Us */}
            <div className="flex flex-col gap-8">
              <h3 className="font-dm-sans text-3xl leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] lg:text-[34px]">
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
