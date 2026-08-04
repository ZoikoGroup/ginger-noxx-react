"use client";

import React from 'react';
import "./snacks.css";

const SnacksCTA = () => {
  return (
    <section className="snacks-cta-section">
      <div className="snacks-cta-gradient"></div>

      <div className="snacks-cta-container">
        <span className="snacks-cta-subtitle">
          TRY MORE
        </span>

        <h2 className="snacks-cta-title">
          Build Your Snack Box Today
        </h2>

        <p className="snacks-cta-description">
          Pick a few, save more. Every GingerNoxx snack is made with real ginger
          and honest
          <br />
          ingredients.
        </p>

        <div className="snacks-cta-buttons">
          <button
            className="snacks-cta-primary"
            onClick={() => document.getElementById('most-loved-snacks')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Build Your Box
          </button>

          <button
            className="snacks-cta-secondary"
            onClick={() => document.getElementById('shop-by-craving')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop by Craving
          </button>
        </div>

        <div className="snacks-cta-tags">
          <span>HALAL</span>
          <span>VEGAN</span>
          <span>CLEAN LABEL</span>
        </div>
      </div>
    </section>
  );
};

export default SnacksCTA;