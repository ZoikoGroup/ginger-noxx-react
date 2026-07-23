import Image from "next/image";
import "./collective.css";

const checkmarks = [
  "Exclusive early access to new flavours and launches",
  "Community challenges, stories, and user spotlights",
  "Members-only recipes, rituals, and culinary guides",
  "Subscriber discounts and first-look bundle drops"
];

const avatars = ["AM", "JK", "PR", "LS", "+"];

export default function CollectiveHero() {
  return (
    <section className="coll-hero-section">
      {/* Background Image: public/collective/one.png */}
      <Image
        src="/collective/one.png"
        alt="Collective Background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Radial Overlay */}
      <div className="coll-hero-radial" />

      {/* Content */}
      <div className="coll-hero-content">

        {/* Title */}
        <h1 className="coll-hero-title">
          Join <span className="coll-hero-title-orange">the Collective</span>
        </h1>

        {/* Subtitle */}
        <p className="coll-hero-desc">
          Connect with a community of flavour explorers, wellness enthusiasts, and culinary innovators. Share your recipes, experiences, and insights while discovering new ways to enjoy GingerNoxx.
        </p>

        {/* Checkmarks Grid */}
        <div className="coll-hero-checks-grid">
          {checkmarks.map((text, idx) => (
            <div key={idx} className="coll-check-item">
              <div className="coll-check-box">✓</div>
              <span className="coll-check-text">{text}</span>
            </div>
          ))}
        </div>

        {/* Member Avatars & Rating Row */}
        <div className="coll-hero-members-bar">
          <div className="coll-avatars-group">
            {avatars.map((av, idx) => (
              <div key={idx} className="coll-avatar-circle">
                {av}
              </div>
            ))}
          </div>

          <div className="coll-members-text">
            <span className="coll-members-stars">★★★★★</span>
            <span>12,000+ members worldwide growing daily</span>
          </div>
        </div>

      </div>
    </section>
  );
}
