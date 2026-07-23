import Image from "next/image";

export default function AboutFuture() {
  return (
    <section className="about-future">
      <div className="container">

        <div className="future-wrapper">

          {/* LEFT SIDE */}

          <div className="future-left">

            <div className="future-badge">
              The Future of GingerNoxx
            </div>

            <h2 className="future-title">
              Category <span>Authorship</span>
            </h2>

            <p className="future-subtitle">
              The next phase is clear: expand the portfolio, deepen market
              <br />
              presence, strengthen channel penetration, and continue building
              <br />
              ginger-fusion into a recognised global category.
            </p>

            <div className="future-list">

              {/* Card 1 */}

              <div className="future-card">

                <div className="future-icon">
                  <Image
                    src="/Image/sku-development.png"
                    alt="Additional SKU Development"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="future-content">
                  <h3>Additional SKU Development</h3>

                  <p>
                    Wider product portfolio expansion across all four categories —
                    <br />
                    beverages, condiments, snacks, and spice systems.
                  </p>
                </div>

              </div>

              {/* Card 2 */}

              <div className="future-card">

                <div className="future-icon">
                  <Image
                    src="/Image/market-entry.png"
                    alt="Wider Market Entry"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="future-content">
                  <h3>Wider Market Entry</h3>

                  <p>
                    Deepening market presence across existing regions and entering new
                    <br />
                    markets with locally adapted formulations.
                  </p>
                </div>

              </div>

              {/* Card 3 */}

              <div className="future-card">

                <div className="future-icon">
                  <Image
                    src="/Image/ai-integration.png"
                    alt="Increased AI Integration"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="future-content">
                  <h3>Increased AI Integration</h3>

                  <p>
                    Greater integration of AI into product and consumer systems —
                    from
                    <br />
                    discovery personalisation to formulation acceleration.
                  </p>
                </div>

              </div>

              {/* Card 4 */}

              <div className="future-card">

                <div className="future-icon">
                  <Image
                    src="/Image/lifecycle-revenue.png"
                    alt="Lifecycle Revenue Models"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="future-content">
                  <h3>Lifecycle Revenue Models</h3>

                  <p>
                    Stronger subscription, bundling, and repeat purchase infrastructure —
                    <br />
                    improving customer lifetime value across all channels.
                  </p>
                </div>

              </div>

              {/* Card 5 */}

              <div className="future-card">

                <div className="future-icon">
                  <Image
                    src="/Image/trade-infrastructure.png"
                    alt="Trade Infrastructure"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="future-content">
                  <h3>Trade Infrastructure</h3>

                  <p>
                    Tighter trade relationships and growing alignment with major retail
                    <br />
                    and distribution opportunities globally.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="future-image">
            <Image
              src="/Image/future-gingernoxx.png"
              alt="The Future of GingerNoxx"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
