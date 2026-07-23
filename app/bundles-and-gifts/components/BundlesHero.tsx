import "./bundles.css";

export default function BundlesHero() {
  return (
    <section className="bundles-hero-section">
      <div className="bundles-hero-radial"></div>

      <img
        src="/bundles-gifts/hero-bg.png"
        alt="Bundles and Gifts"
        className="bundles-hero-image"
      />

      <div className="bundles-hero-blur-right"></div>
      <div className="bundles-hero-blur-left"></div>

      <div className="bundles-hero-badge">
        SHOP · BUNDLES AND GIFTS
      </div>

      <h1 className="bundles-hero-title">
        <span className="bundles-white">Bundles </span>
        <span className="bundles-orange">and</span>
        <span className="bundles-white"> Gifts</span>
      </h1>

      <p className="bundles-hero-description">
        Thoughtfully curated ginger experiences — ready to give or enjoy.
      </p>
    </section>
  );
}