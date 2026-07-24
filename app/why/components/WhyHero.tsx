import Image from "next/image";
import Link from "next/link";

export default function WhyHero() {
  return (
    <section className="why-hero">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="why-title">
            Why Ginger Matters Backed by Tradition, Supported by Science
          </h1>

          <p className="why-description">
            For centuries, ginger has been valued for its natural properties.
            Today, modern research continues to explore its role in supporting
            everyday wellness.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#why-products" className="primary-btn">
              Explore Ginger Products →
            </Link>

            <Link href="/find-profile" className="secondary-btn">
              Find Your Ginger Profile
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-circle">
          <div className="circle ring1"></div>
          <div className="circle ring2"></div>
          <div className="circle ring3"></div>

          <div className="glow"></div>

          <Image
            src="/Image/ginger.png"
            alt="Ginger"
            width={90}
            height={90}
            className="relative z-10 object-contain"
          />

          <span className="tag tag-top">5,000 Years of Use</span>
          <span className="tag tag-left">Gingerols</span>
          <span className="tag tag-right">Shogaols</span>
          <span className="tag tag-bottom">Bioactive Compounds</span>
        </div>
      </div>
    </section>
  );
}