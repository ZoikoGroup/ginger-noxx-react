import React from 'react';
import "./bundles.css";

const categories = [
  {
    title: "Add Beverages",
    desc: "Any 3, 6, or 12 from our full beverage range. Choose your favourites or let us pick.",
    btnText: "Select Beverages"
  },
  {
    title: "Add Snacks",
    desc: "Energy Chews, Ginger Bites, Granola Clusters. Add 2, 3, or 4 snack varieties.",
    btnText: "Select Snacks"
  },
  {
    title: "Add Ingredients",
    desc: "Fire Sauce, Spice Blends, Ginger Paste. Build a culinary gift or kitchen starter set.",
    btnText: "Select Ingredients"
  }
];

export default function BuildYourOwn() {
  return (
    <section className="bundles-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="bundles-tag">
          B u i l d &nbsp; Y o u r &nbsp; O w n
        </div>

        {/* Title */}
        <h2 className="bundles-heading">
          Build Your Own Box
        </h2>

        {/* Divider */}
        <div className="bundles-heading-line" />

        {/* Subtitle */}
        <p className="bundles-subheading mb-8">
          Create a personalised GingerNoxx set — mix categories, match a person, build a ritual.
        </p>

        {/* 3 Cards Grid */}
        <div className="bundles-grid-3 justify-items-center">
          {categories.map((c, idx) => (
            <div key={idx} className="bundles-build-card flex flex-col justify-between">
              {/* Ash Gray Image Placeholder */}
              <div className="w-full h-[160px] bg-[#a3a3a3] shrink-0" />

              {/* Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1.5">{c.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{c.desc}</p>
                </div>

                <button className="w-full h-10 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none mt-auto pt-1">
                  {c.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
