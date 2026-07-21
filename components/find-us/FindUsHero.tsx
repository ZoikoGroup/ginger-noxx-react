"use client";

const trustPoints = [
  "Export-ready distribution",
  "Selected retail channels",
  "Clean-label products",
  "Availability insights",
];

export default function FindUsHero() {
  return (
    <section className="findus-hero">
      <div className="findus-hero-container">

        {/* Heading */}

        <h1 className="findus-title">
          Find GingerNoxx <span>Instantly</span>
        </h1>

        {/* Description */}

        <p className="findus-description">
          Shop online or locate nearby stores with real availability
          insights. Three paths. One answer.
        </p>

        {/* Buttons */}

        <div className="findus-hero-btns">
          <button className="findus-primary-btn">
            Buy Online Now
          </button>

          <button className="findus-secondary-btn">
            Find in Store
          </button>
        </div>

        {/* Trust Points */}

        <div className="findus-trust-wrapper">
          {trustPoints.map((item, index) => (
            <div
              className="findus-trust-item"
              key={index}
            >
              <span className="findus-trust-dot"></span>

              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}