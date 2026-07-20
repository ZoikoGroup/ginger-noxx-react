import Image from "next/image";

export default function BestSellersProducts() {
  return (
    <section className="best-products">

      <div className="container">

        {/* Heading */}

        <div className="products-heading">

          <h2 className="products-title">
            The Most Trusted GingerNoxx Products
          </h2>

        </div>

        {/* Category Tabs */}

        <div className="products-tabs">

          <button className="active">All</button>
          <button>Beverages</button>
          <button>Condiments & Sauces</button>
          <button>Snacks</button>
          <button>Spice Blends</button>
          <button>Bundles</button>
          <button>Low Sugar</button>
          <button>Vegan</button>

        </div>

        {/* Product Grid */}

        <div className="products-grid">

          {/* ===========================
              CARD 1
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge orange">
                MOST POPULAR
              </span>

              {/* Replace later */}
              <Image
  src="/Image/original-sparkling.png"
  alt="Original Sparkling"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                BEVERAGES
              </p>

              <h3>
                Original Sparkling
              </h3>

              <p className="product-description">
                The daily ritual. Real ginger,
                clean label, zero compromise.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.9 · 1,247 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  Single can
                </span>

                <span>
                  4-pack
                </span>

                <span>
                  12-pack
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$4.99 /can</h4>

                  <small>
                    ♻ Save 10% with Subscribe
                  </small>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 2
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge blue">
                TOP RATED
              </span>

              <Image
  src="/Image/ginger-fire-sauce.png"
  alt="Ginger Fire Sauce"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                CONDIMENTS
              </p>

              <h3>
                Ginger Fire Sauce
              </h3>

              <p className="product-description">
                Bold, layered heat. The sauce
                customers reach for every time.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.8 · 1,173 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  Original
                </span>

                <span>
                  Extra Hot
                </span>

                <span>
                  Smoky
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$7.49 /btl</h4>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 3
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge dark">
                BEST VALUE
              </span>

              <Image
  src="/Image/ginger-energy-chews.png"
  alt="Ginger Energy Chews"
  width={210}
  height={210}
/>


            </div>

            <div className="product-content">

              <p className="product-category">
                SNACKS
              </p>

              <h3>
                Ginger Energy Chews
              </h3>

              <p className="product-description">
                Portable, functional ginger
                nutrition. Clean-label,
                no junk.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.8 · 847 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  12-chew pack
                </span>

                <span>
                  30-chew pack
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$5.99 /pack</h4>

                  <small>
                    ♻ Save 10% with Subscribe
                  </small>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

                  {/* ===========================
              CARD 4
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge green">
                STAFF FAVORITE
              </span>

              <Image
  src="/Image/master-chef-blend.png"
  alt="Master Chef Blend"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                SPICES
              </p>

              <h3>
                Master Chef Blend
              </h3>

              <p className="product-description">
                Restaurant-grade formulation.
                How serious cooks use ginger.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.9 · 3,421 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  60g jar
                </span>

                <span>
                  150g jar
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$12.99 /jar</h4>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 5
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge orange">
                MOST POPULAR
              </span>

              <Image
  src="/Image/immunity-sparkling.png"
  alt="Immunity Sparkling"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                BEVERAGES
              </p>

              <h3>
                Immunity Sparkling
              </h3>

              <p className="product-description">
                Daily digestive support with
                real ginger and immune-boosting botanicals.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.8 · 2,108 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  Single can
                </span>

                <span>
                  4-pack
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$4.99 /can</h4>

                  <small>
                    ♻ Save 10% with Subscribe
                  </small>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 6
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge dark">
                GREAT FIRST CHOICE
              </span>

              <Image
  src="/Image/golden-ginger-glaze.png"
  alt="Golden Ginger Glaze"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                CONDIMENTS
              </p>

              <h3>
                Golden Ginger Glaze
              </h3>

              <p className="product-description">
                Finishing complexity you can't
                get from any supermarket shelf.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.9 · 952 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  250ml
                </span>

                <span>
                  500ml
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$8.99 /btl</h4>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

                    {/* ===========================
              CARD 7
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge blue">
                TOP RATED
              </span>

              <Image
  src="/Image/wellness-ginger-shot.png"
  alt="Wellness Ginger Shot"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                BEVERAGES
              </p>

              <h3>
                Wellness Ginger Shot
              </h3>

              <p className="product-description">
                Concentrated functional nutrition.
                5,000mg ginger per shot.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.9 · 1,403 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  Single shot
                </span>

                <span>
                  6-pack
                </span>

                <span>
                  12-pack
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$3.49 /shot</h4>

                  <small>
                    ♻ Save 10% with Subscribe
                  </small>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 8
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge dark">
                BEST VALUE
              </span>

              <Image
  src="/Image/everyday-cook-blend.png"
  alt="Everyday Cook Blend"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                SPICES
              </p>

              <h3>
                Everyday Cook Blend
              </h3>

              <p className="product-description">
                The kitchen staple that upgrades
                every family meal without effort.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.7 · 1,256 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  60g jar
                </span>

                <span>
                  150g jar
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$9.99 /jar</h4>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
              CARD 9
          =========================== */}

          <div className="product-card">

            <div className="product-image">

              <span className="badge dark">
                GREAT FIRST CHOICE
              </span>

              <Image
  src="/Image/digestive-ginger-chews.png"
  alt="Digestive Ginger Chews"
  width={210}
  height={210}
/>

            </div>

            <div className="product-content">

              <p className="product-category">
                SNACKS
              </p>

              <h3>
                Digestive Ginger Chews
              </h3>

              <p className="product-description">
                Portable gut-support.
                Clean-label, no hidden compromises.
              </p>

              <div className="product-rating">

                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating-text">
                  4.7 · 681 reviews
                </span>

              </div>

              <div className="product-options">

                <span className="active">
                  12-chew pack
                </span>

                <span>
                  Bulk 30-pack
                </span>

              </div>

              <div className="product-footer">

                <div>

                  <h4>$5.99 /pack</h4>

                </div>

                <button>
                  + Add
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* View Button */}

        <div className="products-bottom">

          <a href="#" className="view-range-btn">
            View Full Range
          </a>

        </div>

      </div>

    </section>
  );
}
