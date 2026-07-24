import Link from "next/link";

export default function StoryHero() {

  return (
    <section className="story-hero">

      <div className="story-glow story-glow-1"></div>
      <div className="story-glow story-glow-2"></div>

      <div className="story-container">

        <h1 className="story-title">
          Where Tradition Meets
          <br />
          Structure <span>Our Story</span>
        </h1>

        <p className="story-description">
          GingerNoxx began with a single, disciplined question:
          what if ginger was not something you add —
          but something you build around?
        </p>

        <div className="story-quote">
          "Something so widely trusted had never been fully understood."
        </div>

        <div className="story-buttons">
          <Link href="/best-sellers" className="story-btn-primary">
            Experience the Range
          </Link>

          <Link href="#story-products" className="story-btn-secondary">
            Explore the Platform
          </Link>
        </div>

      </div>

      <div className="story-stats">
  <div className="story-stat">
    <h3>2020</h3>
    <p>Founded</p>
  </div>

  <div className="story-stat">
    <h3>40+</h3>
    <p>SKUs Developed</p>
  </div>

  <div className="story-stat">
    <h3>5</h3>
    <p>Global Markets</p>
  </div>

  <div className="story-stat">
    <h3>6</h3>
    <p>Global Offices</p>
  </div>
</div>

    </section>
  );
}
