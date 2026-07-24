"use client";

import "./careers.css";

export default function CareersHero() {
  return (
    <section className="careers-hero-section">
      {/* Background Image */}
      <img
        src="/careers/one.png"
        alt="Careers Hero"
        className="careers-hero-bg"
      />

      {/* Gradient Overlay */}
      <div className="careers-hero-overlay"></div>

      {/* Content */}
      <div className="careers-hero-content">
        <h1 className="careers-hero-title">
          <span className="careers-title-white">Build </span>
          <span className="careers-title-orange">With Us</span>
        </h1>

        <p className="careers-hero-description">
          At Zoiko Foods Corp, we are shaping the future of
          <br />
          food innovation. Join a team where creativity, science, and global
          impact converge.
        </p>

        <div className="careers-hero-buttons">
          <a href="#jobs" className="careers-btn-primary">
            View Open Positions →
          </a>

          <a href="#why-work" className="careers-btn-secondary">
            Why Work With Us
          </a>
        </div>

        <div className="careers-hero-stats">
          <div className="career-stat">
            <h3>6+</h3>
            <p>Global Markets</p>
          </div>

          <div className="career-stat">
            <h3>40+</h3>
            <p>SKUs in Development</p>
          </div>

          <div className="career-stat">
            <h3>∞</h3>
            <p>Room to Grow</p>
          </div>
        </div>
      </div>
    </section>
  );
}