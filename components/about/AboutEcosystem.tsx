export default function AboutEcosystem() {
  return (
    <section className="about-ecosystem">
      <div className="container">

        {/* Badge */}
        <div className="ecosystem-badge">
          Product Ecosystem
        </div>

        {/* Heading */}
        <h2 className="ecosystem-title">
          A Multi-Category <span>Platform</span>
        </h2>

        <p className="ecosystem-subtitle">
          Consumers can enter through one category and expand into others.
          Retailers can list selected categories or broaden over time.
          The brand gains more occasions, more touchpoints, and more resilience.
        </p>

        {/* Cards */}
        <div className="ecosystem-grid">

          {/* Card 1 */}
          <div className="ecosystem-card">

            <div className="card-icon">
              <img
                src="/icons/Ginger-Drinks.svg"
                alt="Beverages"
              />
            </div>

            <p className="card-label">
              Beverages
            </p>

            <h3>
              Functional Refreshment
            </h3>

            <p>
              Sparkling ginger drinks, functional shots,
              and botanical teas designed for modern ready-to-drink
              occasions — hydration with purpose.
            </p>

            <div className="card-tags">
              <span>Sparkling</span>
              <span>Shots</span>
              <span>Teas</span>
              <span>RTD</span>
            </div>

          </div>

          {/* Card 2 */}

          <div className="ecosystem-card">

            <div className="card-icon">
              <img
                src="/icons/Condiments-Sauces.svg"
                alt="Condiments & Culinary"
              />
            </div>

            <p className="card-label">
              Condiments &amp; Culinary
            </p>

            <h3>
              Flavour Systems
            </h3>

            <p>
              Sauces, marinades, and flavour systems designed for convenience,
              versatility, and premium everyday cooking—from weeknight meals
              to gifting.
            </p>

            <div className="card-tags">
              <span>Sauces</span>
              <span>Marinades</span>
              <span>Dressings</span>
            </div>

          </div>

          {/* Card 3 */}

          <div className="ecosystem-card">

            <div className="card-icon">
              <img
                src="/icons/Limited-Editions.svg"
                alt="Snacks & Pantry"
              />
            </div>

            <p className="card-label">
              Snacks &amp; Pantry
            </p>

            <h3>
              Daily Occasions
            </h3>

            <p>
              Practical, flavour-forward snacks and pantry products suitable
              for daily consumption, gifting, and on-the-go use—built for
              family and individual formats.
            </p>

            <div className="card-tags">
              <span>Chews</span>
              <span>Energy</span>
              <span>Pantry</span>
            </div>

          </div>

          {/* Card 4 */}

          <div className="ecosystem-card">

            <div className="card-icon">
              <img
                src="/icons/Spice-Blends.svg"
                alt="Spice Blends"
              />
            </div>

            <p className="card-label">
              Spice Blends
            </p>

            <h3>
              Chef-Grade Systems
            </h3>

            <p>
              Structured, globally inspired flavour systems built around
              ginger—giving home cooks and professionals access to
              restaurant-quality depth.
            </p>

            <div className="card-tags">
              <span>Blends</span>
              <span>Rubs</span>
              <span>Chef Kits</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
