"use client";

import React, { useState } from "react";

interface WellnessSetItem {
  id: string;
  icon: string;
  categoryTag: string;
  title: string;
  description: React.ReactNode;
  price: string;
  savings: string;
}

const sets: WellnessSetItem[] = [
  {
    id: "morning-set",
    icon: "🌅",
    categoryTag: "MORNING RITUAL",
    title: "Morning Wellness Set",
    description: (
      <>
        Fire Shot + Turmeric Blend. The complete
        <br />
        morning ginger protocol in one order.
      </>
    ),
    price: "£38.99",
    savings: "Save £2.99",
  },
  {
    id: "evening-set",
    icon: "🌙",
    categoryTag: "EVENING RITUAL",
    title: "Evening Calm Set",
    description: (
      <>
        Botanical Iced Tea + Ginger Mint Revival.
        <br />
        The perfect end-of-day pair.
      </>
    ),
    price: "£37.99",
    savings: "Save £2.99",
  },
  {
    id: "energy-set",
    icon: "⚡",
    categoryTag: "ENERGY FOCUS",
    title: "Energy and Focus Set",
    description: (
      <>
        Fire Shot + Ginger Orange Burst. Morning
        <br />
        energy that lasts through the afternoon.
      </>
    ),
    price: "£35.99",
    savings: "Save £2.99",
  },
  {
    id: "gut-set",
    icon: "🌿",
    categoryTag: "GUT HEALTH",
    title: "Gut Support Set",
    description: (
      <>
        Turmeric Blend + Botanical Tea + Fire Shot.
        <br />
        Three-way gut and digestion support daily.
      </>
    ),
    price: "£55.99",
    savings: "Save £7.99",
  },
];

export default function WellnessSets() {
  const [cartState, setCartState] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    setCartState((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartState((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          W e l l n e s s &nbsp; S e t s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Wellness Sets
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[524px] text-center">
          Curated pairings for specific daily wellness goals — ready to add and
          <br className="hidden sm:inline" />
          start.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] w-full justify-items-center">
        {sets.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[384px] h-[240px] bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-orange-100 p-6 flex flex-row items-start gap-4 transition-all duration-300 hover:shadow-lg"
          >
            {/* Icon Box */}
            <div className="w-14 h-14 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center flex-shrink-0 text-2xl">
              {item.icon}
            </div>

            {/* Right Details */}
            <div className="flex flex-col justify-between h-full flex-grow">
              <div>
                <span className="text-orange-600 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wider mb-0.5 block">
                  {item.categoryTag}
                </span>

                <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Price Row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600 text-lg font-bold font-['Poppins'] leading-7">
                    {item.price}
                  </span>
                  <span className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                    {item.savings}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`w-28 h-9 rounded-[999px] text-xs font-bold font-['Poppins'] transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    cartState[item.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-orange-600 hover:bg-orange-700 text-white shadow-sm"
                  }`}
                >
                  {cartState[item.id] ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
