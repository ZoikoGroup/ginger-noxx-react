import React from 'react';
import "./sustainability.css";

const stages = [
  {
    num: "01",
    tag: "SOURCING",
    title: "Ethical Ingredient Selection",
    desc: "Every ingredient is traced to its source. We prioritise partnerships with regenerative farms, co-operatives,\nand suppliers who share our values around land care and fair wages.",
    hasLine: true,
  },
  {
    num: "02",
    tag: "FORMULATION",
    title: "Clean-Label Development",
    desc: "Our formulation teams apply a strict no-shortcuts standard. If it doesn't naturally serve the product, it\ndoesn't belong in it — no exceptions.",
    hasLine: true,
  },
  {
    num: "03",
    tag: "PRODUCTION",
    title: "Responsible Manufacturing",
    desc: "We work with ISO 22000 certified contract manufacturers who meet our environmental and quality\nstandards across every production jurisdiction.",
    hasLine: true,
  },
  {
    num: "04",
    tag: "PACKAGING",
    title: "Planet-First Materials",
    desc: "We are systematically replacing single-use plastics with recyclable, compostable, and refillable\nalternatives — with a 2027 target for full portfolio compliance.",
    hasLine: true,
  },
  {
    num: "05",
    tag: "DISTRIBUTION",
    title: "Efficient Global Logistics",
    desc: "Route optimisation, consolidated shipments, and regional warehousing reduce our transport emissions\nwhile supporting faster, more reliable delivery for customers.",
    hasLine: false,
  },
];

export default function SustainabilityStages() {
  return (
    <section className="sustain-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-heading">
          Sustainability at <span className="sustain-heading-orange">Every Stage</span>
        </h2>

        {/* Subtitle */}
        <p className="sustain-subheading">
          Sustainability informs every stage of product development — from<br className="hidden sm:inline" />
          ingredient selection to production, packaging, and logistics.
        </p>

        {/* 5 Stages List */}
        <div className="sustain-stages-container">
          {stages.map((stage, idx) => (
            <div key={idx} className="sustain-stage-row">
              {/* Badge + Line Column */}
              <div className="sustain-stage-badge-col">
                <div className="sustain-stage-badge">
                  {stage.num}
                </div>
                {stage.hasLine && (
                  <div className="sustain-stage-line" />
                )}
              </div>

              {/* Text Column */}
              <div className="sustain-stage-text-col">
                <div className="sustain-stage-tag">
                  {stage.tag}
                </div>
                <h3 className="sustain-stage-title">
                  {stage.title}
                </h3>
                <p className="sustain-stage-desc">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
