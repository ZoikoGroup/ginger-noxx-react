import React from 'react';
import "./bundles.css";

const reasons = [
  {
    icon: "🎯",
    title: "No Guesswork",
    desc: "Every bundle is pre-selected for taste, function, and ritual. No browsing required."
  },
  {
    icon: "🎁",
    title: "Premium Packaging",
    desc: "Sustainable and reusable packaging on every bundle — gift-ready from the box."
  },
  {
    icon: "💰",
    title: "Real Savings",
    desc: "Up to 26% savings versus buying individually — more product, lower cost per item."
  },
  {
    icon: "🌍",
    title: "Global Appeal",
    desc: "Designed to delight diverse palates. No cultural borders — universal quality."
  }
];

export default function WhyBundles() {
  return (
    <section className="bundles-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="bundles-tag">
          W h y &nbsp; B u n d l e s
        </div>

        {/* Title */}
        <h2 className="bundles-heading">
          Why Customers Choose Bundles
        </h2>

        {/* Divider */}
        <div className="bundles-heading-line" />

        {/* 4 Cards Grid */}
        <div className="bundles-grid-4 justify-items-center mt-6">
          {reasons.map((r, idx) => (
            <div key={idx} className="bundles-why-card">
              <div className="text-3xl leading-none mb-3 text-center">{r.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-2 text-center">{r.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 text-center">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
