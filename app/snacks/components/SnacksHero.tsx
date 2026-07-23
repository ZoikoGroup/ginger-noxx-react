import Image from "next/image";
import "./snacks.css";

export default function SnacksHero() {
  return (
    <section className="snacks-hero-section">
      {/* Background Image */}
      <Image
        src="/sustainability/one.png"
        alt="Ginger Snacks background"
        fill
        priority
        className="object-cover object-center opacity-30 pointer-events-none"
      />

      {/* Radial Overlay */}
      <div className="snacks-hero-radial" />

      {/* Background Blur Glow Orbs */}
      <div className="w-[384px] h-[384px] absolute right-[-80px] top-[-80px] bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="w-[288px] h-[288px] absolute left-[-40px] top-[52px] bg-orange-600/5 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Tag Pill */}
        <div className="snacks-hero-tag">
          Shop · Snacks
        </div>

        {/* Title */}
        <h1 className="snacks-hero-title">
          Ginger <span className="snacks-hero-title-orange">Snacks</span>
        </h1>

        {/* Subtitle */}
        <p className="snacks-hero-desc">
          Sweet, spicy, and everything in between<br />
          snacks made better with ginger.
        </p>
      </div>
    </section>
  );
}
