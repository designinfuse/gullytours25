import Image from "next/image";

export default function CollaborationsIntroSection() {
  return (
    <section className="relative w-full bg-[#247DA6] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Image Boxes - Desktop positioned absolutely */}
      {/* Top Right Box - hidden on mobile, shown on lg */}
      <div className="absolute right-[6%] top-[15%] hidden lg:block">
        <div className="relative h-[180px] w-[180px] border-[6px] border-[#F5EF86] xl:h-[200px] xl:w-[200px] xl:border-8">
          <Image
            src="/curated-walks-1.jpg"
            alt="Street stories"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Left Box - hidden on mobile, shown on lg */}
      <div className="absolute bottom-[10%] left-[6%] hidden lg:block">
        <div className="relative h-[180px] w-[180px] border-[6px] border-[#F5EF86] xl:h-[200px] xl:w-[200px] xl:border-8">
          <Image
            src="/curated-walks-2.jpg"
            alt="City narratives"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center text-white">
        {/* Title */}
        <h2 className="font-rajdhani text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Stories that walk the streets
        </h2>

        {/* Description */}
        <p className="max-w-2xl font-rajdhani text-lg font-medium leading-relaxed md:text-xl lg:text-2xl lg:leading-[1.4]">
          We love collaborating with creators, brands, and organizations who want
          to take storytelling beyond the studio. Together, we turn city corners,
          cafes, and conversations into living, breathing narratives.
        </p>
      </div>

      {/* Mobile Image Boxes - shown only on smaller screens */}
      <div className="mt-12 flex justify-center gap-4 px-4 lg:hidden">
        <div className="relative h-[140px] w-[140px] border-4 border-[#F5EF86] sm:h-[160px] sm:w-[160px] sm:border-[6px]">
          <Image
            src="/curated-walks-1.jpg"
            alt="Street stories"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[140px] w-[140px] border-4 border-[#F5EF86] sm:h-[160px] sm:w-[160px] sm:border-[6px]">
          <Image
            src="/curated-walks-2.jpg"
            alt="City narratives"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
