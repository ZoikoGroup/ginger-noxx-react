"use client";

import Image from "next/image";

const coverageData = [
  { region: "USA", percent: 78 },
  { region: "UK", percent: 65 },
  { region: "Canada", percent: 52 },
  { region: "India", percent: 28 },
  { region: "Germany", percent: 8 },
];

const categoryData = [
  {
    image: "/find-us/beverages.png",
    title: "Beverages · 5 markets",
    progress: 90,
    color: "green",
  },
  {
    image: "/find-us/condiments.png",
    title: "Condiments · 4 markets",
    progress: 78,
    color: "green",
  },
  {
    image: "/find-us/snacks.png",
    title: "Snacks · 3 markets",
    progress: 65,
    color: "yellow",
  },
  {
    image: "/find-us/spices.png",
    title: "Spices · 2 markets",
    progress: 48,
    color: "orange",
  },
  {
    image: "/find-us/giftsets.png",
    title: "Gift Sets · 2 markets",
    progress: 35,
    color: "orange",
  },
];

const pipelineData = [
  {
    country: "Germany",
    description: "EU gateway · Specialty retail · Q3 2026",
    status: "Coming Soon",
    type: "coming",
  },
  {
    country: "UAE",
    description: "Dubai premium hospitality · Q4 2026",
    status: "Coming Soon",
    type: "coming",
  },
  {
    country: "Australia",
    description: "Specialty & DTC · 2027 target",
    status: "Planned",
    type: "planned",
  },
  {
    country: "France",
    description: "EU secondary market · 2027 target",
    status: "Planned",
    type: "planned",
  },
];

export default function DistributionGlance() {
  return (
    <section className="distribution-section">
      <div className="distribution-container">

        <div className="distribution-heading">
          <h2>
            Distribution <span>at a Glance</span>
          </h2>

          <p>
            A real-time view of GingerNoxx's distribution coverage,
            category availability by market, and expansion pipeline —
            for distributors, investors, and retail stakeholders.
          </p>
        </div>

        <div className="distribution-grid">

          {/* Card 1 */}

          <div className="distribution-card">
            <h3>Coverage by Region</h3>

            {coverageData.map((item) => (
              <div className="coverage-row" key={item.region}>
                <span>{item.region}</span>

                <div className="coverage-bar">
                  <div
                    className="coverage-fill"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                <strong>{item.percent}%</strong>
              </div>
            ))}

            <small>
              Indexed by retail door count. Updated quarterly.
            </small>
          </div>

          {/* Card 2 */}

          <div className="distribution-card">
            <h3>Category Availability by Market</h3>

            {categoryData.map((item) => (
              <div className="category-row" key={item.title}>

                <div className="category-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={26}
                    height={26}
                  />
                </div>

                <div className="category-bar">
                  <div
                    className={`category-fill ${item.color}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                <span>{item.title}</span>

              </div>
            ))}
          </div>

          {/* Card 3 */}

          <div className="distribution-card">
            <h3>Expansion Pipeline</h3>

            {pipelineData.map((item) => (
              <div className="pipeline-row" key={item.country}>

                <div>
                  <h4>{item.country}</h4>
                  <p>{item.description}</p>
                </div>

                <span
                  className={`pipeline-badge ${item.type}`}
                >
                  {item.status}
                </span>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}