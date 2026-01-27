import Image from "next/image";

interface TourHighlightsProps {
    highlights?: string[];
}

// Default highlights if none provided
const defaultHighlights = [
    "Learn about the rich literary history of our city",
    "Explore some iconic bookstores of Bangalore",
    "Coffee at Koshys, the Colonial era cafe"
];

export default function TourHighlights({ highlights = defaultHighlights }: TourHighlightsProps) {
    const displayHighlights = highlights && highlights.length > 0 ? highlights : defaultHighlights;

    return (
        <section className="relative w-full bg-[#F7F8DF] px-6 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center gap-8 md:mb-16">
                    <div className="flex flex-col items-center gap-8">
                        {/* Title */}
                        <h2 className="font-rajdhani text-5xl font-bold uppercase text-black md:text-6xl lg:text-[64px] lg:leading-[64px]">
                            Highlights
                        </h2>

                        {/* Decorative Star Icon */}
                        <div className="relative h-[18px] w-[21px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="#247DA6" className="h-full w-full">
                                <path d="M13.6801 6.61365C13.6801 6.61365 14.6048 3.12346 10.6748 0C6.74731 3.12346 7.66948 6.61365 7.66948 6.61365C3.74201 3.67481 0 6.98038 0 6.98038C0 6.98038 3.92746 6.06231 5.05032 9.18577C6.17318 12.3092 9.91265 13.594 9.91265 13.594L9.872 17.0393V17.0992C9.86946 17.5083 10.2073 17.8401 10.624 17.8401H10.6392C11.0533 17.8401 11.3886 17.5108 11.3912 17.1042V17.0917L11.4318 13.5915C11.4318 13.5915 15.1738 12.3067 16.2941 9.18327C17.417 6.05981 21.3445 6.97789 21.3445 6.97789C21.3445 6.97789 17.6075 3.67481 13.6801 6.61365Z" fill="#09704F" />
                            </svg>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-center font-rajdhani text-xl font-semibold text-[#262626] md:text-2xl lg:text-[26px] lg:leading-[32px]">
                        What makes this tour special
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {displayHighlights.slice(0, 6).map((highlight, index) => (
                        <HighlightCard key={index} text={highlight} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface HighlightCardProps {
    text: string;
}

function HighlightCard({ text }: HighlightCardProps) {
    return (
        <div className="group relative flex min-h-[280px] flex-col items-center justify-center bg-[#5A8A8A] px-8 py-12 transition-transform hover:scale-105 md:min-h-[320px]">
            {/* Top Diamond Pattern */}
            <div className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-2">
                <DiamondIcon />
            </div>

            {/* Highlight Text */}
            <p className="text-center font-rajdhani text-2xl font-semibold leading-[1.44] text-[#FDF6D8] md:text-3xl lg:text-[24px] lg:leading-8">
                {text}
            </p>

            {/* Bottom Diamond Pattern */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                <DiamondIcon />
            </div>
        </div>
    );
}

function DiamondIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none" className="h-[15px] w-[80px]">
            <path d="M13.3223 14.8692L0 7.44437L26.6455 7.44437L13.3223 14.8692ZM26.6797 7.42484L0.0341797 7.42484L13.3574 3.05176e-05L26.6797 7.42484Z" fill="#FDF6D8" />
            <path d="M40.0225 14.8692L26.6992 7.44437L53.3457 7.44437L40.0225 14.8692ZM53.3799 7.42484L26.7344 7.42484L40.0566 3.05176e-05L53.3799 7.42484Z" fill="#FDF6D8" />
            <path d="M66.6426 14.8692L53.3203 7.44437L79.9658 7.44437L66.6426 14.8692ZM80 7.42484L53.3545 7.42484L66.6777 3.05176e-05L80 7.42484Z" fill="#FDF6D8" />
        </svg>
    );
}
