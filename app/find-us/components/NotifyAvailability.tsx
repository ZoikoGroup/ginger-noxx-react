"use client";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
];

const products = [
  "Beverages",
  "Condiments",
  "Snacks",
  "Spices",
  "Gift Sets",
  "Full Product Range",
];

export default function NotifyAvailability() {
  return (
    <section className="notify-section">
      <div className="notify-container">

        <div className="notify-heading">
          <h2>
            Not Available Near You <span>Yet?</span>
          </h2>
        </div>

        <div className="notify-card">

          <div className="notify-image">
           
            <img
              src="/find-us/mail.png"
              alt="Mail"
              
            />
           
          </div>

          <h3>Tell Us Where You Are</h3>

          <p className="notify-subtitle">
            Tell us where you are and we will notify you when GingerNoxx
            becomes available near you. Your location helps us prioritise
            where to expand next.
          </p>

          <form className="notify-form">

            <div className="notify-grid">

              <div className="notify-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="notify-field">
                <label>Country *</label>

                <select>
                  <option>Select country...</option>

                  {countries.map((country) => (
                    <option key={country}>
                      {country}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            <div className="notify-field notify-full">
              <label>City / Postcode *</label>

              <input
                type="text"
                placeholder="Enter your city or postcode"
              />
            </div>

            <div className="notify-field notify-full">
              <label>Product Interest</label>

              <select>
                <option>
                  What are you looking for?
                </option>

                {products.map((product) => (
                  <option key={product}>
                    {product}
                  </option>
                ))}
              </select>

            </div>

            <button
              type="submit"
              className="notify-btn"
            >
              Notify Me When GingerNoxx Is Near Me →
            </button>

          </form>

          <p className="notify-note">
            By submitting, you consent to GingerNoxx storing your location
            and contact details to notify you of availability updates.
        </p>
          <p className="notify-policy">
            You can unsubscribe at any time. See our{" "}
            <a href="#">
              Privacy Policy
            </a>
            . We never sell your data. Compliant with
            GDPR and applicable privacy frameworks.
          </p>

        </div>

      </div>
    </section>
  );
}