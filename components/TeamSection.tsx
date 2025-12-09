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
      name: "Vinay Parameswarappa",
      image: "/team/vinay-parameswarappa.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "SHRUTHI PREETHAM",
      image: "/team/shruthi-preetham.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Sneha Merlin MR",
      image: "/team/sneha-merlin-mr.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Gladys D'souza",
      image: "/team/gladys-dsouza.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "AFREEN FATIMA",
      image: "/team/afreen-fatima.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "AISHWARYA A KRIT",
      image: "/team/aishwarya-a-krit.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Ananya Vats",
      image: "/team/ananya-vats.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Anju Marina Lobo",
      image: "/team/anju-marina-lobo.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Anjali Melina Lobo",
      image: "/team/anjali-melina-lobo.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Arathi Varghese",
      image: "/team/arathi-varghese.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Bhavana JAIN",
      image: "/team/bhavana-jain.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Dhiren Kanted",
      image: "/team/dhiren-kanted.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Ipsita Herlekar",
      image: "/team/ipsita-herlekar.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Mradula Hegde",
      image: "/team/mradula-hegde.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "NEVIN SABU",
      image: "/team/nevin-sabu.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Nishitha Krishnaswamy",
      image: "/team/nishitha-krishnaswamy.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Prathyush Mandar",
      image: "/team/prathyush-mandar.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Preethika Sabu",
      image: "/team/preethika-sabu.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "RAJI SUNDERKISHAN",
      image: "/team/raji-sunderkishan.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "Raksha Shenoy",
      image: "/team/raksha-shenoy.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "RONITH SINGH",
      image: "/team/ronith-singh.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "SEEMA PAI",
      image: "/team/seema-pai.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "TANUSHA MURTHY",
      image: "/team/tanusha-murthy.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "VENKAT PRASAD",
      image: "/team/venkat-prasad.jpg",
      role: "TOUR\nLEAD",
      description: ["COPY WRITER", "POP CULTURE BUFF", "CHAI LOVER"],
    },
    {
      name: "YAMINI PRAKASH",
      image: "/team/yamini-prakash.jpg",
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
