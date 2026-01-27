interface TourItineraryProps {
    itinerary?: string;
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
    if (!itinerary) return null;

    // Split the itinerary by line breaks and filter out empty lines
    const paragraphs = itinerary
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    return (
        <section className="relative w-full bg-[#EDEDE7] px-6 py-[115px] pb-[140px]">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-9 flex flex-col items-center gap-9">
                    {/* Title */}
                    <h2 className="font-rajdhani text-5xl font-bold uppercase text-black md:text-6xl lg:text-[64px] lg:leading-[64px]">
                        Itinerary
                    </h2>

                    {/* Decorative Star Icon */}
                    <div className="relative h-[18px] w-[21px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="#247DA6" className="h-full w-full">
                            <path d="M13.6801 6.61365C13.6801 6.61365 14.6048 3.12346 10.6748 0C6.74731 3.12346 7.66948 6.61365 7.66948 6.61365C3.74201 3.67481 0 6.98038 0 6.98038C0 6.98038 3.92746 6.06231 5.05032 9.18577C6.17318 12.3092 9.91265 13.594 9.91265 13.594L9.872 17.0393V17.0992C9.86946 17.5083 10.2073 17.8401 10.624 17.8401H10.6392C11.0533 17.8401 11.3886 17.5108 11.3912 17.1042V17.0917L11.4318 13.5915C11.4318 13.5915 15.1738 12.3067 16.2941 9.18327C17.417 6.05981 21.3445 6.97789 21.3445 6.97789C21.3445 6.97789 17.6075 3.67481 13.6801 6.61365Z" fill="#09704F" />
                        </svg>
                    </div>
                </div>

                {/* Itinerary Content */}
                <div className="mx-auto flex max-w-[1005px] flex-col justify-center">
                    {paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-center font-rajdhani text-xl font-semibold leading-8 text-[#262626] md:text-2xl lg:text-[26px] lg:leading-8"
                        >
                            {paragraph}
                            {index < paragraphs.length - 1 && <br />}
                            {index < paragraphs.length - 1 && <br />}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
