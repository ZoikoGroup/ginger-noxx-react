import "./careers.css";

export default function CareersIntro() {
  const highlights = [
    {
      title: "Continuous Learning",
      description:
        "Mentorship programmes, cross-functional exposure, and learning budgets for every team member.",
      image: "/careers/learning.png",
    },
    {
      title: "Global Perspective",
      description:
        "Work across markets and disciplines with a team that spans continents and cultures.",
      image: "/careers/global.png",
    },
    {
      title: "Move Fast, Build Right",
      description:
        "Agile teams with the infrastructure of Zoiko Group behind them — speed without sacrifice.",
      image: "/careers/lightning.png",
    },
  ];

  return (
    <section className="careers-intro-section">
      <div className="careers-intro-container">
        {/* Left Content */}
        <div className="careers-intro-left">
          <div className="careers-intro-quote">
            <h2>
              "We offer a collaborative environment
              <br />
              where talent meets purpose."
            </h2>
          </div>

          <p className="careers-intro-description">
            From product development to operations, marketing, and research
            <br />
            — your work at Zoiko Foods Corp contributes to a global mission
            <br />
            rooted in flavour, function, and responsibility. We don't hire for
            <br />
            roles, we hire for impact.
          </p>

          <a href="#jobs" className="careers-intro-btn">
            Explore Open Roles →
          </a>
        </div>

        {/* Right Cards */}
        <div className="careers-intro-right">
          {highlights.map((item) => (
            <div className="careers-highlight-card" key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="careers-highlight-icon"
              />

              <div className="careers-highlight-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}