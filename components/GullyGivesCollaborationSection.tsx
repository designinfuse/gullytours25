"use client";

import { motion } from "framer-motion";
import PerforatedCard from "./PerforatedCard";
import Link from "next/link";

export default function GullyGivesCollaborationSection() {
    const slideUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-[#4F8C7D] px-6 py-20 md:px-12 md:py-32 lg:px-24 flex justify-center">
            <motion.div
                className="w-full max-w-[1224px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={slideUpVariants}
            >
                <PerforatedCard
                    edges={{ top: true, bottom: true }}
                    bgColor="#F7F8DF"
                    className="relative min-h-[500px] w-full flex flex-col items-center justify-center px-8 py-16 md:px-20 md:py-24"
                    perforationSize={8}
                    perforationSpacing={24}
                >
                    {/* Inner Decorative Border */}
                    <div className="absolute inset-6 md:inset-10 border border-[#DE6D11] pointer-events-none opacity-50" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center max-w-[903px]">
                        <h2 className="font-rajdhani text-5xl md:text-7xl lg:text-[80px] font-bold uppercase text-black leading-[1.05] tracking-tight mb-8">
                            COLLABORATION <br className="hidden md:block" /> WITH A CAUSE
                        </h2>

                        <p className="font-rajdhani text-xl md:text-2xl font-semibold text-black leading-relaxed mb-12 max-w-[667px]">
                            Together, We Make the City Belong to Everyone. Our walks offer
                            stories, flavours, and hidden corners that bring the city alive in
                            unforgettable ways. Your participation helps us open new doors —
                            for learning, inclusion, and belonging.
                        </p>

                        {/* CTA Button */}
                        <Link href="/contact" className="relative group">
                            <div className="border border-[#247DA6] rounded-xl p-1 transition-transform group-hover:scale-105">
                                <div className="border-2 border-[#247DA6] rounded-lg px-8 py-3 flex items-center justify-center">
                                    <span className="font-rajdhani text-2xl font-bold text-[#247DA6] uppercase">
                                        Get in touch
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </PerforatedCard>
            </motion.div>
        </section>
    );
}
