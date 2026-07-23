import "./careers.css";

export default function CareersCTA() {
  return (
    <section className="careers-cta-section">
      <div className="careers-cta-overlay"></div>

      <div className="careers-cta-container">
        <h2 className="careers-cta-title">
          Join a Team That Values
          <br />
          Purpose and Precision
        </h2>

        <p className="careers-cta-description">
          Build products that define categories. Work with people who care about
          what they
          <br />
          create. Grow in an environment that rewards ambition and integrity.
        </p>

        <div className="careers-cta-buttons">
          <a href="#" className="careers-cta-primary">
            Apply Now →
          </a>

          <a href="#" className="careers-cta-secondary">
            Learn More About Zoiko
          </a>
        </div>
      </div>
    </section>
  );
}