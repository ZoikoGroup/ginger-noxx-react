export default function BeveragesWhy() {
  const features = [
    {
      image: "/beverages/ginger-fusion.png",
      title: "Ginger-Fusion System",
      description:
        "Every beverage uses whole ginger root — not extract powder or synthetic flavouring.",
    },
    {
      image: "/beverages/no-additives.png",
      title: "No Hidden Additives",
      description:
        "No artificial preservatives, colours, or sweeteners. What you read is exactly what is inside.",
    },
    {
      image: "/beverages/halal-vegan.png",
      title: "Halal + Vegan Certified",
      description:
        "Certified across every SKU — inclusive by formulation, not as an afterthought.",
    },
    {
      image: "/beverages/ethical.png",
      title: "Ethically Sourced",
      description:
        "Ginger from regenerative farms in Peru and India with full traceability.",
    },
  ];

  return (
    <section className="beverages-why-section">
      <div className="beverages-why-container">
        <span className="beverages-why-label">
          WHY GINGERNOXX
        </span>

        <h2 className="beverages-why-title">
          Real Ginger. Real Difference.
        </h2>

        <div className="beverages-why-line"></div>

        <div className="beverages-why-grid">
          {features.map((item, index) => (
            <div className="beverages-why-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="beverages-why-icon"
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}