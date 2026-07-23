import React from 'react';
import './innovation.css';

const features = [
  {
    icon: '📊',
    title: 'Consumer Insights',
    desc: 'Real-time data and trend\nintelligence informing every\ndecision — from flavour direction\nto format preference and market\ntiming.'
  },
  {
    icon: '🔬',
    title: 'Product Formulation',
    desc: 'Science-informed, scalable\nrecipes across multiple\ncategories — built around the\nGinger-Fusion™ system for\nconsistency and differentiation.'
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    desc: 'Fast-track concept to shelf with\niterative testing, real-world\nculinary benchmarking, and\ninclusive taste validation across\nmarkets.'
  },
  {
    icon: '🎨',
    title: 'Packaging & Design',
    desc: 'Premium, sustainable, globally\nadaptable — our design system\nscales across categories without\nlosing brand coherence or shelf\nimpact.'
  }
];

export default function InnovationFeatures() {
  return (
    <section className="innov-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2 className="innov-heading">
          Built to <span className="innov-heading-orange">Define Markets</span>
        </h2>

        {/* Subtitle */}
        <p className="innov-subheading">
          Four integrated capabilities that power every product from concept to shelf — combining data, science, speed, and design into a single scalable system.
        </p>

        {/* 4 Cards Grid */}
        <div className="innov-features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="innov-feature-card">
              <div className="innov-feature-icon">{feat.icon}</div>
              <h3 className="innov-feature-title">{feat.title}</h3>
              <p className="innov-feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
