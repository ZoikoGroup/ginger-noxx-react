import Image from "next/image";
import "./bundles.css";

export default function BundlesHero() {
  return (
    <section className="bundles-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Farm Background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Radial Overlay */}
      <div className="bundles-hero-radial" />

      {/* Content */}
      <div className="bundles-hero-content">
        <div className="bundles-hero-tag">
          Shop · Bundles and Gifts
        </div>

        <h1 className="bundles-hero-title">
          Bundles <span className="bundles-hero-title-orange">and</span> Gifts
        </h1>

        <p className="bundles-hero-desc">
          Thoughtfully curated ginger experiences — ready to give or enjoy.
        </p>
      </div>
    </section>
  );
}
