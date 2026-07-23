import "./press-media.css";

export default function PressEnquiries() {
  return (
    <section className="press-enquiries-section">
      <div className="w-full max-w-[1080px] mx-auto px-6 flex justify-center">
        {/* Card */}
        <div className="press-enquiries-card">

          {/* Label */}
          <p className="press-enquiries-tag">
            PRESS ENQUIRIES
          </p>

          {/* Heading */}
          <h2 className="press-enquiries-title">
            Media &amp; Editorial Contact
          </h2>

          {/* Body text */}
          <p className="press-enquiries-desc">
            For press enquiries, interview requests, review samples, or media partnerships,<br />
            please contact our team directly. We aim to respond to all media enquiries within 24 hours.
          </p>

          {/* Email badge */}
          <div className="press-email-badge">
            <span>📰</span>
            <span>press@gingernoxx.com</span>
          </div>

        </div>
      </div>
    </section>
  );
}
