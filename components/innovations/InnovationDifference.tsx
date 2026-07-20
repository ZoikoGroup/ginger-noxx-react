const comparisonData = [
  {
    dimension: "Approach",
    traditionalLight: "Product-driven",
    traditionalDark: " — categories define the portfolio",
    ginger:
      "Platform-driven — formulation defines the category",
  },
  {
    dimension: "Formulation",
    traditionalLight: "Static recipes",
    traditionalDark: " — fixed per SKU, limited adaptation",
    ginger:
      "Dynamic formulation — layered system, adaptable by market",
  },
  {
    dimension: "Category Scope",
    traditionalLight: "Single-category",
    traditionalDark: " — expertise siloed by product type",
    ginger:
      "Multi-category system — one platform, infinite outputs",
  },
  {
    dimension: "Scalability",
    traditionalLight: "Limited scalability",
    traditionalDark: " — reformulation required per region",
    ginger:
      "Global expansion ready — consistent integrity at any scale",
  },
  {
    dimension: "IP Position",
    traditionalLight: "Brand-led",
    traditionalDark: " — defensibility through marketing spend",
    ginger:
      "Formulation IP — owned methodology, proprietary moat",
  },
  {
    dimension: "Development Speed",
    traditionalLight: "Quarters",
    traditionalDark: " — traditional NPD cycles",
    ginger:
      "Weeks — platform-native SKU development",
  },
];

const InnovationDifference = () => {
  return (
    <section className="innovation-difference">
      <div className="innovation-difference-container">
        <h2 className="innovation-difference-title">
          Why This Is Different
        </h2>

        <p className="innovation-difference-subtitle">
          The distinction between traditional brands and a platform-led
          formulation company isn't marginal — it's structural.
        </p>

        <div className="innovation-difference-table">
          {/* Header */}
          <div className="innovation-difference-header">
            <div className="innovation-difference-head">
              Dimension
            </div>

            <div className="innovation-difference-head">
              Traditional Brands
            </div>

            <div className="innovation-difference-head">
              GingerNoxx™
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <div
              className="innovation-difference-row"
              key={index}
            >
              <div className="innovation-difference-label">
                {item.dimension}
              </div>

              <div className="innovation-difference-traditional">
                <span className="innovation-difference-light">
                  {item.traditionalLight}
                </span>

                <span className="innovation-difference-dark">
                  {item.traditionalDark}
                </span>
              </div>

              <div className="innovation-difference-ginger">
                {item.ginger}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationDifference;