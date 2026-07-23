import React from 'react';
import "./wellness.css";

const sets = [
  {
    icon: "🌅",
    tag: "BUNDLE & SAVE",
    title: "Morning Routine Set",
    desc: "12x Fire Shots + 1x Master Blend. Start every morning with clarity and digestion support.",
    price: "£24.99",
    oldPrice: "£29.99"
  },
  {
    icon: "🌙",
    tag: "BUNDLE & SAVE",
    title: "Evening Starter Set",
    desc: "2x Relaxed Gut Tea + 1x Ginger Honey Elixir. The complete nighttime wind-down ritual.",
    price: "£22.99",
    oldPrice: "£27.99"
  },
  {
    icon: "⚡",
    tag: "BUNDLE & SAVE",
    title: "Energy and Focus Set",
    desc: "24x Fire Shots + 1x Energy Chews Pack. All-day natural vitality without coffee.",
    price: "£34.99",
    oldPrice: "£42.99"
  },
  {
    icon: "⚖️",
    tag: "BUNDLE & SAVE",
    title: "Gut Support Set",
    desc: "12x Turmeric Shots + 2x Relaxed Gut Tea. Complete gut flora and digestive support.",
    price: "£32.99",
    oldPrice: "£39.99"
  }
];

export default function WellnessSets() {
  return (
    <section className="wellness-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          O P T I M I S E D &nbsp; S E T S
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          Wellness Sets
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* Subtitle */}
        <p className="wellness-subheading mb-8">
          Bundled together for complementary routines and everyday price value.
        </p>

        {/* 4 Wide Cards Grid (2 Rows x 2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full justify-items-center">
          {sets.map((item, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[550px] bg-white rounded-2xl p-6 border border-orange-100 shadow-sm flex items-start gap-5 text-left transition-transform hover:-translate-y-1"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 shrink-0 bg-orange-50 rounded-xl flex items-center justify-center text-3xl">
                {item.icon}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-wider block mb-1">{item.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1">{item.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-4">{item.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-orange-50">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ea580c] text-lg font-bold font-['Poppins']">{item.price}</span>
                    <span className="text-stone-400 text-xs line-through">{item.oldPrice}</span>
                  </div>

                  <button className="h-9 px-5 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
