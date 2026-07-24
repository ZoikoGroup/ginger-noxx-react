import "./blog.css";

export default function BlogNewsletter() {
  return (
    <section className="blog-newsletter-section">
      <div className="blog-newsletter-card">
        {/* Label */}
        <p className="blog-newsletter-label">
          Stay Inspired
        </p>

        {/* Heading */}
        <h2 className="blog-newsletter-title">
          Get Lab Notes in Your Inbox
        </h2>

        {/* Description */}
        <p className="blog-newsletter-description">
          New recipes, formulation insights, and stories from the GingerNoxx
          team — delivered when it&apos;s worth reading.
        </p>

        {/* Subscribe Form */}
        <div className="blog-newsletter-form">
          <input
            type="email"
            placeholder="your@email.com"
            className="blog-newsletter-input"
          />

          <button className="blog-newsletter-button">
            Subscribe
          </button>
        </div>

        {/* Disclaimer */}
        <p className="blog-newsletter-note">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}