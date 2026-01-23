"use client";


import Slider from "react-slick";
import Link from "next/link";
import Images from "next/image";
import "./HeroSection.css";



export default function HeroSection() {
  const slides = [
    {
      image: "/Images/golden-justice-scale.jpg",
      title: "Justice With Integrity",
      description:
        "Providing honest, transparent, and result-driven legal solutions.",
      primaryButton: {
        text: "Free Consultation",
        link: "/contact",
      },
      secondaryButton: {
        text: "Practice Areas",
        link: "/practice-areas",
      },
    },
    {
      image: "/Images/golden-justice-scale.jpg",
      title: "Protecting Your Rights",
      description: "Experienced advocacy before courts and tribunals.",
    },
    {
      image: "/Images/golden-justice-scale.jpg",
    },
  ];

  const isSliderEnabled = slides.length > 1;

  const settings = {
    dots: isSliderEnabled,
    arrows: isSliderEnabled,
    infinite: isSliderEnabled,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <section className="relative w-full h-[80vh]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            {/* IMAGE */}
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
            <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
              <div className="ml-auto max-w-xl text-right text-white space-y-6">

                {/* TITLE */}
                {slide?.title && (
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                )}

                {/* DESCRIPTION */}
                {slide?.description && (
                  <p className="text-lg text-gray-200">
                    {slide.description}
                  </p>
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
      </Slider>
    </section>
  );
}
