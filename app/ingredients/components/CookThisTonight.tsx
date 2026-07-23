import React from 'react';
import "./ingredients.css";

const dishes = [
  {
    icon: "🥘",
    title: "Stir Fry Bowl",
    desc: "Quick, satisfying, and packed with ginger heat. 20 minutes from pan to table."
  },
  {
    icon: "🍗",
    title: "Ginger Chicken",
    desc: "Roast or pan-fry. The Ginger Fire Sauce marinade transforms any chicken dish."
  },
  {
    icon: "🍜",
    title: "Quick Noodles",
    desc: "12 minutes. One pan. Real depth from the sauce — the fastest ginger meal."
  }
];

export default function CookThisTonight() {
  return (
    <section className="ingred-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1120px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="ingred-tag">
          C O O K &nbsp; T H I S &nbsp; T O N I G H T
        </div>

        {/* Title */}
        <h2 className="ingred-heading">
          Cook This Tonight
        </h2>

        {/* Divider */}
        <div className="ingred-heading-line" />

        {/* Subtitle */}
        <p className="ingred-subheading mb-6">
          Start with a simple dish — we will show you exactly what to use.
        </p>

        {/* 3 Cards Grid */}
        <div className="ingred-grid-3 justify-items-center">
          {dishes.map((d, idx) => (
            <div key={idx} className="ingred-icon-card">
              <div className="text-3xl leading-none mb-3">{d.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1.5">{d.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
