import React from "react";

const ProductBenefits = () => {
  return (
    <section className="product-benefits">

      <div className="benefits-container">

        <h2 className="benefits-title">
          Designed for <span>Real Life</span>
        </h2>

        <div className="benefits-grid">

          {/* Card 1 */}
          <div className="benefit-card">
            <img
              src="/Image/icon-digestive.png"
              alt="Digestive Comfort"
              className="benefit-icon"
            />

            <h3>Digestive Comfort</h3>

            <p>
              Associated with ginger's naturally occurring compounds,
              traditionally used to support digestive comfort and everyday
              gut wellness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <img
              src="/Image/icon-refreshment.png"
              alt="Natural Refreshment"
              className="benefit-icon"
            />

            <h3>Natural Refreshment</h3>

            <p>
              A clean, flavour-forward alternative to sugary beverages —
              refreshing without the compromise of artificial ingredients or
              excessive sweeteners.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <img
              src="/Image/icon-energy.png"
              alt="Clean Energy Support"
              className="benefit-icon"
            />

            <h3>Clean Energy Support</h3>

            <p>
              Ginger's naturally occurring bioactive compounds are studied for
              their role in supporting the body's natural energy processes
              throughout the day.
            </p>
          </div>

          {/* Card 4 */}
          <div className="benefit-card">
            <img
              src="/Image/icon-hydration.png"
              alt="Hydration With Purpose"
              className="benefit-icon"
            />

            <h3>Hydration With Purpose</h3>

            <p>
              Carbonated hydration with functional intent — more than just
              water, less than a supplement. Designed for daily integration
              into any routine.
            </p>
          </div>

        </div>

        <p className="benefits-note">
          Not intended to diagnose, treat, cure, or prevent any disease.
          Benefits are based on traditional use and ongoing scientific
          research. Individual results may vary.
        </p>

      </div>

    </section>
  );
};

export default ProductBenefits;
