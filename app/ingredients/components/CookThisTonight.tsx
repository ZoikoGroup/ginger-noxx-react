import "./ingredients.css";

const dishes = [
  {
    id: 1,
    image: "/ingredients/stir-fry.png",
    title: "Stir Fry Bowl",
    description:
      "Quick, satisfying, and packed with ginger heat. 20 minutes from pan to table.",
  },
  {
    id: 2,
    image: "/ingredients/ginger-chicken.png",
    title: "Ginger Chicken",
    description:
      "Roast or pan-fry. The Ginger Fire Sauce marinade transforms any chicken dish.",
  },
  {
    id: 3,
    image: "/ingredients/quick-noodles.png",
    title: "Quick Noodles",
    description:
      "12 minutes. One pan. Real depth from the sauce — the fastest ginger meal.",
  },
];

const CookThisTonight = () => {
  return (
    <section className="cook-tonight-section">
      <div className="cook-tonight-container">
        <span className="cook-tonight-subtitle">
          COOK THIS TONIGHT
        </span>

        <h2 className="cook-tonight-title">
          Cook This Tonight
        </h2>

        <div className="cook-tonight-divider"></div>

        <p className="cook-tonight-description">
          Start with a simple dish — we will show you exactly what to use.
        </p>

        <div className="cook-tonight-grid">
          {dishes.map((dish) => (
            <div className="cook-tonight-card" key={dish.id}>
              <div className="cook-tonight-icon">
                <img src={dish.image} alt={dish.title} />
              </div>

              <h3 className="cook-tonight-card-title">
                {dish.title}
              </h3>

              <p className="cook-tonight-card-description">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CookThisTonight;