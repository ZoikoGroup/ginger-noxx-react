"use client";

import React, { useState } from "react";

interface OptionCard {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
}

const options: OptionCard[] = [
  {
    id: "refreshment",
    emoji: "💧",
    title: "Refreshment",
    subtitle: "Light, crisp, refreshing",
  },
  {
    id: "energy",
    emoji: "⚡",
    title: "Energy",
    subtitle: "Natural focus and lift",
  },
  {
    id: "digestion",
    emoji: "🌿",
    title: "Digestion",
    subtitle: "Calm and settle",
  },
  {
    id: "first-time",
    emoji: "🌱",
    title: "First-Time",
    subtitle: "Start here",
  },
];

export default function DecisionEngine() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          D e c i s i o n &nbsp; E n g i n e
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Find Your Drink
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 text-center">
          Tell us what you need — we will show you what fits.
        </p>
      </div>

      {/* Decision Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`w-full max-w-[288px] h-[128px] rounded-2xl outline outline-1 outline-offset-[-1px] p-5 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white outline-orange-500 shadow-lg scale-102"
                  : "bg-white/60 hover:bg-white backdrop-blur-md outline-orange-100 hover:shadow-md hover:-translate-y-1"
              }`}
            >
              <div className="text-stone-900 text-2xl font-normal font-['Poppins'] leading-10 mb-1">
                {opt.emoji}
              </div>
              <h3 className="text-neutral-900 text-sm font-bold font-['Poppins'] leading-6 mb-0.5">
                {opt.title}
              </h3>
              <p className="text-neutral-800/60 text-xs font-normal font-['Poppins'] leading-5">
                {opt.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
