import React from 'react';
import "./sustainability.css";

const stats = [
  {
    value: "3+",
    title: "Regenerative Farm Partnerships",
    desc: "Directly supporting ginger cooperatives in Peru, India, and Nigeria with fair-trade commitments."
  },
  {
    value: "80%",
    title: "Recyclable Packaging Target",
    desc: "Current packaging portfolio on track toward our 2027 fully recyclable or compostable commitment."
  },
  {
    value: "0",
    title: "Artificial Additives Used",
    desc: "Across every SKU in every market — no artificial preservatives, colourings, or synthetic flavourings."
  }
];

export default function SustainabilityImpact() {
  return (
    <section className="sustain-section-orange flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-heading !text-white">
          Our Impact <span className="text-orange-100">in Numbers</span>
        </h2>

        {/* Subtitle */}
        <p className="sustain-subheading !text-white/80">
          Fair trade ginger, zero-waste operations, and transparent carbon accounting across all line items.
        </p>

        {/* 3 White Cards */}
        <div className="sustain-impact-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="sustain-impact-card">
              <div className="sustain-impact-val">{stat.value}</div>
              <h3 className="sustain-impact-title">{stat.title}</h3>
              <p className="sustain-impact-desc">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
