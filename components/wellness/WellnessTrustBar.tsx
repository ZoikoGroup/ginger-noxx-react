"use client";

import React from "react";

export default function WellnessTrustBar() {
  const trustItems = [
    "Clean Ingredients",
    "No Artificial Additives",
    "Ethically Sourced",
    "Everyday Use",
    "Halal and Vegan Certified",
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
