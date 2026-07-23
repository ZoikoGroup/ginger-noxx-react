import "./wellness.css";

const WellnessHero = () => {
  return (
    <section className="wellness-hero-section">
      {/* Background Image */}
      <img
        src="/wellness/hero-bg.png"
        alt="Ginger Wellness"
        className="wellness-hero-image"
      />

      {/* Background Gradient */}
      <div className="wellness-hero-gradient"></div>

      {/* Blur Effects */}
      <div className="wellness-hero-blur-right"></div>
      <div className="wellness-hero-blur-left"></div>

      {/* Badge */}
      <div className="wellness-hero-badge">
        <span>SHOP · WELLNESS</span>
      </div>

      {/* Heading */}
      <h1 className="wellness-hero-title">
        <span className="title-white">Ginger </span>
        <span className="title-orange">Wellness</span>
      </h1>

      {/* Description */}
      <p className="wellness-hero-description">
        Support your body naturally — with the power of ginger.
      </p>
    </section>
  );
};

export default WellnessHero;