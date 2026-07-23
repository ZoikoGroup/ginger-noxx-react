const ProductStartStrong = () => {
  return (
    <section className="start-strong-section">
      <div className="start-strong-container">

        <h2 className="start-strong-title">
          Start <span>Strong</span>
        </h2>

        <div className="start-strong-grid">

          {/* Starter Pack */}
          <div className="strong-card">
            <p className="strong-label">
              🛒 FOR FIRST-TIME BUYERS
            </p>

            <h3 className="strong-name">
              Starter Pack
            </h3>

            <div className="strong-tags">
              <span>Sparkling Lime ×6</span>
              <span>Energy Chews ×1</span>
              <span>Ginger Shot ×3</span>
            </div>

            <div className="strong-price">
              <span className="old-price">$34.96</span>

              <span className="new-price">$26.99</span>

              <span className="save-badge">
                Save 23%
              </span>
            </div>

            <p className="strong-unit-price">
              $3.00/can equivalent
            </p>

            <button className="strong-btn">
              Add Starter Pack →
            </button>
          </div>

          {/* Wellness Pack */}
          <div className="strong-card">
            <p className="strong-label">
              💚 FOR DAILY WELLNESS
            </p>

            <h3 className="strong-name">
              Wellness Pack
            </h3>

            <div className="strong-tags">
              <span>Sparkling Lime ×12</span>
              <span>Wellness Shots ×6</span>
              <span>Digestive Chews ×2</span>
            </div>

            <div className="strong-price">
              <span className="old-price">$61.92</span>

              <span className="new-price">$46.99</span>

              <span className="save-badge">
                Save 24%
              </span>
            </div>

            <p className="strong-unit-price">
              $2.94/can equivalent
            </p>

            <button className="strong-btn">
              Add Wellness Pack →
            </button>
          </div>

          {/* Family Pack */}
          <div className="strong-card">
            <p className="strong-label">
              👨‍👩‍👧 FOR FAMILY HOUSEHOLDS
            </p>

            <h3 className="strong-name">
              Family Pack
            </h3>

            <div className="strong-tags">
              <span>Sparkling Lime ×24</span>
              <span>Energy Chews ×3</span>
              <span>Sparkling Original ×12</span>
            </div>

            <div className="strong-price">
              <span className="old-price">$111.85</span>

              <span className="new-price">$82.99</span>

              <span className="save-badge">
                Save 26%
              </span>
            </div>

            <p className="strong-unit-price">
              $2.30/can equivalent
            </p>

            <button className="strong-btn">
              Add Family Pack →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductStartStrong;
