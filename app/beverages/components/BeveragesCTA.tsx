"use client";

export default function BeveragesCTA() {
  const tags = [
    "HALAL",
    "VEGAN",
    "CLEAN LABEL",
    "ISO 22000",
  ];

  return (
    <section className="beverages-cta-section">
      <div className="beverages-cta-overlay"></div>

      <div className="beverages-cta-container">
        <span className="beverages-cta-label">
          START TODAY
        </span>

        <h2 className="beverages-cta-title">
          The Right Ginger Drink Is
          <br />
          Waiting
        </h2>

        <p className="beverages-cta-description">
          Start with a bestseller, follow our guide, or build your own
          routine. Every option is the right one.
        </p>

        <div className="beverages-cta-buttons">
          <button
            className="beverages-cta-primary"
            onClick={() => document.getElementById('most-loved-beverages')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Best Sellers
          </button>

          <button
            className="beverages-cta-secondary"
            onClick={() => document.getElementById('decision-engine')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Find Your Drink
          </button>
        </div>

        <div className="beverages-cta-tags">
          {tags.map((tag, index) => (
            <span key={index} className="beverages-cta-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}