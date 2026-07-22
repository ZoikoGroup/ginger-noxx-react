import "./accessibility-content.css";

const AccessibilityContent = () => {
  return (
    <section className="accessibility-content">
      <div className="accessibility-container">

        {/* Header */}

        <div className="accessibility-header">
          <p className="accessibility-label">
            LEGAL · ACCESSIBILITY
          </p>

          <h1 className="accessibility-title">
            Accessibility
          </h1>

          <p className="accessibility-date">
            <strong>Effective Date:</strong> March 2026 · GingerNoxx™ · A Zoiko
            Foods Corp brand
          </p>
        </div>

        {/* Intro */}

        <div className="accessibility-intro-box">
          <p>
            GingerNoxx™ is committed to ensuring that our website and digital
            content are accessible to all users, including individuals with
            disabilities. We strive to provide an inclusive online experience
            that meets or exceeds the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA standards.
          </p>
        </div>

        {/* Accessible Design */}

        <div className="accessibility-section">
          <h2>Accessible Design</h2>

          <p className="accessibility-text">
            Our website is designed with accessibility in mind, including:
          </p>

          <ul className="accessibility-list">
            <li>Clear and consistent navigation across pages </li>
            <li>Text alternatives for images, icons, and other non-text content </li>
            <li> High-contrast colour options to support readabilit </li>
            <li> Resizable text without loss of content or functionality </li>
            <li> Keyboard navigability for users who cannot use a mouse </li>
            <li> Properly labelled forms, buttons, and interactive elements </li>
          </ul>
        </div>

        {/* Assistive Technologies */}

        <div className="accessibility-section">
          <h2>Assistive Technologies</h2>

          <p className="accessibility-text">
            Our website supports the use of assistive technologies, such as
            screen readers, voice recognition software, and magnification tools,
            to ensure users with diverse needs can access content effectively.
          </p>
        </div>

        {/* Continuous Improvement */}

        <div className="accessibility-section">
          <h2>Continuous Improvement</h2>

          <p className="accessibility-text">
            Accessibility is an ongoing priority. We regularly review our
            website and digital platforms to identify and address potential
            barriers, update content, and improve usability for all users.
          </p>
        </div>

        {/* Third Party */}

        <div className="accessibility-section">
          <h2>Third-Party Content</h2>

          <p className="accessibility-text">
            While we strive for accessibility, some third-party content,
            embedded services, or external links may not fully meet
            accessibility standards. We encourage users to provide feedback so
            we can work toward improvements.
          </p>
        </div>

        {/* Feedback */}

        <div className="accessibility-feedback">

          <p className="feedback-label">
            FEEDBACK
          </p>

          <h3>
            Experiencing accessibility issues?
          </h3>

          <p>
            We welcome feedback from users who experience accessibility
            challenges. If you encounter any issues or have suggestions for
            improving accessibility, please contact us at{" "}
            <a href="mailto:accessibility@gingernoxx.com">
              accessibility@gingernoxx.com
            </a>{" "}
            or via our <a href="/contact-us">Contact Us</a> page. We will make
            reasonable efforts to address your concerns promptly.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AccessibilityContent;