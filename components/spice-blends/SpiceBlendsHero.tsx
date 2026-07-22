"use client";

import Link from "next/link";
import "./spice-blends.css";

export default function SpiceBlendsHero() {
  return (
    <section className="spice-blends-hero">
      <div className="spice-blends-glow"></div>

      <div className="spice-blends-container">
        <h1 className="spice-blends-title">
          <span className="title-white">The World's Flavors | </span>
          <span className="title-orange">Rooted in Ginger</span>
        </h1>

        <p className="spice-blends-description">
          Professional-grade spice blends crafted around the Ginger-Fusion™
          system — designed to transform everyday cooking into something
          exceptional.
        </p>

        <div className="spice-blends-buttons">
          <Link href="#" className="primary-btn">
            Shop Spice Blends
          </Link>

          <Link href="#" className="secondary-btn">
            Explore Chef Blends
          </Link>
        </div>

        <div className="spice-blends-stats">
          <div className="stat-item">
            <h3>6</h3>
            <p>Blend Profiles</p>
          </div>

          <div className="stat-item">
            <h3>4.9★</h3>
            <p>Average Rating</p>
          </div>

          <div className="stat-item">
            <h3>5k+</h3>
            <p>Kitchen Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}