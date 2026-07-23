import React from 'react';
import "./ingredients.css";

const profiles = [
  {
    icon: "🔥",
    title: "Bold and Fiery",
    desc: "Strong ginger heat with chili depth. Marinades, stir-fries, glazes, hot sauces."
  },
  {
    icon: "🌿",
    title: "Aromatic and Herbal",
    desc: "Ginger-forward spice complexity with earthy undertones. Soups, braises, curries."
  },
  {
    icon: "🍋",
    title: "Bright and Citrus",
    desc: "Lemon and ginger together. Dressings, marinades, light fish and grain dishes."
  },
  {
    icon: "🍯",
    title: "Sweet and Warm",
    desc: "Ginger with honey warmth. Glazes, baking, sweet-savoury crossover dishes."
  }
];

export default function FlavourProfile() {
  return (
    <section className="ingred-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1120px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="ingred-tag">
          F I N D &nbsp; Y O U R &nbsp; F L A V O U R
        </div>

        {/* Title */}
        <h2 className="ingred-heading">
          Find Your Flavour Profile
        </h2>

        {/* Divider */}
        <div className="ingred-heading-line" />

        {/* Subtitle */}
        <p className="ingred-subheading mb-6">
          GingerNoxx ingredients span four distinct flavour territories. Find which speaks to your cooking.
        </p>

        {/* 4 Cards Grid */}
        <div className="ingred-grid-4 justify-items-center">
          {profiles.map((p, idx) => (
            <div key={idx} className="ingred-icon-card">
              <div className="text-3xl leading-none mb-3">{p.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">{p.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
