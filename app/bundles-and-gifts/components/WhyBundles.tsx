export default function WhyBundles() {
  const features = [
    {
      icon: "/bundles-gifts/no-guesswork.png",
      title: "No Guesswork",
      description:
        "Every bundle is pre-selected for taste, function, and ritual. No browsing required.",
    },
    {
      icon: "/bundles-gifts/premium-packaging.png",
      title: "Premium Packaging",
      description:
        "Sustainable and reusable packaging on every bundle — gift-ready from the box.",
    },
    {
      icon: "/bundles-gifts/real-savings.png",
      title: "Real Savings",
      description:
        "Up to 26% savings versus buying individually — more product, lower cost per item.",
    },
    {
      icon: "/bundles-gifts/global-appeal.png",
      title: "Global Appeal",
      description:
        "Designed to delight diverse palates. No cultural borders — universal quality.",
    },
  ];

  return (
    <section className="why-bundles-section">
      <div className="why-bundles-container">
        <span className="why-bundles-label">
          WHY BUNDLES
        </span>

        <h2 className="why-bundles-title">
          Why Customers Choose Bundles
        </h2>

        <div className="why-bundles-line"></div>

        <div className="why-bundles-grid">
          {features.map((item, index) => (
            <div className="why-bundle-card" key={index}>
              <div className="why-bundle-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}