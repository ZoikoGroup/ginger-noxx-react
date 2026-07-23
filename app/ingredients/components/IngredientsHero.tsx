import Image from "next/image";
import "./ingredients.css";

export default function IngredientsHero() {
  return (
    <section className="ingred-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Radial Overlay */}
      <div className="ingred-hero-radial" />

      {/* Content */}
      <div className="ingred-hero-content">
        <div className="ingred-hero-tag">
          Shop · Ingredients
        </div>

        <h1 className="ingred-hero-title">
          Ginger <span className="ingred-hero-title-orange">Ingredients</span>
        </h1>

        <p className="ingred-hero-desc">
          Bring bold flavour, warmth, and depth to every dish with real ginger.
        </p>
      </div>
    </section>
  );
}
