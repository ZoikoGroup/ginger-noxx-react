import Image from "next/image";
import "./wellness.css";

export default function WellnessHero() {
  return (
    <section className="wellness-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Radial Overlay */}
      <div className="wellness-hero-radial" />

      {/* Content */}
      <div className="wellness-hero-content">
        <div className="wellness-hero-tag">
          Shop · Wellness
        </div>

        <h1 className="wellness-hero-title">
          Ginger <span className="wellness-hero-title-orange">Wellness</span>
        </h1>

        <p className="wellness-hero-desc">
          Support your body naturally — with the power of real ginger.
        </p>
      </div>
    </section>
  );
}
