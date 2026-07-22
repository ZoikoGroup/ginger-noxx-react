"use client";

import React from "react";

interface MealCard {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const meals: MealCard[] = [
  {
    emoji: "🥘",
    title: "Stir Fry Bowl",
    description: (
      <>
        Quick, satisfying, and packed
        <br />
        with ginger heat. 20 minutes
        <br />
        from pan to table.
      </>
    ),
  },
  {
    emoji: "🍗",
    title: "Ginger Chicken",
    description: (
      <>
        Roast or pan-fry. The Ginger Fire
        <br />
        Sauce marinade transforms any
        <br />
        chicken dish.
      </>
    ),
  },
  {
    emoji: "🍜",
    title: "Quick Noodles",
    description: (
      <>
        12 minutes. One pan. Real depth
        <br />
        from the sauce — the fastest
        <br />
        ginger meal.
      </>
    ),
  },
];

export default function CookThisTonight() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          C o o k &nbsp; T h i s &nbsp; T o n i g h t
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Cook This Tonight
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[478px] text-center">
          Start with a simple dish — we will show you exactly what to use.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {meals.map((meal, idx) => (
          <div
            key={idx}
            className="w-full max-w-[240px] h-[208px] bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-orange-100 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-[51.20px] mb-2">
              {meal.emoji}
            </div>

            <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
              {meal.title}
            </h3>

            <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
              {meal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
