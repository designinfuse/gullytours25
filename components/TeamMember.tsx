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
      className="relative h-[480px] w-[324px] bg-[#4F8C7D]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={slideUpVariants}
    >
      {/* Name */}
      <div className="absolute left-[33px] top-5 w-[258px]">
        <h3 className="text-center font-rajdhani text-2xl font-bold uppercase leading-[1.3em] text-white">
          {name}
        </h3>
      </div>

      {/* Photo */}
      <div className="absolute left-[19px] top-[62px] h-[273px] w-[286px] overflow-hidden bg-[#D9D9D9]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Role Badge */}
      <div className="absolute right-[13px] top-[114px] flex h-[71px] w-[71px] items-center justify-center rounded bg-[#F5EF86]">
        {/* Star shape background */}
        <svg
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="#F5EF86"
          className="absolute"
        >
          <path d="M35.5 0L44.5 26.5L71 35.5L44.5 44.5L35.5 71L26.5 44.5L0 35.5L26.5 26.5L35.5 0Z" />
        </svg>
        {/* Role Text */}
        <p className="relative z-10 whitespace-pre-line text-center font-rajdhani text-xl font-bold uppercase leading-none text-black">
          {role}
        </p>
      </div>

      {/* Divider */}
      <div className="absolute left-[17px] top-[363px] h-0.5 w-[284px] bg-white" />

      {/* Description */}
      <div className="absolute left-[85px] top-[383px] w-[154px]">
        <p className="text-center font-rajdhani text-xl font-semibold leading-[1.28em] text-white">
          {description.map((line, index) => (
            <span key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}
