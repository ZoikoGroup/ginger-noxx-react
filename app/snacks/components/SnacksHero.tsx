import "./snacks.css";

const SnacksHero = () => {
  return (
    <section className="snacks-hero-section">
      {/* Background Image */}
      <img
        src="/snacks/hero-bg.png"
        alt="Ginger Snacks"
        className="snacks-hero-image"
      />

      {/* Background Gradient */}
      <div className="snacks-hero-gradient"></div>

      {/* Blur Effects */}
      <div className="snacks-hero-blur-right"></div>
      <div className="snacks-hero-blur-left"></div>

      {/* Badge */}
      <div className="snacks-hero-badge">
        <span>SHOP · SNACKS</span>
      </div>

      {/* Heading */}
      <h1 className="snacks-hero-title">
        <span className="title-white">Ginger </span>
        <span className="title-orange">Snacks</span>
      </h1>

      {/* Description */}
      <p className="snacks-hero-description">
        Sweet, spicy, and everything in between
        <br />
        snacks made better with ginger.
      </p>
    </section>
  );
};

export default SnacksHero;