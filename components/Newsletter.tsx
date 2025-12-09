"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
  };

  return (
    <section className="flex w-full items-center justify-center bg-[#3B7BB0] px-4 py-12">
      <div className="flex w-full max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Left Side - Title and Subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-dm-sans text-4xl leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] md:text-5xl lg:text-[56px]">
            Join namma updates
          </h2>
          <p className="font-dm-sans text-lg leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] md:text-xl lg:text-[23px]">
            No spam, only filter-coffee-fueled updates.
          </p>
        </div>

        {/* Right Side - Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[643px] flex-col"
        >
          <div className="flex items-center justify-between border-b border-[#FDF6D8] pb-2">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent font-dm-sans text-lg leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] placeholder:text-[#FDF6D8] focus:outline-none md:text-xl lg:text-[23px]"
              required
            />
            <button
              type="submit"
              className="font-dm-sans text-sm font-semibold uppercase leading-[1.3em] tracking-[-0.04em] text-[#FDF6D8] transition-opacity hover:opacity-80 lg:text-[15px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
