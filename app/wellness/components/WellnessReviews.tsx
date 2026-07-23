import "./wellness.css";

const reviews = [
  {
    id: 1,
    tag: "Morning Shot · 4 months",
    title: "It replaced my morning coffee and I feel better for it.",
    description:
      "I was skeptical about any wellness product but the shot just works. Four months in and I cannot imagine starting my day without it. Simple and honest ingredients that actually do something.",
    name: "Rachel H.",
    verified: "✓ Verified · Daily User",
  },
  {
    id: 2,
    tag: "Botanical Tea · Evening Ritual",
    title: "My new end-of-day ritual. Nothing else comes close.",
    description:
      "I drink it every evening after dinner. The ginger is present but gentle — it supports digestion without any sharpness. It has become the thing I look forward to most at the end of the day.",
    name: "Thomas B.",
    verified: "✓ Verified · Daily User",
  },
  {
    id: 3,
    tag: "Wellness Set · 2 months",
    title: "I bought the wellness set on a whim. I am on my third reorder.",
    description:
      "I was not a wellness person before this. The set made it easy to try a few things without overcomplicating it. Now I have a genuine daily routine and genuinely feel the difference.",
    name: "Leila M.",
    verified: "✓ Verified · Daily User",
  },
];

const WellnessReviews = () => {
  return (
    <section className="wellness-reviews-section">
      <div className="wellness-reviews-container">
        <span className="wellness-reviews-subtitle">
          PART OF DAILY ROUTINES
        </span>

        <h2 className="wellness-reviews-title">
          Part of Daily Routines
        </h2>

        <div className="wellness-reviews-divider"></div>

        <div className="wellness-reviews-grid">
          {reviews.map((review) => (
            <div className="wellness-review-card" key={review.id}>
              <div className="wellness-review-stars">
                ★★★★★
              </div>

              <div className="wellness-review-tag">
                {review.tag}
              </div>

              <div className="wellness-review-heading">
                <h3>{review.title}</h3>
              </div>

              <p className="wellness-review-description">
                {review.description}
              </p>

              <div className="wellness-review-footer">
                <span className="wellness-review-name">
                  {review.name}
                </span>

                <span className="wellness-review-verified">
                  {review.verified}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessReviews;