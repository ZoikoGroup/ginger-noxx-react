import React from 'react';
import "./wellness.css";

const beginOptions = [
  {
    icon: "⚡",
    badge: "MOST POPULAR CHOICE",
    badgeBg: "bg-[#ea580c] text-white",
    title: "Morning Shot",
    desc: "20ml with your breakfast. Pure ginger intensity to start the day with clarity and energy.",
    linkText: "Explore Shots →",
    featured: true
  },
  {
    icon: "🍵",
    badge: "EASY DAILY TEA",
    badgeBg: "bg-orange-50 border border-orange-200 text-[#b45309]",
    title: "Evening Tea",
    desc: "Steep with warm water in the evening to unwind, digest comfortably, and soothe after meals.",
    linkText: "Explore Teas →",
    featured: false
  },
  {
    icon: "🌾",
    badge: "FAST SWALLOW",
    badgeBg: "bg-orange-50 border border-orange-200 text-[#b45309]",
    title: "Anytime Elixir",
    desc: "Sip during focus hours or warm weather for hydration with a signature ginger bite.",
    linkText: "Explore Elixirs →",
    featured: false
  }
];

export default function EasiestWayToBegin() {
  return (
    <section className="wellness-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          S T A R T &nbsp; S I M P L E
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          The Easiest Way to Begin
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* Subtitle */}
        <p className="wellness-subheading mb-8">
          One simple addition to your morning, afternoon, or evening routine.
        </p>

        {/* 3 Cards Grid */}
        <div className="wellness-grid-3 justify-items-center">
          {beginOptions.map((item, idx) => (
            <div 
              key={idx} 
              className={`w-full max-w-[340px] min-h-[220px] bg-white rounded-2xl p-6 flex flex-col items-center text-center justify-between shadow-sm transition-transform hover:-translate-y-1 ${
                item.featured ? 'border-2 border-[#ea580c]' : 'border border-orange-100'
              }`}
            >
              <div className="flex flex-col items-center w-full">
                <div className="text-3xl leading-none mb-3">{item.icon}</div>
                <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase rounded-full tracking-wider mb-2 ${item.badgeBg}`}>
                  {item.badge}
                </span>
                <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-2">{item.title}</h3>
                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{item.desc}</p>
              </div>

              <div className="mt-4 pt-2">
                <span className="text-[#ea580c] font-bold font-['Poppins'] text-xs hover:underline cursor-pointer">
                  {item.linkText}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
