import Image from "next/image";

const benefits = [
  {
    image: "/subscription/save-more.png",
    title: "Save More",
    description:
      "15% off every subscription order — automatically applied, no codes needed, every time.",
  },
  {
    image: "/subscription/flexible-delivery.png",
    title: "Flexible Delivery",
    description:
      "Adjust delivery frequency, skip a delivery, or swap products between orders without penalty.",
  },
  {
    image: "/subscription/never-run-out.png",
    title: "Never Run Out",
    description:
      "Automatic replenishment ensures your daily ginger ritual stays uninterrupted — always.",
  },
  {
    image: "/subscription/exclusive-perks.png",
    title: "Exclusive Perks",
    description:
      "Early access to new flavours, limited editions, seasonal bundles, and subscriber-only recipes.",
  },
  {
    image: "/subscription/premium-experience.png",
    title: "Premium Experience",
    description:
      "Consistent, high-quality products delivered in premium packaging with every single order.",
  },
];

const SubscriptionBenefits = () => {
  return (
    <section className="subscription-benefits-section">
      <div className="subscription-benefits-wrapper">

        <h2 className="subscription-benefits-heading">
          Five Reasons to <br />
          <span>Subscribe to GingerNoxx</span>
        </h2>

        <div className="subscription-benefits-grid">
          {benefits.map((item, index) => (
            <div className="subscription-benefit-card" key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="subscription-benefit-icon"
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SubscriptionBenefits;