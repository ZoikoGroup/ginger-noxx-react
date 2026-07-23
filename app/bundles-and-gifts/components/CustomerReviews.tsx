export default function CustomerReviews() {
  const reviews = [
    {
      tag: "Gift Set Deluxe",
      title: "Made gifting effortless. Everyone loved it.",
      review:
        "I ordered the Deluxe set for a colleague who is into wellness. The packaging was impressive and the product variety was exactly right. She reordered for herself the following week.",
      author: "A.J.",
    },
    {
      tag: "Wellness Pack",
      title: "A wellness gift that is actually useful.",
      review:
        "I am tired of gifting candles. The Wellness Pack is functional, beautiful, and the recipient actually uses it every day. That is what makes it a genuinely good gift. Ordered it twice already.",
      author: "M.T.",
    },
    {
      tag: "Family Pack",
      title: "The whole family is on a GingerNoxx ritual now.",
      review:
        "We received the Family Pack as a birthday gift and it became a household ritual. The recipe cards were a thoughtful touch. My kids specifically ask when the next delivery is coming.",
      author: "L.F.",
    },
  ];

  return (
    <section className="bundles-reviews-section">
      <div className="bundles-reviews-container">
        <span className="bundles-reviews-label">
          CUSTOMER REVIEWS
        </span>

        <h2 className="bundles-reviews-title">
          People Who Gifted GingerNoxx
        </h2>

        <div className="bundles-reviews-line"></div>

        <div className="bundles-reviews-grid">
          {reviews.map((review, index) => (
            <div className="bundles-review-card" key={index}>
              <div className="bundles-review-stars">
                ★★★★★
              </div>

              <div className="bundles-review-tag">
                {review.tag}
              </div>

              <div className="bundles-review-heading">
                <h3>{review.title}</h3>
              </div>

              <p className="bundles-review-text">
                {review.review}
              </p>

              <div className="bundles-review-footer">
                <span className="bundles-review-author">
                  {review.author}
                </span>

                <span className="bundles-review-verified">
                  ✓ Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}