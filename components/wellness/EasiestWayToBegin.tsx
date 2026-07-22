"use client";

import React, { useState } from "react";

interface OptionCard {
  id: string;
  emoji: string;
  badge?: string;
  title: string;
  description: React.ReactNode;
  actionText: string;
}

const options: OptionCard[] = [
  {
    id: "morning-shot",
    emoji: "⚡",
    badge: "RECOMMENDED FIRST STEP",
    title: "Morning Shot",
    description: (
      <>
        60ml Ginger Fire Shot every
        <br />
        morning. Takes 5 seconds. The
        <br />
        simplest daily ginger habit.
      </>
    ),
    actionText: "Add to Cart — £18.99 for 6",
  },
  {
    id: "evening-tea",
    emoji: "🍵",
    title: "Evening Tea",
    description: (
      <>
        Botanical Iced Tea every evening.
        <br />
        Gentle ginger to support digestion
        <br />
        and wind down after the day.
      </>
    ),
    actionText: "Add to Cart — £21.99 for 6",
  },
  {
    id: "anytime-drink",
    emoji: "🫚",
    title: "Anytime Drink",
    description: (
      <>
        Sparkling Ginger Lime whenever. No
        <br />
        schedule required — just reach for it
        <br />
        when you want something better.
      </>
    ),
    actionText: "Add to Cart — £19.99 for 6",
  },
];

export default function EasiestWayToBegin() {
  const [cartState, setCartState] = useState<Record<string, boolean>>({});

  const handleAction = (id: string) => {
    setCartState((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartState((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          S t a r t &nbsp; S i m p l e
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          The Easiest Way to Begin
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[549px] text-center">
          One low-effort starting point is all you need. Pick the format that fits your
          <br className="hidden sm:inline" />
          day.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`w-full max-w-[288px] h-[256px] bg-white rounded-3xl p-6 flex flex-col items-center justify-between text-center transition-all duration-300 ${
              opt.badge
                ? "outline outline-2 outline-offset-[-2px] outline-orange-600 shadow-lg"
                : "outline outline-2 outline-offset-[-2px] outline-orange-100 hover:shadow-md hover:-translate-y-1"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10 mb-1">
                {opt.emoji}
              </div>

              {opt.badge && (
                <div className="h-5 px-3 bg-orange-600 rounded-[999px] flex items-center justify-center mb-2">
                  <span className="text-white text-[9px] font-bold font-['Poppins'] uppercase leading-4 tracking-wide">
                    {opt.badge}
                  </span>
                </div>
              )}

              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
                {opt.title}
              </h3>

              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                {opt.description}
              </p>
            </div>

            <button
              onClick={() => handleAction(opt.id)}
              className="text-orange-600 text-xs font-bold font-['Poppins'] leading-5 hover:underline cursor-pointer transition-all"
            >
              {cartState[opt.id] ? "✓ Added to Cart" : opt.actionText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
