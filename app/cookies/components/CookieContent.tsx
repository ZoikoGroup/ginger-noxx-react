import Link from "next/link";
import "./cookies.css";

const CookieContent = () => {
  return (
    <section className="cookie-content">
      <div className="cookie-container">
        {/* Header */}
        <div className="cookie-header">
          <span className="cookie-label">Legal · Cookies</span>

          <h1>Cookie Settings</h1>

          <p className="cookie-date">
            <strong>Effective Date:</strong>
            <span> March 2026 · GingerNoxx™ · A Zoiko Foods Corp brand</span>
          </p>
        </div>

        {/* Intro */}
        <div className="cookie-intro-box">
          <p>
            GingerNoxx™ uses cookies and similar tracking technologies to enhance
            your browsing experience, provide personalised content, analyse site
            performance, and support marketing efforts. By using our website, you
            consent to the use of cookies as described in this policy. You may
            manage your preferences at any time below.
          </p>
        </div>

        {/* Preferences */}
        <div className="cookie-preferences">
          <span className="cookie-section-label">
            Manage Your Preferences
          </span>

          {/* Essential */}
          <div className="cookie-card">
            <div className="cookie-card-content">
              <h3>Essential Cookies</h3>
              <p>
                Necessary for website operation — secure login, shopping cart,
                and account access. These cannot be disabled.
              </p>
            </div>

            <div className="cookie-card-status">
              <span>Always On</span>

              <div className="cookie-toggle cookie-toggle-on cookie-toggle-disabled">
                <div className="cookie-knob"></div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="cookie-card">
            <div className="cookie-card-content">
              <h3>Performance &amp; Analytics Cookies</h3>
              <p>
                Help us understand how visitors interact with our site, track
                usage, and optimise functionality. Do not store personally
                identifiable information.
              </p>
            </div>

            <div className="cookie-card-status">
              <span>Enabled</span>

              <div className="cookie-toggle cookie-toggle-on">
                <div className="cookie-knob"></div>
              </div>
            </div>
          </div>

          {/* Functional */}
          <div className="cookie-card">
            <div className="cookie-card-content">
              <h3>Functional Cookies</h3>
              <p>
                Remember your preferences, language selection, and display
                settings for a consistent and personalised experience.
              </p>
            </div>

            <div className="cookie-card-status">
              <span>Enabled</span>

              <div className="cookie-toggle cookie-toggle-on">
                <div className="cookie-knob"></div>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div className="cookie-card">
            <div className="cookie-card-content">
              <h3>Marketing &amp; Advertising Cookies</h3>
              <p>
                Enable us and our partners to deliver relevant promotions, track
                campaign effectiveness, and analyse engagement across channels.
              </p>
            </div>

            <div className="cookie-card-status">
              <span>Disabled</span>

              <div className="cookie-toggle">
                <div className="cookie-knob"></div>
              </div>
            </div>
          </div>

          {/* Third Party */}
          <div className="cookie-card">
            <div className="cookie-card-content">
              <h3>Third-Party Cookies</h3>
              <p>
                Placed by analytics and advertising providers. We do not control
                these cookies; their use is governed by their respective privacy
                policies.
              </p>
            </div>

            <div className="cookie-card-status">
              <span>Disabled</span>

              <div className="cookie-toggle">
                <div className="cookie-knob"></div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="cookie-actions">
            <button className="cookie-btn cookie-btn-primary">
              Save Preferences
            </button>

            <button className="cookie-btn cookie-btn-outline">
              Accept All
            </button>

            <button className="cookie-btn cookie-btn-light">
              Reject Non-Essential
            </button>
          </div>

          {/* Types of Cookies */}
          <div className="cookie-policy-section">
            <div className="cookie-policy-heading">
              <h2>Types of Cookies We Use</h2>
            </div>

            <p className="cookie-policy-text">
              <strong>Essential Cookies</strong> — These cookies are necessary
              for the operation of our website, including secure login, shopping
              cart functionality, and access to account information. These
              cannot be disabled.
            </p>

            <p className="cookie-policy-text">
              <strong>Performance &amp; Analytics Cookies</strong> — These
              cookies help us understand how visitors interact with our website,
              track site usage, measure traffic, and optimise functionality.
              They allow us to improve your experience but do not store
              personally identifiable information.
            </p>

            <p className="cookie-policy-text">
              <strong>Functional Cookies</strong> — Functional cookies remember
              your preferences, language selection, and display settings to
              provide a consistent and personalised experience.
            </p>

            <p className="cookie-policy-text">
              <strong>Marketing &amp; Advertising Cookies</strong> — These
              cookies enable us and our partners to deliver relevant promotions,
              track the effectiveness of campaigns, and analyse customer
              engagement across channels.
            </p>

            <p className="cookie-policy-text">
              <strong>Third-Party Cookies</strong> — We may use third-party
              services, such as analytics and advertising providers, that place
              cookies on your device. We do not control these third-party
              cookies, and their use is governed by their privacy policies.
            </p>
          </div>

          {/* More Policy */}
          <div className="cookie-policy-section">
            <div className="cookie-policy-heading">
              <h2>Managing Your Cookie Preferences</h2>
            </div>

            <p className="cookie-policy-text">
              You can update your cookie preferences at any time using the
              controls above, or by accessing your browser settings to block or
              delete cookies. Please note that disabling certain cookies may
              affect website functionality or your user experience.
            </p>

            <div className="cookie-policy-heading">
              <h2>Consent Withdrawal</h2>
            </div>

            <p className="cookie-policy-text">
              If you choose to withdraw consent for non-essential cookies, we
              will honour your preference, but essential cookies required for
              website operation will continue to function.
            </p>

            <div className="cookie-policy-heading">
              <h2>Updates to This Policy</h2>
            </div>

            <p className="cookie-policy-text">
              We may update our Cookie Settings policy periodically to reflect
              changes in our practices, technologies, or legal requirements. The
              most current version will always be available on our website.
            </p>

            {/* Contact */}
            <div className="cookie-contact-card">
              <span className="cookie-contact-label">Contact</span>

              <h3>Questions about our cookie practices?</h3>

              <p>
                Contact us at{" "}
                <a href="mailto:privacy@gingernoxx.com">
                  privacy@gingernoxx.com
                </a>{" "}
                or via our{" "}
                <Link href="/contact-us">Contact Us</Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieContent;