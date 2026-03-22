'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { PercussionPhoto } from '@/types';

interface PhotoCarouselProps {
  photos: PercussionPhoto[];
}

const SPEED = 50; // pixels per second

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (!firstSetRef.current) return;

    const measure = () => {
      const el = firstSetRef.current;
      if (el) setScrollWidth(el.scrollWidth);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [photos.length]);

  const duration = scrollWidth > 0 ? scrollWidth / SPEED : 0;

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6"
        style={
          duration > 0
            ? {
                animation: `carousel-scroll ${duration}s linear infinite`,
              }
            : undefined
        }
      >
        <div ref={firstSetRef} className="flex gap-6 flex-shrink-0">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-6 flex-shrink-0" aria-hidden>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {scrollWidth > 0 && (
        <style>{`
          @keyframes carousel-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-${scrollWidth}px - 1.5rem)); }
          }
        `}</style>
      )}
    </div>
  );
}
