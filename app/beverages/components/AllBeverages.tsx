export default function AllBeverages() {
  const products = [
    {
      image: "/beverages/full-range.png",
      category: "Hydration",
      title: "Ginger Lemon Electrolyte",
      description:
        "Post-workout or midday reset — clean hydration with ginger depth.",
      price: "£20.99",
    },
    {
      image: "/beverages/full-range.png",
      category: "Botanical",
      title: "Ginger Hibiscus Cooler",
      description:
        "Floral and refreshing with gentle ginger warmth.",
      price: "£19.99",
    },
    {
      image: "/beverages/full-range.png",
      category: "Calm",
      title: "Ginger Mint Revival",
      description:
        "Cooling mint meets warming ginger. A genuinely refreshing pairing.",
      price: "£18.99",
    },
    {
      image: "/beverages/full-range.png",
      category: "Citrus",
      title: "Ginger Orange Burst",
      description:
        "Bright citrus energy with a warming ginger kick.",
      price: "£19.99",
    },
  ];

  return (
    <section className="beverages-all-section">
      <div className="beverages-all-container">
        <span className="beverages-all-label">
          FULL RANGE
        </span>

        <h2 className="beverages-all-title">
          All Ginger Beverages
        </h2>

        <div className="beverages-all-line"></div>

        <div className="beverages-all-grid">
          {products.map((product, index) => (
            <div className="beverages-all-card" key={index}>
              <div className="beverages-all-image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="beverages-all-content">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <span className="price">
                  {product.price}
                </span>

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