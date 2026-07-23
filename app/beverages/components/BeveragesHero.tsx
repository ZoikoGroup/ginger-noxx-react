import Image from "next/image";
import "./beverages.css";

export default function BeveragesHero() {
  return (
    <section className="beverages-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Beverages background"
        fill
        priority
        className="object-cover object-center opacity-30 pointer-events-none"
      />

      {/* Radial Overlay */}
      <div className="beverages-hero-radial" />

      {/* Background Blur Orbs */}
      <div className="w-[384px] h-[384px] absolute right-[-80px] top-[-80px] bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="w-[288px] h-[288px] absolute left-[-40px] top-[54px] bg-orange-600/5 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Category Pill Tag */}
        <div className="beverages-hero-tag">
          Shop · Beverages
        </div>

        {/* Title */}
        <h1 className="beverages-hero-title">
          Ginger <span className="beverages-hero-title-orange">Beverages</span>
        </h1>

        {/* Subtitle */}
        <p className="beverages-hero-desc">
          Refreshment, energy, and daily wellness<br />
          powered by real ginger.
        </p>
      </div>
    </section>
  );
}
