import Image from "next/image";

const SubscriptionPlans = () => {
  const beverageFeatures = [
    "6-pack of your chosen flavour",
    "Choose delivery: every 2, 4, or 6 weeks",
    "Swap flavours between deliveries",
    "Free standard delivery on all orders",
    "Early access to limited edition flavours",
  ];

  const wellnessFeatures = [
    "6-pack Sparkling Beverage (your choice)",
    "Ginger Fire Shot 6-pack included",
    "Priority dispatch on all deliveries",
    "Wellness usage guide + recipe cards",
    "Exclusive subscriber-only flavours",
  ];

  const familyFeatures = [
    "12-pack Sparkling Beverage",
    "Energy Chews 2-pack included",
    "Everyday Cook Spice Blend included",
    "Premium gift packaging on every delivery",
    "Seasonal recipe cards & usage guides",
  ];

  return (
    <section className="subscription-plans">
      <div className="subscription-plans-container">

        {/* Heading */}

        <span className="subscription-plans-label">
          SUBSCRIPTION PLANS
        </span>

        <h2 className="subscription-plans-title">
          Choose Your <span>Ginger Ritual</span>
        </h2>

        <div className="subscription-plans-line"></div>

        <p className="subscription-plans-description">
          Three plans built around different lifestyles, household sizes, and
          wellness goals. All include 15% savings, flexible delivery, and zero
          commitment anxiety.
        </p>

        {/* Cards */}

        <div className="subscription-plans-grid">

          {/* Beverage */}

          <div className="subscription-card">

            <Image
              src="/subscription/beverage.png"
              alt="Beverage"
              width={56}
              height={56}
              className="subscription-card-icon"
            />

            <h3>Beverage Subscription</h3>

            <p className="subscription-card-text">
              Your favourite GingerNoxx beverages automatically delivered every
              month. The perfect daily ritual starter.
            </p>

            <h4>$21.99</h4>

            <p className="subscription-price">
              per 6-pack · per delivery
            </p>

            <span className="subscription-tag">
              Save 15% vs one-time
            </span>

            <ul className="subscription-feature-list">
              {beverageFeatures.map((item, index) => (
                <li key={index}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="subscription-btn">
              Subscribe — $21.99/delivery
            </button>

          </div>

          {/* Wellness */}

          <div className="subscription-card active">

            <div className="subscription-badge">
              MOST POPULAR
            </div>

            <div className="subscription-top-line"></div>

            <Image
              src="/subscription/wellness.png"
              alt="Wellness"
              width={56}
              height={56}
              className="subscription-card-icon"
            />

            <h3>Wellness Subscription</h3>

            <p className="subscription-card-text">
              Optimised for daily wellness routines — beverages and functional
              shots working together for consistent results.
            </p>

            <h4>$34.99</h4>

            <p className="subscription-price">
              per delivery · 6-pack + Ginger Fire Shot
            </p>

            <span className="subscription-tag">
              Save 15% — includes free shots
            </span>

            <ul className="subscription-feature-list">
              {wellnessFeatures.map((item, index) => (
                <li key={index}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="subscription-btn">
              Subscribe — $34.99/delivery
            </button>

          </div>
                    {/* Family */}

          <div className="subscription-card">

            <Image
              src="/subscription/family.png"
              alt="Family"
              width={56}
              height={56}
              className="subscription-card-icon"
            />

            <h3>Family Subscription</h3>

            <p className="subscription-card-text">
              The complete ritual for families and gifting. Premium packaging,
              recipe cards, and everything the household needs.
            </p>

            <h4>$59.99</h4>

            <p className="subscription-price">
              per delivery · 12-pack + Snacks + Spices
            </p>

            <span className="subscription-tag">
              Save 15% — highest value plan
            </span>

            <ul className="subscription-feature-list">
              {familyFeatures.map((item, index) => (
                <li key={index}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="subscription-btn">
              Subscribe — $59.99/delivery
            </button>

          </div>

        </div>

        {/* Bottom Button */}

        <div className="subscription-plans-footer">
          <button className="subscription-view-btn">
            View All Subscription Plans →
          </button>
        </div>

      </div>
    </section>
  );
};

export default SubscriptionPlans;