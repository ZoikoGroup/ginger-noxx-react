import React from 'react';
import "./snacks.css";

const benefits = [
  {
    icon: "🌿",
    title: "Real Ginger in Every Bite",
    desc: "Not ginger-flavoured. Actual ginger — in every single product."
  },
  {
    icon: "✓",
    title: "No Artificial Colours",
    desc: "Clean ingredients from start to finish — nothing synthetic, ever."
  },
  {
    icon: "🤝",
    title: "Halal and Vegan",
    desc: "Inclusive by design. Every snack meets both certifications."
  }
];

export default function SnacksThatDoMore() {
  return (
    <section className="snacks-section-dark flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-orange-600/70 text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          C L E A N &nbsp; I N G R E D I E N T S
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-10 mb-2">
          Snacks That Do More
        </h2>

        {/* Line Divider */}
        <div className="w-11 h-0.5 bg-orange-600 my-4" />

        {/* 3 Cards Grid */}
        <div className="snacks-grid-3 justify-items-center mt-4">
          {benefits.map((b, idx) => (
            <div key={idx} className="w-full max-w-[360px] h-[160px] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center transition-transform hover:-translate-y-1">
              <div className="text-2xl leading-none mb-3 text-stone-900 text-center">{b.icon}</div>
              <h3 className="text-white text-sm font-bold font-['Poppins'] leading-6 mb-1 text-center">{b.title}</h3>
              <p className="text-white/40 text-xs font-normal font-['Poppins'] leading-5 text-center max-w-[280px]">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
