import React from "react";

const ProductTrusted = () => {
  return (
    <section className="trusted-section">

      <div className="trusted-container">

        <h2 className="trusted-heading">
          Trusted by <span>Thousands</span>
        </h2>

        <div className="trusted-content">

          {/* LEFT SIDE */}

          <div className="rating-card">

            <h3 className="rating-score">
              4.9
            </h3>

            <div className="rating-stars">
              ★★★★★
            </div>

            <p className="rating-subtitle">
              Based on 2,140 verified reviews
            </p>

            <div className="rating-bars">

              <div className="rating-row">
                <span>5★</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "84%" }}
                  ></div>
                </div>

                <small>84%</small>
              </div>

              <div className="rating-row">
                <span>4★</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "11%" }}
                  ></div>
                </div>

                <small>11%</small>
              </div>

              <div className="rating-row">
                <span>3★</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "3%" }}
                  ></div>
                </div>

                <small>3%</small>
              </div>

              <div className="rating-row">
                <span>2★</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill progress-gray"
                    style={{ width: "1%" }}
                  ></div>
                </div>

                <small>1%</small>
              </div>

              <div className="rating-row">
                <span>1★</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill progress-gray"
                    style={{ width: "1%" }}
                  ></div>
                </div>

                <small>1%</small>
              </div>

            </div>

            <button className="rating-button">
              Add to Cart →
            </button>

          </div>
                    {/* RIGHT SIDE */}

          <div className="reviews-section">

            <div className="review-tabs">

              <button className="tab-btn active">
                All
              </button>

              <button className="tab-btn">
                Taste
              </button>

              <button className="tab-btn">
                Function
              </button>

              <button className="tab-btn">
                Lifestyle
              </button>

            </div>

            {/* Review 1 */}

            <div className="review-card">

              <div className="review-icon">

                <img
                  src="/Image/ginger.png"
                  alt="Ginger"
                />

              </div>

              <div className="review-stars">
                ★★★★★
              </div>

              <h3 className="review-title">
                "Finally a ginger drink that tastes real."
              </h3>

              <p className="review-text">
                I've been searching for an RTD that actually has ginger bite
                without being overwhelming. This is it. The lime balances
                perfectly — clean finish, no aftertaste. I've ordered the
                12-pack three times in a row.
              </p>

              <div className="review-footer">

                <div className="review-left">

                  <h4>Amara J.</h4>

                  <span className="review-tag">
                    Taste
                  </span>

                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>

              </div>

            </div>
                        {/* Review 2 */}

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <h3 className="review-title">
                "Clean, sharp, and not overly sweet."
              </h3>

              <p className="review-text">
                I was tired of "ginger" drinks that are basically sugar water
                with a hint of extract. This one has presence — proper ginger
                heat, real citrus, and zero sugar guilt. My stomach has felt
                noticeably better since I switched.
              </p>

              <div className="review-footer">

                <div className="review-left">

                  <h4>Marcus T.</h4>

                  <span className="review-tag">
                    Function
                  </span>

                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>

              </div>

            </div>

            {/* Review 3 */}

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <h3 className="review-title">
                "This replaced my soda completely."
              </h3>

              <p className="review-text">
                I drink one with every meal now. My kids actually prefer it to
                juice. The fact that it's vegan, halal, and clean-label made it
                an easy decision for the whole household. This is what
                functional food should look like.
              </p>

              <div className="review-footer">

                <div className="review-left">

                  <h4>Priya K.</h4>

                  <span className="review-tag">
                    Lifestyle
                  </span>

                </div>

                <span className="verified">
                  ✓ Verified Purchase
                </span>

              </div>

            </div>

            {/* Review 4 */}

            <div className="review-card">

              <div className="review-stars">
                ★★★★★
              </div>

              <h3 className="review-title">
                "I am obsessive about ingredient quality — this passes."
              </h3>

              <p className="review-text">
                As a chef I pay close attention to what I put in my body. The
                sourcing notes, the clean label, the actual ginger intensity —
                this is the real thing. The carbonation level is perfect too.
                Ordered the 12-pack subscription.
              </p>

              <div className="review-footer">

                <div className="review-left">

                  <h4>Daniel O.</h4>

                  <span className="review-tag">
                    Taste
                  </span>

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
};

export default ProductTrusted;