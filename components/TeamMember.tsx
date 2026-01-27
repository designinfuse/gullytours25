"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  image: string;
  role: string;
  description: string[];
}

export default function TeamMember({
  name,
  image,
  role,
  description,
}: TeamMemberProps) {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative flex min-h-[480px] w-full flex-col items-center bg-[#4F8C7D] px-4 py-8 md:w-[324px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={slideUpVariants}
    >
      {/* Name */}
      <h3 className="mb-6 text-center font-rajdhani text-[21px] font-bold uppercase leading-tight text-white">
        {name}
      </h3>

      {/* Photo Container with Stamp Effect (Side Patterns) */}
      <div className="relative mb-6 flex h-[273px] w-[286px] items-center justify-center px-4">
        {/* Masked Image Area */}
        <div
          className="relative h-full w-full aspect-square overflow-hidden"
          style={{
            maskImage: "url(/team-stamp-mask.svg)",
            maskSize: "100% 100%",
            maskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url(/team-stamp-mask.svg)",
            WebkitMaskSize: "100% 100%",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 286px"
            />
          ) : (
            <div className="h-full w-full bg-[#D9D9D9]/20" />
          )}
        </div>

        {/* Role Badge - Perfect Scalloped Circle */}
        <div className="absolute right-[-12px] top-[48px] z-20 flex h-[82px] w-[82px] flex-shrink-0 items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41 0L44.8258 4.29285L50.4853 2.51472L53.7071 7.29289L59.4853 7.51472L61.7071 12.8787L67.1421 14.8579L67.9706 20.5147L72.8284 24.1716L72.1421 29.8579L76.1421 34.1421L73.8579 39.3137L76 44.1421L72.1421 48.2426L72.8284 53.8284L67.9706 57.1421L67.1421 62.6421L61.7071 64.1421L59.4853 69.1421L53.7071 69.1421L50.4853 73.6421L44.8258 71.6421L41 76L37.1742 71.6421L31.5147 73.6421L28.2929 69.1421L22.5147 69.1421L20.2929 64.1421L14.8579 62.6421L14.0294 57.1421L9.17157 53.8284L9.85786 48.2426L6 44.1421L8.14214 39.3137L5.85786 34.1421L9.85786 29.8579L9.17157 24.1716L14.0294 20.5147L14.8579 14.8579L20.2929 12.8787L22.5147 7.51472L28.2929 7.29289L31.5147 2.51472L37.1742 4.29285L41 0Z"
              fill="#F5EF86"
            />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center px-1">
            <p className="whitespace-pre-line text-center font-rajdhani text-[17px] font-bold uppercase leading-[1.1] text-black">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-6 h-[2px] w-[284px] bg-white opacity-40" />

      {/* Description */}
      <div className="flex flex-col items-center gap-1 overflow-hidden">
        {description.map((line, index) => (
          <p
            key={index}
            className="text-center font-rajdhani text-[18px] font-bold uppercase leading-tight text-white"
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
