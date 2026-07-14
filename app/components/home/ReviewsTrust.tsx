export default function ReviewsTrust() {
  return (
    <section className="reviews">
      <div className="reviews-container">

        <div className="reviews-badge">
          REVIEWS & TRUST
        </div>

        <h2 className="reviews-title">
          Loved by <span>10,000+</span> Customers
        </h2>

        <div className="reviews-grid">

          {/* Card 1 */}
          <div className="review-card">

            <div className="stars">★★★★★</div>

            <p className="review-text">
              I've been searching for something that
              <br />
              actually tastes like real ginger and not a
              <br />
              chemical approximation. GingerNoxx
              <br />
              absolutely nails it — the sparkling is now a
              <br />
              daily ritual.
            </p>

            <div className="review-user">

              <div className="avatar"></div>

              <div>
                <h4>Amara J.</h4>

                <div className="review-tag">
                  Taste
                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>
              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="review-card">

            <div className="stars">★★★★★</div>

            <p className="review-text">
              Got the family pack for school lunches. My
              <br />
              kids demolished it in days. Clean label, no
              <br />
              sugar issues, and the flavour gets a full
              <br />
              family approval — which is saying
              <br />
              something.
            </p>

            <div className="review-user">

              <div className="avatar"></div>

              <div>

                <h4>Marcus T.</h4>

                <div className="review-tag">
                  Family Approval
                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="review-card">

            <div className="stars">★★★★★</div>

            <p className="review-text">
              As a chef, I'm obsessive about ingredient
              <br />
              quality. The spice blends are restaurant-
              <br />
              grade — they've genuinely changed how I
              <br />
              use ginger in my kitchen. Extraordinary
              <br />
              range.
            </p>

            <div className="review-user">

              <div className="avatar"></div>

              <div>

                <h4>Priya K.</h4>

                <div className="review-tag">
                  Cooking Utility
                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}