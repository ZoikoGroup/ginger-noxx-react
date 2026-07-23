'use client';

import React from 'react';
import "./beverages.css";

const lovedProducts = [
  {
    title: "Sparkling Ginger Lime Infusion",
    tag: "BEVERAGES",
    badge: "MOST POPULAR",
    badgeBg: "bg-[#ea580c]",
    desc: "Zesty, light, real ginger warmth. The signature GingerNoxx drink.",
    price: "£19.99",
    packBadge: "6-Pack"
  },
  {
    title: "Ginger Fire Shot",
    tag: "SHOTS",
    badge: "FAN FAVOURITE",
    badgeBg: "bg-[#0c0a09]",
    desc: "60ml concentrated ginger shot. Start your day with intent.",
    price: "£18.99",
    packBadge: "6-Pack"
  },
  {
    title: "Botanical Iced Tea",
    tag: "ICED TEA",
    badge: null,
    badgeBg: null,
    desc: "Gentle ginger with botanical calm. Perfect evening ritual.",
    price: "£21.99",
    packBadge: "6-Pack"
  },
  {
    title: "Ginger Turmeric Blend",
    tag: "WELLNESS",
    badge: "BEST VALUE",
    badgeBg: "bg-emerald-800",
    desc: "Anti-inflammatory power in a clean, warming drink format.",
    price: "£22.99",
    oldPrice: "£27.99",
    packBadge: null
  }
];

export default function MostLovedBeverages() {
  return (
    <section className="beverages-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="beverages-tag">
          M O S T &nbsp; L O V E D
        </div>

        {/* Title */}
        <h2 className="beverages-heading">
          Most Loved Ginger Drinks
        </h2>

        {/* Line Divider */}
        <div className="beverages-heading-line" />

        {/* Subtitle */}
        <p className="beverages-subheading mb-8">
          Most customers start here.
        </p>

        {/* 4 Cards Grid */}
        <div className="beverages-grid-4 justify-items-center">
          {lovedProducts.map((p, idx) => (
            <div key={idx} className="beverages-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="beverages-card-img-ash">
                {p.badge && (
                  <div className={`absolute top-2.5 left-2.5 px-2.5 py-1 ${p.badgeBg} rounded-full text-white text-[9px] font-bold uppercase tracking-wide`}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest block mb-1">{p.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-snug mb-1.5">{p.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{p.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center gap-2 h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{p.price}</span>
                    {p.oldPrice && (
                      <span className="text-stone-500 text-sm font-normal line-through">{p.oldPrice}</span>
                    )}
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
