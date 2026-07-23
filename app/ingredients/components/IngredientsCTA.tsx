import "./ingredients.css";

const IngredientsCTA = () => {
  return (
    <section className="ingredients-cta-section">
      <div className="ingredients-cta-overlay"></div>

      <div className="ingredients-cta-container">
        <span className="ingredients-cta-subtitle">
          C O O K&nbsp;&nbsp;W I T H&nbsp;&nbsp;G I N G E R
        </span>

        <h2 className="ingredients-cta-title">
          The Kitchen Starts With Ginger
        </h2>

        <p className="ingredients-cta-description">
          Every dish you cook with GingerNoxx ingredients gets a layer of depth
          that changes the <br />
          meal completely. Start with one product.
        </p>

        <div className="ingredients-cta-buttons">
          <button className="ingredients-cta-primary">
            Cook This Tonight
          </button>

          <button className="ingredients-cta-secondary">
            Shop Best Sellers
          </button>
        </div>

        <div className="ingredients-cta-badges">
          <span className="ingredients-cta-badge">HALAL</span>
          <span className="ingredients-cta-badge">VEGAN</span>
          <span className="ingredients-cta-badge ingredients-cta-badge-wide">
            CLEAN LABEL
          </span>
          <span className="ingredients-cta-badge ingredients-cta-badge-iso">
            ISO 22000
          </span>
        </div>
      </div>
    </section>
  );
};

export default IngredientsCTA;