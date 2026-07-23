import "./snacks.css";

const snacks = [
  {
    id: 1,
    tag: "Most Popular",
    tagClass: "most-popular",
    image: "/snacks/shop-craving.png",
    title: "Energy Chews",
    description:
      "Soft, chewy, and energising. Real ginger with a clean sweetness.",
    price: "£3.49",
    priceTag: "Per Pack",
  },
  {
    id: 2,
    tag: "Fiery",
    tagClass: "fiery",
    image: "/snacks/shop-craving.png",
    title: "Ginger Fire Bites",
    description:
      "Bold heat, real ginger, addictive crunch. Not for the timid.",
    price: "£3.99",
  },
  {
    id: 3,
    image: "/snacks/shop-craving.png",
    title: "Granola Clusters",
    description:
      "Oat clusters with ginger, honey, and toasted seeds. Breakfast or snack.",
    price: "£4.49",
  },
  {
    id: 4,
    tag: "Indulgent",
    tagClass: "indulgent",
    image: "/snacks/shop-craving.png",
    title: "Dark Choc Ginger Bark",
    description:
      "70% dark chocolate with crystallised ginger pieces. Genuinely special.",
    price: "£4.99",
    oldPrice: "£6.49",
  },
];

const ShopByCraving = () => {
  return (
    <section className="shop-craving-section">
      <div className="shop-craving-container">
        {/* Section Heading */}

        <span className="shop-craving-subtitle">
          SHOP BY CRAVING
        </span>

        <h2 className="shop-craving-title">
          Shop by Craving
        </h2>

        <div className="shop-craving-divider"></div>

        <p className="shop-craving-description">
          Find what your taste is asking for right now.
        </p>

        {/* Filter Buttons */}

        <div className="shop-craving-filters">
          <button className="filter-btn active">All Snacks</button>
          <button className="filter-btn">Sweet</button>
          <button className="filter-btn">Spicy</button>
          <button className="filter-btn">Crunchy</button>
          <button className="filter-btn">Clean</button>
          <button className="filter-btn">Indulgent</button>
        </div>

        {/* Product Cards */}

        <div className="shop-craving-grid">
          {snacks.map((item) => (
            <div className="shop-craving-card" key={item.id}>
              <div className="shop-craving-image">
                <img src={item.image} alt={item.title} />

                {item.tag && (
                  <div className={`product-tag ${item.tagClass}`}>
                    {item.tag}
                  </div>
                )}
              </div>

              <div className="shop-craving-content">
                <span className="product-category">
                  Snacks
                </span>

                <h3 className="product-title">
                  {item.title}
                </h3>

                <p className="product-description">
                  {item.description}
                </p>

                <div className="product-price-row">
                  <span className="product-price">
                    {item.price}
                  </span>

                  {item.priceTag && (
                    <span className="price-pill">
                      {item.priceTag}
                    </span>
                  )}

                  {item.oldPrice && (
                    <span className="old-price">
                      {item.oldPrice}
                    </span>
                  )}
                </div>

                <button className="add-cart-btn">
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

export default ShopByCraving;