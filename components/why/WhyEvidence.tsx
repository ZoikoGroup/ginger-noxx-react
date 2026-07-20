const research = [
  {
    title: "Digestion",
    level: "High",
    width: "90%",
    note: "Most consistently studied area across global literature",
  },
  {
    title: "Immunity",
    level: "Growing",
    width: "75%",
    note: "Increasing research interest post-2019",
  },
  {
    title: "Inflammation",
    level: "Active",
    width: "65%",
    note: "6-gingerol and 6-shogaol under active investigation",
  },
  {
    title: "Metabolism",
    level: "Emerging",
    width: "50%",
    note: "Emerging area of nutritional science focus",
  },
];

const bullets = [
  "Evidence-informed formulation approach",
  "Studied globally across multiple disciplines",
  "Regulatory-compliant claim language across 5 markets",
  "Clean-label and transparent ingredient declaration",
];

export default function WhyEvidence() {
  return (
    <section className="why-evidence">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="evidence-grid">

          {/* Left */}

          <div>

            <h2 className="evidence-title">
              <span>An Ingredient With</span>
              <br />
              <span className="highlight">5,000 Years of Evidence</span>
            </h2>

            <p className="evidence-text">
              Research continues to explore ginger's naturally occurring
              compounds, including gingerol, in relation to digestive,
              metabolic, and inflammatory pathways.
            </p>

            <p className="evidence-text">
              Multiple studies have investigated how these compounds interact
              with the body's natural processes, contributing to growing
              global interest in ginger as a functional ingredient.
            </p>

            <p className="evidence-text">
              GingerNoxx formulations are built on an evidence-informed
              approach—not cherry-picked claims, but responsible engagement
              with the body of available research.
            </p>

            <ul className="evidence-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>

          {/* Right */}

          <div className="research-card">

            <h5>Global Research Interest · Indexed by Area</h5>

            {research.map((item) => (
              <div className="research-item" key={item.title}>

                <div className="research-header">
                  <span>{item.title}</span>
                  <strong>{item.level}</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: item.width }}
                  />
                </div>

                <small>{item.note}</small>

              </div>
            ))}

            <div className="research-footer">
              For illustrative purposes only. Relative index based on
              available peer-reviewed research volumes. GingerNoxx makes no
              clinical claims. These are general indicators of scientific
              interest, not product-specific outcomes.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}