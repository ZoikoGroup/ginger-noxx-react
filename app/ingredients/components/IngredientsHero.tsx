import "./ingredients.css";

const IngredientsHero = () => {
  return (
    <section className="ingredients-hero-section">
      {/* Background */}
      <div className="ingredients-hero-bg"></div>

      {/* Background Image */}
      <img
        src="/ingredients/hero-bg.png"
        alt="Ginger Ingredients"
        className="ingredients-hero-image"
      />

      {/* Blur Effects */}
      <div className="ingredients-hero-blur-right"></div>
      <div className="ingredients-hero-blur-left"></div>

      <div className="ingredients-hero-content">
        <div className="ingredients-hero-badge">
          Shop · Ingredients
        </div>

        <h1 className="ingredients-hero-title">
          <span className="ingredients-hero-title-white">
            Ginger{" "}
          </span>
          <span className="ingredients-hero-title-orange">
            Ingredients
          </span>
        </h1>

        <p className="ingredients-hero-description">
          Bring bold flavour, warmth, and depth to every dish with real ginger.
        </p>
      </div>
    </section>
  );
};

export default IngredientsHero;