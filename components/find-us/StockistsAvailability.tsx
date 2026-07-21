"use client";

import Image from "next/image";

const storeSections = [
  {
    title: "United States",
    flag: "/find-us/us.png",
    stores: [
      { name: "Whole Foods", tooltip: "Selected availability" },
      { name: "Sprouts", tooltip: "Selected SKUs" },
      { name: "Erewhon", tooltip: "Full range" },
      { name: "Target", tooltip: "Regional rollout" },
      { name: "HEB", tooltip: "Texas markets" },
    ],
  },
  {
    title: "United Kingdom",
    flag: "/find-us/gb.png",
    stores: [
      { name: "Waitrose", tooltip: "Selected availability" },
      { name: "Whole Foods", tooltip: "Full range" },
      { name: "Planet Organic", tooltip: "Beverages + Wellness" },
      { name: "Selfridges", tooltip: "Gift sets + premium" },
      { name: "Sourced Market", tooltip: "Travel retail" },
    ],
  },
  {
    title: "Online Marketplaces",
    flag: "/find-us/globe.png",
    stores: [
      { name: "Amazon US", tooltip: "Prime eligible" },
      { name: "Amazon UK", tooltip: "Prime eligible" },
      { name: "Thrive Market", tooltip: "Members only" },
      { name: "Ocado", tooltip: "UK delivery" },
    ],
  },
];

export default function FindUsAvailability() {
  return (
    <section className="findus-availability-section">
      <div className="findus-availability-container">
        {/* Heading */}

        <div className="findus-availability-heading">
          <h2>
            Where GingerNoxx <br />
            <span>Is Available In-Store</span>
          </h2>
        </div>

        {/* Country Sections */}

        {storeSections.map((section, index) => (
          <div key={index} className="findus-country-section">

            <div className="findus-country-title">

              <Image
                src={section.flag}
                alt={section.title}
                width={30}
                height={30}
              />

              <h3>{section.title}</h3>

            </div>

            <div className="findus-store-grid">

              {section.stores.map((store, i) => (
                <div
                  key={i}
                  className="findus-store-item"
                >
                  <span className="findus-tooltip">
                    {store.tooltip}
                  </span>

                  <p>{store.name}</p>
                </div>
              ))}

            </div>

          </div>
        ))}

        {/* Bottom CTA */}

        <div className="findus-stockist-box">

          <p>
            Interested in stocking GingerNoxx in your store or retail group?
          </p>

          <button>
            Become a Stockist →
          </button>

        </div>

      </div>
    </section>
  );
}