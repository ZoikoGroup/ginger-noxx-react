import Image from "next/image";
import "./careers.css";

export default function CareersHero() {
  return (
    <section className="careers-hero-section">
      {/* Background Image */}
      <Image
        src="/innovation/hero.png"
        alt="Careers Background"
        fill
        className="object-cover opacity-50"
        priority
      />

      {/* Radial Overlay */}
      <div className="careers-hero-radial" />

      {/* Content */}
      <div className="careers-hero-content">

        {/* Title */}
        <h1 className="careers-hero-title">
          Build <span className="careers-hero-title-orange">With Us</span>
        </h1>

        {/* Subtitle */}
        <p className="careers-hero-desc">
          Shape the future of functional food and beverage. Explore open roles across R&amp;D, operations, marketing, and leadership.
        </p>

        {/* Buttons */}
        <div className="careers-hero-buttons">
          <button className="careers-btn-primary">
            View Open Positions ↓
          </button>
          <button className="careers-btn-outline">
            Why Join Us
          </button>
        </div>

        {/* Stats Bar */}
        <div className="careers-stats-bar">
          <div className="careers-stat-item">
            <span className="careers-stat-val">15+</span>
            <span className="careers-stat-label">Global Team</span>
          </div>
          <div className="careers-stat-item">
            <span className="careers-stat-val">40+</span>
            <span className="careers-stat-label">SKUs Developed</span>
          </div>
          <div className="careers-stat-item">
            <span className="careers-stat-val">11</span>
            <span className="careers-stat-label">Sourcing Regions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
