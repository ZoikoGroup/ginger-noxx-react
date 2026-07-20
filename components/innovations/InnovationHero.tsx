import "./innovations.css";

export default function InnovationHero() {
  return (
    <section className="innovation-hero">

      <div className="innovation-circle circle-one"></div>
      <div className="innovation-circle circle-two"></div>
      <div className="innovation-circle circle-three"></div>

      <div className="container innovation-hero-content">

        <h1>
          We Didn't Enter a Category
          <br />
          <span>We Created One</span>
        </h1>

        <p>
          GingerNoxx is the origin of ginger-fusion a new approach to food,
          <br />
          drink, and wellness built on formulation systems, not isolated ingredients.
        </p>

        <div className="innovation-buttons">

          <a href="#" className="innovation-btn-primary">
            Explore the Ginger-Fusion Platform
          </a>

          <a href="#" className="innovation-btn-secondary">
            Request Commercial Deck
          </a>

        </div>

      </div>

    </section>
  );
}