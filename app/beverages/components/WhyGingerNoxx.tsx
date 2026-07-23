import React from 'react';
import "./beverages.css";

const reasons = [
  {
    icon: "🔬",
    title: "Ginger-Fusion System",
    desc: "Every beverage uses whole ginger root — not extract powder or synthetic flavouring."
  },
  {
    icon: "💧",
    title: "No Hidden Additives",
    desc: "No artificial preservatives, colours, or sweeteners. What you read is exactly what is inside."
  },
  {
    icon: "✓",
    title: "Halal + Vegan Certified",
    desc: "Certified across every SKU — inclusive by formulation, not as an afterthought."
  },
  {
    icon: "🌍",
    title: "Ethically Sourced",
    desc: "Ginger from regenerative farms in Peru and India with full traceability."
  }
];

export default function WhyGingerNoxx() {
  return (
    <section className="beverages-section-dark flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-orange-600/70 text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          W H Y &nbsp; G I N G E R N O X X
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-10 mb-2">
          Real Ginger. Real Difference.
        </h2>

        {/* Line Divider */}
        <div className="w-11 h-0.5 bg-orange-600 my-4" />

        {/* 4 Cards Grid */}
        <div className="beverages-grid-4 justify-items-center mt-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="w-full max-w-[256px] h-[176px] bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center justify-center transition-transform hover:-translate-y-1">
              <div className="text-2xl leading-none mb-2 text-stone-900 text-center">{r.icon}</div>
              <h3 className="text-white text-sm font-bold font-['Poppins'] leading-6 mb-1 text-center">{r.title}</h3>
              <p className="text-white/40 text-xs font-normal font-['Poppins'] leading-5 text-center">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
