'use client';

import React from 'react';
import "./ingredients.css";

const products = [
  {
    title: "Ginger Fire Sauce",
    tag: "CONDIMENTS",
    badge: "BEST SELLER",
    badgeBg: "bg-[#ea580c]",
    desc: "Structured ginger heat with chili depth. The kitchen essential.",
    price: "£13.99",
    saleTag: "3-Pack"
  },
  {
    title: "Master Chef Blend",
    tag: "SPICE BLENDS",
    badge: "CHEF GRADE",
    badgeBg: "bg-[#1c1917]",
    desc: "Professional-grade spice architecture for home cooking. Adds depth instantly.",
    price: "£10.99",
    saleTag: null
  },
  {
    title: "Ginger Garlic Paste",
    tag: "PASTES",
    badge: null,
    badgeBg: null,
    desc: "The base of every great Asian-inspired dish. Concentrated and ready to use.",
    price: "£6.99",
    saleTag: null
  },
  {
    title: "Ginger Lemon Seasoning",
    tag: "SEASONINGS",
    badge: "VERSATILE",
    badgeBg: "bg-[#15803d]",
    desc: "Bright, citrus-forward. Rubs, dressings, grilled fish, and grain bowls.",
    price: "£8.99",
    saleTag: null
  }
];

export default function MostUsedKitchen() {
  return (
    <section className="ingred-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="ingred-tag">
          M O S T &nbsp; U S E D
        </div>

        {/* Title */}
        <h2 className="ingred-heading">
          Most Used in the Kitchen
        </h2>

        {/* Line Divider */}
        <div className="ingred-heading-line" />

        {/* Subtitle */}
        <p className="ingred-subheading mb-4">
          Most customers start here.
        </p>

        {/* 4 Cards Grid */}
        <div className="ingred-grid-4 justify-items-center">
          {products.map((p, idx) => (
            <div key={idx} className="ingred-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="ingred-card-img-ash">
                {p.badge && (
                  <div className={`absolute top-2.5 left-2.5 px-2.5 py-1 ${p.badgeBg} rounded-full text-white text-[9px] font-bold uppercase tracking-wider`}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-semibold uppercase tracking-wider block mb-1">{p.tag}</span>
                  <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] mb-1.5">{p.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{p.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center gap-2 h-7">
                    <span className="text-[#ea580c] text-lg font-bold font-['Poppins']">{p.price}</span>
                    {p.saleTag && (
                      <span className="px-2 py-0.5 bg-[#ea580c] text-white text-[9px] font-bold rounded-full uppercase">
                        {p.saleTag}
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
