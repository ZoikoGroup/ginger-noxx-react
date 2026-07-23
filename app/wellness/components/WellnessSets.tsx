import "./wellness.css";

const wellnessSets = [
  {
    id: 1,
    image: "/wellness/morning-set.png",
    category: "Morning Ritual",
    title: "Morning Wellness Set",
    description:
      "Fire Shot + Turmeric Blend. The complete morning ginger protocol in one order.",
    price: "£38.99",
    saving: "Save £2.99",
  },
  {
    id: 2,
    image: "/wellness/evening-set.png",
    category: "Evening Ritual",
    title: "Evening Calm Set",
    description:
      "Botanical Iced Tea + Ginger Mint Revival. The perfect end-of-day pair.",
    price: "£37.99",
    saving: "Save £2.99",
  },
  {
    id: 3,
    image: "/wellness/energy-set.png",
    category: "Energy Focus",
    title: "Energy and Focus Set",
    description:
      "Fire Shot + Ginger Orange Burst. Morning energy that lasts through the afternoon.",
    price: "£35.99",
    saving: "Save £2.99",
  },
  {
    id: 4,
    image: "/wellness/gut-set.png",
    category: "Gut Health",
    title: "Gut Support Set",
    description:
      "Turmeric Blend + Botanical Tea + Fire Shot. Three-way gut and digestion support daily.",
    price: "£55.99",
    saving: "Save £7.99",
  },
];

const WellnessSets = () => {
  return (
    <section className="wellness-sets-section">
      <div className="wellness-sets-container">
        <span className="wellness-sets-subtitle">
          WELLNESS SETS
        </span>

        <h2 className="wellness-sets-title">
          Wellness Sets
        </h2>

        <div className="wellness-sets-divider"></div>

        <p className="wellness-sets-description">
          Curated pairings for specific daily wellness goals — ready to add and
          <br />
          start.
        </p>

        <div className="wellness-sets-grid">
          {wellnessSets.map((item) => (
            <div className="wellness-set-card" key={item.id}>
              <div className="wellness-set-icon-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="wellness-set-icon"
                />
              </div>

              <div className="wellness-set-content">
                <span className="wellness-set-category">
                  {item.category}
                </span>

                <h3 className="wellness-set-title">
                  {item.title}
                </h3>

                <p className="wellness-set-text">
                  {item.description}
                </p>

                <div className="wellness-set-price-row">
                  <span className="wellness-set-price">
                    {item.price}
                  </span>

                  <span className="wellness-set-saving">
                    {item.saving}
                  </span>
                </div>

                <button className="wellness-set-btn">
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

export default WellnessSets;