import "./privacy-content.css";

const PrivacyContent = () => {
  return (
    <section className="privacy-content">
      <div className="privacy-container">

        {/* Header */}

        <div className="privacy-header">
          <p className="privacy-label">
            LEGAL · PRIVACY
          </p>

          <h1 className="privacy-title">
            Privacy Policy
          </h1>

          <p className="privacy-date">
            <strong>Effective Date:</strong> March 2026 · GingerNoxx™ · A
            Zoiko Foods Corp brand
          </p>
        </div>

        {/* Intro */}

        <div className="privacy-intro">
          <p>
            At GingerNoxx™, a Zoiko Foods Corp brand, your privacy is a top
            priority. This Privacy Policy explains how we collect, use, and
            protect your personal information when you visit our website,
            interact with our digital platforms, or make purchases. By using
            our services, you agree to the practices outlined below.
          </p>
        </div>

        {/* Contents */}

        <div className="privacy-contents">

          <p className="privacy-contents-label">
            CONTENTS
          </p>

          <ul className="privacy-contents-list">
            <li>Information We Collect</li>
            <li>How We Use Your Information</li>
            <li>How We Share Your Information</li>
            <li>Cookies &amp; Tracking Technologies</li>
            <li>Your Rights</li>
            <li>Data Security</li>
            <li>Data Retention</li>
            <li>Children's Privacy</li>
            <li>International Transfers</li>
            <li>Policy Updates</li>
          </ul>

        </div>
        {/* Information We Collect */}

        <div className="privacy-section">
          <h2>Information We Collect</h2>

          <p className="privacy-text">
            We may collect the following types of information:
          </p>

          <ul className="privacy-policy-list">

            <li>
              <strong>Personal Information</strong> — name, email address,
              phone number, shipping and billing addresses, and payment
              information when you make purchases or sign up for newsletters.
            </li>

            <li>
              <strong>Account Information</strong> — login credentials,
              preferences, and order history when you create an account.
            </li>

            <li>
              <strong>Usage Data</strong> — browsing behaviour, pages visited,
              time spent on pages, and interactions with site features for
              analytics and website improvement.
            </li>

            <li>
              <strong>Device &amp; Technical Data</strong> — IP address,
              browser type, operating system, device identifiers, and cookies.
            </li>

          </ul>
        </div>
        {/* How We Use Your Information */}

        <div className="privacy-section">
          <h2>How We Use Your Information</h2>

          <p className="privacy-text">
            We use the information we collect to:
          </p>

          <ul className="privacy-policy-list">
            <li>Process orders and manage your account.</li>
            <li>Deliver personalised content, promotions, and product recommendations.</li>
            <li>Improve website functionality, security, and user experience.</li>
            <li>Communicate important updates, offers, and newsletters.</li>
            <li>Comply with legal obligations and prevent fraud.</li>
          </ul>
        </div>

        {/* How We Share Your Information */}

        <div className="privacy-section">
          <h2>How We Share Your Information</h2>

          <p className="privacy-text">
            We do not sell your personal data. We may share information with:
          </p>

          <ul className="privacy-policy-list">

            <li>
              <strong>Service Providers</strong> — payment processors, shipping
              companies, and IT service providers who help operate our business.
            </li>

            <li>
              <strong>Legal &amp; Regulatory Authorities</strong> — when required
              by law or to protect the rights and safety of GingerNoxx™ and our
              users.
            </li>

            <li>
              <strong>Business Transfers</strong> — in the event of a merger,
              acquisition, or sale of assets.
            </li>

          </ul>
        </div>

        {/* Cookies & Tracking Technologies */}

        <div className="privacy-section">
          <h2>Cookies &amp; Tracking Technologies</h2>

          <p className="privacy-text">
            We use cookies, pixels, and similar technologies to improve website
            performance, analyse trends, and provide relevant marketing. You can
            manage cookie preferences through our{" "}
            <a href="#">Cookie Settings</a> or your browser controls.
          </p>
        </div>

        {/* Your Rights */}

        <div className="privacy-section">
          <h2>Your Rights</h2>

          <p className="privacy-text">
            Depending on your region, you may have rights including:
          </p>

          <ul className="privacy-policy-list">
            <li>Accessing and updating your personal data.</li>
            <li>Requesting deletion or restriction of your data.</li>
            <li>Opting out of marketing communications.</li>
            <li>
              Accessing data portability and filing complaints with supervisory
              authorities.
            </li>
          </ul>
        </div>
        {/* Data Security */}

        <div className="privacy-section">
          <h2>Data Security</h2>

          <p className="privacy-text">
            We implement industry-standard security measures to protect your
            personal information, including encryption, secure servers, and
            access controls. However, no method of transmission over the
            Internet is completely secure.
          </p>
        </div>

        {/* Data Retention */}

        <div className="privacy-section">
          <h2>Data Retention</h2>

          <p className="privacy-text">
            We retain personal data only as long as necessary to fulfil the
            purposes outlined in this policy, comply with legal obligations,
            resolve disputes, and enforce agreements.
          </p>
        </div>

        {/* Children's Privacy */}

        <div className="privacy-section">
          <h2>Children's Privacy</h2>

          <p className="privacy-text">
            Our website and services are not intended for children under 13 (or
            higher minimum age in your jurisdiction). We do not knowingly
            collect personal information from children.
          </p>
        </div>

        {/* International Transfers */}

        <div className="privacy-section">
          <h2>International Transfers</h2>

          <p className="privacy-text">
            Your information may be transferred to and stored in countries
            outside your residence. We ensure appropriate safeguards are in
            place to protect your data when transferred internationally.
          </p>
        </div>

        {/* Policy Updates */}

        <div className="privacy-section">
          <h2>Policy Updates</h2>

          <p className="privacy-text">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with the updated date. We encourage you to
            review this policy regularly.
          </p>
        </div>

        {/* Contact */}

        <div className="privacy-contact">

          <p className="privacy-contact-label">
            CONTACT
          </p>

          <h3>
            Questions about your privacy or personal data?
          </h3>

          <p>
            Contact us at{" "}
            <a href="mailto:info@gingernoxx.com">
              info@gingernoxx.com
            </a>{" "}
            or via our{" "}
            <a href="/contact-us">
              Contact Us
            </a>{" "}
            page. We aim to respond within 2 business days.
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;