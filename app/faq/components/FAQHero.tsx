import "./faq.css";

export default function FAQHero() {
  return (
    <section className="faq-hero-section">
      {/* Background Image */}
      <img
        src="/faqs/faq-hero-bg.png"
        alt="FAQ Hero Background"
        className="faq-hero-bg"
      />

      {/* Gradient Overlay */}
      <div className="faq-hero-overlay"></div>

      {/* Content */}
      <div className="faq-hero-content">
        <h1 className="faq-hero-title">
          <span className="faq-hero-title-white">Questions </span>
          <span className="faq-hero-title-orange">Answered</span>
        </h1>

        <p className="faq-hero-description">
          Everything you need to know about GingerNoxx products, usage,
          <br />
          and sourcing. We make it simple for you to enjoy your ginger ritual
          with confidence.
        </p>

        <div className="faq-search">
          <input
            type="text"
            placeholder="Search questions..."
          />
        </div>
      </div>
    </section>
  );
}