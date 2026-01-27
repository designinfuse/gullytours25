"use client";

import { motion } from "framer-motion";
import TeamMember from "./TeamMember";

export default function TeamSection() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: "Aafreen",
      image: "/team/aafreen.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Aishwarya",
      image: "/team/aishwarya.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Anjali",
      image: "/team/anjali.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Anju",
      image: "/team/anju.png",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Anuradha",
      image: "/team/anuradha.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Dhiren",
      image: "/team/dhiren.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Krittika",
      image: "/team/krittika.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Mradula",
      image: "/team/mradula.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Nazia",
      image: "/team/nazia.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Nikhil",
      image: "/team/nikhil.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Nikita",
      image: "/team/nikita.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Nishita",
      image: "/team/nishita.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Parvathi",
      image: "/team/parvathi.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Poonacha",
      image: "/team/poonacha.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Prathyush",
      image: "/team/prathyush.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Raksha",
      image: "/team/raksha.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Rashmi",
      image: "/team/rashmi.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Seema",
      image: "/team/seema.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Siya",
      image: "/team/siya.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Vinay",
      image: "/team/vinay.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Yamini",
      image: "/team/yamini.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Zeba",
      image: "/team/zeba.jpeg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#EDEDE7] px-4 py-20">
      {/* Content Container */}
      <div className="relative z-10 flex w-full max-w-[1368px] flex-col items-center gap-16">
        {/* Title */}
        <motion.h2
          className="w-full max-w-[777px] text-center font-rajdhani text-6xl font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          THE TRIBE THAT WALKS WITH YOU
        </motion.h2>

        {/* Team Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              image={member.image}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
