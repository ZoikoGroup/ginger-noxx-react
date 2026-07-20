const steps = [
  {
    number: "01",
    title: "Ingredient Mapping",
    description:
      "Systematic identification of ginger-compatible ingredients using our proprietary compatibility database and sensory profile library.",
    image: "/Image/mapping.png",
  },
  {
    number: "02",
    title: "Compatibility Testing",
    description:
      "Rigorous pairing trials across flavour intensity, functional interaction, and stability profiles. Failures inform the system as much as successes.",
    image: "/Image/testing.png",
  },
  {
    number: "03",
    title: "Flavor Structuring",
    description:
      "Approved pairings are structured into a final flavour architecture — balancing intensity, progression, and palate resolution across global taste profiles.",
    image: "/Image/flavour.png",
  },
  {
    number: "04",
    title: "Functional Alignment",
    description:
      "Final formulations are assessed against functional claims, clean-label standards, and regulatory frameworks across all five active markets.",
    image: "/Image/alignment.png",
  },
  {
    number: "05",
    title: "Production Optimization",
    description:
      "Shelf-ready formulations are handed to our contract manufacturing network — optimized for regional production, scalable output, and supply resilience.",
    image: "/Image/production.png",
  },
];

const InnovationConceptShelf = () => {
  return (
    <section className="innovation-concept-shelf">
      <div className="innovation-container">

        <h2 className="innovation-concept-title">
          From Concept to Shelf in Weeks, Not Quarters
        </h2>

        <div className="innovation-concept-line"></div>

        <div className="innovation-concept-grid">
          {steps.map((step) => (
            <div className="innovation-concept-card" key={step.number}>

              <div className="innovation-concept-icon">

                <span className="innovation-concept-number">
                  {step.number}
                </span>

                <img
                  src={step.image}
                  alt={step.title}
                />

              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

        <p className="innovation-concept-footer">
          This structured process ensures that every product maintains integrity
          across taste, experience, and formulation consistency regardless of
          market or format.
        </p>

      </div>
    </section>
  );
};

export default InnovationConceptShelf;