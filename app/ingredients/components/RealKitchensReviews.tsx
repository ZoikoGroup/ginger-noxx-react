import "./ingredients.css";

const kitchenReviews = [
  {
    id: 1,
    tag: "Master Chef Blend",
    title: "A genuinely professional-tasting result at home.",
    review:
      "I bought this skeptically — spice blends are usually disappointing. This one immediately changed how my food tastes. The layering is clearly well-thought and it elevates everything I add it to.",
    author: "Omar S.",
  },
  {
    id: 2,
    tag: "Ginger Fire Sauce",
    title: "This sauce has replaced everything else in my fridge door.",
    review:
      "I use it as a marinade, a cooking sauce, a finishing sauce, and a dipping sauce. It works at every stage of cooking and the ginger heat is genuinely balanced rather than just hot.",
    author: "Laura M.",
  },
  {
    id: 3,
    tag: "Recipe Guide",
    title: "The recipe guide made me cook things I never would have tried.",
    review:
      "I used the stir fry recipe shown on the page and it was genuinely good. I then bought three more products. The cooking guide approach is exactly what I needed to feel confident with new ingredients.",
    author: "Keiko T.",
  },
];

const RealKitchensReviews = () => {
  return (
    <section className="real-kitchens-section">
      <div className="real-kitchens-container">

        <span className="real-kitchens-subtitle">
          U S E D&nbsp;&nbsp;I N&nbsp;&nbsp;R E A L&nbsp;&nbsp;K I T C H E N S
        </span>

        <h2 className="real-kitchens-title">
          Used in Real Kitchens
        </h2>

        <div className="real-kitchens-divider"></div>

        <div className="real-kitchens-grid">
          {kitchenReviews.map((item) => (
            <div className="real-kitchens-card" key={item.id}>

              <div className="real-kitchens-stars">
                ★★★★★
              </div>

              <div className="real-kitchens-tag">
                {item.tag}
              </div>

              <div className="real-kitchens-quote">
                <h3>{item.title}</h3>
              </div>

              <p className="real-kitchens-review">
                {item.review}
              </p>

              <div className="real-kitchens-footer">
                <span className="real-kitchens-author">
                  {item.author}
                </span>
                                <span className="real-kitchens-verified">
                  ✓ Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealKitchensReviews;