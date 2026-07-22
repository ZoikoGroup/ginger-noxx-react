"use client";

import React, { useState } from "react";

interface FastGiftOption {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  emoji: string;
}

const giftOptions: FastGiftOption[] = [
  {
    id: "deluxe",
    name: "Gift Set Deluxe",
    subtitle: "Full assortment · Premium packaging",
    price: "£79.99",
    emoji: "🎁",
  },
  {
    id: "wellness",
    name: "Wellness Pack",
    subtitle: "6 beverages + shots + botanical tea",
    price: "£34.99",
    emoji: "💚",
  },
];

export default function NeedGiftFast() {
  const [selectedId, setSelectedId] = useState<string>("deluxe");
  const [added, setAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-[32px] max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          N e e d &nbsp; a &nbsp; G i f t &nbsp; F a s t
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-[12px]">
          Need a Gift Fast?
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-[12px]" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7">
          Start with a popular choice — ready in seconds.
        </p>
      </div>

      {/* Main Card Box */}
      <div className="w-full max-w-[1120px] min-h-[288px] bg-stone-950 rounded-3xl p-6 sm:p-9 relative overflow-hidden shadow-2xl border border-stone-900 text-white flex flex-col justify-center">
        {/* Radial Background Light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_50%,rgba(234,88,12,0.20)_0%,transparent_65%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Info */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start">
            <div className="w-48 h-7 bg-orange-600/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600/30 flex items-center justify-center text-orange-400 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wider mb-4">
              Most Gifted This Month
            </div>

            <h3 className="text-white text-xl sm:text-2xl font-bold font-['Poppins'] leading-8 mb-2">
              Two bundles. Zero hesitation.
            </h3>

            <p className="text-white/40 text-sm font-normal font-['Poppins'] leading-5 max-w-[480px] mb-6">
              These are the two most gifted GingerNoxx bundles — chosen for their
              <br className="hidden sm:inline" />
              versatility, premium presentation, and broad appeal across tastes and
              <br className="hidden sm:inline" />
              lifestyles.
            </p>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2.5">
              {["Ready to Gift", "Fast Checkout", "Popular Choice", "Low Risk"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 bg-white/10 rounded-[999px] text-white/60 text-xs font-bold font-['Poppins'] leading-4"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Side Options */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-3.5 w-full">
            {giftOptions.map((option) => {
              const isSelected = selectedId === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedId(option.id)}
                  className={`w-full h-16 px-4 sm:px-5 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-orange-600/20 outline outline-1 outline-offset-[-1px] outline-orange-600 shadow-md shadow-orange-600/10"
                      : "bg-white/5 outline outline-1 outline-offset-[-1px] outline-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="text-xl flex-shrink-0">{option.emoji}</span>
                    <div className="min-w-0 flex flex-col justify-center">
                      <span className="text-white text-sm font-bold font-['Poppins'] leading-5 truncate">
                        {option.name}
                      </span>
                      <span className="text-white/40 text-xs font-normal font-['Poppins'] leading-5 truncate">
                        {option.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-orange-600 text-sm font-bold font-['Poppins'] leading-5 flex-shrink-0">
                    {option.price}
                  </span>
                </div>
              );
            })}

            {/* Quick Action Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full h-11 rounded-lg font-bold text-xs uppercase tracking-wider font-['Poppins'] leading-4 transition-all duration-300 mt-1 cursor-pointer ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20"
              }`}
            >
              {added
                ? "✓ Added to Cart!"
                : `Quick Order — ${
                    giftOptions.find((g) => g.id === selectedId)?.name
                  }`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
