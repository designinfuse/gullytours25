import Image from "next/image";

interface TourOverviewProps {
    description: string;
}

export default function TourOverview({ description }: TourOverviewProps) {
    return (
        <section
            className="relative w-full bg-[#EDEDE7]"
            style={{ paddingTop: '111px', paddingBottom: '100px' }}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-8">
                    {/* Header Section */}
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-8">
                            {/* Title */}
                            <h2 className="font-rajdhani text-5xl font-bold uppercase text-black md:text-6xl lg:text-[64px] lg:leading-[64px]">
                                Overview
                            </h2>

                            {/* Decorative Star Icon */}
                            <div className="relative h-[18px] w-[21px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="#247DA6" className="h-full w-full">
                                    <path d="M13.6801 6.61365C13.6801 6.61365 14.6048 3.12346 10.6748 0C6.74731 3.12346 7.66948 6.61365 7.66948 6.61365C3.74201 3.67481 0 6.98038 0 6.98038C0 6.98038 3.92746 6.06231 5.05032 9.18577C6.17318 12.3092 9.91265 13.594 9.91265 13.594L9.872 17.0393V17.0992C9.86946 17.5083 10.2073 17.8401 10.624 17.8401H10.6392C11.0533 17.8401 11.3886 17.5108 11.3912 17.1042V17.0917L11.4318 13.5915C11.4318 13.5915 15.1738 12.3067 16.2941 9.18327C17.417 6.05981 21.3445 6.97789 21.3445 6.97789C21.3445 6.97789 17.6075 3.67481 13.6801 6.61365Z" fill="#09704F" />
                                </svg>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="w-full max-w-4xl">
                            <p className="text-center font-rajdhani text-xl font-semibold leading-8 text-[#262626] md:text-2xl md:leading-9 lg:text-[26px] lg:leading-[32px]">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Decorative Illustration */}
                    <div className="relative mt-4 h-[121px] w-[101px] opacity-80 mix-blend-multiply">
                        <Image
                            src="/images/tour-overview-illustration.png"
                            alt=""
                            fill
                            className="object-contain"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
