import Image from "next/image";

interface TourInclusionsProps {
    inclusions?: string[];
}

const defaultInclusions = [
    "An expert tour companion",
    "Food on the tour (Set menu curated by us)",
    "A Gully Souvenir",
    "All entry fees & permissions"
];

export default function TourInclusions({ inclusions = defaultInclusions }: TourInclusionsProps) {
    const displayInclusions = inclusions && inclusions.length > 0 ? inclusions : defaultInclusions;

    return (
        <section className="w-full bg-[#247DA6] py-[118px] pb-[140px]">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <h2 className="mb-16 text-center font-rajdhani text-5xl font-bold uppercase text-white md:text-6xl lg:text-[64px] lg:leading-[64px]">
                    Inclusions
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 place-content-center">
                    {displayInclusions.map((item, index) => (
                        <InclusionTicket key={index} text={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function InclusionTicket({ text }: { text: string }) {
    return (
        <div className="flex w-full items-stretch justify-center h-[230px]">
            {/* Left Pattern */}
            <div className="hidden relative h-full w-[18px] flex-shrink-0">
                <Image
                    src="/pattern-left.svg"
                    alt="Decorative pattern left"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Center Content */}
            <div className="relative flex flex-grow flex-col items-center justify-center bg-[#FDF6D8] px-4">
                {/* Background color block that connects the patterns */}
                <div className="absolute inset-0 bg-[#F7F8DF]" />

                {/* Inner Border Container */}
                <div className="relative z-10 flex h-[calc(100%-16px)] w-[calc(100%-16px)] flex-col items-center justify-center rounded-[2px] border-[0.8px] border-[#DE6D11] px-4">
                    {/* Decorative Flower Icon */}
                    <div className="mb-4 text-[#DE6D11]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                            <path d="M9 0C9 0 10.5 5 13.5 6.5C16.5 8 18 9 18 9C18 9 16.5 10 13.5 11.5C10.5 13 9 18 9 18C9 18 7.5 13 4.5 11.5C1.5 10 0 9 0 9C0 9 1.5 8 4.5 6.5C7.5 5 9 0 9 0Z" />
                        </svg>
                    </div>

                    {/* Text */}
                    <p className="text-center font-rajdhani text-xl font-bold uppercase leading-tight text-black md:text-2xl">
                        {text}
                    </p>

                    {/* Inner Double Border Effect (Simulated with another div if needed, or keeping it simple based on screenshot) */}
                    <div className="pointer-events-none absolute inset-[4px] rounded-[1px] border-[0.8px] border-[#DE6D11]" />
                </div>
            </div>

            {/* Right Pattern */}
            <div className="hidden relative h-full w-[18px] flex-shrink-0">
                <Image
                    src="/pattern-right.svg"
                    alt="Decorative pattern right"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
