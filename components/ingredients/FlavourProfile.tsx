"use client";

import React from "react";

interface ProfileCard {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const profiles: ProfileCard[] = [
  {
    emoji: "🔥",
    title: "Bold and Fiery",
    description: (
      <>
        Strong ginger heat with chili depth.
        <br />
        Marinades, stir-fries, glazes, hot
        <br />
        sauces.
      </>
    ),
  },
  {
    emoji: "🌿",
    title: "Aromatic and Herbal",
    description: (
      <>
        Ginger-forward spice complexity with
        <br />
        earthy undertones. Soups, braises,
        <br />
        curries.
      </>
    ),
  },
  {
    emoji: "🍋",
    title: "Bright and Citrus",
    description: (
      <>
        Lemon and ginger together.
        <br />
        Dressings, marinades, light fish and
        <br />
        grain dishes.
      </>
    ),
  },
  {
    emoji: "🍯",
    title: "Sweet and Warm",
    description: (
      <>
        Ginger with honey warmth. Glazes,
        <br />
        baking, sweet-savoury crossover
        <br />
        dishes.
      </>
    ),
  },
];

export default function FlavourProfile() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          F i n d &nbsp; Y o u r &nbsp; F l a v o u r
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Find Your Flavour Profile
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[532px] text-center">
          GingerNoxx ingredients span four distinct flavour territories. Find which
          <br className="hidden sm:inline" />
          speaks to your cooking.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {profiles.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-[256px] h-[176px] bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="text-stone-900 text-2xl font-normal leading-10 mb-2">
              {item.emoji}
            </div>

            <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
              {item.title}
            </h3>

            <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
