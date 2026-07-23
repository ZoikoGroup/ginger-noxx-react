import Image from "next/image";
import "./stockists.css";

export default function StockistsHero() {
  return (
    <section className="stockists-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Farm Background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Radial Overlay */}
      <div className="stockists-hero-radial" />

      {/* Content */}
      <div className="stockists-hero-content">
        <h1 className="stockists-hero-title">
          Find GingerNoxx <span className="stockists-hero-title-orange">Near You</span>
        </h1>

        <p className="stockists-hero-desc">
          Locate authorised retailers, cafes, and wellness shops carrying GingerNoxx™ products. Our stockists are carefully selected to ensure quality, freshness, and an authentic Ginger-Fusion experience.
        </p>
      </div>
    </section>
  );
}
