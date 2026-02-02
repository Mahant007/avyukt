"use client";

export default function HowWeWork({ title, subtitle, steps = [] }) {
  if (!steps.length) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">

              {/* STEP NUMBER (OUTSIDE CARD) */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2
                           w-12 h-12 flex items-center justify-center
                           rounded-full bg-[#020e33] text-white
                           font-bold shadow-md"
              >
                {item.step}
              </div>

              {/* CARD */}
              <div
                className="bg-white border border-gray-200 rounded-xl
                           pt-12 pb-8 px-6
                           hover:shadow-md transition-shadow duration-300 h-full"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
