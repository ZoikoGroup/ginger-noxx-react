import React from 'react';
import "./beverages.css";

const choices = [
  {
    icon: "💧",
    title: "Refreshment",
    desc: "Light, crisp, refreshing"
  },
  {
    icon: "⚡",
    title: "Energy",
    desc: "Natural focus and lift"
  },
  {
    icon: "🌿",
    title: "Digestion",
    desc: "Calm and settle"
  },
  {
    icon: "🌱",
    title: "First-Time",
    desc: "Start here"
  }
];

export default function DecisionEngine() {
  return (
    <section className="beverages-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="beverages-tag">
          D E C I S I O N &nbsp; E N G I N E
        </div>

        {/* Title */}
        <h2 className="beverages-heading">
          Find Your Drink
        </h2>

        {/* Line Divider */}
        <div className="beverages-heading-line" />

        {/* Subtitle */}
        <p className="beverages-subheading mb-8">
          Tell us what you need — we will show you what fits.
        </p>

        {/* 4 Cards Grid */}
        <div className="beverages-grid-4 justify-items-center">
          {choices.map((item, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[256px] h-[128px] bg-white rounded-2xl border border-orange-100 shadow-sm p-4 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-2xl leading-none mb-2">{item.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-0.5">{item.title}</h3>
              <p className="text-stone-400 text-xs font-normal font-['Poppins'] leading-5">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
