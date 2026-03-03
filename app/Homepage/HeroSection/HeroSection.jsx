"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  const slides = [
    {
      desktopImage: "/images/justice-scale.jpg",
      mobileImage: "/images/mobile-slide1.png",
      title: "Justice With Integrity",
      description:
        "Providing honest, transparent, and result-driven legal solutions.",
      primaryButton: {
        text: "Free Consultation",
        link: "/contact",
      },
    },
    {
      desktopImage: "/images/slider2.png",
      mobileImage: "/images/mobile-slide3.png",
      title: "Protecting Your Rights",
      description: "Experienced advocacy before courts and tribunals.",
    },
    {
      desktopImage: "/images/slide3.png",
      mobileImage: "/images/mobile-slide2.png",
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
    autoplay: isSliderEnabled,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="heroSlide">

            {/* DESKTOP IMAGE */}
            {slide?.desktopImage && (
              <Image
                src={slide.desktopImage}
                alt={slide?.title || "Banner"}
                fill
                priority={index === 0}
                className="heroImage desktopImage"
              />
            )}

            {/* MOBILE IMAGE */}
            {slide?.mobileImage && (
              <Image
                src={slide.mobileImage}
                alt={slide?.title || "Banner"}
                fill
                priority={index === 0}
                className="heroImage mobileImage"
              />
            )}

            {/* OVERLAY */}
            <div className="heroOverlay"></div>

            {/* CONTENT */}
            <div className="heroContent">
              <div className="heroText">
                {slide?.title && (
                  <h1 className="heroTitle">{slide.title}</h1>
                )}

                {slide?.description && (
                  <p className="heroDescription">
                    {slide.description}
                  </p>
                )}

                {(slide?.primaryButton || slide?.secondaryButton) && (
                  <div className="heroButtons">
                    {slide?.primaryButton?.text && (
                      <Link
                        href={slide.primaryButton.link}
                        className="primaryBtn"
                      >
                        {slide.primaryButton.text}
                      </Link>
                    )}

                    {slide?.secondaryButton?.text && (
                      <Link
                        href={slide.secondaryButton.link}
                        className="secondaryBtn"
                      >
                        {slide.secondaryButton.text}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </Slider>
    </section>
  );
}