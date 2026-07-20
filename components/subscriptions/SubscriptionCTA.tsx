import React from "react";

const SubscriptionCTA = () => {
  return (
    <section className="subscription-cta-section">
      <div className="subscription-cta-overlay"></div>

      <div className="subscription-cta-container">
        <h2 className="subscription-cta-title">
          Start Your Ginger
          <br />
          Subscription <span>Today</span>
        </h2>

        <p className="subscription-cta-description">
          Your daily ginger ritual, made effortless. Choose your delivery <br/>
          frequency, save 15% on every order, and cancel whenever you want —
          no questions asked.
        </p>

        <div className="subscription-cta-card">
          <h4 className="subscription-cta-heading">
            Choose Your Delivery Frequency
          </h4>

          <div className="subscription-cta-frequency">
            <button className="subscription-cta-btn">
              Every 2 Weeks
            </button>

            <button className="subscription-cta-btn active">
              Every 4 Weeks
            </button>

            <button className="subscription-cta-btn">
              Every 6 Weeks
            </button>

            <button className="subscription-cta-btn">
              Every 8 Weeks
            </button>
          </div>

          <div className="subscription-cta-actions">
            <button className="subscription-cta-save">
              Subscribe &amp; Save
            </button>

            <button className="subscription-cta-plan">
              View All Plans
            </button>
          </div>
        </div>

        <div className="subscription-cta-badges">
          <span className="subscription-cta-badge">HALAL</span>
          <span className="subscription-cta-badge">VEGAN</span>
          <span className="subscription-cta-badge">CLEAN LABEL</span>
          <span className="subscription-cta-badge">ISO 22000</span>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;