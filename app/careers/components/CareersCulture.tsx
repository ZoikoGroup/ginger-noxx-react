import "./careers.css";

const cultureCards = [
  {
    category: "Innovation Labs",
    title: "Where Ideas Become Products",
    description:
      "Our R&D team works in collaborative lab environments across Sacramento, London, and remote — prototyping, testing, and refining with real ingredients and real ambition.",
    image: "/careers/culture-1.png",
    bgClass: "careers-culture-bg-dark",
  },
  {
    category: "Global Teams",
    title: "Cross-Cultural, Cross-Functional",
    description:
      "We operate across multiple markets and time zones. Your work connects directly to customers in New York, London, Accra, Singapore, and beyond.",
    image: "/careers/culture-2.png",
    bgClass: "careers-culture-bg-orange",
  },
  {
    category: "Purpose & Growth",
    title: "Mentorship and Momentum",
    description:
      "From day one, you have a mentor, a clear growth path, and the freedom to take ownership. We promote from within and invest in the people who build with us.",
    image: "/careers/culture-3.png",
    bgClass: "careers-culture-bg-green",
  },
];

export default function CareersCulture() {
  return (
    <section className="careers-culture-section">
      <div className="careers-culture-container">
        <h2 className="careers-culture-heading">
          <span className="careers-culture-title">
            Culture, Growth,
            <br />
          </span>
          <span className="careers-culture-highlight">
            and Meaning
          </span>
        </h2>

        <div className="careers-culture-grid">
          {cultureCards.map((card) => (
            <div className="careers-culture-card" key={card.title}>
              <div className={`careers-culture-image ${card.bgClass}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="careers-culture-icon"
                />
              </div>

              <div className="careers-culture-content">
                <span className="careers-culture-category">
                  {card.category}
                </span>

                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}