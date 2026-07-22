"use client";

import Link from "next/link";

const flavorBundles = [
  {
    emoji: "🏠",
    tag: "For Everyday Cooking",
    title: "Chef Starter Pack",
    description:
      "The three core spice blends for everyday cooking — essential, versatile, and immediately useful.",
    chips: [
      "Master Chef Blend",
      "Ginger-Garlic ×2",
      "Citrus Rub",
    ],
    oldPrice: "$36.97",
    newPrice: "$28.99",
    save: "Save 22%",
    button: "Add Chef Starter Pack",
  },
  {
    emoji: "🔥",
    tag: "For Outdoor Cooking",
    title: "Grill Pack",
    description:
      "Citrus rubs and heat blends designed for outdoor grilling — bold, smoky, and perfectly balanced.",
    chips: [
      "Ginger-Citrus Rub ×2",
      "Ginger-Garlic",
      "Fusion Mix",
    ],
    oldPrice: "$34.97",
    newPrice: "$27.99",
    save: "Save 20%",
    button: "Add Grill Pack",
  },
  {
    emoji: "🌍",
    tag: "For Global Cooking",
    title: "Global Flavour Pack",
    description:
      "Diverse flavour profiles across cuisines — from the Americas to Asia, all rooted in the Ginger-Fusion™ system.",
    chips: [
      "Master Chef Blend",
      "Fusion Dry Mix ×2",
      "Citrus Rub",
    ],
    oldPrice: "$38.96",
    newPrice: "$29.99",
    save: "Save 23%",
    button: "Add Global Pack",
  },
];

export default function SpiceBlendsFlavorSystem() {
  return (
    <section className="spice-flavor-section">
      <div className="spice-flavor-container">

        <div className="spice-flavor-heading">
          <h2>
            Build Your <span className="orange">Flavour System</span>
          </h2>

          <p>
            Curated packs that give you everything you need to cook with confidence
            <br />
            — across cuisines, occasions, and skill levels.
          </p>
        </div>

        <div className="spice-flavor-grid">

          {flavorBundles.map((bundle, index) => (

            <div className="spice-flavor-card" key={index}>

              <div className="spice-flavor-content">

                <div className="spice-flavor-icon">

                  <span className="spice-flavor-emoji">
                    {bundle.emoji}
                  </span>

                  <span className="spice-flavor-tag">
                    {bundle.tag}
                  </span>

                </div>

                <h3>{bundle.title}</h3>

                <p className="spice-flavor-description">
                  {bundle.description}
                </p>

                <div className="spice-flavor-chips">

                  {bundle.chips.map((chip, chipIndex) => (

                    <span
                      key={chipIndex}
                      className="spice-flavor-chip"
                    >
                      {chip}
                    </span>

                  ))}

                </div>

                <div className="spice-flavor-price-row">

                  <span className="spice-flavor-old-price">
                    {bundle.oldPrice}
                  </span>

                  <span className="spice-flavor-price">
                    {bundle.newPrice}
                  </span>

                  <span className="spice-flavor-save">
                    {bundle.save}
                  </span>

                </div>
                                <Link
                  href="#"
                  className="spice-flavor-button"
                >
                  {bundle.button}
                </Link>

              </div>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}