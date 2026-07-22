"use client";

import React from "react";

interface DifferenceFeature {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const features: DifferenceFeature[] = [
  {
    emoji: "🔬",
    title: "Ginger-Fusion System",
    description: (
      <>
        Every beverage uses whole ginger
        <br />
        root — not extract powder or synthetic
        <br />
        flavouring.
      </>
    ),
  },
  {
    emoji: "💧",
    title: "No Hidden Additives",
    description: (
      <>
        No artificial preservatives, colours, or
        <br />
        sweeteners. What you read is exactly
        <br />
        what is inside.
      </>
    ),
  },
  {
    emoji: "✓",
    title: "Halal + Vegan Certified",
    description: (
      <>
        Certified across every SKU — inclusive
        <br />
        by formulation, not as an
        <br />
        afterthought.
      </>
    ),
  },
  {
    emoji: "🌍",
    title: "Ethically Sourced",
    description: (
      <>
        Ginger from regenerative farms in
        <br />
        Peru and India with full traceability.
      </>
    ),
  },
];

export default function WhyGingerNoxx() {
  return (
    <section className="w-full min-h-[384px] bg-stone-950 overflow-hidden relative flex flex-col items-center justify-center text-center text-white py-14 px-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 max-w-2xl">
        <span className="text-orange-600/70 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          W h y &nbsp; G i n g e r N o x x
        </span>
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Real Ginger. Real Difference.
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-[256px] h-[176px] bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10"
          >
            <div className="text-stone-900 text-2xl font-normal font-['Poppins'] leading-10 mb-2">
              {item.emoji}
            </div>

            <h3 className="text-white text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
              {item.title}
            </h3>

            <p className="text-white/40 text-xs font-normal font-['Poppins'] leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
