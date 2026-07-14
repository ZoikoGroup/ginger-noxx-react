export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <div className="newsletter-content">

          <div className="newsletter-left">
            <h2>Get Ginger-First</h2>

            <p>
              New launches, recipes, and early access — delivered to you first.
              Choose what matters most.
            </p>
          </div>

          <div className="newsletter-right">

            <input
              type="email"
              placeholder="your@email.com"
              className="newsletter-input"
            />

            <button className="newsletter-btn">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}