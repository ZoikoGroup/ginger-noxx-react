import "./wholesale.css";

const categories = [
  {
    icon: "/Image/beverages.png",
    title: "Beverages",
    sku: "12 SKUs · MOQ from 24 cases",
    description:
      "Original Sparkling, Immunity Sparkling, Wellness Ginger Shots. GingerNoxx's highest-volume category and fastest repeat purchase item.",
    tags: ["HALAL", "VEGAN", "Low Sugar"],
  },
  {
    icon: "/Image/condiments.png",
    title: "Condiments & Sauces",
    sku: "8 SKUs · MOQ from 12 cases",
    description:
      "Ginger Fire Sauce, Golden Ginger Glaze. Premium food service and retail condiments with strong cross-category repeat buying behaviour.",
    tags: ["HALAL", "VEGAN", "Clean Label"],
  },
  {
    icon: "/Image/snacks.png",
    title: "Snacks & Pantry",
    sku: "10 SKUs · MOQ from 18 cases",
    description:
      "Energy Chews, Digestive Ginger Chews. Ambient snack formats with school and workplace suitability and strong family market performance.",
    tags: ["HALAL", "VEGAN", "No Added Sugar"],
  },
  {
    icon: "/Image/spice-blends.png",
    title: "Spice Blends",
    sku: "6 SKUs · MOQ from 6 cases",
    description:
      "Master Chef Blend, Everyday Cook Blend. Premium ambient spice range with strong food service adoption and high unit margins.",
    tags: ["HALAL", "VEGAN", "ISO 22000"],
  },
  {
    icon: "/Image/gift-sets.png",
    title: "Bundles & Gift Sets",
    sku: "7 SKUs · MOQ from 6 units",
    description:
      "Seasonal and core giftable bundles. Highest AOV category — ideal for gifting retail, hospitality, and corporate gifting channels.",
    tags: ["Gift-Ready", "Mixed Format"],
  },
  {
    icon: "/Image/limited-editions.png",
    title: "Limited Editions",
    sku: "4 SKUs · Advance order only",
    description:
      "Seasonal limited editions that drive novelty, media attention, and customer acquisition. Pre-order access for Tier 2+ wholesale accounts.",
    tags: ["Pre-order", "Tier 2+"],
  },
];

export default function WholesaleProductCategories() {
  return (
    <section className="wholesale-categories">
      <div className="wholesale-container">

        <div className="categories-heading">
          <h2>
            Six Categories.
            <br />
            <span>One Formulation System.</span>
          </h2>
        </div>

        < div className="categories-grid">
                  {categories.map((item, index) => (
            <div className="category-card" key={index}>

              <img
                src={item.icon}
                alt={item.title}
                className="category-icon"
              />

              <h3>{item.title}</h3>

              <div className="category-sku">
                {item.sku}
              </div>

              <p>{item.description}</p>

              <div className="category-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    className="category-tag"
                    key={tagIndex}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
                  </div>

      </div>
    </section>
  );
}