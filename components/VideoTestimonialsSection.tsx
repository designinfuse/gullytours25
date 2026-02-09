"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close video"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Video container */}
      <div
        className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video testimonial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

interface VideoThumbnailProps {
  imageSrc: string;
  onClick: () => void;
}

function VideoThumbnail({ imageSrc, onClick }: VideoThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[9/14] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-300 transition-transform hover:scale-[1.02] sm:max-w-[320px] lg:max-w-[399px]"
    >
      <Image
        src={imageSrc}
        alt="Video testimonial thumbnail"
        fill
        className="object-cover"
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
          <svg
            className="ml-1 h-6 w-6 text-white sm:h-8 sm:w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Placeholder YouTube video ID
  const placeholderVideoId = "CBqBxIzV4tY";

  return (
    <>
      <section className="w-full">
        {/* Title */}
        <div className="bg-[#EDEDE7] px-4 py-12 md:py-16">
          <h2 className="text-center font-rajdhani text-3xl font-bold uppercase leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Video Testimonials
          </h2>
        </div>

        {/* Video columns */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Orange */}
          <div className="flex items-center justify-center bg-[#DE6D11] px-4 py-16 md:py-24 lg:py-32">
            <VideoThumbnail
              imageSrc="/curated-walks-1.jpg"
              onClick={() => setActiveVideo(placeholderVideoId)}
            />
          </div>

          {/* Right - Dark Red */}
          <div className="flex items-center justify-center bg-[#B23F27] px-4 py-16 md:py-24 lg:py-32">
            <VideoThumbnail
              imageSrc="/curated-walks-2.jpg"
              onClick={() => setActiveVideo(placeholderVideoId)}
            />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoId={activeVideo || ""}
      />
    </>
  );
}
