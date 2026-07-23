import React from 'react';
import "./sustainability.css";

const insights = [
  {
    icon: "📊",
    tag: "RESEARCH & REPORTS",
    title: "Annual Sustainability Report",
    desc: "Our annual impact report covering sourcing, packaging, emissions, and social outcomes across all markets."
  },
  {
    icon: "📋",
    tag: "BEST PRACTICES",
    title: "Clean Label Standards",
    desc: "How we define and apply clean-label principles across every GingerNoxx SKU — a model for transparent food formulation."
  },
  {
    icon: "🗂️",
    tag: "CASE STUDIES",
    title: "Farm-to-Shelf Traceability",
    desc: "Inside our ginger sourcing journey — from regenerative farms in Peru to finished products in our distribution centres."
  }
];

export default function SustainabilityInsights() {
  return (
    <section className="sustain-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-heading mb-4">
          Insights on Sustainable<br />
          <span className="sustain-heading-orange">Food Innovation</span>
        </h2>

        {/* Orange line */}
        <div className="sustain-insight-line" />

        {/* 3 Cards Grid */}
        <div className="sustain-insights-grid">
          {insights.map((item, idx) => (
            <div key={idx} className="sustain-insight-card">
              <div className="sustain-insight-icon">{item.icon}</div>
              <div className="sustain-insight-tag">{item.tag}</div>
              <h3 className="sustain-insight-title">{item.title}</h3>
              <p className="sustain-insight-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
