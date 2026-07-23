export default function DecisionEngine() {
  const cards = [
    {
      image: "/beverages/refreshment.png",
      title: "Refreshment",
      subtitle: "Light, crisp, refreshing",
    },
    {
      image: "/beverages/energy.png",
      title: "Energy",
      subtitle: "Natural focus and lift",
    },
    {
      image: "/beverages/digestion.png",
      title: "Digestion",
      subtitle: "Calm and settle",
    },
    {
      image: "/beverages/first-time.png",
      title: "First-Time",
      subtitle: "Start here",
    },
  ];

  return (
    <section className="beverages-decision-section">
      <div className="beverages-decision-container">
        <span className="beverages-decision-label">
          DECISION ENGINE
        </span>

        <h2 className="beverages-decision-title">
          Find Your Drink
        </h2>

        <div className="beverages-decision-line"></div>

        <p className="beverages-decision-description">
          Tell us what you need — we will show you what fits.
        </p>

        <div className="beverages-decision-grid">
          {cards.map((card, index) => (
            <div className="beverages-decision-card" key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="beverages-decision-icon"
              />

              <h3>{card.title}</h3>

              <p>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}