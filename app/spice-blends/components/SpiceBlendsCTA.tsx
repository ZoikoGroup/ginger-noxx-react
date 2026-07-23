"use client";

const certifications = [
  "HALAL",
  "VEGAN",
  "CLEAN LABEL",
  "ISO 22000",
];

export default function SpiceBlendsCTA() {
  return (
    <section className="spice-blends-cta-section">

      <div className="spice-blends-cta-glow"></div>


      <div className="spice-blends-cta-container">


        <div className="spice-blends-cta-heading">

          <h2>
            Real Spices. Structured Flavour.
            <br />
            <span>
              A Better Way to Cook.
            </span>
          </h2>

        </div>


        <p className="spice-blends-cta-description">
          Every GingerNoxx spice blend carries the same promise — clean,
          functional, and built
          <br />
          around one ancient and powerful ingredient.
        </p>


        <div className="spice-blends-cta-buttons">


          <button className="spice-blends-cta-primary">
            Shop Spice Blends →
          </button>


          <button className="spice-blends-cta-secondary">
            Build Your Bundle
          </button>


          <button className="spice-blends-cta-secondary">
            Subscribe & Save
          </button>


        </div>
                <div className="spice-blends-cta-certifications">

          {certifications.map((item, index) => (

            <div
              className="spice-blends-cta-badge"
              key={index}
            >
              {item}
            </div>

          ))}

        </div>


      </div>

    </section>
  );
}