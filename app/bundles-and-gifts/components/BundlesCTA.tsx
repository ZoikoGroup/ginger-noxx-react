"use client";

export default function BundlesCTA() {
  return (
    <section className="bundles-cta-section">
      <div className="bundles-cta-overlay"></div>

      <div className="bundles-cta-container">
        <span className="bundles-cta-label">
          CHOOSE YOURS
        </span>

        <h2 className="bundles-cta-title">
          The Right Bundle Is Already Here
        </h2>

        <p className="bundles-cta-description">
          Whether you are gifting or treating yourself — every GingerNoxx
          bundle removes the uncertainty from choosing well.
        </p>

        <div className="bundles-cta-buttons">
          <button
            className="bundles-cta-primary"
            onClick={() => document.getElementById('all-bundles')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop All Bundles
          </button>

          <button
            className="bundles-cta-secondary"
            onClick={() => document.getElementById('need-fast')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Need a Gift Fast
          </button>
        </div>

        <div className="bundles-cta-badges">
          <span>HALAL</span>
          <span>VEGAN</span>
          <span>CLEAN LABEL</span>
          <span>GIFT WRAP INCLUDED</span>
        </div>
      </div>
    </section>
  );
}