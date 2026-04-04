import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      beforeImage: "/images/pool1-before.jpg",
      afterImage: "/images/pool1-after.jpg",
      title: "Частный дом, Адлер",
      volume: "45 м³",
      description: "Вода без хлора, кристальная чистота за 24 часа",
    },
    {
      id: 2,
      beforeImage: "/images/pool2-before.jpg",
      afterImage: "/images/pool2-after.jpg",
      title: "Малая гостиница, Красная Поляна",
      volume: "80 м³",
      description: "Спасли бассейн отеля от закрытия",
    },
    {
      id: 3,
      beforeImage: "/images/pool3-before.jpg",
      afterImage: "/images/pool3-after.jpg",
      title: "Дача, Лазаревское",
      volume: "25 м³",
      description: "Обслуживание каркасного бассейна без хлора",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 px-4 md:px-8 py-8 md:py-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-2">
                  Объём: {slide.volume}
                </p>
                <p className="text-md md:text-lg text-blue-600 mt-1">
                  {slide.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full md:w-1/2 relative">
                  <div className="relative aspect-[4/3] md:aspect-[4/3]">
                    <Image
                      src={slide.beforeImage}
                      alt={`До: ${slide.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    ДО
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative">
                  <div className="relative aspect-[4/3] md:aspect-[4/3]">
                    <Image
                      src={slide.afterImage}
                      alt={`После: ${slide.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    ПОСЛЕ
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://wa.me/79181234567"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Хочу так же → Отправить фото в WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
