"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/arlekin_do_posle.webp",
    alt: "Результат обслуживания бассейна Арлекин",
    title: "Частный дом, Адлер | 45 м³",
    description: "Вода без хлора, чистота за 24 часа",
  },
  {
    src: "/hotel_do_posle.webp",
    alt: "Результат обслуживания бассейна в гостинице",
    title: "Гостиничный комплекс, Головинка | 70 м³",
    description: "Клиент хотел слить воду, но сэкономил 30 000 руб.",
  },
  {
    src: "/imperial_do_posle.webp",
    alt: "Результат обслуживания бассейна Imperial",
    title: "Гостиничный комплекс, Сочи | 80 м³",
    description: "Экстренный выезд, восстановили к утру!",
  },
  {
    src: "/karkas_do_posle.webp",
    alt: "Результат обслуживания каркасного бассейна",
    title: "Каркасник при доме, Лазаревское | 30 м³",
    description: "Сломался насос, восстановили, запустили!",
  },
];

export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<(typeof slides)[number] | null>(
    null,
  );
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  const openViewer = (slide: (typeof slides)[number]) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
    }

    setIsViewerVisible(false);
    setActiveSlide(slide);
    openTimerRef.current = window.setTimeout(() => {
      setIsViewerVisible(true);
      openTimerRef.current = null;
    }, 10);
  };

  const closeViewer = () => {
    setIsViewerVisible(false);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setActiveSlide(null);
      closeTimerRef.current = null;
    }, 220);
  };

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

  useEffect(() => {
    if (!activeSlide) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlide]);

  useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
      }

      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 px-1 py-1 shadow-2xl backdrop-blur-sm sm:px-2">
        <div ref={trackRef} className="flex gap-4 overflow-hidden scroll-smooth">
          {slides.map((slide, index) => (
            <figure
              key={slide.src}
              data-slide-card
              className="flex min-w-[calc(100%-0.5rem)] shrink-0 flex-col overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-b from-white to-teal-50 text-slate-900 shadow-[0_20px_45px_rgba(15,118,110,0.18)] sm:min-w-[calc(50%-0.5rem)] xl:min-w-[calc(25%-0.75rem)]"
            >
              <div className="px-5 pb-3 pt-5">
                <p className="min-h-[2.75rem] text-sm font-bold leading-snug text-teal-950">
                  {slide.title}
                </p>
                <p className="mt-2 min-h-[2.75rem] text-sm leading-snug text-slate-600">
                  {slide.description}
                </p>
              </div>
              <div className="mx-3 overflow-hidden rounded-[20px] bg-teal-900/10 ring-1 ring-teal-900/10">
                <div className="flex items-center justify-between bg-white/90 px-[20%] py-3 backdrop-blur-sm">
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                    До
                  </span>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                    После
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openViewer(slide)}
                  className="group relative block aspect-[16/9] w-full cursor-zoom-in"
                  aria-label={`Открыть фото объекта: ${slide.title}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-slate-950/5 transition group-hover:from-slate-950/20" />
                  <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Увеличить
                  </div>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 16vw, (min-width: 640px) 33vw, 90vw"
                    className="object-contain p-2 transition duration-300 group-hover:scale-[1.02] sm:p-3"
                  />
                </button>
              </div>
              <div className="p-4 pt-4">
                <Link
                  href="/kontakty"
                  className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800"
                >
                  Заказать
                </Link>
              </div>
            </figure>
          ))}
        </div>
      </div>
      {activeSlide ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-200 ease-out ${
            isViewerVisible ? "bg-slate-950/85 opacity-100" : "bg-slate-950/0 opacity-0"
          }`}
          onClick={closeViewer}
        >
          <div
            className={`relative w-full max-w-6xl rounded-[28px] bg-white p-4 shadow-2xl transition-all duration-300 ease-out ${
              isViewerVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeViewer}
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white"
              aria-label="Закрыть увеличенное изображение"
            >
              Закрыть
            </button>
            <div className="px-2 pb-3 pr-24 pt-2 sm:px-4">
              <p className="text-base font-bold text-teal-950">
                {activeSlide.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {activeSlide.description}
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
