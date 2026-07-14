export default function GingerProfile() {
  return (
    <section className="ginger-profile">
      <div className="container ginger-wrapper">

        {/* Left Content */}
        <div className="ginger-left">

          <span className="badge">
            AI-POWERED DISCOVERY
          </span>

          <h2>
            Find Your <span className="profile-text">Ginger Profile</span>
          </h2>

          <p className="profile-description">
            Answer four quick questions and we'll match you with the right
            products, flavours, and bundles — personalised to you.
          </p>

        </div>

        {/* Right Card */}
        <div className="question-card">

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <h3>What are you looking for today?</h3>

          <div className="options">

            <button>Energy & Performance</button>

            <button>Family Favourites</button>

            <button>Cooking & Flavour</button>

            <button>Gut Health & Wellness</button>

          </div>

          <div className="button-area">
            <button className="next-btn">
              Next →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}