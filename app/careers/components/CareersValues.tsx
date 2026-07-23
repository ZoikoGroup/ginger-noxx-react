import "./careers.css";

const values = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries with structured creativity and the Ginger-Fusion™ system — ideas that define markets, not follow them.",
    icon: "/careers/innovation.png",
  },
  {
    title: "Integrity",
    description:
      "Responsible sourcing, sustainability, and ethical decision-making in everything we do — no shortcuts, no compromises.",
    icon: "/careers/integrity.png",
  },
  {
    title: "Inclusion",
    description:
      "Diverse teams, inclusive culture, and equitable opportunities for all — we build better products when every perspective is heard.",
    icon: "/careers/inclusion.png",
  },
  {
    title: "Impact",
    description:
      "Your work drives measurable change in food, wellness, and sustainability — here, purpose and performance are the same thing.",
    icon: "/careers/impact.png",
  },
];

export default function CareersValues() {
  return (
    <section className="careers-values-section">
      <div className="careers-values-container">
        <h2 className="careers-values-heading">
          <span className="careers-values-title">What We </span>
          <span className="careers-values-highlight">Stand For</span>
        </h2>

        <div className="careers-values-grid">
          {values.map((value) => (
            <div className="careers-value-card" key={value.title}>
              <img
                src={value.icon}
                alt={value.title}
                className="careers-value-icon"
              />

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}