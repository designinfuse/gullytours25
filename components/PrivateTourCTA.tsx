"use client";

export default function PrivateTourCTA() {
  return (
    <section className="w-full bg-[#B23F27] px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        {/* Ticket Card with Stamp Edges */}
        <div className="relative w-full max-w-6xl">
          {/* Stamp Edge Container */}
          <div
            className="relative bg-[#F7F8DF] p-8 md:p-12 lg:p-16"
            style={{
              maskImage: `
                radial-gradient(circle at 0% 0%, transparent 12px, black 12px),
                radial-gradient(circle at 20px 0%, transparent 12px, black 12px),
                radial-gradient(circle at 40px 0%, transparent 12px, black 12px),
                radial-gradient(circle at 60px 0%, transparent 12px, black 12px),
                radial-gradient(circle at 80px 0%, transparent 12px, black 12px),
                radial-gradient(circle at 100px 0%, transparent 12px, black 12px),
                radial-gradient(circle at 0% 100%, transparent 12px, black 12px),
                radial-gradient(circle at 20px 100%, transparent 12px, black 12px),
                radial-gradient(circle at 40px 100%, transparent 12px, black 12px),
                radial-gradient(circle at 60px 100%, transparent 12px, black 12px),
                radial-gradient(circle at 80px 100%, transparent 12px, black 12px),
                radial-gradient(circle at 100px 100%, transparent 12px, black 12px)
              `,
              maskSize: "20px 100%",
              maskRepeat: "repeat-x",
              maskPosition: "top, bottom",
              WebkitMaskImage: `
                radial-gradient(circle at 10px 0%, transparent 10px, black 10px),
                radial-gradient(circle at 10px 100%, transparent 10px, black 10px)
              `,
              WebkitMaskSize: "20px 100%, 20px 100%",
              WebkitMaskRepeat: "repeat-x, repeat-x",
              WebkitMaskPosition: "0 0, 0 100%",
              WebkitMaskComposite: "intersect",
            }}
          >
            {/* Inner Border */}
            <div className="flex min-h-[200px] items-center justify-center border-2 border-[#B8A887] p-2 md:min-h-[250px] md:p-2">
              <div className="flex min-h-[200px] items-center justify-center border-2 border-[#B8A887] p-8 md:min-h-[250px] md:p-12">
                {/* Text Content */}
                <h2 className="text-center font-rajdhani text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl lg:leading-tight">
                  Do you want to book this as a private tour for your group?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
