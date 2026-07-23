'use client';

import React, { useState } from 'react';
import "./bundles.css";

const bundlesData = [
  {
    title: "Starter Pack",
    desc: "Three best-selling beverages. The perfect no-pressure introduction to GingerNoxx.",
    pills: ["Beverage ×3", "Getting Started Guide"],
    price: "£19.99",
    oldPrice: null,
    saveText: null,
    badge: "First-Time",
    isPopular: false
  },
  {
    title: "Wellness Pack",
    desc: "6-pack + Fire Shot + Botanical Tea. The complete daily wellness ritual.",
    pills: ["Sparkling ×6", "Fire Shot", "Botanical Tea"],
    price: "£34.99",
    oldPrice: "£41.94",
    saveText: "Save 17%",
    badge: "Wellness",
    isPopular: true
  },
  {
    title: "Family Pack",
    desc: "12-pack + shots + spice sampler + recipe cards. Built for household sharing.",
    pills: ["Sparkling ×12", "Shots ×4", "Spice Sampler"],
    price: "£59.99",
    oldPrice: "£79.91",
    saveText: "Save 25%",
    badge: "Family",
    isPopular: false
  },
  {
    title: "Gift Set Deluxe",
    desc: "Full assortment with premium branded packaging. Designed to impress and be loved.",
    pills: ["Beverages", "Condiments", "Snacks", "Gift Box"],
    price: "£79.99",
    oldPrice: "Worth £97+",
    saveText: null,
    badge: "Gift",
    isPopular: true
  }
];

const filters = ["All Bundles", "First-Time", "Wellness", "Family", "Gifting", "Corporate"];

export default function AllBundles() {
  const [activeFilter, setActiveFilter] = useState("All Bundles");

  return (
    <section className="bundles-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="bundles-tag">
          A l l &nbsp; B u n d l e s
        </div>

        {/* Title */}
        <h2 className="bundles-heading">
          Find the Right Bundle
        </h2>

        {/* Divider */}
        <div className="bundles-heading-line" />

        {/* Subtitle */}
        <p className="bundles-subheading mb-8">
          Pre-selected for taste, function, and ritual — every bundle tells a complete ginger story.
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
        <div className="bundles-grid-4 justify-items-center">
          {bundlesData.map((b, idx) => (
            <div key={idx} className="bundles-card-white flex flex-col justify-between">
              {/* Ash Color Image Placeholder Box */}
              <div className="bundles-card-img-ash shrink-0">
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-[#ea580c] rounded-full text-white text-[10px] font-bold uppercase tracking-wide">
                  {b.badge}
                </div>
                {b.isPopular && (
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-stone-950 rounded-full text-white text-[10px] font-bold">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1.5">{b.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{b.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[52px] items-start">
                    {b.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="px-2.5 py-0.5 bg-orange-50 border border-orange-100 text-stone-600 text-[10px] font-normal rounded-full">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center gap-2 h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{b.price}</span>
                    {b.oldPrice && (
                      <span className="text-stone-500 text-xs font-normal line-through">{b.oldPrice}</span>
                    )}
                    {b.saveText && (
                      <span className="px-2 py-0.5 bg-[#ea580c] text-white text-[9px] font-bold rounded-full">{b.saveText}</span>
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
