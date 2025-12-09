import Image from "next/image";
import Link from "next/link";

interface OfferingCard {
  title: string;
  subtitle: string;
  bgColor: string;
  image: string;
  href: string;
}

export default function OfferingsSection() {
  const offerings: OfferingCard[] = [
    {
      title: "WEEKEND\nWALKS",
      subtitle: "BANGALORE - MYSORE",
      bgColor: "#4F8C7D",
      image: "/card-weekend-walks.png",
      href: "/tours",
    },
    {
      title: "CORPORATE\nEXPERIENCES",
      subtitle: "ONBOARDING TEAM BONDING\nHOSTING DELEGATES",
      bgColor: "#DE6D11",
      image: "/card-corporate.png",
      href: "/tours/corporate",
    },
    {
      title: "EDUCATIONAL\nEXPERIENCES",
      subtitle: "EDU WALK LEARNING WORKSHOPS RESIDENCIES",
      bgColor: "#247DA6",
      image: "/card-educational.png",
      href: "/tours/educational",
    },
    {
      title: "CUSTOM\nWALKS",
      subtitle: "CELEBRATIONS HOMETOWN HOST REUNIONS",
      bgColor: "#B23F27",
      image: "/card-custom-walks-3a3ba0.png",
      href: "/tours/custom",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 px-4 py-20 bg-[#EDEDE7]">
      <div className="w-full max-w-[1368px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <h2 className="font-rajdhani text-6xl font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]">
            OUR OFFERINGS
          </h2>
          <p className="text-center font-rajdhani text-2xl font-semibold leading-none text-[#262626] md:text-3xl lg:text-[32px]">
            Explorers come in many kinds, and we walk with them all
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <Link
              key={index}
              href={offering.href}
              className="group relative h-[600px] w-full overflow-hidden rounded-lg transition-transform hover:scale-105"
              style={{ backgroundColor: offering.bgColor }}
            >
              {/* Title */}
              <div className="absolute left-0 right-0 top-8 z-10 px-8 text-center">
                <h3 className="whitespace-pre-line font-rajdhani text-[40px] font-bold uppercase leading-[0.8em] text-white">
                  {offering.title}
                </h3>
              </div>

              {/* Masked Background Image */}
              <div
                className="absolute left-5 top-[133px] h-[373px] w-[280px]"
                style={{
                  maskImage: "url(/pattern-left.svg), url(/pattern-right.svg)",
                  maskSize: "150px 373px, 150px 373px",
                  maskPosition: "left center, right center",
                  maskRepeat: "no-repeat, no-repeat",
                  WebkitMaskImage:
                    "url(/pattern-left.svg), url(/pattern-right.svg)",
                  WebkitMaskSize: "150px 373px, 150px 373px",
                  WebkitMaskPosition: "left center, right center",
                  WebkitMaskRepeat: "no-repeat, no-repeat",
                }}
              >
                <Image
                  src={offering.image}
                  alt={offering.title.replace("\n", " ")}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Subtitle */}
              <div className="absolute bottom-11 left-0 right-0 z-10 px-8 text-center">
                <p className="whitespace-pre-line font-rajdhani text-xl font-semibold leading-[1.4em] text-white">
                  {offering.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
