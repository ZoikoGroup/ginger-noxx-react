import "./innovation.css";

export default function InnovationCTA() {
  return (
    <section className="innovation-cta-section">
      <div className="innovation-cta-container">
        <h2 className="innovation-cta-title">
          Bring Your Ideas to Life
        </h2>

        <p className="innovation-cta-description">
          Whether you&apos;re a brand, a retailer, or a researcher — the Zoiko
          Foods Corp
          <br />
          Innovation Platform is the infrastructure your next product needs.
        </p>

        <div className="innovation-cta-buttons">
          <button className="innovation-cta-primary">
            Request a Demo →
          </button>

          <button className="innovation-cta-secondary">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}