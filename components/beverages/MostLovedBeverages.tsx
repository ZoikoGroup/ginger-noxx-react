"use client";

import React, { useState } from "react";

export interface LovedBeverageItem {
  id: string;
  categoryTag: string;
  name: React.ReactNode;
  badge?: string;
  badgeType?: "orange" | "black" | "green";
  description: React.ReactNode;
  price: string;
  originalPrice?: string;
  packTag?: string;
}

const lovedBeverages: LovedBeverageItem[] = [
  {
    id: "sparkling-lime",
    categoryTag: "BEVERAGES",
    name: (
      <>
        Sparkling Ginger Lime
        <br />
        Infusion
      </>
    ),
    badge: "MOST POPULAR",
    badgeType: "orange",
    description: (
      <>
        Zesty, light, real ginger warmth. The
        <br />
        signature GingerNoxx drink.
      </>
    ),
    price: "£19.99",
    packTag: "6-Pack",
  },
  {
    id: "fire-shot",
    categoryTag: "SHOTS",
    name: "Ginger Fire Shot",
    badge: "FAN FAVOURITE",
    badgeType: "black",
    description: (
      <>
        60ml concentrated ginger shot.
        <br />
        Start your day with intent.
      </>
    ),
    price: "£18.99",
    packTag: "6-Pack",
  },
  {
    id: "iced-tea",
    categoryTag: "ICED TEA",
    name: "Botanical Iced Tea",
    description: (
      <>
        Gentle ginger with botanical calm.
        <br />
        Perfect evening ritual.
      </>
    ),
    price: "£21.99",
    packTag: "6-Pack",
  },
  {
    id: "turmeric-blend",
    categoryTag: "WELLNESS",
    name: "Ginger Turmeric Blend",
    badge: "BEST VALUE",
    badgeType: "green",
    description: (
      <>
        Anti-inflammatory power in a
        <br />
        clean, warming drink format.
      </>
    ),
    price: "£22.99",
    originalPrice: "£27.99",
  },
];

export default function MostLovedBeverages() {
  const [cartState, setCartState] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    setCartState((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartState((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          M o s t &nbsp; L o v e d
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Most Loved Ginger Drinks
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 text-center">
          Most customers start here.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {lovedBeverages.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[256px] h-[384px] relative bg-white rounded-3xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
          >
            {/* Top Ash Image Banner Container */}
            <div className="w-full h-44 relative bg-neutral-400 overflow-hidden flex-shrink-0">
              {/* Badge */}
              {item.badge && (
                <div
                  className={`absolute left-[10px] top-[10px] h-6 px-3 rounded-[999px] flex items-center justify-center shadow-sm z-10 ${
                    item.badgeType === "black"
                      ? "bg-stone-950"
                      : item.badgeType === "green"
                      ? "bg-green-800"
                      : "bg-orange-600"
                  }`}
                >
                  <span className="text-white text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wide">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-[21px] pt-3.5 pb-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="text-orange-600 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-widest mb-1">
                  {item.categoryTag}
                </div>

                <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-6 mb-1.5 min-h-[48px] flex items-center">
                  {item.name}
                </h3>

                <div className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 min-h-[45px] mb-3">
                  {item.description}
                </div>
              </div>

              <div>
                {/* Price Row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600 text-xl font-bold font-['Poppins'] leading-8">
                    {item.price}
                  </span>

                  {item.originalPrice && (
                    <span className="text-stone-500 text-xs font-normal font-['Poppins'] line-through leading-5">
                      {item.originalPrice}
                    </span>
                  )}

                  {item.packTag && (
                    <div className="h-5 px-2 bg-orange-600 rounded-[999px] flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold font-['Poppins'] leading-4">
                        {item.packTag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`w-full h-10 rounded-[999px] text-xs font-bold font-['Poppins'] transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    cartState[item.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20"
                  }`}
                >
                  {cartState[item.id] ? "✓ Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
