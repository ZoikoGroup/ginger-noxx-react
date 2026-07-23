import "./wellness.css";

const trustItems = [
  "Clean Ingredients",
  "No Artificial Additives",
  "Ethically Sourced",
  "Everyday Use",
  "Halal and Vegan Certified",
];

const WellnessTrustBar = () => {
  return (
    <section className="wellness-trust-bar">
      <div className="wellness-trust-container">
        {trustItems.map((item, index) => (
          <div className="wellness-trust-item" key={index}>
            <span className="wellness-trust-dot"></span>
            <span className="wellness-trust-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WellnessTrustBar;