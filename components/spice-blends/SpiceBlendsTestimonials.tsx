"use client";

const ratingBreakdown = [
  { star: "5★", percent: "82", width: "82%" },
  { star: "4★", percent: "13", width: "13%" },
  { star: "3★", percent: "3", width: "3%" },
  { star: "2★", percent: "1", width: "1%" },
  { star: "1★", percent: "1", width: "1%" },
];

const testimonials = [
  {
    title:
      '"These blends changed how I cook at home — effortless and powerful."',
    description:
      "I was sceptical about a spice blend claiming to be chef-grade, but the Master Chef Blend genuinely delivers. Deep, balanced, and immediately improves anything I add it to. Now on my third jar.",
    name: "Marcus T.",
    role: "Chef Grade",
  },
  {
    title:
      '"Restaurant-quality flavour without the complexity."',
    description:
      "The Ginger-Citrus Rub has become my go-to for everything — fish, chicken, roasted veg. It's that rare thing: a blend that actually makes the ingredient taste more like itself, not less.",
    name: "Priya K.",
    role: "Home Cook",
  },
  {
    title:
      '"You can taste the difference immediately — clean, deep, and balanced."',
    description:
      "The Ginger-Garlic blend is now a kitchen staple. I use it almost every day. No fillers, no synthetic taste — just real, honest spice depth that works every single time.",
    name: "Daniel O.",
    role: "Daily Cook",
  },
];

export default function SpiceBlendsTestimonials() {
  return (
    <section className="spice-testimonial-section">
      <div className="spice-testimonial-container">

        <div className="spice-testimonial-heading">
          <h2>
            Trusted in <span className="orange">Real Kitchens</span>
          </h2>
        </div>

        <div className="spice-testimonial-wrapper">

          {/* Left Rating Card */}
          <div className="spice-testimonial-rating-card">

            <div className="spice-testimonial-score">
              4.9
            </div>

            <div className="spice-testimonial-stars">
              ★★★★★
            </div>

            <p className="spice-testimonial-review-count">
              6,010+ verified reviews
            </p>

            <div className="spice-testimonial-rating-list">
              {ratingBreakdown.map((item, index) => (
                <div
                  className="spice-testimonial-rating-row"
                  key={index}
                >
                  <span className="spice-testimonial-rating-label">
                    {item.star}
                  </span>

                  <div className="spice-testimonial-progress">
                    <div
                      className="spice-testimonial-progress-fill"
                      style={{ width: item.width }}
                    />
                  </div>

                  <span className="spice-testimonial-rating-percent">
                    {item.percent}%
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Reviews */}
          <div className="spice-testimonial-reviews">

            {testimonials.map((review, index) => (

              <div
                className="spice-testimonial-card"
                key={index}
              >

                <div className="spice-testimonial-card-stars">
                  ★★★★★
                </div>

                <div className="spice-testimonial-quote">
                  <h3>{review.title}</h3>

                  <p>
                    {review.description}
                  </p>
                </div>

                <div className="spice-testimonial-footer">

                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>

                  <p className="spice-testimonial-verified">
                    ✓ Verified Purchase
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}