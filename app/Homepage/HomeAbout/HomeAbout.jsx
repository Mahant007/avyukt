"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomeAbout({ data }) {
  if (!data) return null;

  const { content, media, cta } = data;
  const { title, description, firm } = content;
  const { image } = media;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
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

            {firm && (
              <p className="text-gray-600 mb-6">
                <span className="font-medium">{firm.name}</span>{" "}
                is led by{" "}
                <span className="font-medium">{firm.leader}</span>, based in{" "}
                <span className="font-medium">{firm.location}</span>.
              </p>
            )}

            {cta && (
              <Link
                href={cta.link}
                className="group inline-flex items-center gap-2 text-[#020e33] font-semibold"
              >
                {cta.text}
              </Link>
            )}
          </div>

          {/* IMAGE */}
          {image && (
            <div className="relative w-full h-[280px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
