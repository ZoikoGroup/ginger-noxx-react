export default function BestSellersBundles() {
  return (
    <section className="bundles-section">

      <div className="container">

        <div className="bundles-heading">

          <h2>
            Start With the <span>Favorites</span>
          </h2>

          <p>
            Each kit is curated around a clear use case so you know exactly
            why it's right before you add it to cart.
          </p>

        </div>

        <div className="bundles-grid">

          {/* ================= CARD 1 ================= */}

          <div className="bundle-card">

            <span className="bundle-tag">
              🛒 FOR FIRST-TIME BUYERS
            </span>

            <h3>
              Best Seller Starter Kit
            </h3>

            <p>
              The three most purchased GingerNoxx products in one curated set.
              The fastest way to understand what this brand actually is.
            </p>

            <div className="bundle-items">

              <span>🫚 Original Sparkling x4</span>

              <span>🌶️ Ginger Fire Sauce</span>

              <span>🍪 Energy Chews x2</span>

            </div>

            <div className="bundle-price">

              <div className="price-left">

                <del>Worth $28.46</del>

                <h4>$21.99</h4>

              </div>

              <span className="save-pill">
                Save 23%
              </span>

            </div>

            <div className="bundle-buttons">

              <button className="primary-btn">
                Add Starter Kit →
              </button>

              <button className="secondary-btn">
                View Contents
              </button>

            </div>

          </div>

          {/* ================= CARD 2 ================= */}

          <div className="bundle-card">

            <span className="bundle-tag">
              📅 FOR EVERYDAY USE
            </span>

            <h3>
              Everyday Ginger Routine
            </h3>

            <p>
              A structured daily ritual around GingerNoxx — morning shot,
              afternoon drink, and on-the-go snack. Designed for consistency.
            </p>

            <div className="bundle-items">

              <span>⚡ Wellness Shots x6</span>

              <span>💚 Immunity Sparkling x4</span>

              <span>🫘 Digestive Chews x2</span>

            </div>

            <div className="bundle-price">

              <div className="price-left">

                <del>Worth $44.88</del>

                <h4>$34.99</h4>

              </div>

              <span className="save-pill">
                Save 22%
              </span>

            </div>

            <div className="bundle-buttons">

              <button className="primary-btn">
                Add Routine Kit →
              </button>

              <button className="secondary-btn">
                View Contents
              </button>

            </div>

          </div>
                    {/* ================= CARD 3 ================= */}

          <div className="bundle-card">

            <span className="bundle-tag">
              👨‍👩‍👧 FOR FAMILY HOUSEHOLDS
            </span>

            <h3>
              Family Favorites Pack
            </h3>

            <p>
              Clean-label products the entire household can enjoy—from
              school lunches to dinner tables to weekend cooking.
            </p>

            <div className="bundle-items">

              <span>🫚 Sparkling x12 Family Pack</span>

              <span>🍪 Energy Chews x3</span>

              <span>🌿 Everyday Cook Blend</span>

            </div>

            <div className="bundle-price">

              <div className="price-left">

                <del>Worth $51.94</del>

                <h4>$39.99</h4>

              </div>

              <span className="save-pill">
                Save 23%
              </span>

            </div>

            <div className="bundle-buttons">

              <button className="primary-btn">
                Add Family Pack →
              </button>

              <button className="secondary-btn">
                View Contents
              </button>

            </div>

          </div>

          {/* ================= CARD 4 ================= */}

          <div className="bundle-card">

            <span className="bundle-tag">
              🎁 FOR GIFTING
            </span>

            <h3>
              Giftable Ginger Discovery Set
            </h3>

            <p>
              A premium, giftable introduction to the GingerNoxx range—
              curated for someone discovering the brand for the first time.
            </p>

            <div className="bundle-items">

              <span>🧂 Master Chef Blend</span>

              <span>🫙 Golden Ginger Glaze</span>

              <span>🌶️ Ginger Fire Sauce</span>

              <span>🫚 Sparkling x2</span>

            </div>

            <div className="bundle-price">

              <div className="price-left">

                <del>Worth $39.46</del>

                <h4>$29.99</h4>

              </div>

              <span className="save-pill">
                Save 24%
              </span>

            </div>

            <div className="bundle-buttons">

              <button className="primary-btn">
                Add Gift Set →
              </button>

              <button className="secondary-btn">
                View Contents
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}