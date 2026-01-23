"use client";

import Link from "next/link";

export default function PracticeAreas({ title, subtitle, areas = [] }) {
  if (!areas.length) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8
                         flex flex-col justify-between
                         hover:shadow-md transition-shadow duration-300"
            >
              {/* ICON */}
              {area.icon && (
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center
                                  rounded-full bg-[#020e33]/10">
                    <img
                      src={area.icon}
                      alt={area.title || "Practice Icon"}
                      className="w-7 h-7 text-[#020e33]"
                    />
                  </div>
                </div>
              )}

              {/* CONTENT */}
              <div className="text-center">
                {area.title && (
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                )}

                {area.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                )}
              </div>

              {/* VIEW MORE */}
              {area.viewMoreLink && (
                <div className="mt-6 text-center">
                  <Link
                    href={area.viewMoreLink}
                    className="group inline-flex items-center gap-2
                               text-[#020e33] font-medium text-sm
                               transition-all duration-300"
                  >
                    <span className="relative">
                      View More
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                                       bg-[#020e33]
                                       transition-all duration-300
                                       group-hover:w-full"></span>
                    </span>
                    <span className="transition-transform duration-300
                                     group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
