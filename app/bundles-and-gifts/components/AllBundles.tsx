export default function AllBundles() {
  const filters = [
    "All Bundles",
    "First-Time",
    "Wellness",
    "Family",
    "Gifting",
    "Corporate",
  ];

  const bundles = [
    {
      image: "/bundles-gifts/all-bundles.png",
      badge: "First-Time",
      badgeDark: "",
      title: "Starter Pack",
      description:
        "Three best-selling beverages. The perfect no-pressure introduction to GingerNoxx.",
      tags: ["Beverage ×3", "Getting Started Guide"],
      price: "£19.99",
      oldPrice: "",
      save: "",
    },
    {
      image: "/bundles-gifts/all-bundles.png",
      badge: "Wellness",
      badgeDark: "Most Popular",
      title: "Wellness Pack",
      description:
        "6-pack + Fire Shot + Botanical Tea. The complete daily wellness ritual.",
      tags: ["Sparkling ×6", "Fire Shot", "Botanical Tea"],
      price: "£34.99",
      oldPrice: "£41.94",
      save: "Save 17%",
    },
    {
      image: "/bundles-gifts/all-bundles.png",
      badge: "Family",
      badgeDark: "",
      title: "Family Pack",
      description:
        "12-pack + shots + spice sampler + recipe cards. Built for household sharing.",
      tags: ["Sparkling ×12", "Shots ×4", "Spice Sampler"],
      price: "£59.99",
      oldPrice: "£79.91",
      save: "Save 25%",
    },
    {
      image: "/bundles-gifts/all-bundles.png",
      badge: "Gift",
      badgeDark: "Most Gifted",
      title: "Gift Set Deluxe",
      description:
        "Full assortment with premium branded packaging. Designed to impress and be loved.",
      tags: ["Beverages", "Condiments", "Snacks", "Gift Box"],
      price: "£79.99",
      oldPrice: "Worth £97+",
      save: "",
    },
  ];

  return (
    <section className="all-bundles-section">
      <div className="all-bundles-container">
        <span className="all-bundles-label">
          ALL BUNDLES
        </span>

        <h2 className="all-bundles-title">
          Find the Right Bundle
        </h2>

        <div className="all-bundles-line"></div>

        <p className="all-bundles-description">
          Pre-selected for taste, function, and ritual — every bundle tells
          a complete ginger story.
        </p>

        <div className="all-bundles-filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`bundle-filter ${
                index === 0 ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="all-bundles-grid">
          {bundles.map((bundle, index) => (
            <div className="bundle-card" key={index}>
              <div className="bundle-image">
                <img
                  src={bundle.image}
                  alt={bundle.title}
                />

                <span className="bundle-badge">
                  {bundle.badge}
                </span>

                {bundle.badgeDark && (
                  <span className="bundle-badge-dark">
                    {bundle.badgeDark}
                  </span>
                )}
              </div>

              <div className="bundle-content">
                <h3>{bundle.title}</h3>

                <p>{bundle.description}</p>

                <div className="bundle-tags">
                  {bundle.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="bundle-price-row">
                  <span className="bundle-price">
                    {bundle.price}
                  </span>

                  {bundle.oldPrice && (
                    <span className="bundle-old-price">
                      {bundle.oldPrice}
                    </span>
                  )}

                  {bundle.save && (
                    <span className="bundle-save">
                      {bundle.save}
                    </span>
                  )}
                </div>

                <button className="bundle-cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}