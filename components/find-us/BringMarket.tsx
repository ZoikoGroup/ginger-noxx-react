"use client";

const benefits = [
  "Minimum order thresholds may apply depending on region, format, and product mix",
  "Dedicated account manager assigned on approval",
  "Retail deck, POS materials, and category data available on request",
  "Contract manufacturing partners across 5 countries for local supply where possible",
  "HALAL, VEGAN, ISO 22000 certified across all SKUs",
];

export default function BringMarket() {
  return (
    <section className="bring-market-section">
      <div className="bring-market-container">

        {/* Heading */}

        <div className="bring-market-heading">
          <h2>
            Bring GingerNoxx <span>to Your Market</span>
          </h2>
        </div>

        <div className="bring-market-content">

          {/* LEFT */}

          <div className="bring-market-left">

            <div className="bring-market-image">
              {/* Replace with Image */}
            </div>

            <p>
              If you're a retailer, distributor, wholesaler, food service
              operator, or marketplace partner interested in carrying
              GingerNoxx, we'd love to hear from you.
            </p>

            <p>
              We work with partners who understand the value of building a
              category — not just adding an SKU. If that's you, let's talk.
            </p>

            <ul className="bring-market-benefits">
              {benefits.map((item, index) => (
                <li key={index}>
                  <span className="bring-market-dot"></span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT */}

          <div className="bring-market-form">

            <h3>Request Wholesale Pricing</h3>

            <p className="bring-market-subtitle">
              Our team will review your enquiry and respond within 2 business
              days.
            </p>

            <form className="wholesale-form">

              <div className="wholesale-form-grid">

                {/* Company */}

                <div className="wholesale-form-group">
                  <label>Company Name *</label>

                  <input
                    type="text"
                    placeholder="Your company"
                  />
                </div>

                {/* Contact */}

                <div className="wholesale-form-group">
                  <label>Contact Name *</label>

                  <input
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}

                <div className="wholesale-form-group wholesale-full">
                  <label>Business Email *</label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                  />
                </div>

                {/* Country */}

                <div className="wholesale-form-group">
                  <label>Country / Market *</label>

                  <select>
                    <option>Select...</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>

                {/* Channel */}

                <div className="wholesale-form-group">
                  <label>Channel Type *</label>

                  <select>
                    <option>Select...</option>
                    <option>Retailer</option>
                    <option>Distributor</option>
                    <option>Wholesaler</option>
                    <option>Food Service</option>
                    <option>Marketplace</option>
                  </select>
                </div>

                {/* Volume */}

                <div className="wholesale-form-group">
                  <label>Estimated Monthly Volume</label>

                  <select>
                    <option>Select...</option>
                    <option>0–500 Units</option>
                    <option>500–2,000 Units</option>
                    <option>2,000–10,000 Units</option>
                    <option>10,000+ Units</option>
                  </select>
                </div>

                {/* Category */}

                <div className="wholesale-form-group">
                  <label>Category Interest</label>

                  <select>
                    <option>Select...</option>
                    <option>Beverages</option>
                    <option>Condiments</option>
                    <option>Snacks</option>
                    <option>Full Range</option>
                  </select>
                </div>

              </div>

              {/* Notes */}

              <div className="wholesale-form-group wholesale-full">
                <label>Notes (optional)</label>

                <textarea
                  rows={4}
                  placeholder="Any additional context about your business or requirements..."
                />
              </div>

              <p className="wholesale-form-note">
                * Minimum order thresholds may apply depending on region,
                format, and product mix.
              </p>

              <div className="wholesale-form-buttons">

                <button
                  type="submit"
                  className="wholesale-primary-btn"
                >
                  Request Wholesale Pricing
                </button>

                <button
                  type="button"
                  className="wholesale-secondary-btn"
                >
                  Become a Distribution Partner
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}