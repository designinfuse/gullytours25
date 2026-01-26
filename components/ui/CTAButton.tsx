"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  borderColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  className?: string;
  variant?: "default" | "large";
}

export default function CTAButton({
  href,
  onClick,
  children,
  borderColor = "#F5EF86",
  textColor = "#F5EF86",
  hoverBgColor = "#F5EF86",
  hoverTextColor = "#000000",
  className = "",
  variant = "default",
}: CTAButtonProps) {
  // Size variants
  const sizeClasses = {
    default: {
      outer: "h-16 rounded-xl p-[4px]", // outer border container
      inner: "h-full rounded-lg px-6 py-3", // inner border container
      text: "text-2xl md:text-3xl",
    },
    large: {
      outer: "h-20 rounded-[14px] p-[4px]",
      inner: "h-full rounded-[10px] px-8 py-4",
      text: "text-3xl md:text-4xl",
    },
  };

  const sizes = sizeClasses[variant];

  // Common inner content styles
  const innerClasses = `
    relative flex items-center justify-center
    ${sizes.inner}
    border-2 border-solid
    font-rajdhani font-semibold uppercase
    ${sizes.text}
    text-center leading-none
    transition-all duration-300
  `;

  // Common outer container styles
  const outerClasses = `
    group inline-block
    ${sizes.outer}
    border-2 border-solid
    transition-all duration-300
    ${className}
  `;

  // Render as Link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={outerClasses}
        style={{ borderColor }}
      >
        <div
          className={`${innerClasses} group-hover:text-black`}
          style={{
            borderColor,
            color: textColor,
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = hoverBgColor;
            e.currentTarget.style.color = hoverTextColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = textColor;
          }}
        >
          {children}
        </div>
      </Link>
    );
  }

  // Render as button if onClick is provided
  return (
    <button
      onClick={onClick}
      className={outerClasses}
      style={{ borderColor }}
    >
      <div
        className={`${innerClasses} group-hover:text-black`}
        style={{
          borderColor,
          color: textColor,
          backgroundColor: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBgColor;
          e.currentTarget.style.color = hoverTextColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = textColor;
        }}
      >
        {children}
      </div>
    </button>
  );
}
