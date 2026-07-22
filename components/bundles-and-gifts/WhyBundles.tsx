"use client";

import React from "react";

interface BenefitCard {
  emoji: string;
  title: string;
  description: React.ReactNode;
}

const benefits: BenefitCard[] = [
  {
    emoji: "🎯",
    title: "No Guesswork",
    description: (
      <>
        Every bundle is pre-selected for
        <br />
        taste, function, and ritual. No
        <br />
        browsing required.
      </>
    ),
  },
  {
    emoji: "🎁",
    title: "Premium Packaging",
    description: (
      <>
        Sustainable and reusable
        <br />
        packaging on every bundle — gift-
        <br />
        ready from the box.
      </>
    ),
  },
  {
    emoji: "💰",
    title: "Real Savings",
    description: (
      <>
        Up to 26% savings versus buying
        <br />
        individually — more product, lower
        <br />
        cost per item.
      </>
    ),
  },
  {
    emoji: "🌍",
    title: "Global Appeal",
    description: (
      <>
        Designed to delight diverse palates.
        <br />
        No cultural borders — universal
        <br />
        quality.
      </>
    ),
  },
];

export default function WhyBundles() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          W h y &nbsp; B u n d l e s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Why Customers Choose Bundles
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-[256px] h-48 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="text-stone-900 text-2xl font-normal leading-10 mb-2">
              {item.emoji}
            </div>

            <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">
              {item.title}
            </h3>

            <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
