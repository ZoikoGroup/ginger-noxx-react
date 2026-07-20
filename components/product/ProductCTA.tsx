export default function ProductCTA() {
  return (
    <section className="product-cta-section">
      <div className="product-cta-container">
        <h2 className="product-cta-title">
          Real Ingredients. Structured Formulation.
          <br />
          <span>A Better Way to Experience Ginger.</span>
        </h2>

        <p className="product-cta-description">
          Every GingerNoxx product carries the same promise — bold, clean,
          <br />
          functional, and built around one ancient and powerful ingredient.
        </p>

        <div className="product-cta-buttons">
          <button className="cta-primary-btn">
            Add to Cart — 6-Pack →
          </button>

          <button className="cta-secondary-btn">
            Buy Now
          </button>
        </div>

        <a href="#" className="cta-subscribe-link">
          Subscribe &amp; Save 15% →
        </a>

        <p className="cta-note">
          Ships in 1–2 days &nbsp;•&nbsp; Secure checkout
          &nbsp;•&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  );
}
