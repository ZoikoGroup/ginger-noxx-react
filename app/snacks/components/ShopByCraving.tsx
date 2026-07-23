'use client';

import React, { useState } from 'react';
import "./snacks.css";

const snacksData = [
  {
    title: "Energy Chews",
    tag: "SNACKS",
    badge: "MOST POPULAR",
    badgeBg: "bg-[#ea580c]",
    desc: "Soft, chewy, and energising. Real ginger with a clean sweetness.",
    price: "£3.49",
    unitBadge: "Per Pack"
  },
  {
    title: "Ginger Fire Bites",
    tag: "SNACKS",
    badge: "FIERY",
    badgeBg: "bg-[#0c0a09]",
    desc: "Bold heat, real ginger, addictive crunch. Not for the timid.",
    price: "£3.99",
    unitBadge: null
  },
  {
    title: "Granola Clusters",
    tag: "SNACKS",
    badge: null,
    badgeBg: null,
    desc: "Oats clusters with ginger, honey, and toasted seeds. Breakfast or snack.",
    price: "£4.49",
    unitBadge: null
  },
  {
    title: "Dark Choc Ginger Bark",
    tag: "SNACKS",
    badge: "INDULGENT",
    badgeBg: "bg-emerald-800",
    desc: "70% dark chocolate with crystallised ginger pieces. Genuinely special.",
    price: "£4.99",
    oldPrice: "£6.49",
    unitBadge: null
  }
];

const filters = ["All Snacks", "Sweet", "Spicy", "Crunchy", "Clean", "Indulgent"];

export default function ShopByCraving() {
  const [activeFilter, setActiveFilter] = useState("All Snacks");

  return (
    <section className="snacks-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="snacks-tag">
          S H O P &nbsp; B Y &nbsp; C R A V I N G
        </div>

        {/* Title */}
        <h2 className="snacks-heading">
          Shop by Craving
        </h2>

        {/* Line Divider */}
        <div className="snacks-heading-line" />

        {/* Subtitle */}
        <p className="snacks-subheading mb-8">
          Find what your taste is asking for right now.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`h-9 px-5 rounded-full text-xs font-bold font-['Poppins'] cursor-pointer transition-all border ${
                activeFilter === filter
                  ? 'bg-[#ea580c] text-white border-[#ea580c]'
                  : 'bg-white text-stone-600 border-orange-100 hover:border-[#ea580c]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="snacks-grid-4 justify-items-center">
          {snacksData.map((s, idx) => (
            <div key={idx} className="snacks-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="snacks-card-img-ash">
                {s.badge && (
                  <div className={`absolute top-2.5 left-2.5 px-2.5 py-1 ${s.badgeBg} rounded-full text-white text-[9px] font-bold uppercase tracking-wide`}>
                    {s.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest block mb-1">{s.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1.5">{s.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{s.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center gap-2 h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{s.price}</span>
                    {s.oldPrice && (
                      <span className="text-stone-500 text-sm font-normal line-through">{s.oldPrice}</span>
                    )}
                    {s.unitBadge && (
                      <span className="px-2 py-0.5 bg-[#ea580c] text-white text-[9px] font-bold rounded-full">
                        {s.unitBadge}
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
