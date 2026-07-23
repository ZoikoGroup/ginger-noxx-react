import "./wellness.css";

const trustedProducts = [
  {
    id: 1,
    image: "/wellness/most-trusted.png",
    category: "Wellness Shots",
    title: "Ginger Fire Shot",
    description:
      "The number-one daily ginger ritual. 60ml concentrated ginger — pure, potent, effective.",
    price: "£18.99",
    pack: "6-Pack",
    badge: "Top Seller",
    badgeClass: "top-seller",
  },
  {
    id: 2,
    image: "/wellness/most-trusted.png",
    category: "Wellness Drinks",
    title: "Ginger Turmeric Blend",
    description:
      "Anti-inflammatory daily drink. Ginger and turmeric working together as designed.",
    price: "£22.99",
    oldPrice: "£27.99",
  },
  {
    id: 3,
    image: "/wellness/most-trusted.png",
    category: "Evening Ritual",
    title: "Botanical Iced Tea",
    description:
      "Calming botanical blend with gentle ginger. The perfect wind-down after any day.",
    price: "£21.99",
    pack: "6-Pack",
  },
  {
    id: 4,
    image: "/wellness/most-trusted.png",
    category: "Daily Hydration",
    title: "Sparkling Ginger Lime",
    description:
      "The easiest entry into daily ginger. Refreshing, accessible, and genuinely enjoyable.",
    price: "£19.99",
    badge: "Best Value",
    badgeClass: "best-value",
  },
];

const MostTrustedChoices = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <span className="trusted-subtitle">
          MOST TRUSTED
        </span>

        <h2 className="trusted-title">
          Most Trusted Choices
        </h2>

        <div className="trusted-divider"></div>

        <p className="trusted-description">
          A simple place to start.
        </p>

        <div className="trusted-grid">
          {trustedProducts.map((item) => (
            <div className="trusted-card" key={item.id}>
              <div className="trusted-image">
                <img src={item.image} alt={item.title} />

                {item.badge && (
                  <span
                    className={`trusted-badge ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="trusted-content">
                <span className="trusted-category">
                  {item.category}
                </span>

                <h3 className="trusted-product-title">
                  {item.title}
                </h3>

                <p className="trusted-product-description">
                  {item.description}
                </p>

                <div className="trusted-price-row">
                  <span className="trusted-price">
                    {item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="trusted-old-price">
                      {item.oldPrice}
                    </span>
                  )}

                  {item.pack && (
                    <span className="trusted-pack">
                      {item.pack}
                    </span>
                  )}
                </div>

                <button className="trusted-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostTrustedChoices;