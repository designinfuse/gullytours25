"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "TOURS & EXPERIENCES", href: "/tours" },
    { label: "ABOUT", href: "/about" },
    { label: "CITY EXPLORER", href: "/city-explorer" },
    { label: "COLLABORATION", href: "/collaboration" },
    { label: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 z-50 -translate-x-1/2 bg-white px-9 shadow-lg transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 w-full rounded-none"
          : "top-8 w-full max-w-[1368px] rounded-lg"
      }`}
    >
      <div className="flex h-[72px] items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/gully-logo.svg"
            alt="Gully Tours"
            width={157}
            height={37}
            priority
          />
        </Link>

        {/* Navigation Items */}
        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-dm-sans text-lg font-bold uppercase transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-[#929292] hover:text-black"
                }`}
                style={{ letterSpacing: "-0.04em" }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button - for future implementation */}
        <button className="lg:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
