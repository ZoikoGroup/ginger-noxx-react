const motionCards = [
  {
    category: "Beverages",
    title: "Original Sparkling",
    description:
      "Ginger core + citrus pairing + carbonation balance. The platform's clearest consumer expression.",
    badge: "✓ Ginger-Fusion Applied",
    layer: "Layer 1 Core",
    image: "/Image/already-in-motion.png",
    status: "applied",
  },
  {
    category: "Condiments",
    title: "Ginger Fire Sauce",
    description:
      "Ginger core + chilli pairing + heat-balance calibration. Demonstrates the pairing layer at maximum expression.",
    badge: "✓ Ginger-Fusion Applied",
    layer: "Layer 2 Pairing",
    image: "/Image/already-in-motion.png",
    status: "applied",
  },
  {
    category: "Spices",
    title: "Master Chef Blend",
    description:
      "Ginger core + botanical harmony + culinary balance calibration. Proof of format versatility across professional use cases.",
    badge: "✓ Ginger-Fusion Applied",
    layer: "Layer 3 Balance",
    image: "/Image/already-in-motion.png",
    status: "applied",
  },
  {
    category: "Functional · In Development",
    title: "Wellness Format Pipeline",
    description:
      "The same four-layer system is now being applied to the next category expansion — demonstrating the platform's scalability beyond food and drink.",
    badge: "⏳ Platform-Ready",
    layer: "Layer 4 Output",
    image: "/Image/already-in-motion.png",
    status: "ready",
  },
];

const InnovationAlreadyMotion = () => {
  return (
    <section className="innovation-motion-section">
      <div className="innovation-motion-container">
        <h2 className="innovation-motion-heading">
          Already in Motion
        </h2>

        <p className="innovation-motion-subheading">
          GingerNoxx products demonstrate how ginger-fusion can be applied across
          multiple formats — validating its adaptability and commercial viability
          across five global markets.
        </p>

        <div className="innovation-motion-grid">
          {motionCards.map((item, index) => (
            <div className="innovation-motion-card" key={index}>
              <div className="innovation-motion-image">
                <img src={item.image} alt={item.title} />

                <span className="innovation-motion-layer">
                  {item.layer}
                </span>
              </div>

              <div className="innovation-motion-content">
                <span className="innovation-motion-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div
                  className={`innovation-motion-badge ${
                    item.status === "ready"
                      ? "innovation-motion-ready"
                      : "innovation-motion-applied"
                  }`}
                >
                  {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationAlreadyMotion;