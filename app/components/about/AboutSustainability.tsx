import Image from "next/image";

export default function AboutSustainability() {
  return (
    <section className="about-sustainability">
      <div className="container">

        {/* Badge */}
        <div className="sustainability-badge">
          Sustainability &amp; Responsibility
        </div>

        {/* Heading */}
        <h2 className="sustainability-title">
          An Operational Design <span>Principle</span>
        </h2>

       <p className="sustainability-subtitle">
  Not a temporary campaign message. Sustainability that supports trust
  <br />
  because it is integrated into the system itself — packaging, sourcing,
  and product architecture.
</p>

        {/* Cards */}
        <div className="sustainability-grid">

          {/* Card 1 */}
          <div className="sustainability-card">

            <div className="sustainability-icon">
              <Image
                src="/Image/Recyclable-Packaging.png"
                alt="Recyclable Packaging"
                width={64}
                height={64}
              />
            </div>

            <h3>Recyclable Packaging</h3>

            <p>
              Our transition to 100% recyclable or
              compostable primary packaging is underway.
              Measurable progress, not symbolic targets.
            </p>

          </div>

          {/* Card 2 */}
          <div className="sustainability-card">

            <div className="sustainability-icon">
              <Image
                src="/Image/Responsible-Sourcing.png"
                alt="Responsible Sourcing"
                width={64}
                height={64}
              />
            </div>

            <h3>Responsible Sourcing</h3>

            <p>
              We work only with ginger farms that meet our
              sourcing standards on fair labour, pesticide
              use, and soil health management. Origin
              integrity is non-negotiable.
            </p>

          </div>

          {/* Card 3 */}
          <div className="sustainability-card">

            <div className="sustainability-icon">
              <Image
                src="/Image/Ingredient-Integrity.png"
                alt="Ingredient Integrity"
                width={64}
                height={64}
              />
            </div>

            <h3>Ingredient Integrity</h3>

            <p>
              Every formulation undergoes our internal
              integrity review before production. No hidden
              additives, no artificial systems, no misleading
              claims — ever.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}