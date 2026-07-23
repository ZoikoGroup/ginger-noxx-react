import "./ingredients.css";

const kitchenProducts = [
  {
    id: 1,
    image: "/ingredients/most-used.png",
    badge: "Best Seller",
    badgeClass: "badge-orange",
    category: "Condiments",
    title: "Ginger Fire Sauce",
    description:
      "Structured ginger heat with chili depth. The kitchen essential.",
    price: "£13.99",
    pack: "2-Pack",
  },
  {
    id: 2,
    image: "/ingredients/most-used.png",
    badge: "Chef Grade",
    badgeClass: "badge-black",
    category: "Spice Blends",
    title: "Master Chef Blend",
    description:
      "Professional-grade spice architecture for home cooking. Adds depth instantly.",
    price: "£10.99",
  },
  {
    id: 3,
    image: "/ingredients/most-used.png",
    category: "Pastes",
    title: "Ginger Garlic Paste",
    description:
      "The base of every great Asian-inspired dish. Concentrated and ready to use.",
    price: "£6.99",
  },
  {
    id: 4,
    image: "/ingredients/most-used.png",
    badge: "Versatile",
    badgeClass: "badge-green",
    category: "Seasonings",
    title: "Ginger Lemon Seasoning",
    description:
      "Bright, citrus-forward. Rubs, dressings, grilled fish, and grain bowls.",
    price: "£8.99",
  },
];

const MostUsedKitchen = () => {
  return (
    <section className="ingredients-most-used-section">
      <div className="ingredients-most-used-container">
        <span className="ingredients-most-used-subtitle">
          M O S T&nbsp;&nbsp;U S E D
        </span>

        <h2 className="ingredients-most-used-title">
          Most Used in the Kitchen
        </h2>

        <div className="ingredients-most-used-divider"></div>

        <p className="ingredients-most-used-description">
          Most customers start here.
        </p>

        <div className="ingredients-most-used-grid">
          {kitchenProducts.map((item) => (
            <div className="ingredients-most-used-card" key={item.id}>
              <div className="ingredients-most-used-image">
                <img src={item.image} alt={item.title} />

                {item.badge && (
                  <div
                    className={`ingredients-most-used-badge ${item.badgeClass}`}
                  >
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="ingredients-most-used-content">
                <span className="ingredients-most-used-category">
                  {item.category}
                </span>

                <h3 className="ingredients-most-used-product-title">
                  {item.title}
                </h3>

                <p className="ingredients-most-used-product-description">
                  {item.description}
                </p>

                <div className="ingredients-most-used-price-row">
                  <span className="ingredients-most-used-price">
                    {item.price}
                  </span>

                  {item.pack && (
                    <span className="ingredients-most-used-pack">
                      {item.pack}
                    </span>
                  )}
                </div>

                <button className="ingredients-most-used-btn">
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

export default MostUsedKitchen;