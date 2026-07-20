const modelCards = [
  {
    number: "01",
    title: "Owned Formulations",
    description:
      "Every GingerNoxx formulation is developed and owned internally. This protects defensibility, ensures consistency across markets, and maintains long-term brand equity regardless of manufacturing partner.",
  },
  {
    number: "02",
    title: "Distributed Manufacturing",
    description:
      "Production is executed through certified contract partners across the USA, UK, Canada, China, and India — optimised around capability, geography, and growth stage. Scale without fixed-asset drag.",
  },
  {
    number: "03",
    title: "AI-Assisted Development",
    description:
      "AI-supported workflows analyse flavour trends, identify emerging patterns, test ingredient pairings, and accelerate concept refinement — turning insight into formulation faster than legacy CPG models allow.",
  },
  {
    number: "04",
    title: "Multi-Channel Readiness",
    description:
      "Structured for DTC, retail, wholesale, travel retail, online marketplaces, and QSR from day one — with retail-ready packaging systems, GTIN infrastructure, and trade activation assets developed alongside product.",
  },
  {
    number: "05",
    title: "Cross-Category Ecosystem",
    description:
      "Beverages, condiments, snacks, and spices reinforce one another — increasing basket value, consumer retention, channel breadth, and brand relevance across more daily occasions.",
  },
  {
    number: "06",
    title: "Global Inclusivity",
    description:
      "Products are built with diverse dietary and cultural needs embedded by design — halal suitability, vegan-friendly options, and family-safe standards — strengthening brand reach across international markets.",
  },
];

export default function AboutModel() {
  return (
    <section className="about-model">
      <div className="container">

        <div className="about-model-badge">
          The GingerNoxx Model
        </div>

        <h2 className="about-model-title">
          IP-Led. <span>Asset-Light.</span> Globally Ready
        </h2>

        <p className="about-model-subtitle">
          All formulations are owned internally. Production runs through
          certified contract manufacturing partners. This creates flexibility
          without sacrificing control.
        </p>

        <div className="about-model-grid">
          {modelCards.map((card) => (
            <div key={card.number} className="about-model-card">

              <div className="about-model-number">
                {card.number}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>
          ))}
        </div>

        <div className="about-model-bottom">

          <p>
            This combination of{" "}
            <strong>ownership and flexibility</strong> gives GingerNoxx a
            defensible moat: it can innovate like a modern product company
            while scaling like a disciplined international CPG platform.
          </p>

          <button>
            Partner With Us →
          </button>

        </div>

      </div>
    </section>
  );
}
