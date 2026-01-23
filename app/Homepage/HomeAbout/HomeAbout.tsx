"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomeAbout({
  title,
  description,
  firmName,
  leaderName,
  location,
  imageSrc,        // 👈 NEW (optional)
  imageAlt = "About the Firm",
  imagePosition = "right", // "left" | "right"
  readMoreLink = "/about",
}) {
  // If nothing is provided, do not render
  if (!title && !description && !imageSrc) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
            imagePosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <div>
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {description}
              </p>
            )}

            {(firmName || leaderName || location) && (
              <p className="text-gray-600 mb-6">
                {firmName && <span className="font-medium">{firmName}</span>}
                {leaderName && (
                  <>
                    {firmName ? " is led by " : ""}
                    <span className="font-medium">{leaderName}</span>
                  </>
                )}
                {location && (
                  <>
                    {(firmName || leaderName) ? ", based in " : ""}
                    <span className="font-medium">{location}</span>
                  </>
                )}
                .
              </p>
            )}

            {readMoreLink && (
              <Link
  href={readMoreLink}
  className="group inline-flex items-center gap-2 text-[#020e33] font-semibold
             transition-all duration-300 ease-out"
>
  <span className="relative">
    Read More
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#020e33]
                     transition-all duration-300 group-hover:w-full"></span>
  </span>

  <span className="transform transition-transform duration-300
                   group-hover:translate-x-1">
    →
  </span>
</Link>
            )}
          </div>

          {/* IMAGE (OPTIONAL) */}
          {imageSrc && (
            <div className="relative w-full h-[280px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
