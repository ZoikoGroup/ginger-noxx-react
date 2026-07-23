import "./snacks.css";

const features = [
  {
    id: 1,
    image: "/snacks/ginger-icon.png",
    title: "Real Ginger in Every Bite",
    description:
      "Not ginger-flavoured. Actual ginger — in every single product.",
  },
  {
    id: 2,
    image: "/snacks/clean-icon.png",
    title: "No Artificial Colours",
    description:
      "Clean ingredients from start to finish — nothing synthetic, ever.",
  },
  {
    id: 3,
    image: "/snacks/halal-vegan-icon.png",
    title: "Halal and Vegan",
    description:
      "Inclusive by design. Every snack meets both certifications.",
  },
];

const SnacksThatDoMore = () => {
  return (
    <section className="snacks-more-section">
      <div className="snacks-more-container">
        <span className="snacks-more-subtitle">
          CLEAN INGREDIENTS
        </span>

        <h2 className="snacks-more-title">
          Snacks That Do More
        </h2>

        <div className="snacks-more-divider"></div>

        <div className="snacks-more-grid">
          {features.map((item) => (
            <div className="snacks-more-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="snacks-more-icon"
              />

              <h3 className="snacks-more-card-title">
                {item.title}
              </h3>

              <p className="snacks-more-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnacksThatDoMore;