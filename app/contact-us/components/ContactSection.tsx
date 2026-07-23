export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Hero */}

        <h1 className="contact-title">
          We're Here to Help
        </h1>

        <p className="contact-description">
          Have questions, feedback, or collaboration ideas? Reach out to our
          team and we'll respond promptly. Whether it's product enquiries,
          wholesale requests, or general support — we're committed to providing
          clear, helpful guidance.
        </p>

        {/* Contact Card */}

        <div className="contact-card">

          <div className="contact-header">
            <h2>Send Us a Message</h2>

            <p>
              Fill in the form below and we'll be in touch shortly.
            </p>
          </div>

          {/* Category */}

          <div className="contact-category">

            <label>What can we help with?</label>

            <div className="category-buttons">

              <button className="active">
                Product Enquiry
              </button>

              <button>
                Order Support
              </button>

              <button>
                Wholesale
              </button>

              <button>
                Feedback
              </button>

              <button>
                Other
              </button>

            </div>

          </div>

          {/* Name & Email */}

          <div className="contact-row">

            <div className="contact-field">
              <label>Full Name *</label>

              <input
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label>Email Address *</label>

              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>

          </div>

          {/* Subject */}

          <div className="contact-field">
            <label>Subject *</label>

            <input
              type="text"
              placeholder="Brief subject line..."
            />
          </div>

          {/* Message */}

          <div className="contact-field">

            <label>Message *</label>

            <textarea
              rows={5}
              maxLength={1000}
              placeholder="Tell us how we can help..."
            ></textarea>

            <div className="character-count">
              0 / 1000
            </div>

          </div>

          {/* Button */}

          <button className="contact-submit-btn">
            Send Message
          </button>

          {/* Privacy */}

          <p className="privacy-text">
            By submitting, you agree to our{" "}
            <a href="#">Privacy Policy</a>. We'll never share your details with
            third parties.
          </p>

        </div>

      </div>


    </section>
  );
}
