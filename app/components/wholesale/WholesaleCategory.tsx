import "./wholesale.css";

const features = [
  {
    number: "01",
    icon: "/Image/lifecycle-revenue.png",
    title: "Proven Repeat Purchase Rate",
    description:
      "A 95% repeat purchase rate across 10,000+ customers globally. Products customers come back for are products retailers stock permanently.",
  },
  {
    number: "02",
    icon: "/Image/level-growth.png",
    title: "Category-Level Growth",
    description:
      "Functional beverages and ginger-adjacent food categories are among the fastest growing segments in global retail. GingerNoxx owns the formulation IP.",
  },
  {
    number: "03",
    icon: "/Image/global-inclusive.png",
    title: "Multi-Market Production",
    description:
      "Contract manufacturing across five countries ensures supply resilience and market-proximate production — lower lead times, stronger margins.",
  },
  {
    number: "04",
    icon: "/Image/account-manager.png",
    title: "Dedicated Account Manager",
    description:
      "Every wholesale account gets a named account manager with commercial knowledge of your market. Not a call centre — a relationship.",
  },
  {
    number: "05",
    icon: "/Image/friendly-economics.png",
    title: "Margin-Friendly Economics",
    description:
      "Contract-aware pricing tiers, volume incentives, and promotional support built into the commercial framework from day one.",
  },
  {
    number: "06",
    icon: "/Image/ready-support.png",
    title: "Retail-Ready Support",
    description:
      "POS materials, shelf-ready packaging, category merchandising data, and a full retail deck available for every wholesale partner.",
  },
];

const stats = [
  {
    value: "40+",
    label: "SKUs Available",
  },
  {
    value: "5",
    label: "Global Markets",
  },
  {
    value: "95%",
    label: "Repeat Purchase",
  },
  {
    value: "10k+",
    label: "End Customers",
  },
];

export default function WholesaleCategory() {
  return (
    <section className="wholesale-category">
      <div className="wholesale-container">

        <div className="wholesale-category-heading">
          <h2>
            The Category That <span>Converts and Retains</span>
          </h2>
        </div>

        <div className="wholesale-grid">
                      {features.map((item, index) => (
            <div className="wholesale-card" key={index}>
              <div className="wholesale-card-number">
                {item.number}
              </div>

              <img
                src={item.icon}
                alt={item.title}
                className="wholesale-card-icon"
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="wholesale-stats">
          {stats.map((stat, index) => (
            <div className="wholesale-stat-card" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}