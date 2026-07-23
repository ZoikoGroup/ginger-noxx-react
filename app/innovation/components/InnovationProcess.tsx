import React from 'react';
import './innovation.css';

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Research & Insight',
    desc: 'Consumer data, trend\nintelligence, cultural mapping'
  },
  {
    num: '02',
    icon: '💡',
    title: 'Ideation & Concept',
    desc: 'Structured creativity within the\nGinger-Fusion™ framework'
  },
  {
    num: '03',
    icon: '🧪',
    title: 'Formulation & Test',
    desc: 'Lab development, clinical\nreview, iterative refinement'
  },
  {
    num: '04',
    icon: '📦',
    title: 'Design & Package',
    desc: 'Premium, sustainable, globally\nscalable presentation'
  },
  {
    num: '05',
    icon: '🌍',
    title: 'Launch & Scale',
    desc: 'Multi-market distribution, DTC\n+ retail + wholesale'
  }
];

export default function InnovationProcess() {
  return (
    <section className="innov-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2 className="innov-heading">
          From Insight to <span className="innov-heading-orange">Market Leadership</span>
        </h2>

        {/* Subtitle */}
        <p className="innov-subheading">
          Every product begins with disciplined research and insight-driven ideation. We engineer solutions that define markets instead of following them.
        </p>

        {/* 5 Process Cards Grid */}
        <div className="innov-process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="innov-process-card">
              <div className="innov-process-num">{step.num}</div>
              <div className="innov-process-icon">{step.icon}</div>
              <h3 className="innov-process-title">{step.title}</h3>
              <p className="innov-process-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center w-full">
          <button className="innov-btn-primary">
            Learn Our Full Process →
          </button>
        </div>
      </div>
    </section>
  );
}
