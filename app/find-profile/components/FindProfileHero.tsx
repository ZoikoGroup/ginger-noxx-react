"use client";

import "./find-profile.css";

export default function FindProfileHero() {
  return (
    <section className="find-profile-hero">

      <div className="find-profile-glow-main"></div>

      <div className="find-profile-glow-top"></div>

      <div className="find-profile-glow-left"></div>

      <div className="find-profile-glow-center"></div>


      <div className="find-profile-badge">
        ✦ Personalised in Under 60 Seconds
      </div>


      <div className="find-profile-title">

        <h1>
          Find the GingerNoxx
        </h1>

        <h2>
          That Works for You
        </h2>

      </div>


      <p className="find-profile-description">
        Answer 5 quick questions and we'll match you with the
        <br />
        product designed for your lifestyle, goals, and preferences.
        No guesswork required.
      </p>


      <div className="find-profile-points">

        <div className="find-profile-point">
          <span></span>
          Takes under 60 seconds
        </div>


        <div className="find-profile-point">
          <span></span>
          Personalised to your lifestyle
        </div>


        <div className="find-profile-point">
          <span></span>
          Backed by real customer data
        </div>

      </div>


      <div className="find-profile-buttons">

        <button className="find-profile-primary-btn">
          Start My Profile
        </button>


        <button className="find-profile-secondary-btn">
          View Product
        </button>

      </div>
            <div className="find-profile-review">

        <div className="find-profile-avatar-wrapper">

          <div className="find-profile-avatar">
            AM
          </div>

          <div className="find-profile-avatar">
            JK
          </div>

          <div className="find-profile-avatar">
            PR
          </div>

          <div className="find-profile-avatar">
            LS
          </div>

          <div className="find-profile-avatar">
            +k
          </div>

        </div>


        <div className="find-profile-rating">

          <span className="find-profile-stars">
            ★★★★★
          </span>

          <span className="find-profile-rating-text">
            {" "}12,000+ found their perfect match
          </span>

        </div>

      </div>


    </section>
  );
}