"use client";

import React from "react";

export default function BeveragesTrustBar() {
  const trustItems = [
    "Real Ginger",
    "No Artificial Additives",
    "Halal & Vegan Certified",
    "4.9 Stars · 6,200+ Reviews",
    "Free UK Delivery Over £35",
  ];

  return (
    <div className="w-full h-14 bg-white border-t border-b border-orange-100 flex items-center justify-center gap-6 sm:gap-8 text-xs font-bold font-['Poppins'] text-stone-600 overflow-x-auto px-4 flex-nowrap scrollbar-none">
      {trustItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-orange-600 rounded-xs flex-shrink-0" />
          <span className="whitespace-nowrap">{item}</span>
        </div>
      ))}
    </div>
  );
}
