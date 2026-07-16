import React from "react";

const ProductHero = () => {
  return (
    <section className="product-hero">
      <div className="product-container">

        {/* LEFT SIDE */}
        <div className="product-gallery">

          <img
            src="/Image/product-main.png"
            alt="Product"
            className="product-main-image"
          />

          <div className="product-thumbnails">

            <img
              src="/Image/thumb1.png"
              alt="Thumbnail 1"
              className="thumbnail active"
              

            />

            <img
              src="/Image/thumb2.png"
              alt="Thumbnail 2"
              className="thumbnail"
            />

            <img
              src="/Image/thumb2.png"
              alt="Thumbnail 3"
              className="thumbnail"
            />

            <img
              src="/Image/thumb2.png"
              alt="Thumbnail 4"
              className="thumbnail"
            />

            <img
              src="/Image/thumb2.png"
              alt="Thumbnail 5"
              className="thumbnail"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="product-info">

          <span className="product-category">
            Ginger-Fusion™ Functional Beverage
          </span>

          <h1 className="product-title">
            Sparkling Ginger Lime Infusion
          </h1>

          <div className="product-rating">

            <span className="stars">
              ★★★★★
            </span>

            <span className="rating-number">
              4.9
            </span>

            <span className="review-count">
              2,140 Reviews
            </span>

          </div>

          <div className="product-price">

            <h2>$18.69</h2>

            <span className="old-price">
              $21.99
            </span>

            <span className="save-badge">
              Save 15%
            </span>

          </div>

          <p className="price-note">
            $3.12 per can · Subscribed
          </p>

          <div className="product-description-box">

            <p>
              Bright citrus. Structured ginger heat.
              Clean, functional refreshment —
              without compromise.
            </p>

          </div>

          <div className="pack-heading">
            Select Pack Size
          </div>

          <div className="pack-options">

            <div className="pack-card">
              <h4>Single</h4>
              <span>$3.99</span>
            </div>

            <div className="pack-card active">
              <h4>6-Pack</h4>
              <span>$21.99</span>
            </div>

            <div className="pack-card">
              <h4>12-Pack</h4>
              <span>$39.99</span>
            </div>

          </div>
                    <div className="product-quantity">

            <button className="qty-btn">−</button>

            <span className="qty-number">1</span>

            <button className="qty-btn">+</button>

          </div>

          <div className="product-buttons">

            <button className="add-cart-btn">
              Add to Cart
            </button>

            <button className="buy-now-btn">
              Buy Now
            </button>

          </div>

          <div className="subscribe-box">

            <span className="subscribe-check">
              ✓
            </span>

            <p>
              Subscribe &amp; Save 15% — $18.69/delivery
            </p>

          </div>

          <p className="shipping-text">
            Ships in 1–2 days • Secure checkout • No commitment
          </p>

          <div className="product-features">

            <div className="feature-item">
              <span className="feature-dot"></span>
              <p>Real ginger — never extract-led</p>
            </div>

            <div className="feature-item">
              <span className="feature-dot"></span>
              <p>No artificial preservatives</p>
            </div>

            <div className="feature-item">
              <span className="feature-dot"></span>
              <p>Clean-label formulation</p>
            </div>

            <div className="feature-item">
              <span className="feature-dot"></span>
              <p>Vegan &amp; halal-friendly</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductHero;