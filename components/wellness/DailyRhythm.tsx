"use client";

import React from "react";

interface RhythmStep {
  timeLabel: string;
  emoji: string;
  title: string;
  description: React.ReactNode;
  productTag: string;
}

const rhythmSteps: RhythmStep[] = [
  {
    timeLabel: "MORNING",
    emoji: "🌅",
    title: "Wake Up Shot",
    description: (
      <>
        Start before coffee or food for best effect.
        <br />
        60ml, done in seconds.
      </>
    ),
    productTag: "Ginger Fire Shot",
  },
  {
    timeLabel: "MIDDAY",
    emoji: "☀️",
    title: "Midday Reset",
    description: (
      <>
        Replace a second coffee with something
        <br />
        that won&apos;t cause a 3pm crash.
      </>
    ),
    productTag: "Sparkling Ginger Lime",
  },
  {
    timeLabel: "AFTERNOON",
    emoji: "🍊",
    title: "Gut Support",
    description: (
      <>
        A warm ginger drink post-lunch helps
        <br />
        settle and support digestion naturally.
      </>
    ),
    productTag: "Ginger Turmeric Blend",
  },
  {
    timeLabel: "EVENING",
    emoji: "🌙",
    title: "Wind Down",
    description: (
      <>
        Gentle botanical ginger tea to transition
        <br />
        from the day without stimulation.
      </>
    ),
    productTag: "Botanical Iced Tea",
  },
];

export default function DailyRhythm() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          D a i l y &nbsp; R h y t h m
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Build Your Daily Rhythm
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[541px] text-center">
          Ginger works best as a daily habit. Here is how real customers structure
          <br className="hidden sm:inline" />
          their GingerNoxx day.
        </p>
      </div>

      {/* Unified 4-Block Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1120px] w-full rounded-3xl overflow-hidden shadow-lg border border-amber-800/30">
        {rhythmSteps.map((step, idx) => (
          <div
            key={idx}
            className={`bg-amber-700 p-6 flex flex-col items-center justify-between text-center h-56 text-white ${
              idx < rhythmSteps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-amber-800/40" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/30 text-[9px] font-bold font-['Poppins'] uppercase tracking-widest mb-1">
                {step.timeLabel}
              </span>

              <div className="text-stone-900 text-xl font-normal font-['Poppins'] leading-8 mb-2">
                {step.emoji}
              </div>

              <h3 className="text-white text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
                {step.title}
              </h3>

              <p className="text-white/40 text-xs font-normal font-['Poppins'] leading-5">
                {step.description}
              </p>
            </div>

            <div className="h-6 px-3 bg-white/10 rounded-[999px] flex items-center justify-center">
              <span className="text-white/60 text-[10px] font-bold font-['Poppins'] leading-4">
                {step.productTag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
