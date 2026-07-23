import "./wellness.css";

const wellnessSteps = [
  
  {
    id: 1,
    image: "/wellness/morning-shot.png",
    badge: "Recommended First Step",
    title: "Morning Shot",
    description:
      "60ml Ginger Fire Shot every morning. Takes 5 seconds. The simplest daily ginger habit.",
    price: "Add to Cart — £18.99 for 6",
    featured: true,
  },
  {
    id: 2,
    image: "/wellness/evening-tea.png",
    title: "Evening Tea",
    description:
      "Botanical Iced Tea every evening. Gentle ginger to support digestion and wind down after the day.",
    price: "Add to Cart — £21.99 for 6",
    featured: false,
  },
  {
    id: 3,
    image: "/wellness/anytime-drink.png",
    title: "Anytime Drink",
    description:
      "Sparkling Ginger Lime whenever. No schedule required — just reach for it when you want something better.",
    price: "Add to Cart — £19.99 for 6",
    featured: false,
  },
];


const EasiestWayToBegin = () => {
  return (
    <section className="wellness-begin-section">
      <div className="wellness-begin-container">
        {/* Heading */}

        <span className="wellness-begin-subtitle">
          START SIMPLE
        </span>

        <h2 className="wellness-begin-title">
          The Easiest Way to Begin
        </h2>

        <div className="wellness-begin-divider"></div>

        <p className="wellness-begin-description">
          One low-effort starting point is all you need. Pick the format that
          fits your
          <br />
          day.
        </p>

        {/* Cards */}

        <div className="wellness-begin-grid">
          {wellnessSteps.map((item) => (
            <div
              key={item.id}
              className={`wellness-begin-card ${
                item.featured ? "featured" : ""
              }`}
            >
              <img
  src={item.image}
  alt={item.title}
  className="wellness-begin-icon"
/>

              {item.badge && (
                <div className="wellness-begin-badge">
                  {item.badge}
                </div>
              )}

              <h3 className="wellness-begin-card-title">
                {item.title}
              </h3>

              <p className="wellness-begin-card-description">
                {item.description}
              </p>

              <button className="wellness-begin-price">
                {item.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasiestWayToBegin;