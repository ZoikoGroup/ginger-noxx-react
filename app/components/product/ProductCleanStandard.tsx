import React from "react";

const ProductCleanStandard = () => {
  return (
    <section className="clean-standard-section">
      <div className="clean-standard-container">

        <h2 className="clean-standard-title">
          Clean Isn't a Claim — <span>It's a Standard</span>
        </h2>

        <div className="clean-standard-grid">

          {/* What's OUT */}
          <div className="clean-card clean-out">

            <span className="clean-label">What's OUT</span>

            <ul className="clean-list">
              <li>
                <span className="icon-box">✕</span>
                <span>Artificial preservatives</span>
              </li>

              <li>
                <span className="icon-box">✕</span>
                <span>Hidden sugars &amp; sweeteners</span>
              </li>

              <li>
                <span className="icon-box">✕</span>
                <span>Synthetic flavour shortcuts</span>
              </li>

              <li>
                <span className="icon-box">✕</span>
                <span>Extract-only ginger posturing</span>
              </li>

              <li>
                <span className="icon-box">✕</span>
                <span>Unnecessary additives</span>
              </li>
            </ul>

          </div>

          {/* What's IN */}
          <div className="clean-card clean-in">

            <span className="clean-label">What's IN</span>

            <ul className="clean-list">
              <li>
                <span className="icon-box">✓</span>
                <span>Real ginger root</span>
              </li>

              <li>
                <span className="icon-box">✓</span>
                <span>Natural citrus and botanicals</span>
              </li>

              <li>
                <span className="icon-box">✓</span>
                <span>Clean formulation logic</span>
              </li>

              <li>
                <span className="icon-box">✓</span>
                <span>Transparent ingredient declaration</span>
              </li>

              <li>
                <span className="icon-box">✓</span>
                <span>Everything earns its place</span>
              </li>
            </ul>

          </div>

        </div>

        <p className="clean-footer">
          If it doesn't serve the product, it doesn't belong in it.
        </p>

      </div>
    </section>
  );
};

export default ProductCleanStandard;