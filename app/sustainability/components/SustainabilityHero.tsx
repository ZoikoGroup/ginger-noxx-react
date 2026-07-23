import Image from "next/image";
import "./sustainability.css";

export default function SustainabilityHero() {
  return (
    <section className="sustain-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Farm Background"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Radial Overlay */}
      <div className="sustain-hero-radial" />

      {/* Content */}
      <div className="sustain-hero-content">

        {/* Title */}
        <h1 className="sustain-hero-title">
          Rooted in <span className="sustain-hero-title-orange">Responsibility</span>
        </h1>

        {/* Subtitle */}
        <p className="sustain-hero-desc">
          Sustainability is at the core of Zoiko Foods Corp — from ethical sourcing to planet-positive packaging and regenerative practices that protect what matters most.
        </p>

        {/* Buttons */}
        <div className="sustain-hero-buttons">
          <button className="sustain-btn-primary">
            Explore Our Commitment
          </button>
          <button className="sustain-btn-outline">
            Our Practices
          </button>
        </div>

        {/* Stats Bar */}
        <div className="sustain-stats-bar">
          <div className="sustain-stat-item">
            <span className="sustain-stat-val">100%</span>
            <span className="sustain-stat-label">Halal &amp; Vegan<br />Certified</span>
          </div>
          <div className="sustain-stat-item">
            <span className="sustain-stat-val">0</span>
            <span className="sustain-stat-label">Artificial<br />Preservatives</span>
          </div>
          <div className="sustain-stat-item">
            <span className="sustain-stat-val">5+</span>
            <span className="sustain-stat-label">Sourcing<br />Regions</span>
          </div>
          <div className="sustain-stat-item">
            <span className="sustain-stat-val">♻️</span>
            <span className="sustain-stat-label">Planet-First<br />Packaging</span>
          </div>
        </div>

      </div>
    </section>
  );
}
