"use client";

import Image from "next/image";

const cookingFeatures = [
  {
    number: "01",
    icon: "/spice-blends/clean-icon.png",
    title: "Clean by Design",
    description:
      "No fillers, no artificial additives and no unnecessary ingredients — just what the recipe actually needs.",
  },
  {
    number: "02",
    icon: "/spice-blends/chef-icon.png",
    title: "Chef-Level Flavour",
    description:
      "Developed with culinary professionals to deliver depth, balance, and repeatable results across any kitchen.",
  },
  {
    number: "03",
    icon: "/spice-blends/global-icon.png",
    title: "Globally Inspired",
    description:
      "Designed to work across cuisines — from everyday meals to elevated dishes that span continents.",
  },
  {
    number: "04",
    icon: "/spice-blends/functional-icon.png",
    title: "Functional by Nature",
    description:
      "Flavour and purpose working together — every ingredient has a defined role in the formulation system.",
  },
];

export default function SpiceBlendsRealCooking() {
  return (
    <section className="spice-cooking-section">
      <div className="spice-cooking-container">

        <div className="spice-cooking-heading">
          <h2>
            Built for <span className="orange">Real Cooking</span>
          </h2>
        </div>

        <div className="spice-cooking-grid">

          {cookingFeatures.map((item, index) => (

            <div className="spice-cooking-card" key={index}>

              <div className="spice-cooking-number">
                {item.number}
              </div>

              <div className="spice-cooking-icon">

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="spice-cooking-icon-img"
                />

              </div>

              <h3>{item.title}</h3>

              <p>
                {item.description}
              </p>
                          </div>

          ))}

        </div>

      </div>
    </section>
  );
}