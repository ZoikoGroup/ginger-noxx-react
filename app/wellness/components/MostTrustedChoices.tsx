'use client';

import React from 'react';
import "./wellness.css";

const products = [
  {
    title: "Ginger Fire Shot",
    tag: "DAILY SHOTS",
    badge: "HOT SHOT",
    badgeBg: "bg-[#ea580c]",
    desc: "Concentrated raw ginger juice with lemon and cayenne pepper. The morning wake-up shot.",
    price: "£18.99",
    packBadge: "12-Pack"
  },
  {
    title: "Ginger Turmeric Shot",
    tag: "DAILY SHOTS",
    badge: null,
    badgeBg: null,
    desc: "Raw ginger juice combined with organic turmeric and black pepper for maximum absorption.",
    price: "£22.99",
    packBadge: "12-Pack"
  },
  {
    title: "Relaxed Gut Tea",
    tag: "HERBAL TEAS",
    badge: null,
    badgeBg: null,
    desc: "Soothing organic chamomile tea with raw ginger root flakes for post-dinner relief.",
    price: "£12.99",
    packBadge: "20 Bags"
  },
  {
    title: "Sparkling Ginger Elixir",
    tag: "ELIXIRS & DRINKS",
    badge: "JUST IN",
    badgeBg: "bg-emerald-700",
    desc: "Lightly sparkling pure ginger juice with pressed apple juice. Refreshing and crisp.",
    price: "£16.99",
    packBadge: null
  }
];

export default function MostTrustedChoices() {
  return (
    <section className="wellness-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          B E S T &nbsp; S E L L E R S
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          Most Trusted Choices
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* Subtitle */}
        <p className="wellness-subheading mb-8">
          Audited, reviewed, and loved.
        </p>

        {/* 4 Cards Grid */}
        <div className="wellness-grid-4 justify-items-center">
          {products.map((p, idx) => (
            <div key={idx} className="wellness-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="wellness-card-img-ash">
                {p.badge && (
                  <div className={`absolute top-2.5 left-2.5 px-2.5 py-1 ${p.badgeBg} rounded-full text-white text-[9px] font-bold uppercase tracking-wide`}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest block mb-1">{p.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1.5">{p.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{p.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center gap-2 h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{p.price}</span>
                    {p.packBadge && (
                      <span className="px-2 py-0.5 bg-[#ea580c] text-white text-[9px] font-bold rounded-full">
                        {p.packBadge}
                      </span>
                    )}
                  </div>

                  <button className="w-full h-10 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none">
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
