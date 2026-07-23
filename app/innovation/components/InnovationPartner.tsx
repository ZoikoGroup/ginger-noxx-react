import React from 'react';
import './innovation.css';

const partnerCards = [
  {
    icon: '🏢',
    title: 'CPG Brands',
    desc: 'Accelerate category entry or product line expansion using our formulation infrastructure and Ginger-Fusion™ system.'
  },
  {
    icon: '🏪',
    title: 'Retail Partners',
    desc: 'Private label development at innovation-grade quality — our platform scales to retail volume without sacrificing differentiation.'
  },
  {
    icon: '🔬',
    title: 'Research Institutions',
    desc: 'Joint research into functional ingredients, ginger bioactives, and clean-label food science with real commercial application.'
  }
];

export default function InnovationPartner() {
  return (
    <section className="innov-section-cream flex justify-center px-6">
      <div className="innov-partner-grid">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <div className="innov-partner-tag">PARTNER WITH US</div>
          <div className="innov-partner-quote">
            &quot;Brands, retailers, and research partners can leverage Zoiko Foods Corp&apos;s platform to accelerate innovation.&quot;
          </div>
          <p className="innov-partner-desc">
            We open our platform to qualified partners — CPG brands looking to extend into new categories, retailers developing private label, and research institutions exploring functional food systems. Our infrastructure is your shortcut.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="innov-btn-primary">
              Start a Collaboration →
            </button>
            <button className="innov-btn-outline !text-[#D4621A] !border-[#D4621A] hover:!bg-orange-50">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Column: 3 Partner Cards */}
        <div className="flex flex-col gap-4 w-full">
          {partnerCards.map((pc, idx) => (
            <div key={idx} className="innov-partner-card">
              <div className="innov-partner-card-icon">{pc.icon}</div>
              <div className="flex flex-col text-left">
                <h3 className="innov-partner-card-title">{pc.title}</h3>
                <p className="innov-partner-card-desc">{pc.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
