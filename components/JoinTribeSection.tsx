"use client";

import { motion } from "framer-motion";

const imgFrame805 = "http://localhost:3845/assets/2d6c129a20697f5323a13f5628edcac7c8630498.svg";

export default function JoinTribeSection() {
    const slideUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative flex w-full items-center justify-center bg-[#4F8C7D] px-6 py-24 md:px-12 lg:px-20 lg:py-32 overflow-hidden">
            <div className="relative w-full max-w-[1224px]">
                {/* Ticket Background with Ticket Stamp Edges */}
                <div className="relative aspect-[1224/452] w-full min-h-[450px] overflow-hidden rounded-lg md:min-h-0">
                    <img
                        src={imgFrame805}
                        alt=""
                        className="absolute inset-0 h-full w-full object-fill"
                    />

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-10 text-center md:gap-12">
                        <motion.div
                            className="flex w-full flex-col items-center gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            variants={slideUpVariants}
                        >
                            <h2 className="font-rajdhani text-[40px] font-bold uppercase leading-[0.9] text-black md:text-7xl lg:text-[80px]">
                                JOIN OUR TRIBE
                            </h2>
                            <p className="max-w-[851px] font-rajdhani text-lg font-semibold leading-tight text-black/80 md:text-2xl lg:text-[26px] lg:leading-[32px]">
                                Join a tribe of storytellers, explorers, and curious city-lovers who turn ordinary streets into unforgettable stories.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            className="flex justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={slideUpVariants}
                        >
                            <button
                                className="group relative h-[64px] w-[239px] overflow-hidden rounded-xl border-2 border-[#247da6] transition-all hover:bg-[#247da6]/10 active:scale-95"
                            >
                                {/* Inner Border Frame */}
                                <div className="absolute left-[5px] top-1/2 h-[50px] w-[225px] -translate-y-1/2 rounded-lg border-2 border-[#247da6]" />
                                <span className="relative z-10 font-rajdhani text-[24px] md:text-[28px] font-semibold uppercase text-[#247da6]">
                                    Get in touch
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
