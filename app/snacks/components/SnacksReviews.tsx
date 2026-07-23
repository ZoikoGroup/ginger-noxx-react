import "./snacks.css";

const reviews = [
  {
    id: 1,
    category: "Energy Chews",
    title: "My desk drawer essential.",
    review:
      "I keep a pack on my desk at all times. The ginger gives me a genuine lift without a sugar crash. Cleaner and more effective than anything similar I have tried.",
    author: "Maya L.",
  },
  {
    id: 2,
    category: "Dark Choc Ginger Bark",
    title: "I order this every single month.",
    review:
      "This bark is genuinely exceptional. The ginger intensity is exactly right against the dark chocolate. It has replaced every other after-dinner treat in our house.",
    author: "James T.",
  },
  {
    id: 3,
    category: "Snack Box",
    title: "Built a box on a whim. Reordering forever.",
    review:
      "I used the snack box builder just to try a few things. Three items later and now I have a monthly standing order. Every single one was worth buying.",
    author: "Aisha K.",
  },
];

const SnacksReviews = () => {
  return (
    <section className="snacks-reviews-section">
      <div className="snacks-reviews-container">
        {/* Heading */}

        <span className="snacks-reviews-subtitle">
          CUSTOMER FAVOURITES
        </span>

        <h2 className="snacks-reviews-title">
          Customer Favourites
        </h2>

        <div className="snacks-reviews-divider"></div>

        {/* Reviews */}

        <div className="snacks-reviews-grid">
          {reviews.map((review) => (
            <div className="snacks-review-card" key={review.id}>
              <div className="snacks-review-stars">
                ★★★★★
              </div>

              <div className="snacks-review-tag">
                {review.category}
              </div>

              <div className="snacks-review-heading">
                <h3>{review.title}</h3>
              </div>

              <p className="snacks-review-text">
                {review.review}
              </p>

              <div className="snacks-review-footer">
                <span className="snacks-review-author">
                  {review.author}
                </span>

                <span className="snacks-review-verified">
                  ✓ Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnacksReviews;