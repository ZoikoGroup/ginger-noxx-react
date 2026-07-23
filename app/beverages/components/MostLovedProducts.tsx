export default function MostLovedProducts() {
  const products = [
    {
      image: "/beverages/most-loved.png",
      badge: "Most Popular",
      badgeClass: "orange",
      category: "Beverages",
      title: "Sparkling Ginger Lime Infusion",
      description:
        "Zesty, light, real ginger warmth. The signature GingerNoxx drink.",
      price: "£19.99",
      pack: "6-Pack",
    },
    {
      image: "/beverages/most-loved.png",
      badge: "Fan Favourite",
      badgeClass: "dark",
      category: "Shots",
      title: "Ginger Fire Shot",
      description:
        "60ml concentrated ginger shot. Start your day with intent.",
      price: "£18.99",
      pack: "6-Pack",
    },
    {
      image: "/beverages/most-loved.png",
      badge: "",
      badgeClass: "",
      category: "Iced Tea",
      title: "Botanical Iced Tea",
      description:
        "Gentle ginger with botanical calm. Perfect evening ritual.",
      price: "£21.99",
      pack: "6-Pack",
    },
    {
      image: "/beverages/most-loved.png",
      badge: "Best Value",
      badgeClass: "green",
      category: "Wellness",
      title: "Ginger Turmeric Blend",
      description:
        "Anti-inflammatory power in a clean, warming drink format.",
      price: "£22.99",
      oldPrice: "£27.99",
    },
  ];

  return (
    <section className="beverages-loved-section">
      <div className="beverages-loved-container">
        <span className="beverages-loved-label">
          MOST LOVED
        </span>

        <h2 className="beverages-loved-title">
          Most Loved Ginger Drinks
        </h2>

        <div className="beverages-loved-line"></div>

        <p className="beverages-loved-description">
          Most customers start here.
        </p>

        <div className="beverages-loved-grid">
          {products.map((product, index) => (
            <div className="beverages-loved-card" key={index}>
              <div className="beverages-loved-image">
                <img src={product.image} alt={product.title} />

                {product.badge && (
                  <span
                    className={`beverages-loved-badge ${product.badgeClass}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="beverages-loved-content">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className="product-price-row">
                  <span className="price">{product.price}</span>

                  {product.pack && (
                    <span className="pack">
                      {product.pack}
                    </span>
                  )}

                  {product.oldPrice && (
                    <span className="old-price">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                <button className="product-btn">
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