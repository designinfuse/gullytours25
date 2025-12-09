"use client";

interface RunningBandProps {
  items: string[];
}

export default function RunningBand({ items }: RunningBandProps) {
  // Create a longer array for seamless looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative h-[60px] w-full overflow-hidden bg-[#3B7BB0]">
      <div className="marquee-container flex h-full items-center">
        {/* First set of items */}
        <div className="marquee-content flex shrink-0 items-center gap-10">
          {repeatedItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-rajdhani text-[26px] font-medium text-white">
                {item}
              </span>
              {/* Dot separator */}
              <div className="h-[9px] w-[9px] shrink-0 rounded-full bg-white" />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="marquee-content flex shrink-0 items-center gap-10">
          {repeatedItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-rajdhani text-[26px] font-medium text-white">
                {item}
              </span>
              {/* Dot separator */}
              <div className="h-[9px] w-[9px] shrink-0 rounded-full bg-white" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
