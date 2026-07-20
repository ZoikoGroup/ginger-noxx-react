import "./why.css";

const badges = [
  "HALAL",
  "VEGAN",
  "CLEAN LABEL",
  "ISO 22000",
];

export default function WhyCTA() {
  return (
    <section className="why-cta">
      <div className="why-cta-overlay"></div>

      <div className="container">

        <p className="why-cta-label">
          EXPERIENCE GINGERNOXX
        </p>

        <h2>
          5,000 Years of Ginger.
          <br />
          <span>One Modern Platform.</span>
        </h2>

        <p className="why-cta-description">
          The ingredient has always been this powerful.
          GingerNoxx is simply the first platform
          built entirely around it.
        </p>

        <div className="why-cta-buttons">

          <a href="#" className="cta-primary">
            Explore Best Sellers →
          </a>

          <a href="#" className="cta-secondary">
            Find Your Ginger Profile
          </a>

        </div>

        <p className="why-cta-footer">
          Naturally derived. Globally trusted. Thoughtfully formulated.
        </p>

        <div className="why-cta-badges">
          {badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

      </div>
    </section>
  );
}