import React from 'react';
import "./careers.css";

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Pushing boundaries with\nstructured creativity and the\nGinger-Fusion™ system — ideas\nthat define markets, not follow\nthem.'
  },
  {
    icon: '⚖️',
    title: 'Integrity',
    desc: 'Responsible sourcing,\nsustainability, and ethical\ndecision-making in everything we\ndo — no shortcuts, no\ncompromises.'
  },
  {
    icon: '🤝',
    title: 'Inclusion',
    desc: 'Diverse teams, inclusive culture,\nand equitable opportunities for all\n— we build better products when\nevery perspective is heard.'
  },
  {
    icon: '🌍',
    title: 'Impact',
    desc: 'Your work drives measurable\nchange in food, wellness, and\nsustainability — here, purpose\nand performance are the same\nthing.'
  }
];

export default function CareersValues() {
  return (
    <section className="careers-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="careers-heading">
          What We <span className="careers-heading-orange">Stand For</span>
        </h2>

        {/* 4 Cards Grid */}
        <div className="careers-values-grid justify-items-center">
          {values.map((v, idx) => (
            <div key={idx} className="careers-value-card">
              <div className="text-3xl leading-10 mb-2 text-center">{v.icon}</div>
              <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-6 mb-2 text-center">{v.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 text-center whitespace-pre-line">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
