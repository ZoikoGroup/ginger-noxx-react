import React from "react";
import "./subscriptions.css";

const addOns = [
  {
    category: "Snacks",
    title: "Add Snacks to Your Plan",
    description:
      "Energy Chews, Digestive Ginger Chews, and pantry snacks — add to any subscription and save.",
    button: "Add Snacks →",
    image: "/subscription/snacks.png", 
  },
  {
    category: "Spice Blends",
    title: "Add Spice Blends to Your Plan",
    description:
      "Master Chef Blend and Ginger-Garlic Seasoning — replenish your kitchen staples automatically.",
    button: "Add Spice Blends →",
    image: "/subscription/spice-blends.png", 
  },
  {
    category: "Gift Bundles",
    title: "Add Gift Bundles to Your Plan",
    description:
      "Schedule curated gift bundles as part of your subscription — for special deliveries to loved ones.",
    button: "Add Gift Bundles →",
    image: "/subscription/gift-bundles.png", 
  },
];

const SubscriptionAddOns = () => {
  return (
    <section className="subscription-addons-section">
      <div className="subscription-addons-container">
        <div className="subscription-addons-header">
          <h2 className="subscription-addons-title">
            <span>One Subscription. </span>
            <span className="highlight">Multiple Ways to Enjoy.</span>
          </h2>

          <p className="subscription-addons-subtitle">
            Add products to your subscription and build a complete
            GingerNoxx ritual
            <br />
            — across beverages, snacks, condiments, and spice blends.
          </p>
        </div>

        <div className="subscription-addons-grid">
          {addOns.map((item, index) => (
            <div key={index} className="subscription-addon-card">
              <div className="subscription-addon-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="subscription-addon-content">
                <span className="subscription-addon-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionAddOns;