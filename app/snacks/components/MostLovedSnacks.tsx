import "./snacks.css";

const mostLovedSnacks = [
  {
    id: 1,
    image: "snacks/most-loved.png",
    title: "Crystallised Ginger Chews",
    description:
      "A classic. Real crystallised ginger with a sugar-dusted coating.",
    price: "£2.99",
  },
  {
    id: 2,
    image: "snacks/most-loved.png",
    title: "Mango Ginger Strips",
    description:
      "Tropical mango with a ginger warmth finish. Light and refreshing.",
    price: "£3.49",
  },
  {
    id: 3,
    image: "snacks/most-loved.png",
    title: "Ginger Seed Mix",
    description:
      "Pumpkin, sunflower, and sesame with ginger seasoning. Snack better.",
    price: "£3.99",
  },
  {
    id: 4,
    image: "snacks/most-loved.png",
    title: "Ginger Protein Balls",
    description:
      "High protein, real ginger, oat base. Post-workout or anytime snack.",
    price: "£4.49",
  },
];

const MostLovedSnacks = () => {
  return (
    <section className="most-loved-section">
      <div className="most-loved-container">
        {/* Heading */}

        <span className="most-loved-subtitle">
          MOST LOVED
        </span>

        <h2 className="most-loved-title">
          Most Loved Snacks
        </h2>

        <div className="most-loved-divider"></div>

        <p className="most-loved-description">
          Tried and loved by customers.
        </p>

        {/* Cards */}

        <div className="most-loved-grid">
          {mostLovedSnacks.map((item) => (
            <div className="most-loved-card" key={item.id}>
              <div className="most-loved-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="most-loved-content">
                <span className="most-loved-category">
                  Snacks
                </span>

                <h3 className="most-loved-product-title">
                  {item.title}
                </h3>

                <p className="most-loved-product-description">
                  {item.description}
                </p>

                <div className="most-loved-price">
                  {item.price}
                </div>

                <button className="most-loved-btn">
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

export default MostLovedSnacks;