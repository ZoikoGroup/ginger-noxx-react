"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <Image
        src="/Image/hero-banner.png.png"
        alt="Hero Banner"
        fill
        className="hero-image"
        priority
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-subtitle">
          WORLD'S FIRST GINGER-FUSION PLATFORM
        </p>

        <h1>Gingerly Made for You</h1>

        <p className="hero-description">
          Defining a new global category in food, drink, and<br /> wellness —
          AI-powered, IP-led, and crafted for people who take flavour
          seriously.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => window.location.href = "/best-sellers"}
          >
            Shop Best Sellers
          </button>

          <button
            className="btn-secondary"
            onClick={() => window.location.href = "/find-profile"}
          >
            Find Your Ginger Profile
          </button>
        </div>
      </div>
    </section>
  );
}
