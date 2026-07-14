import "./wholesale.css";

export default function WholesaleHero() {
  return (
    <section className="wholesale-hero">
      <div className="wholesale-hero-container">
        <h1 className="wholesale-title">
          Partner With <span>GingerNoxx</span>
        </h1>

        <p className="wholesale-subtitle">
          Premium ginger-fusion products built for retail
          <br />
          velocity, repeat purchase, and scalable distribution across five
          global markets.
        </p>

        <div className="wholesale-buttons">
          <a href="#" className="primary-btn">
            Apply for Wholesale Account
          </a>

          <a href="#" className="secondary-btn">
            Download Product Overview
          </a>
        </div>

        <div className="wholesale-features">
          <div className="feature-item">
            <span className="dot"></span>
            <p>Contract-aware pricing</p>
          </div>

          <div className="feature-item">
            <span className="dot"></span>
            <p>5 global markets</p>
          </div>

          <div className="feature-item">
            <span className="dot"></span>
            <p>HALAL · VEGAN · ISO 22000</p>
          </div>

          <div className="feature-item">
            <span className="dot"></span>
            <p>Dedicated account manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}