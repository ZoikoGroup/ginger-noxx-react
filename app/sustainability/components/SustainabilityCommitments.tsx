import React from 'react';
import "./sustainability.css";

const commitments = [
  {
    icon: "🌱",
    title: "Ethical Sourcing",
    desc: "Sourcing ginger only from certified organic, fair-trade farms committed to soil health and farm-worker protection."
  },
  {
    icon: "✔️",
    title: "Clean Ingredients",
    desc: "Zero artificial preservatives, zero synthetics, zero artificial colours. Pure formulation that respects the raw ingredient."
  },
  {
    icon: "♻️",
    title: "Plant-First Packaging",
    desc: "Recyclable glass and compostable outer packaging across all product lines — working towards 100% plastic-free by 2026."
  },
  {
    icon: "🤝",
    title: "Inclusive Nutrition",
    desc: "Products designed for a broad spectrum of diets, allergen-free facility, price-accessible formulations."
  }
];

export default function SustainabilityCommitments() {
  return (
    <section className="sustain-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-heading">
          Our Sustainability <span className="sustain-heading-orange">Commitments</span>
        </h2>

        {/* Subtitle */}
        <p className="sustain-subheading">
          A comprehensive framework guiding every decision across sourcing, production, and community impact.
        </p>

        {/* 4 Cards */}
        <div className="sustain-commitments-grid">
          {commitments.map((item, idx) => (
            <div key={idx} className="sustain-card-white">
              <div className="sustain-card-icon">{item.icon}</div>
              <h3 className="sustain-card-title">{item.title}</h3>
              <p className="sustain-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
