import "./wellness.css";

const wellnessFocus = [
  {
    id: 1,
    image: "/wellness/energy-support.png",
    title: "Energy Support",
    description:
      "Natural sustained energy without caffeine dependency or afternoon crashes.",
  },
  {
    id: 2,
    image: "/wellness/gut-digestion.png",
    title: "Gut and Digestion",
    description:
      "Products formulated around ginger's traditional digestive support properties.",
  },
  {
    id: 3,
    image: "/wellness/immune-resilience.png",
    title: "Immune Resilience",
    description:
      "Ginger, turmeric, and antioxidant-forward formulations for daily resilience.",
  },
  {
    id: 4,
    image: "/wellness/rest-recovery.png",
    title: "Rest and Recovery",
    description:
      "Calming botanical blends to support wind-down and overnight recovery.",
  },
  {
    id: 5,
    image: "/wellness/active-lifestyle.png",
    title: "Active Lifestyle",
    description:
      "Pre and post-workout ginger options for people who move every day.",
  },
  {
    id: 6,
    image: "/wellness/daily-balance.png",
    title: "Daily Balance",
    description:
      "Everyday wellbeing without extreme protocols. Just consistent, gentle support.",
  },
];

const ExploreByFocus = () => {
  return (
    <section className="wellness-focus-section">
      <div className="wellness-focus-container">
        <span className="wellness-focus-subtitle">
          EXPLORE BY FOCUS
        </span>

        <h2 className="wellness-focus-title">
          Explore by Wellness Focus
        </h2>

        <div className="wellness-focus-divider"></div>

        <p className="wellness-focus-description">
          Find the products aligned with your specific daily wellness priority.
        </p>

        <div className="wellness-focus-grid">
          {wellnessFocus.map((item) => (
            <div className="wellness-focus-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="wellness-focus-icon"
              />

              <h3 className="wellness-focus-card-title">
                {item.title}
              </h3>

              <p className="wellness-focus-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByFocus;