"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface JoinCardProps {
    title: string;
    description: string;
    bgColor: string;
    image: string;
    delay?: number;
}

function JoinCard({ title, description, bgColor, image, delay = 0 }: JoinCardProps) {
    return (
        <motion.div
            className="flex flex-col h-full w-full min-h-[511px] overflow-hidden"
            style={{ backgroundColor: bgColor }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="flex flex-col h-full p-8 md:p-10 relative">
                {/* Title - Fixed height to ensure alignment across cards */}
                <h3 className="font-rajdhani text-[32px] md:text-[35px] font-bold leading-[1.1] text-white uppercase text-center mb-10 h-[70px] flex items-center justify-center">
                    {title}
                </h3>

                {/* Square with Image and Star */}
                <div className="relative w-full aspect-square bg-[#F7F8DF] mb-10">
                    {/* Image Container with overflow hidden */}
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Stamp Icon - Positioned outside the overflow hidden boundary */}
                    <div className="absolute -top-6 -right-6 w-[86px] h-[87px] z-20 transition-transform hover:scale-110 duration-300 drop-shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="86"
                            height="87"
                            viewBox="0 0 86 87"
                            fill="none"
                        >
                            <path
                                d="M40.8753 0.445312C42.0151 -0.148451 43.373 -0.148451 44.5128 0.445312L48.6645 2.60814C49.3817 2.98174 50.1965 3.12542 50.9982 3.01963L55.6393 2.40722C56.9134 2.23909 58.1894 2.70351 59.0573 3.65129L62.219 7.10366C62.7651 7.70002 63.4817 8.11372 64.2712 8.28851L68.8418 9.30037C70.0966 9.57816 71.1368 10.451 71.6283 11.6385L73.4184 15.964C73.7277 16.7112 74.2595 17.345 74.9417 17.7793L78.8906 20.2934C79.9747 20.9836 80.6536 22.1595 80.7093 23.4435L80.9121 28.1204C80.9471 28.9283 81.2301 29.7058 81.7226 30.3472L84.5735 34.0603C85.3562 35.0796 85.592 36.4169 85.2051 37.6424L83.7961 42.1067C83.5527 42.8778 83.5527 43.7052 83.7961 44.4764L85.2051 48.9406C85.592 50.1662 85.3562 51.5034 84.5735 52.5228L81.7226 56.2359C81.2301 56.8773 80.9471 57.6548 80.9121 58.4626L80.7093 63.1396C80.6536 64.4235 79.9747 65.5995 78.8906 66.2897L74.9417 68.8038C74.2595 69.2381 73.7277 69.8719 73.4184 70.6191L71.6283 74.9446C71.1368 76.1321 70.0966 77.0049 68.8418 77.2827L64.2712 78.2945C63.4817 78.4693 62.7651 78.883 62.219 79.4794L59.0573 82.9317C58.1894 83.8795 56.9134 84.3439 55.6393 84.1758L50.9982 83.5634C50.1965 83.4576 49.3817 83.6013 48.6645 83.9749L44.5128 86.1377C43.373 86.7315 42.0151 86.7315 44.5128 86.1377L36.7236 83.9749C36.0064 83.6013 35.1916 83.4576 34.3899 83.5634L29.7488 84.1758C28.4747 84.3439 27.1987 83.8795 26.3307 82.9317L23.1691 79.4794C22.623 78.883 21.9064 78.4693 21.1169 78.2945L16.5463 77.2827C15.2915 77.0049 14.2513 76.132 13.7598 74.9446L11.9696 70.6191C11.6604 69.8719 11.1286 69.2381 10.4464 68.8038L6.4975 66.2897C5.41339 65.5995 4.73446 64.4235 4.67879 63.1396L4.47598 58.4626C4.44094 57.6548 4.15796 56.8773 3.6655 56.2359L0.814585 52.5228C0.031922 51.5034 -0.203867 50.1662 0.182954 48.9406L1.59198 44.4764C1.83537 43.7052 1.83537 42.8778 1.59198 42.1067L0.182954 37.6424C-0.203868 36.4169 0.0319227 35.0796 0.814586 34.0603L3.6655 30.3472C4.15796 29.7058 4.44094 28.9283 4.47598 28.1204L4.67879 23.4435C4.73446 22.1595 5.41339 20.9836 6.4975 20.2934L10.4464 17.7793C11.1286 17.345 11.6604 16.7112 11.9696 15.964L13.7598 11.6385C14.2513 10.451 15.2915 9.57816 16.5462 9.30037L21.1169 8.28851C21.9064 8.11372 22.623 7.70002 23.1691 7.10366L26.3307 3.65129C27.1987 2.70351 28.4747 2.23909 29.7488 2.40722L34.3899 3.01963C35.1916 3.12542 36.0064 2.98174 36.7236 2.60814L40.8753 0.445312Z"
                                fill="#F5EF86"
                            />
                        </svg>
                    </div>
                </div>

                {/* Description */}
                <p className="font-dm-sans font-bold text-base md:text-lg leading-tight text-white uppercase text-center tracking-tight mb-4">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function GullyGivesJoinSection() {
    const cards = [
        {
            title: "SPONSOR A WALK",
            description: "FUND A HERITAGE OR CULTURAL WALK FOR AN NGO PARTNER OR COMMUNITY OF YOUR CHOICE.",
            bgColor: "#4F8C7D",
            image: "/gully-cares-1.jpg",
        },
        {
            title: "VOLUNTEER WITH US",
            description: "JOIN THE WALK AND EXPERIENCE THE CITY THROUGH THE EYES OF PARTICIPANTS — FULL OF WONDER AND CURIOSITY.",
            bgColor: "#B23F27",
            image: "/step-into-stories-1.webp",
        },
        {
            title: "SUPPORT SOCIAL CAMPAIGNS",
            description: "HELP US MAKE BANGALORE CLEANER AND KINDER — ONE STREET AT A TIME.",
            bgColor: "#247DA6",
            image: "/gully-gives-3.jpeg",
        },
    ];

    return (
        <section className="w-full bg-[#EDEDE7] pt-[140px] pb-[150px] px-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-[1240px]">
                {/* Title */}
                <motion.h2
                    className="font-rajdhani text-5xl md:text-7xl lg:text-[80px] font-bold uppercase text-[#262626] text-center leading-[1.05] mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    HOW YOU CAN JOIN IN
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {cards.map((card, index) => (
                        <JoinCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            bgColor={card.bgColor}
                            image={card.image}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="relative group p-1 transition-transform hover:scale-105">
                        {/* Double Border Look From Figma */}
                        <div className="border border-[#262626] rounded-[12px] p-1.5">
                            <button className="border-2 border-[#262626] rounded-[8px] px-8 py-3 bg-transparent">
                                <span className="font-rajdhani text-2xl md:text-3xl font-semibold uppercase text-[#262626]">
                                    Get involved
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
