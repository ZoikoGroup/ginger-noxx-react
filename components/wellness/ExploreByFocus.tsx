"use client";

import React, { useState } from "react";

interface FocusCard {
  id: string;
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const focusCards: FocusCard[] = [
  {
    id: "energy",
    emoji: "⚡",
    title: "Energy Support",
    description: (
      <>
        Natural sustained energy without caffeine
        <br />
        dependency or afternoon crashes.
      </>
    ),
  },
  {
    id: "gut",
    emoji: "🌿",
    title: "Gut and Digestion",
    description: (
      <>
        Products formulated around ginger&apos;s traditional
        <br />
        digestive support properties.
      </>
    ),
  },
  {
    id: "immune",
    emoji: "🛡️",
    title: "Immune Resilience",
    description: (
      <>
        Ginger, turmeric, and antioxidant-forward
        <br />
        formulations for daily resilience.
      </>
    ),
  },
  {
    id: "rest",
    emoji: "🌙",
    title: "Rest and Recovery",
    description: (
      <>
        Calming botanical blends to support wind-down and
        <br />
        overnight recovery.
      </>
    ),
  },
  {
    id: "active",
    emoji: "🏃",
    title: "Active Lifestyle",
    description: (
      <>
        Pre and post-workout ginger options for people who
        <br />
        move every day.
      </>
    ),
  },
  {
    id: "balance",
    emoji: "⚖️",
    title: "Daily Balance",
    description: (
      <>
        Everyday wellbeing without extreme protocols. Just
        <br />
        consistent, gentle support.
      </>
    ),
  },
];

export default function ExploreByFocus() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          E x p l o r e &nbsp; b y &nbsp; F o c u s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Explore by Wellness Focus
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[499px] text-center">
          Find the products aligned with your specific daily wellness priority.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {focusCards.map((card) => {
          const isSelected = selectedId === card.id;
          return (
            <button
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              className={`w-full max-w-[384px] h-[160px] rounded-2xl outline outline-1 outline-offset-[-1px] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white outline-orange-600 shadow-md scale-102"
                  : "bg-white outline-orange-100 hover:shadow-md hover:-translate-y-1"
              }`}
            >
              <div className="text-stone-900 text-2xl font-normal font-['Poppins'] leading-10 mb-2">
                {card.emoji}
              </div>

              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
                {card.title}
              </h3>

              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                {card.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
