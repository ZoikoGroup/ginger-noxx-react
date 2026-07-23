import React from 'react';
import "./wellness.css";

const focusAreas = [
  {
    icon: "⚡",
    title: "Energy & Focus",
    desc: "Boost stamina & energy without jittery caffeine side effects."
  },
  {
    icon: "🧘‍♀️",
    title: "Natural Digestion",
    desc: "Historically used to soothe the stomach and support daily gut health."
  },
  {
    icon: "🛡️",
    title: "Immune Defence",
    desc: "Packed with antioxidants & natural gingerol to support your immune system."
  },
  {
    icon: "🌙",
    title: "Rest and Recovery",
    desc: "Calm evening blends to ease post-workout soreness and night tension."
  },
  {
    icon: "🏃‍♂️",
    title: "Active Lifestyle",
    desc: "On-the-go shots & elixirs designed to fuel an active, busy lifestyle."
  },
  {
    icon: "⚖️",
    title: "Daily Balance",
    desc: "Maintain overall balance and wellness with clean, daily ginger routines."
  }
];

export default function ExploreByFocus() {
  return (
    <section className="wellness-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          E N H A N C E &nbsp; T O D A Y
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          Explore by Wellness Focus
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* Subtitle */}
        <p className="wellness-subheading mb-8">
          Target specific body goals with our curated product line.
        </p>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
          {focusAreas.map((item, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[360px] h-[160px] bg-white rounded-2xl p-6 border border-orange-100 shadow-sm flex flex-col items-center text-center justify-center transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl leading-none mb-3">{item.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] mb-1.5">{item.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 max-w-[280px]">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
