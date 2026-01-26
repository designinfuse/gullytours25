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
    <section className="flex w-full flex-col items-center justify-center gap-16 px-4 py-[125px] bg-[#EDEDE7]">
      <div className="w-full max-w-[1368px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-2">
          <h2 className="font-rajdhani text-6xl font-bold uppercase leading-tight text-[#262626] md:text-7xl lg:text-[84px]">
            OUR OFFERINGS
          </h2>
          <p className="text-center font-rajdhani text-2xl font-semibold leading-tight text-[#262626] md:text-[24px]">
            Explorers come in many kinds, and we walk with them all
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <Link
              key={index}
              href={offering.href}
              className="group relative flex h-[550px] flex-col overflow-hidden transition-transform hover:scale-105"
              style={{ backgroundColor: offering.bgColor }}
            >
              {/* Title */}
              <div className="flex shrink-0 items-center justify-center px-8 pt-8 pb-4 text-center">
                <h3 className="whitespace-pre-line font-rajdhani text-[35px] font-bold uppercase leading-[32px] text-white">
                  {offering.title}
                </h3>
              </div>

              {/* Middle section with image - grows to fill space */}
              <div className="relative flex flex-1 items-center justify-center px-5">
                {/* Masked Background Image */}
                <div
                  className="relative h-full w-full max-h-[342px] max-w-[254px]"
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
              </div>

              {/* Subtitle */}
              <div className="flex shrink-0 items-center justify-center px-8 pb-11 pt-4 text-center">
                <p className="whitespace-pre-line font-rajdhani text-[20px] font-semibold leading-[24px] text-white">
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
