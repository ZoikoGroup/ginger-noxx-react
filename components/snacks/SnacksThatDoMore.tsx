"use client";

import React from "react";

interface SnackBenefitCard {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const snackBenefits: SnackBenefitCard[] = [
  {
    emoji: "🌿",
    title: "Real Ginger in Every Bite",
    description: (
      <>
        Not ginger-flavoured. Actual ginger — in every single
        <br />
        product.
      </>
    ),
  },
  {
    emoji: "✓",
    title: "No Artificial Colours",
    description: (
      <>
        Clean ingredients from start to finish — nothing
        <br />
        synthetic, ever.
      </>
    ),
  },
  {
    emoji: "🤝",
    title: "Halal and Vegan",
    description: (
      <>
        Inclusive by design. Every snack meets both
        <br />
        certifications.
      </>
    ),
  },
];

export default function SnacksThatDoMore() {
  return (
    <section className="w-full min-h-[384px] bg-stone-950 overflow-hidden relative flex flex-col items-center justify-center text-center text-white py-14 px-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8 max-w-2xl">
        <span className="text-orange-600/70 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          C l e a n &nbsp; I n g r e d i e n t s
        </span>
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Snacks That Do More
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {snackBenefits.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-[384px] h-[160px] bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10"
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
