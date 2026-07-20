const reviews = [
  {
    title: "This is the one I recommend first.",
    text: "I've been searching for something that actually tastes like real ginger — not a chemical approximation. GingerNoxx absolutely nails it. The sparkling is now a daily ritual and I've bought it six times since my first can.",
    name: "Amara J.",
    tag: "Taste",
    product: "Original Sparkling",
  },
  {
    title: "You can taste the difference immediately.",
    text: "Got the family pack for school lunches. My kids demolished it in days. Clean label, no sugar issues, and the flavour gets a full family approval — which is saying something. We're now on a monthly subscribe order.",
    name: "Marcus T.",
    tag: "Family Approval",
    product: "Energy Chews",
  },
  {
    title: "The perfect way to start with GingerNoxx.",
    text: "As a chef, I'm obsessive about ingredient quality. The spice blends are restaurant-grade — they've genuinely changed how I use ginger in my kitchen. The Master Chef Blend is extraordinary. Nothing compares in its category.",
    name: "Priya K.",
    tag: "Cooking Utility",
    product: "Master Chef Blend",
  },
  {
    title: "It felt like the safest first purchase — and it delivered.",
    text: "I ordered the starter kit not knowing what to expect. Within a week I had placed a second order. The fire sauce went on everything. The sparkling replaced my afternoon coffee. I didn't expect to become a loyal customer this fast.",
    name: "Daniel O.",
    tag: "First Purchase",
    product: "Best Seller Starter Kit",
  },
];

export default function BestSellersTestimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="testimonial-heading">
          <h2>Loved by GingerNoxx Customers</h2>
        </div>

        <div className="testimonial-layout">

          {/* LEFT CARD */}

          <div className="rating-card">

            <h3>4.8</h3>

            <div className="rating-stars">
              ★★★★★
            </div>

            <p className="rating-text">
              Based on 12,400+ verified reviews
            </p>

            <div className="rating-bars">

              <div className="rating-row">
                <span>5★</span>

                <div className="bar">
                  <div className="fill fill-78"></div>
                </div>

                <small>78%</small>
              </div>

              <div className="rating-row">
                <span>4★</span>

                <div className="bar">
                  <div className="fill fill-14"></div>
                </div>

                <small>14%</small>
              </div>

              <div className="rating-row">
                <span>3★</span>

                <div className="bar">
                  <div className="fill fill-5"></div>
                </div>

                <small>5%</small>
              </div>

              <div className="rating-row">
                <span>2★</span>

                <div className="bar">
                  <div className="fill fill-2"></div>
                </div>

                <small>2%</small>
              </div>

              <div className="rating-row">
                <span>1★</span>

                <div className="bar">
                  <div className="fill fill-1"></div>
                </div>

                <small>1%</small>
              </div>

            </div>

            <p className="rating-footer">
              Verified purchase reviews from
              <br />
              customers across 5 global markets.
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="review-column">
                        {reviews.map((review, index) => (

              <div className="review-card" key={index}>

                <div className="review-stars">
                  ★★★★★
                </div>

                <h3 className="review-title">
                  "{review.title}"
                </h3>

                <p className="review-text">
                  {review.text}
                </p>

                <div className="review-bottom">

                  <div className="review-left">

                    <h4>{review.name}</h4>

                    <span className="review-tag">
                      {review.tag}
                    </span>

                  </div>

                  <div className="review-right">

                    <span className="verified">
                      ✓ Verified Purchase
                    </span>

                    <span className="product-name">
                      {review.product}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
