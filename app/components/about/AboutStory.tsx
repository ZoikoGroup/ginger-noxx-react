import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="about-story">
      <div className="about-story-container">

        {/* ---------- ROW 1 ---------- */}

        <div className="story-row">

          <div className="story-image">
            <Image
              src="/Image/story-1.png"
              alt="Who We Are"
              fill
              className="story-img"
            />
          </div>

          <div className="story-content">

            <span className="story-number">
              01 — WHO WE ARE
            </span>

            <h2>An Innovation-Driven Food & Beverage Platform</h2>

            <p>
              GingerNoxx is an IP-led, innovation-driven food and beverage
              platform designed to operate across multiple product categories,
              markets, and channels. Its proposition is deliberately different
              from conventional consumer packaged goods businesses: ginger is
              not treated as an occasional additive or a supporting note. It is
              the foundation of the system.
            </p>

            <p>
              That principle changes the way products are conceived,
              formulated, branded, and scaled. Instead of building isolated
              SKUs, GingerNoxx develops a connected ecosystem of products
              spanning functional beverages, condiments and sauces, snacks and
              pantry items, and spice blends and flavour systems.
            </p>

          </div>

        </div>

        {/* ---------- ROW 2 ---------- */}

        <div className="story-row">

          <div className="story-content">

            <span className="story-number">
              02 — CATEGORY POSITIONING
            </span>

            <h2>Bridging Function, Flavour & Heritage</h2>

            <p>
              The food and beverage sector has historically separated function
              from flavour, health from enjoyment, and tradition from
              innovation. GingerNoxx is built to bridge those divides.
            </p>

            <p>
              The company defines and advances a new category:
              <strong> ginger-fusion</strong>. Ginger acts as the organising
              ingredient — the flavour anchor, the functional signal, and the
              narrative centre — while being intelligently paired with
              botanicals, fruits, spices, culinary systems, and modern wellness
              expectations.
            </p>

            <p>
              This approach allows GingerNoxx to occupy a strategically
              attractive position at the intersection of clean-label demand,
              cultural flavour discovery, functional wellness, and premium
              everyday consumption.
            </p>

          </div>

          <div className="story-image">
            <Image
              src="/Image/story-2.png"
              alt="Category Positioning"
              fill
              className="story-img"
            />
          </div>

        </div>

        {/* ---------- ROW 3 ---------- */}

        <div className="story-row">

          <div className="story-image small">
            <Image
              src="/Image/story-3.png"
              alt="Strategic Position"
              fill
              className="story-img"
            />
          </div>

          <div className="story-content">

            <span className="story-number">
              03 — STRATEGIC POSITION
            </span>

            <h2>Built for Long-Term Category Ownership</h2>

            <p>
              GingerNoxx combines the agility and flavour curiosity of premium
              emerging brands with the systems, discipline, and scalability of
              enterprise-grade CPG companies. It can move faster than
              incumbents, yet build with more structure than many small
              challenger brands.
            </p>

            <p>
              In short, GingerNoxx is positioned not only to launch products,
              but to build <strong>durable category equity</strong>.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}