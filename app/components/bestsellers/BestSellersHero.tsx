export default function BestSellersHero() {
  return (
    <section className="best-hero">

      {/* Background Image */}
      <img
        src="/Image/best-sellers-hero.png"
        alt="Best Sellers Hero"
        className="best-hero-bg"
      />

      {/* Orange Glow */}
      <div className="best-hero-overlay"></div>

      <div className="container">

        <div className="best-hero-content">

          <h1 className="best-hero-title">
            Shop GingerNoxx <span>Best Sellers</span>
          </h1>

          <p className="best-hero-subtitle">
            Start with the most trusted GingerNoxx products —
            <br />
            chosen for taste, repeatability, and everyday relevance.
          </p>

          <a href="#" className="best-hero-btn">
            Explore Best Sellers
          </a>

          <div className="best-hero-bottom">

            <p className="best-hero-text">
              Not sure where to start?
            </p>

            <a href="#" className="best-hero-link">
              Find Your Ginger Profile
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}