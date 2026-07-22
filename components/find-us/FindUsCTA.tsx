import "./find-us.css";

const FindUsCTA = () => {
  return (
    <section className="findus-cta-section">
      <div className="findus-cta-bg"></div>

      <div className="findus-cta-content">
        <p className="findus-cta-label">CHOOSE YOUR PATH</p>

        <h2 className="findus-cta-title">
          Choose the Fastest Path to
          <br />
          <span>GingerNoxx in Your Market</span>
        </h2>

        <p className="findus-cta-description">
          Buy online today, find a nearby store, or contact us about
          distribution. No dead ends — just
          <br />
          the right next step for you.
        </p>

        <div className="findus-cta-buttons">
          <button className="findus-btn-primary">
            Shop Online Now
          </button>

          <button className="findus-btn-secondary">
            Find a Store
          </button>

          <button className="findus-btn-secondary">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindUsCTA;