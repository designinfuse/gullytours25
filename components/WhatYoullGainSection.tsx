"use client";

import PerforatedCard from "./PerforatedCard";

interface GainCard {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  rotation: number;
}

export default function WhatYoullGainSection() {
  const gainCards: GainCard[] = [
    {
      id: "network",
      text: "Connect with a growing network of explorers, researchers, and cultural practitioners",
      bgColor: "#F7F8DF",
      textColor: "#4F8C7D",
      borderColor: "#4F8C7D",
      rotation: -5,
    },
    {
      id: "design",
      text: "Design and lead unique, research-based city experiences",
      bgColor: "#4F8C7D",
      textColor: "#F7F8DF",
      borderColor: "#F7F8DF",
      rotation: 3,
    },
    {
      id: "stories",
      text: "Share stories with clarity, depth, and heart",
      bgColor: "#B23F27",
      textColor: "#F7F8DF",
      borderColor: "#F7F8DF",
      rotation: 0,
    },
    {
      id: "interpret",
      text: "Read and interpret your city through historical, economic, and social lenses",
      bgColor: "#F5EF86",
      textColor: "#B23F27",
      borderColor: "#B23F27",
      rotation: 5,
    },
  ];

  return (
    <section className="w-full bg-[#247DA6] px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-[1368px]">
        {/* Dashed border container */}
        <div className="border-3 border-dashed border-black/80 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          {/* Title */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-rajdhani text-5xl font-bold uppercase leading-[1em] text-white md:text-6xl lg:text-[80px]">
              What you&apos;ll gain
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-4 lg:gap-6">
            {gainCards.map((card) => (
              <div
                key={card.id}
                className="flex items-center justify-center"
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                }}
              >
                <PerforatedCard
                  bgColor={card.bgColor}
                  edges={{ left: true, right: true }}
                  perforationSize={8}
                  perforationSpacing={24}
                  className="w-full max-w-[482px]"
                >
                  {/* Inner content with double border */}
                  <div className="px-4 py-4 md:px-5 md:py-3">
                    {/* Outer border */}
                    <div
                      className="rounded p-1.5 md:p-2"
                      style={{ border: `1px solid ${card.borderColor}` }}
                    >
                      {/* Inner border */}
                      <div
                        className="flex min-h-[100px] items-center justify-center rounded px-4 py-6 md:min-h-[110px] md:px-6 md:py-8"
                        style={{ border: `1px solid ${card.borderColor}` }}
                      >
                        <p
                          className="text-center font-rajdhani text-lg font-bold uppercase leading-[1.3em] md:text-xl lg:text-[22px]"
                          style={{ color: card.textColor }}
                        >
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </PerforatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
