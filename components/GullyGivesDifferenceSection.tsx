"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PerforatedCard from "./PerforatedCard";

export default function GullyGivesDifferenceSection() {
    const slideUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="flex flex-col items-center bg-[#DE6D11] px-6 py-20 md:px-12 md:py-28 lg:px-24">
            <div className="mx-auto w-full max-w-[1440px]">
                {/* Header Section */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.h2
                        className="mb-8 max-w-[800px] font-rajdhani text-6xl font-bold uppercase leading-[1.05] text-white md:text-7xl lg:text-[80px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={slideUpVariants}
                    >
                        WALKS THAT MAKE <br className="hidden md:block" /> A DIFFERENCE
                    </motion.h2>
                    <motion.p
                        className="max-w-[1044px] font-rajdhani text-xl font-medium leading-[1.3] text-white md:text-2xl lg:text-[24px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={slideUpVariants}
                    >
                        Every &apos;Gully Gives&apos; walk is crafted to bring joy, curiosity, and
                        connection to communities who deserve it most. From introducing children
                        to their heritage, to helping visually impaired participants explore
                        markets through smell, touch, and sound, these walks create moments of
                        shared discovery and belonging.
                    </motion.p>
                </div>

                {/* Content Section: Image with Overlapping Card */}
                <motion.div
                    className="relative mx-auto w-full max-w-[1240px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    variants={slideUpVariants}
                >
                    {/* Main Image Container with thick border */}
                    <div className="relative aspect-[1240/613] w-full border-[12px] border-[#B23F27] md:border-[18px]">
                        <Image
                            src="/gully-cares-1.jpg"
                            alt="Gully Gives community walk"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Overlapping Perforated Card */}
                    <div className="absolute -bottom-10 right-4 w-[280px] sm:right-10 md:-right-12 md:bottom-10 md:w-[320px] lg:w-[380px]">
                        <PerforatedCard
                            edges={{ top: true, bottom: true, left: true, right: true }}
                            bgColor="#F7F8DF"
                            className="p-8 md:p-10 shadow-xl"
                            perforationSize={5}
                            perforationSpacing={18}
                        >
                            <div className="flex flex-col items-center text-center">
                                <h4 className="mb-4 font-dm-sans text-lg font-bold uppercase leading-tight text-[#262626] md:text-xl lg:text-[22px]">
                                    &ldquo;Death By Dosa&rdquo; With Enable India
                                </h4>
                                <p className="font-dm-sans text-sm font-medium leading-[1.4] text-[#262626] md:text-base lg:text-[18px]">
                                    Visually Impaired Participants Explored A Bustling Food Trail
                                    Through Sensory Storytelling — Tasting, Smelling, And Feeling
                                    Their Way Through The City&apos;s Flavours.
                                </p>
                            </div>
                        </PerforatedCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
