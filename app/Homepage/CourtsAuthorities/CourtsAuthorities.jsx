"use client";

import Image from "next/image";

export default function CourtsAuthorities({
  title = "Courts & Authorities",
  description,
  imageSrc,
  imageAlt = "Courts and Legal Authorities",
  courts = [],
}) {
  if (!courts.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE - LEFT */}
          {imageSrc && (
            <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          )}

          {/* CONTENT - RIGHT */}
          <div>
            {/* HEADING */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>

            {/* DESCRIPTION */}
            {description && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* LIST */}
            <ul className="divide-y divide-gray-200">
              {courts.map((court, index) => (
                <li
                  key={index}
                  className="py-4 flex flex-col"
                >
                  <span className="text-gray-900 font-medium">
                    {court.name}
                  </span>

                  {court.note && (
                    <span className="text-sm text-gray-600 mt-1">
                      {court.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
