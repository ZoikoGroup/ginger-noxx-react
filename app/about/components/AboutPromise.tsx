import Image from "next/image";

export default function AboutPromise() {
  return (
    <section className="about-promise">
      <div className="container">

        {/* Badge */}

        <div className="promise-badge">
          Consumer Promise
        </div>

        {/* Heading */}

        <h2 className="promise-title">
          Products People Want to Buy <span>Again</span>
        </h2>

        <p className="promise-subtitle">
          Not products they believe they should buy once — products built around
          flavour, integrity, and inclusivity that earn genuine repeat behaviour.
        </p>

        {/* Cards */}

        <div className="promise-grid">

          {/* Card 1 */}

          <div className="promise-card">

            <div className="promise-icon">
  <Image
    src="/Image/flavour-first.png"
    alt="Flavour First"
    width={64}
    height={64}
  />
</div>

            <h3>Flavour First</h3>

            <p>
              Functional positioning must never come at the
              expense of taste. Every GingerNoxx product
              earns its place through flavour before it
              justifies itself through function.
            </p>

          </div>

          {/* Card 2 */}

          <div className="promise-card">

            <div className="promise-icon">
  <Image
    src="/Image/clean-design.png"
    alt="Clean by Design"
    width={64}
    height={64}
  />
</div>

            <h3>Clean by Design</h3>

            <p>
              Products are clean from the formulation stage
              — avoiding unnecessary additives, artificial
              systems, and over-processed logic. Simplicity
              is an architecture decision, not a label claim.
            </p>

          </div>

          {/* Card 3 */}

          <div className="promise-card">

            <div className="promise-icon">
  <Image
    src="/Image/global-inclusive.png"
    alt="Globally Inclusive"
    width={64}
    height={64}
  />
</div>

            <h3>Globally Inclusive</h3>

            <p>
              Strong attention to halal suitability, vegan-
              friendly options, and family-safe consumption
              standards — products that work for more
              people, not fewer.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
