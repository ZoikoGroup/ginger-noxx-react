export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">

        <div className="about-hero-content">

          <span className="about-hero-label">
            Our Story
          </span>

          <h1 className="about-hero-title">
            We Built a Category
            <br />
            <span>Not Just a Brand.</span>
          </h1>

          <p className="about-hero-description">
            GingerNoxx is the world's first ginger-fusion platform — a
            <br />
            globally scalable system for developing, producing, and
            <br />
            distributing food, beverage, and wellness products centred
            <br />
            around one of the world's most versatile ingredients.
          </p>

          <div className="about-hero-buttons">

            <button className="about-hero-primary-btn">
              Shop the Range →
            </button>

            <button className="about-hero-secondary-btn">
              Read Our Story
            </button>

          </div>

        </div>

        <div className="about-hero-image-box">

          {/* Replace with actual image later */}
          <img
            src="/Image/fresh-ginger-with-leaves.png"
            alt="About Hero"
            className="about-hero-image"
          />

        </div>

      </div>
    </section>
  );
}