import Image from "next/image";
import "./innovation.css";

export default function InnovationHero() {
  return (
    <section className="innov-hero-section">
      {/* Background Image */}
      <Image
        src="/innovation/hero.png"
        alt="Innovation Lab Background"
        fill
        className="object-cover opacity-50"
        priority
      />

      {/* Radial Overlay & Glows */}
      <div className="innov-hero-radial" />
      <div className="innov-hero-blur-top" />
      <div className="innov-hero-blur-bottom" />

      {/* Content */}
      <div className="innov-hero-content">

        {/* Title */}
        <h1 className="innov-hero-title">
          Transforming Ideas into <span className="innov-hero-title-orange">Market Leaders</span>
        </h1>

        {/* Subtitle */}
        <p className="innov-hero-desc">
          Zoiko Foods Corp&apos;s Innovation Platform accelerates innovation by combining proprietary research, global consumer insights, and scalable product development into category-defining outcomes.
        </p>

        {/* Buttons */}
        <div className="innov-hero-buttons">
          <button className="innov-btn-primary">
            Explore the Platform
          </button>
          <button className="innov-btn-outline">
            Partner With Us
          </button>
        </div>

        {/* Stats Bar */}
        <div className="innov-stats-bar">
          <div className="innov-stat-item">
            <span className="innov-stat-val">40+</span>
            <span className="innov-stat-label">SKUs Developed</span>
          </div>
          <div className="innov-stat-item">
            <span className="innov-stat-val">6+</span>
            <span className="innov-stat-label">Global Markets</span>
          </div>
          <div className="innov-stat-item">
            <span className="innov-stat-val">5+</span>
            <span className="innov-stat-label">Product Categories</span>
          </div>
          <div className="innov-stat-item">
            <span className="innov-stat-val">1</span>
            <span className="innov-stat-label">Proprietary System</span>
          </div>
        </div>

      </div>
    </section>
  );
}
