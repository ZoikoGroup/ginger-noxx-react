import "./careers.css";

const roles = [
  {
    title: "Culinary Innovation & R&D",
    description:
      "Formulating the future of ginger — product scientists, food technologists, and culinary developers.",
    openings: "2 Open",
    image: "/careers/culinary.png",
  },
  {
    title: "Marketing & Brand",
    description:
      "Brand strategy, digital marketing, content, partnerships, and go-to-market execution across global markets.",
    openings: "3 Open",
    image: "/careers/marketing.png",
  },
  {
    title: "Supply Chain & Operations",
    description:
      "Sourcing, procurement, logistics, and production planning across our multi-region manufacturing network.",
    openings: "1 Open",
    image: "/careers/supply-chain.png",
  },
  {
    title: "Sustainability & Ethics",
    description:
      "Driving our environmental and social impact agenda — from farmer partnerships to packaging innovation.",
    openings: "",
    image: "/careers/sustainability.png",
  },
  {
    title: "Technology & Digital",
    description:
      "Engineering, data, e-commerce, and the digital infrastructure that powers GingerNoxx globally.",
    openings: "2 Open",
    image: "/careers/technology.png",
  },
  {
    title: "Commercial & Partnerships",
    description:
      "Sales, wholesale, retail partnerships, and distribution development across our expanding global markets.",
    openings: "1 Open",
    image: "/careers/commercial.png",
  },
];

export default function CareersRoles() {
  return (
    <section className="careers-roles-section">
      <div className="careers-roles-container">
        <h2 className="careers-roles-heading">
          <span className="careers-roles-title">
            Explore Roles Across
            <br />
          </span>
          <span className="careers-roles-highlight">
            Every Discipline
          </span>
        </h2>

        <p className="careers-roles-description">
          We're building across multiple functions — from culinary innovation
          and
          <br />
          product development to marketing, supply chain, sustainability, and
          <br />
          global operations.
        </p>

        <div className="careers-roles-grid">
          {roles.map((role) => (
            <div className="careers-role-card" key={role.title}>
              <img
                src={role.image}
                alt={role.title}
                className="careers-role-icon"
              />

              <h3>{role.title}</h3>

              <p>{role.description}</p>

              <div className="careers-role-footer">
                <a href="#" className="careers-role-link">
                  View Roles
                </a>

                {role.openings && (
                  <span className="careers-role-badge">
                    {role.openings}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}