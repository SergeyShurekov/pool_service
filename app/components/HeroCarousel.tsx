"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/arlekin_do_posle.webp",
    alt: "Результат обслуживания бассейна Арлекин",
  },
  {
    src: "/hotel_do_posle.webp",
    alt: "Результат обслуживания бассейна в гостинице",
  },
  {
    src: "/imperial_do_posle.webp",
    alt: "Результат обслуживания бассейна Imperial",
  },
  {
    src: "/karkas_do_posle.webp",
    alt: "Результат обслуживания каркасного бассейна",
  },
];

export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const firstCard = track.querySelector<HTMLElement>("[data-slide-card]");

      if (!firstCard) {
        return;
      }

      const gap = 16;
      const step = firstCard.offsetWidth + gap;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const nextScrollLeft = track.scrollLeft + step;

      track.scrollTo({
        left: nextScrollLeft >= maxScroll - 4 ? 0 : nextScrollLeft,
        behavior: "smooth",
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 px-1 py-1 shadow-2xl backdrop-blur-sm sm:px-2">
      <div ref={trackRef} className="flex gap-4 overflow-hidden scroll-smooth">
        {slides.map((slide, index) => (
          <figure
            key={slide.src}
            data-slide-card
            className="min-w-[calc(100%-0.5rem)] shrink-0 overflow-hidden rounded-2xl bg-teal-900/30 text-slate-800 shadow-lg sm:min-w-[calc(50%-0.5rem)] xl:min-w-[calc(25%-0.75rem)]"
          >
            <div className="relative aspect-[16/8] w-full bg-teal-900/30">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 16vw, (min-width: 640px) 33vw, 90vw"
                className="scale-110 object-contain p-2 sm:p-3"
              />
            </div>
          </figure>
        ))}
      </div>
      <div className="pt-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
        До и после
      </div>
    </div>
  );
}
