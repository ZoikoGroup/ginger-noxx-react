export default function StoryProducts() {
  const products = [
    {
      category: "Beverages",
      title: "Sparkling Infusions & Shots",
      description:
        "Sparkling ginger infusions, botanical elixirs, iced teas, and concentrated wellness shots.",
      image: "/Image/story-product.png",
    },
    {
      category: "Condiments",
      title: "Sauces, Oils & Marinades",
      description:
        "Ginger BBQ sauces, stir-fry sauces, infused oils, cooking pastes, dressings, and marinades.",
      image: "/Image/story-product.png",
    },
    {
      category: "Snacks & Pantry",
      title: "Chews, Granola & Sweets",
      description:
        "Ginger chews, granola, cookies, popcorn, energy balls, and honey spreads.",
      image: "/Image/story-product.png",
    },
    {
      category: "Spice Blends",
      title: "Seasonings & Fusion Mixes",
      description:
        "Ginger-garlic seasoning, ginger-citrus rubs, and culturally inspired dry fusion mixes.",
      image: "/Image/story-product.png",
    },
  ];

  return (
    <section className="story-products">
      <div className="story-products-container">

        <h2>
          The GingerNoxx <span>World of Products</span>
        </h2>

        <p className="story-products-text">
          This breadth is not accidental. It is evidence that Ginger-Fusion works
          as a platform — not just a product concept. One architecture. Infinite
          expressions.
        </p>

        <div className="story-products-grid">
          {products.map((item, index) => (
            <div className="story-product-card" key={index}>

              <div className="story-product-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="story-product-content">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}