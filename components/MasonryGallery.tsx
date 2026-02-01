"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images?: GalleryImage[];
  className?: string;
}

export default function MasonryGallery({
  images = [],
  className = "",
}: MasonryGalleryProps) {
  // Define the column patterns: true = tall (2:1 ratio), false = short (1:1 ratio)
  const columnPatterns = [
    [false, true], // Column 1: short, tall
    [true, false], // Column 2: tall, short
    [false, true], // Column 3: short, tall
    [true, false], // Column 4: tall, short
  ];

  // Calculate how many images each column needs and distribute images
  const getImageForPosition = (colIndex: number, rowIndex: number) => {
    // Calculate flat index based on column-first ordering
    let flatIndex = 0;
    for (let c = 0; c < colIndex; c++) {
      flatIndex += columnPatterns[c].length;
    }
    flatIndex += rowIndex;

    return images[flatIndex] || null;
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop: 4 columns */}
      <div className="hidden gap-4 md:flex md:gap-5 lg:gap-6">
        {columnPatterns.map((pattern, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
            {pattern.map((isTall, rowIndex) => {
              const image = getImageForPosition(colIndex, rowIndex);
              return (
                <div
                  key={rowIndex}
                  className={`relative w-full overflow-hidden bg-white ${
                    isTall ? "aspect-[1/2]" : "aspect-square"
                  }`}
                >
                  {image && (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile: 2 columns */}
      <div className="flex gap-3 md:hidden">
        {/* Left column: short, tall */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="relative aspect-square w-full overflow-hidden bg-white">
            {images[0] && (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="relative aspect-[1/2] w-full overflow-hidden bg-white">
            {images[1] && (
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
        {/* Right column: tall, short */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="relative aspect-[1/2] w-full overflow-hidden bg-white">
            {images[2] && (
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="relative aspect-square w-full overflow-hidden bg-white">
            {images[3] && (
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
