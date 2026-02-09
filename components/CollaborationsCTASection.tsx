import Link from "next/link";
import PerforatedCard from "@/components/PerforatedCard";

export default function CollaborationsCTASection() {
  return (
    <section className="w-full bg-[#4F8C7D] px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <PerforatedCard
          bgColor="#F7F8DF"
          edges={{ top: true, bottom: true }}
          perforationSize={8}
          perforationSpacing={24}
          className="w-full px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-16 lg:py-20"
        >
          {/* Double border */}
          <div className="border border-[#DE6D11] border-2 p-1.5 sm:p-2">
            <div className="border border-[#DE6D11] border-2 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
              <div className="flex flex-col items-center gap-8 text-center md:gap-10">
              {/* Title */}
              <h2 className="font-rajdhani text-2xl font-bold uppercase leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Interested in
                <br />
                Collaborating with us?
              </h2>

              {/* Description */}
              <p className="max-w-2xl font-rajdhani text-base font-semibold leading-relaxed text-black sm:text-lg md:text-xl lg:text-2xl lg:leading-[1.4]">
                Together, We Make the City Belong to Everyone. Our walks offer
                stories, flavours, and hidden corners that bring the city alive
                in unforgettable ways.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group rounded-xl border-2 border-[#247DA6] px-2 py-1.5 transition-colors hover:bg-[#247DA6]"
              >
                <span className="block rounded-lg border-2 border-[#247DA6] px-6 py-2 font-rajdhani text-lg font-semibold uppercase text-[#247DA6] transition-colors group-hover:border-white group-hover:text-white sm:px-8 sm:py-3 sm:text-xl md:text-2xl">
                  Get in Touch
                </span>
              </Link>
              </div>
            </div>
          </div>
        </PerforatedCard>
      </div>
    </section>
  );
}
