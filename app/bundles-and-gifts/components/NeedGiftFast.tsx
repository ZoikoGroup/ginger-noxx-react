export default function NeedGiftFast() {
  const features = [
    "Ready to Gift",
    "Fast Checkout",
    "Popular Choice",
    "Low Risk",
  ];

  const bundles = [
    {
      image: "/bundles-gifts/gift-set-deluxe.png",
      title: "Gift Set Deluxe",
      description: "Full assortment · Premium packaging",
      price: "£79.99",
      highlight: true,
    },
    {
      image: "/bundles-gifts/wellness-pack.png",
      title: "Wellness Pack",
      description: "6 beverages + shots + botanical tea",
      price: "£34.99",
      highlight: false,
    },
  ];

  return (
    <section className="need-gift-section">
      <div className="need-gift-container">
        <span className="need-gift-label">
          NEED A GIFT FAST
        </span>

        <h2 className="need-gift-title">
          Need a Gift Fast?
        </h2>

        <div className="need-gift-line"></div>

        <p className="need-gift-description">
          Start with a popular choice — ready in seconds.
        </p>

        <div className="need-gift-card">
          <div className="need-gift-overlay"></div>

          <div className="need-gift-left">
            <div className="need-gift-badge">
              MOST GIFTED THIS MONTH
            </div>

            <h3>Two bundles. Zero hesitation.</h3>

            <p>
              These are the two most gifted GingerNoxx bundles —
              chosen for their versatility, premium presentation,
              and broad appeal across tastes and lifestyles.
            </p>

            <div className="need-gift-tags">
              {features.map((feature, index) => (
                <span key={index} className="need-gift-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="need-gift-right">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className={`need-gift-item ${
                  bundle.highlight ? "active" : ""
                }`}
              >
                <img
                  src={bundle.image}
                  alt={bundle.title}
                  className="need-gift-icon"
                />

                <div className="need-gift-info">
                  <h4>{bundle.title}</h4>
                  <p>{bundle.description}</p>
                </div>

                <span className="need-gift-price">
                  {bundle.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}