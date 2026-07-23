import React from 'react';
import "./sustainability.css";

const collaborations = [
  {
    icon: "🌾",
    title: "Farmer Cooperatives",
    desc: "Direct partnerships with ginger farming\ncommunities in Peru, India, and Nigeria — fair\npricing, technical support, and long-term\ncommitment."
  },
  {
    icon: "🌍",
    title: "NGO Collaborations",
    desc: "Working with food security and environmental\nNGOs to extend our impact into the\ncommunities where our ingredients are grown."
  },
  {
    icon: "🔬",
    title: "Research Networks",
    desc: "Engaging with food science and sustainability\nresearch institutions to inform better practices\nand measure our environmental footprint."
  }
];

export default function SustainabilityCollaborations() {
  return (
    <section className="sustain-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-heading">
          Collaborating for <span className="sustain-heading-orange">a Better Future</span>
        </h2>

        {/* Subtitle */}
        <p className="sustain-subheading">
          Partnering with NGOs, local cooperatives, and global sustainability<br className="hidden sm:inline" />
          networks to amplify impact beyond our own operations.
        </p>

        {/* 3 Cards Grid */}
        <div className="sustain-collab-grid">
          {collaborations.map((item, idx) => (
            <div key={idx} className="sustain-collab-card">
              <div className="sustain-collab-icon">{item.icon}</div>
              <h3 className="sustain-collab-title">{item.title}</h3>
              <p className="sustain-collab-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Outline Button */}
        <button className="sustain-collab-btn">
          Join Our Initiatives
        </button>

      </div>
    </section>
  );
}
