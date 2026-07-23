export default function BeveragesReviews() {
  const reviews = [
    {
      product: "Sparkling Ginger Lime",
      title: "Finally a drink that does what it says.",
      review:
        "I have tried every ginger drink on the market and nothing comes close. The ginger is real, the flavour is clean, and it is my morning non-negotiable.",
      name: "Sarah M.",
    },
    {
      product: "Ginger Fire Shot",
      title: "Better than coffee for getting started.",
      review:
        "Three weeks in and I do not miss coffee. The shot wakes me up properly and there is no crash that follows espresso.",
      name: "Daniel K.",
    },
    {
      product: "Botanical Iced Tea",
      title: "The evening ritual I did not know I needed.",
      review:
        "I drink this every night after dinner. Calming without being boring and the ginger warmth is gentle enough for evenings.",
      name: "Priya R.",
    },
  ];

  return (
    <section className="beverages-reviews-section">
      <div className="beverages-reviews-container">
        <span className="beverages-reviews-label">
          REVIEWS
        </span>

        <h2 className="beverages-reviews-title">
          Loved by Customers
        </h2>

        <div className="beverages-reviews-line"></div>

        <p className="beverages-reviews-rating">
          4.9 average · 6,200+ verified reviews
        </p>

        <div className="beverages-reviews-grid">
          {reviews.map((review, index) => (
            <div className="beverages-review-card" key={index}>
              <div className="review-stars">
                ★★★★★
              </div>

              <div className="review-product">
                {review.product}
              </div>

              <div className="review-heading">
                <h3>{review.title}</h3>
              </div>

              <p className="review-text">
                {review.review}
              </p>

              <div className="review-footer">
                <span className="review-name">
                  {review.name}
                </span>

                <span className="review-verified">
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