const comparison = [
  {
    dimension: "Formulation",
    conventional: "Often diluted — ginger as a minor flavour note",
    gingerNoxx: "Optimized ginger as the load-bearing ingredient",
  },
  {
    dimension: "Ingredients",
    conventional: "Artificial additives and preservatives common",
    gingerNoxx: "Clean-label approach — no unnecessary additives",
  },
  {
    dimension: "Focus",
    conventional: "Generic flavour-first product development",
    gingerNoxx: "Flavour + function integration by design",
  },
  {
    dimension: "Quality Control",
    conventional: "Inconsistent across batches and markets",
    gingerNoxx: "Controlled formulation process across 5 regions",
  },
  {
    dimension: "Certification",
    conventional: "Limited compliance declarations",
    gingerNoxx: "HALAL · VEGAN · CLEAN LABEL · ISO 22000",
  },
];

export default function WhyComparison() {
  return (
    <section className="why-comparison">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="comparison-title">
          <span>Not All Ginger Products </span>
          <span className="highlight">Are Equal</span>
        </h2>

        <div className="comparison-table">

          <div className="comparison-header">
            <div className="head dimension">Dimension</div>
            <div className="head conventional">Conventional Products</div>
            <div className="head ginger">GingerNoxx™</div>
          </div>

          {comparison.map((item) => (
            <div className="comparison-row" key={item.dimension}>

              <div className="cell dimension-cell">
                {item.dimension}
              </div>

              <div className="cell conventional-cell">
                {item.conventional}
              </div>

              <div className="cell ginger-cell">
                {item.gingerNoxx}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}