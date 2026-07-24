"use client";

import "./wellness.css";

const WellnessCTA = () => {
  return (
    <section className="wellness-cta-section">
      <div className="wellness-cta-overlay"></div>

      <div className="wellness-cta-container">
        <span className="wellness-cta-subtitle">
          START SIMPLY
        </span>

        <h2 className="wellness-cta-title">
          One Step Into Daily Ginger
          <br />
          Wellness
        </h2>

        <p className="wellness-cta-description">
          No protocols. No extremes. Just real ginger, every day, in the
          format that works for you.
        </p>

        <div className="wellness-cta-buttons">
          <button
            className="wellness-cta-primary"
            onClick={() => document.getElementById('easiest-way-to-begin')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Simple
          </button>

          <button
            className="wellness-cta-secondary"
            onClick={() => document.getElementById('daily-rhythm')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Build Your Rhythm
          </button>
        </div>

        <div className="wellness-cta-badges">
          <span className="wellness-cta-badge">HALAL</span>
          <span className="wellness-cta-badge">VEGAN</span>
          <span className="wellness-cta-badge">CLEAN LABEL</span>
          <span className="wellness-cta-badge">ISO 22000</span>
        </div>
      </div>
    </section>
  );
};

export default WellnessCTA;