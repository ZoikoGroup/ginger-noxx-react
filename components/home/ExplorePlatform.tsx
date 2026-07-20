import PlatformCard from "./PlatformCard";

export default function ExplorePlatform() {
  return (
    <section className="explore-platform">
      <div className="container">

        <div className="section-heading">
          <h2>
            Explore the <span className="platform-text">Platform</span>
          </h2>
        </div>

        <div className="platform-grid">

          <PlatformCard
            image="/Icons/Ginger-Drinks.svg"
            title="Ginger Drinks"
            products="12 products"
          />

          <PlatformCard
            image="/Icons/Condiments-Sauces.svg"
            title="Condiments & Sauces"
            products="8 products"
          />

          <PlatformCard
            image="/Icons/Snacks-Pantry.svg"
            title="Snacks & Pantry"
            products="10 products"
          />

          <PlatformCard
            image="/Icons/Spice-Blends.svg"
            title="Spice Blends"
            products="6 products"
          />

          <PlatformCard
            image="/Icons/Limited-Editions.svg"
            title="Limited Editions"
            products="4 products"
          />

          <PlatformCard
            image="/Icons/Bundles-Gifts.svg"
            title="Bundles & Gifts"
            products="7 products"
          />

        </div>

      </div>
    </section>
  );
}
