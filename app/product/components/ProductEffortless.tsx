const ProductEffortless = () => {
  return (
    <section className="effortless-section">
      <div className="effortless-container">
        <h2 className="effortless-title">
          Make It <span>Effortless</span>
        </h2>

        <div className="effortless-card">
          <div className="effortless-top-border"></div>

          {/* Main Illustration */}
          <div className="effortless-main-image">
            <img
              src="/Image/Recyclable-Packaging.png"
              alt="Subscribe & Save"
            />
          </div>

          <h3 className="effortless-heading">
            Subscribe &amp; Save 15%
          </h3>

          <p className="effortless-description">
            Consistency delivers the best experience. Set your delivery
            frequency, skip or pause anytime, and never run out of what
            you love.
          </p>

          <div className="effortless-features">
            <div className="feature-item">
              <img
                src="/Image/save.png"
                alt="Save"
                className="feature-icon"
              />
              <span>Save 15% every order</span>
            </div>

            <div className="feature-item">
              <img
                src="/Image/Flexible-delivery.png"
                alt="Delivery"
                className="feature-icon"
              />
              <span>Flexible delivery intervals</span>
            </div>

            <div className="feature-item">
              <img
                src="/Image/Pause-cancel.png"
                alt="Pause"
                className="feature-icon"
              />
              <span>Pause or cancel anytime</span>
            </div>
          </div>

          <button className="effortless-btn">
            Subscribe &amp; Save 15% →
          </button>

          <p className="effortless-note">
            No contracts. No penalties. No commitment anxiety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductEffortless;
