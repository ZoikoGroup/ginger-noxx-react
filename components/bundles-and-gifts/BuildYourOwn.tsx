"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CustomBoxCategory {
  id: string;
  title: string;
  description: React.ReactNode;
  buttonLabel: string;
  image: string;
}

const customCategories: CustomBoxCategory[] = [
  {
    id: "beverages",
    title: "Add Beverages",
    description: (
      <>
        Any 3, 6, or 12 from our full beverage range.
        <br />
        Choose your favourites or let us pick.
      </>
    ),
    buttonLabel: "Select Beverages",
    image: "/Image/beverages.png",
  },
  {
    id: "snacks",
    title: "Add Snacks",
    description: (
      <>
        Energy Chews, Ginger Bites, Granola Clusters. Add
        <br />
        2, 3, or 4 snack varieties.
      </>
    ),
    buttonLabel: "Select Snacks",
    image: "/Image/snacks.png",
  },
  {
    id: "ingredients",
    title: "Add Ingredients",
    description: (
      <>
        Fire Sauce, Spice Blends, Ginger Paste. Build a
        <br />
        culinary gift or kitchen starter set.
      </>
    ),
    buttonLabel: "Select Ingredients",
    image: "/Image/spice-blends.png",
  },
];

export default function BuildYourOwn() {
  const [selectedState, setSelectedState] = useState<Record<string, boolean>>({});

  const handleSelect = (id: string) => {
    setSelectedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          B u i l d &nbsp; Y o u r &nbsp; O w n
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Build Your Own Box
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-4" />
        <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-7 max-w-[550px] text-center">
          Create a personalised GingerNoxx set — mix categories, match a person,
          <br className="hidden sm:inline" />
          build a ritual.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {customCategories.map((cat) => {
          const isSelected = selectedState[cat.id];
          return (
            <div
              key={cat.id}
              className="w-full max-w-[384px] h-[320px] bg-white rounded-3xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Image Header (Matching design gray/black banner) */}
              <div className="w-full h-40 relative bg-neutral-400 overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/20" />
              </div>

              {/* Body */}
              <div className="p-[21px] flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-6 mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                    {cat.description}
                  </p>
                </div>

                <button
                  onClick={() => handleSelect(cat.id)}
                  className={`w-full h-10 rounded-[999px] text-xs font-bold font-['Poppins'] transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? "bg-stone-950 text-white"
                      : "bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20"
                  }`}
                >
                  {isSelected ? "✓ Selected" : cat.buttonLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
