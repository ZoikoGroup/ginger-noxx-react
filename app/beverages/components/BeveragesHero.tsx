import "./beverages.css";

export default function BeveragesHero() {
  return (
    <section className="beverages-hero-section">
      <div className="beverages-hero-radial"></div>

      {/* Replace with your actual background image */}
      <img
        src="/images/beverages/beverages-hero-bg.png"
        alt="Ginger Beverages"
        className="beverages-hero-image"
      />

      <div className="beverages-hero-blur-right"></div>
      <div className="beverages-hero-blur-left"></div>

      <div className="beverages-hero-badge">
        SHOP · BEVERAGES
      </div>

      <h1 className="beverages-hero-title">
        <span className="title-white">Ginger </span>
        <span className="title-orange">Beverages</span>
      </h1>

      <p className="beverages-hero-description">
        Refreshment, energy, and daily wellness
        <br />
        powered by real ginger.
      </p>
    </section>
  );
}