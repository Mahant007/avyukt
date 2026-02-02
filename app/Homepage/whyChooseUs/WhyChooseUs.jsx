"use client";

import { useState } from "react";

export default function WhyChooseUs({ title, subtitle, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items.length) return null;

  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* ACCORDION */}
        <div className="border-t border-gray-300">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-300 py-5"
              >
                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.title}
                  </span>

                  <span className="text-2xl font-light text-[#c96b4b]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
