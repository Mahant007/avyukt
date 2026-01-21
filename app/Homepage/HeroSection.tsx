"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDE_DELAY = 6000;

// ✅ Everything is optional by design
const slides = [
  {
    title: "Justice With Integrity",
    description: "Providing honest, transparent legal solutions.",
    image: "/Images/golden-justice-scale.jpg",
    primaryButton: {
      text: "Free Consultation",
      link: "/contact",
    },
  },
  {
    title: "Justice With Integrity",
    description: "Providing honest, transparent legal solutions.",
    image: "/Images/golden-justice-scale.jpg",
    primaryButton: {
      text: "Free Consultation",
      link: "/contact",
    },
    secondaryButton: {
      text: "Free Consultation",
      link: "/contact",
    },
  },
  {
    title: "Justice With Integrity",
    description: "Providing honest, transparent legal solutions.",
    image: "/Images/golden-justice-scale.jpg",
    primaryButton: {
      text: "Free Consultation",
      link: "/contact",
    },
  },
];

// 👇 safe clone logic
const isSliderEnabled = slides.length > 1;

const extendedSlides = isSliderEnabled
  ? [slides[slides.length - 1], ...slides, slides[0]]
  : slides;
export default function HomeBanner() {
  const [current, setCurrent] = useState(slides.length ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startAutoSlide = () => {
    if (!slides.length) return;
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DELAY);
  };

  const nextSlide = () => {
    if (!isSliderEnabled) return;
    setIsAnimating(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isSliderEnabled) return;
    setIsAnimating(true);
    setCurrent((prev) => prev - 1);
  };

  // 🔁 seamless reset
  useEffect(() => {
    if (!slides.length) return;

    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(slides.length);
      }, 700);
    }
  }, [current]);

  useEffect(() => {
    if (!isSliderEnabled) return;

    startAutoSlide();
    return stopAutoSlide;
  }, []);

  if (!extendedSlides.length) return null;

  return (
    <section className=" h-[80vh] w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className={`flex h-full relative ${
          isAnimating ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-full">
            {/* IMAGE (optional) */}
            {slide?.image && (
              <img
                src={slide.image}
                alt={slide?.title || "Banner"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="absolute z-10 max-w-7xl mx-auto top-[40%] left-[60%] px-6 flex items-center">
              <div className="ml-auto max-w-xl text-right text-white space-y-6">
                {/* TITLE */}
                {slide?.title && (
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                )}

                {/* DESCRIPTION */}
                {slide?.description && (
                  <p className="text-lg text-gray-200">{slide.description}</p>
                )}

                {/* BUTTONS */}
                {(slide?.primaryButton?.text && slide?.primaryButton?.link) ||
                (slide?.secondaryButton?.text &&
                  slide?.secondaryButton?.link) ? (
                  <div className="flex justify-end gap-4 pt-4">
                    {slide?.primaryButton?.text &&
                      slide?.primaryButton?.link && (
                        <Link
                          href={slide.primaryButton.link}
                          className="bg-[#020e33] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020e33] transition"
                        >
                          {slide.primaryButton.text}
                        </Link>
                      )}

                    {slide?.secondaryButton?.text &&
                      slide?.secondaryButton?.link && (
                        <Link
                          href={slide.secondaryButton.link}
                          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                        >
                          {slide.secondaryButton.text}
                        </Link>
                      )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS (optional, but safe) */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black transition"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black transition"
          >
            ❯
          </button>
        </>
      )}
    </section>
  );
}
