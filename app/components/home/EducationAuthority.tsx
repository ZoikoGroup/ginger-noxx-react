import Image from "next/image";

export default function EducationAuthority() {
  return (
    <section className="education">
      <div className="education-container">

        {/* Badge */}

        <div className="education-badge">
          EDUCATION & AUTHORITY
        </div>

        {/* Heading */}

        <h2 className="education-heading">
          From the <span>GingerNoxx Lab</span>
        </h2>

        {/* Cards */}

        <div className="education-grid">

          {/* Card 1 */}

          <div className="education-card">

            <Image
              src="/Image/article1.png"
              alt="Science"
              width={368}
              height={208}
              className="education-image"
            />

            <div className="education-content">

              <div className="education-top">

                <span className="education-tag">
                  Science
                </span>

                <span className="education-time">
                  5 min read
                </span>

              </div>

              <h3>
                The Science of Ginger Fusion: Why It
                <br />
                Works
              </h3>

              <p>
                How gingerols and shogaols interact with
                <br />
                functional ingredient systems to produce effects
                <br />
                beyond the sum of their parts.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="education-card">

            <Image
              src="/Image/article2.png"
              alt="Recipes"
              width={368}
              height={208}
              className="education-image"
            />

            <div className="education-content">

              <div className="education-top">

                <span className="education-tag">
                  Recipes
                </span>

                <span className="education-time">
                  4 min read
                </span>

              </div>

              <h3>
                Recipes &amp; Pairings: Building Around
                <br />
                Ginger
              </h3>

              <p>
                Our culinary team shares five high-impact ways
                <br />
                to integrate GingerNoxx spice blends into
                <br />
                everyday cooking.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="education-card">

            <Image
              src="/Image/article3.png"
              alt="Sourcing"
              width={368}
              height={208}
              className="education-image"
            />

            <div className="education-content">

              <div className="education-top">

                <span className="education-tag">
                  Sourcing
                </span>

                <span className="education-time">
                  6 min read
                </span>

              </div>

              <h3>
                Ingredient Sourcing Stories: From
                <br />
                Root to Range
              </h3>

              <p>
                Tracing the ginger supply chain from farm to
                <br />
                formulation — and why origin integrity is non-
                <br />
                negotiable for us.
              </p>

            </div>

          </div>

        </div>

        {/* Button */}

        <div className="education-btn-wrapper">

          <button className="education-btn">
            View All Articles
          </button>

        </div>

      </div>
    </section>
  );
}