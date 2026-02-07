"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GullyGivesImpactSection() {
    const slideUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#DE6D11] px-6 py-20 md:px-12 md:py-28 lg:px-24 min-h-[700px] flex items-center">
            {/* Decorative Squares - Absolute Positioning as per Figma for large screens */}
            {/* Top Square */}
            <div className="absolute right-[5%] top-[10%] hidden h-[180px] w-[180px] border-8 border-[#F5EF86] lg:block xl:right-[15%] xl:h-[200px] xl:w-[200px] overflow-hidden">
                <Image
                    src="/gully-cares-1.jpg"
                    alt="Impact Story 1"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Bottom Square */}
            <div className="absolute right-[2%] top-[30%] hidden h-[180px] w-[180px] border-8 border-[#F5EF86] lg:block xl:right-[8%] xl:top-[35%] xl:h-[200px] xl:w-[200px] overflow-hidden">
                <Image
                    src="/gully-cares-2.jpg"
                    alt="Impact Story 2"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="mx-auto w-full max-w-[1440px] relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Title */}
                    <motion.h2
                        className="mb-10 font-rajdhani text-5xl font-bold uppercase leading-[1.05] text-white md:text-7xl lg:text-[80px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={slideUpVariants}
                    >
                        We believe in <br className="hidden md:block" /> giving back
                    </motion.h2>

                    {/* Description */}
                    <motion.div
                        className="max-w-[760px] space-y-6 font-rajdhani text-lg font-medium leading-relaxed text-white md:text-2xl lg:text-[24px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={slideUpVariants}
                    >
                        <p>
                            We open up the city to those who rarely get to experience its magic. Through curated free city walks for children, people with disabilities, and young learners, we offer new ways to see, hear, and feel their city.
                        </p>
                        <p>
                            You can sponsor a walk for one of our NGO partners or an organization close to your heart — we’ll handle everything from curation to logistics, ensuring every participant discovers the city through a fresh, inclusive lens.
                        </p>
                    </motion.div>

                    {/* Mobile Decorative Images (instead of absolute ones) */}
                    <div className="mt-12 flex gap-4 lg:hidden">
                        <div className="h-[120px] w-[120px] border-4 border-[#F5EF86] overflow-hidden">
                            <Image
                                src="/gully-cares-1.jpg"
                                alt="Impact Story 1"
                                width={120}
                                height={120}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="h-[120px] w-[120px] border-4 border-[#F5EF86] overflow-hidden">
                            <Image
                                src="/gully-cares-2.jpg"
                                alt="Impact Story 2"
                                width={120}
                                height={120}
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
