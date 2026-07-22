"use client";

import React, { useState } from "react";

export interface AllBeverageItem {
  id: string;
  categoryTag: string;
  name: string;
  description: React.ReactNode;
  price: string;
}

const allBeverages: AllBeverageItem[] = [
  {
    id: "lemon-electrolyte",
    categoryTag: "HYDRATION",
    name: "Ginger Lemon Electrolyte",
    description: (
      <>
        Post-workout or midday reset —
        <br />
        clean hydration with ginger depth.
      </>
    ),
    price: "£20.99",
  },
  {
    id: "hibiscus-cooler",
    categoryTag: "BOTANICAL",
    name: "Ginger Hibiscus Cooler",
    description: (
      <>
        Floral and refreshing with gentle
        <br />
        ginger warmth.
      </>
    ),
    price: "£19.99",
  },
  {
    id: "mint-revival",
    categoryTag: "CALM",
    name: "Ginger Mint Revival",
    description: (
      <>
        Cooling mint meets warming
        <br />
        ginger. A genuinely refreshing
        <br />
        pairing.
      </>
    ),
    price: "£18.99",
  },
  {
    id: "orange-burst",
    categoryTag: "CITRUS",
    name: "Ginger Orange Burst",
    description: (
      <>
        Bright citrus energy with a warming
        <br />
        ginger kick.
      </>
    ),
    price: "£19.99",
  },
];

export default function AllGingerBeverages() {
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
          F u l l &nbsp; R a n g e
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          All Ginger Beverages
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] w-full justify-items-center">
        {allBeverages.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[256px] h-[384px] relative bg-white rounded-3xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
          >
            {/* Ash Image Banner */}
            <div className="w-full h-44 relative bg-neutral-400 overflow-hidden flex-shrink-0" />

            {/* Content Area */}
            <div className="p-[21px] pt-3.5 pb-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="text-orange-600 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-widest mb-1">
                  {item.categoryTag}
                </div>

                <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-6 mb-1.5">
                  {item.name}
                </h3>

                <div className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 min-h-[50px] mb-3">
                  {item.description}
                </div>
              </div>

              <div>
                {/* Price Row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600 text-xl font-bold font-['Poppins'] leading-8">
                    {item.price}
                  </span>
                </div>

                {/* Action Button */}
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
