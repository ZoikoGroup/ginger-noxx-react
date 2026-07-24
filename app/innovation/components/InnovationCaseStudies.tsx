import "./innovation.css";

const caseStudies = [
  {
    category: "Beverages · Platform Launch",
    title: "Sparkling Ginger Lime Infusion",
    description:
      "The first Ginger-Fusion™ RTD beverage — proving that a formulation system, not a flavour trend, could define a new category.",
    reviews: "4.9★ · 2,140+ reviews",
  },
  {
    category: "Condiments · Culinary Extension",
    title: "Ginger Fire Sauce",
    description:
      "Applying the platform's Ginger-Fusion™ architecture to a culinary condiment — structured heat, layered depth, and clean-label credentials in one format.",
    reviews: "4.8★ · 2,184+ reviews",
  },
  {
    category: "Spice Blends · Chef Channel",
    title: "Master Chef Blend",
    description:
      "Taking professional formulation principles into a retail spice format — restaurant-grade depth made accessible for everyday home cooking.",
    reviews: "4.9★ · 2,976+ reviews",
  },
];

export default function InnovationCaseStudies() {
  return (
    <section className="innovation-case-section">
      <div className="innovation-case-container">
        <h2 className="innovation-case-title">
          Products That <br />
          <span>Define Their Category</span>
        </h2>

        <p className="innovation-case-subtitle">
          Three examples of how the Zoiko Foods Corp Innovation Platform turned
          <br />
          a formulation principle into a commercially scalable product reality.
        </p>

        <div className="innovation-case-grid">
          {caseStudies.map((item, index) => (
            <div key={index} className="innovation-case-card">
              <div className="innovation-case-image" />

              <div className="innovation-case-content">
                <p className="innovation-case-category">
                  {item.category}
                </p>

                <h3 className="innovation-case-heading">
                  {item.title}
                </h3>

                <p className="innovation-case-description">
                  {item.description}
                </p>

                <p className="innovation-case-reviews">
                  {item.reviews}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="innovation-case-button">
          View All Case Studies
        </button>
      </div>
    </section>
  );
}