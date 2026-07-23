import React from "react";

const ProductSystem = () => {
  return (
    <section className="product-system-section">
      <div className="product-system-container">

        <h2 className="product-system-title">
          Build Your <span>Ginger System</span>
        </h2>

        <div className="product-system-grid">

          {/* Card 1 */}
          <div className="system-card">
            <div className="system-image">
              {/* Replace with Figma image */}
              {/* <img src="/Image/energy-balls.png" alt="Ginger Energy Balls" /> */}
            </div>

            <div className="system-content">

              <span className="system-category">
                ⚡ Energy Layer
              </span>

              <h3>Ginger Energy Balls</h3>

              <p>$5.99 /pack · Snacks</p>

              <button className="system-btn">
                + Quick Add
              </button>

            </div>
          </div>

          {/* Card 2 */}
          <div className="system-card">
            <div className="system-image">
              {/* Replace with Figma image */}
              {/* <img src="/Image/bbq-sauce.png" alt="Ginger BBQ Sauce" /> */}
            </div>

            <div className="system-content">

              <span className="system-category">
                🍳 Culinary Layer
              </span>

              <h3>Ginger BBQ Sauce</h3>

              <p>$7.49 /btl · Condiments</p>

              <button className="system-btn">
                + Quick Add
              </button>

            </div>
          </div>

          {/* Card 3 */}
          <div className="system-card">
            <div className="system-image">
              {/* Replace with Figma image */}
              {/* <img src="/Image/granola.png" alt="Ginger Granola" /> */}
            </div>

            <div className="system-content">

              <span className="system-category">
                🌾 Nutrition Layer
              </span>

              <h3>Ginger Granola</h3>

              <p>$8.99 /bag · Pantry</p>

              <button className="system-btn">
                + Quick Add
              </button>

            </div>
          </div>

        </div>

        <p className="system-footer">
          One system. Multiple experiences.
        </p>

      </div>
    </section>
  );
};

export default ProductSystem;
