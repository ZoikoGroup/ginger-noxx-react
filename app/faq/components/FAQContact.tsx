import "./faq.css";

export default function FAQContact() {
  return (
    <section className="faq-contact-section">
      <div className="faq-contact-container">
        <h2 className="faq-contact-title">
          Still Have Questions?
        </h2>

        <p className="faq-contact-description">
          Our team is here to help. Contact us directly and we'll respond
          within 24–48 business hours.
        </p>

        <div className="faq-contact-buttons">
          <a href="/contact" className="faq-contact-btn-primary">
            Contact Us
          </a>

          <a href="/returns-policy" className="faq-contact-btn-secondary">
            Returns Policy
          </a>
        </div>
      </div>
    </section>
  );
}