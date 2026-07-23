const stats = [
  {
    value: "2020",
    label: "Founded",
  },
  {
    value: "40+",
    label: "SKUs Developed",
  },
  {
    value: "5",
    label: "Global Markets",
  },
  {
    value: "6",
    label: "Global Offices",
  },
];

const InnovationPlatformReal = () => {
  return (
    <section className="innovation-platform-real">
      <div className="innovation-platform-real-container">

        <span className="innovation-platform-real-tag">
          EXPERIENCE GINGER-FUSION
        </span>

        <h2 className="innovation-platform-real-title">
          The Platform Is Real.
          <br />
          <span>The Products Prove It.</span>
        </h2>

        <p className="innovation-platform-real-description">
          Discover how the Ginger-Fusion formulation system translates into 
          <br/>
          real-world products designed for everyday use — and long-term
          commercial scale.
        </p>

        <div className="innovation-platform-real-buttons">

          <a
            href="#"
            className="innovation-platform-real-btn innovation-platform-real-btn-primary"
          >
            Explore GingerNoxx Products
          </a>

          <a
            href="#"
            className="innovation-platform-real-btn innovation-platform-real-btn-outline"
          >
            Partner With GingerNoxx
          </a>

          <a
            href="#"
            className="innovation-platform-real-btn innovation-platform-real-btn-outline"
          >
            Request Commercial Deck
          </a>

        </div>

        <div className="innovation-platform-real-stats">

          {stats.map((item, index) => (
            <div
              className="innovation-platform-real-stat"
              key={index}
            >
              <h3>{item.value}</h3>

              <p>{item.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InnovationPlatformReal;