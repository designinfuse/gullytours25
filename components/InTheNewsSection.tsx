"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import PerforatedCard from "./PerforatedCard";

interface NewsCardData {
  title: string;
  link: string;
  date: string;
}

const newsCards: NewsCardData[] = [
  {
    title: "The Ken's 2024 Gifting Guide",
    link: "https://the-ken.com/gifting-guide-2024/",
    date: "2024",
  },
  {
    title: "The Print - Bengaluru's Death by Dosa Walk",
    link: "https://www.youtube.com/watch?v=8t8NxzOe1dU",
    date: "8th May 2024",
  },
  {
    title: "South China Morning Post - Women Only Night Walks",
    link: "https://www.scmp.com/lifestyle/travel-leisure/article/3216301/how-night-walks-women-india-are-allowing-groups-tread-fearlessly-streets-most-would-otherwise-avoid",
    date: "10th April 2023",
  },
  {
    title: "Economic Times - Microhistory Goes Mainstream",
    link: "https://economictimes.indiatimes.com/news/india/microhistory-goes-mainstream-how-instagram-and-heritage-walks-make-the-past-personal/articleshow/123742881.cms?from=mdr",
    date: "September 7th 2025",
  },
  {
    title: "The Hindu - About Whitefield",
    link: "https://www.thehindu.com/news/cities/bangalore/whitefield-between-a-colonial-past-and-a-post-liberalisation-future/article69111651.ece",
    date: "January 20th 2025",
  },
  {
    title: "The Hindu - How walking tours can help you connect better with Bengaluru",
    link: "https://www.thehindu.com/news/cities/bangalore/how-walking-tours-can-help-you-connect-better-with-bengaluru/article68284701.ece",
    date: "Jan 14th 2024",
  },
];

const NewsCard = ({ title, link, date }: NewsCardData) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-[240px] w-full transition-transform duration-300 hover:scale-[1.02]"
    >
      <PerforatedCard
        bgColor="#BFD3A0"
        edges={{ left: true, right: true }}
        perforationSize={6}
        perforationSpacing={18}
        className="h-full w-full"
      >
        <div className="relative flex h-full w-full flex-col">
          {/* Inner Borders */}
          <div className="pointer-events-none absolute inset-4 border-2 border-white/30" />
          <div className="pointer-events-none absolute inset-5 border border-white/20" />

          {/* Content */}
          <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
            <p className="whitespace-pre-line font-rajdhani text-xl font-bold uppercase leading-tight text-black md:text-2xl lg:text-[22px]">
              {title}
            </p>
          </div>

          {/* Date */}
          <div className="absolute bottom-6 right-6">
            <p className="font-rajdhani text-sm font-semibold uppercase text-black/50">
              {date}
            </p>
          </div>
        </div>
      </PerforatedCard>
    </a>
  );
};

export default function InTheNewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 bg-[#F7F8DF] px-6 py-20 lg:gap-20 lg:px-20">
      {/* Title */}
      <motion.h2
        className="w-full text-center font-rajdhani text-5xl font-semibold uppercase leading-tight text-black md:text-7xl lg:text-[84px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        IN THE NEWS
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pr-6 lg:gap-8 lg:pr-8">
          {newsCards.map((card, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-22px)]"
            >
              <NewsCard title={card.title} link={card.link} date={card.date} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and Bottom Layout */}
      <div className="flex w-full items-end justify-end">
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] text-white transition-opacity hover:opacity-80 active:scale-95 shadow-md"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#247DA6] text-white transition-opacity hover:opacity-80 active:scale-95 shadow-md"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
