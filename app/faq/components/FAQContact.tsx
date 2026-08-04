import Link from "next/link";
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
          <Link href="/contact-us" className="faq-contact-btn-primary">
            Contact Us
          </Link>

          <Link href="/privacy" className="faq-contact-btn-secondary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}