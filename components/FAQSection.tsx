"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What makes a Gully Tour different from other city tours?",
      answer:
        "Gully Tours focuses on the hidden stories, local culture, and authentic experiences that most city tours miss. We take you through the gullies (narrow lanes) to discover the heart and soul of the city.",
    },
    {
      question: "How long does a typical tour last, and how much walking is involved?",
      answer:
        "Most of our tours last between 2-4 hours and involve moderate walking. We keep a comfortable pace with regular stops for stories, food, and photos.",
    },
    {
      question: "Do I need to book in advance, or can I just show up?",
      answer:
        "We recommend booking in advance to secure your spot, especially for weekend tours. Walk-ins are welcome subject to availability.",
    },
    {
      question:
        "Are the tours suitable for kids, seniors, or people with accessibility needs?",
      answer:
        "Yes! Most of our tours are family-friendly and can be adapted for different age groups and mobility levels. Please let us know your specific needs when booking.",
    },
    {
      question: "What should I bring along for a tour (clothes, shoes, water, etc.)?",
      answer:
        "We recommend comfortable walking shoes, weather-appropriate clothing, a water bottle, and a curious mind! Sunscreen and a hat are also recommended for daytime tours.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Teal Header Section */}
      <div className="w-full bg-[#4F8C7D] px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-[714px] text-center">
          <h2 className="mb-5 font-rajdhani text-[64px] font-bold uppercase leading-[1em] text-white md:text-[84px]">
            FAQ&apos;s
          </h2>
          <p className="font-rajdhani text-[28px] font-semibold leading-[1em] text-white md:text-[32px]">
            Here is a little more about how we operate.
            <br />
            Got a more specific question? Feel free to get in touch.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="mx-auto max-w-[1436px] px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-[1044px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black">
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-all hover:opacity-70"
              >
                <span className="font-dm-sans text-[20px] font-normal leading-[1.302em] tracking-[-0.04em] text-black md:text-[24px]">
                  {faq.question}
                </span>

                {/* Plus/Minus Icon */}
                <div className="relative ml-4 h-[41px] w-[41px] flex-shrink-0">
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    {/* Vertical line - rotates when open */}
                    <line
                      x1="20.5"
                      y1="8.54"
                      x2="20.5"
                      y2="32.46"
                      stroke="black"
                      strokeWidth="3.4167"
                      className={`origin-center transition-transform duration-300 ${
                        openIndex === index ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    />
                    {/* Horizontal line - always visible */}
                    <line
                      x1="8.54"
                      y1="20.5"
                      x2="32.46"
                      y2="20.5"
                      stroke="black"
                      strokeWidth="3.4167"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="font-dm-sans text-[18px] font-normal leading-[1.5em] text-black md:text-[20px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
