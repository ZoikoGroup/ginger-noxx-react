export default function BuildYourOwn() {
  const boxes = [
    {
      image: "/bundles-gifts/all-bundles.png",
      title: "Add Beverages",
      description:
        "Any 3, 6, or 12 from our full beverage range. Choose your favourites or let us pick.",
      button: "Select Beverages",
    },
    {
      image: "/bundles-gifts/all-bundles.png",
      title: "Add Snacks",
      description:
        "Energy Chews, Ginger Bites, Granola Clusters. Add 2, 3, or 4 snack varieties.",
      button: "Select Snacks",
    },
    {
      image: "/bundles-gifts/all-bundles.png",
      title: "Add Ingredients",
      description:
        "Fire Sauce, Spice Blends, Ginger Paste. Build a culinary gift or kitchen starter set.",
      button: "Select Ingredients",
    },
  ];

  return (
    <section className="build-your-own-section">
      <div className="build-your-own-container">
        <span className="build-your-own-label">
          BUILD YOUR OWN
        </span>

        <h2 className="build-your-own-title">
          Build Your Own Box
        </h2>

        <div className="build-your-own-line"></div>

        <p className="build-your-own-description">
          Create a personalised GingerNoxx set — mix categories,
          match a person, build a ritual.
        </p>

        <div className="build-your-own-grid">
          {boxes.map((item, index) => (
            <div className="build-box-card" key={index}>
              <div className="build-box-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="build-box-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button className="build-box-button">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}