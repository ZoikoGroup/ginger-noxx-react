"use client";

const stats = [
  {
    value: "15%",
    label: "Saved Every Order",
  },
  {
    value: "10k+",
    label: "Active Subscribers",
  },
  {
    value: "4.9★",
    label: "Subscriber Rating",
  },
  {
    value: "0",
    label: "Cancellation Fees",
  },
];

const SubscriptionHero = () => {
  return (
    <section className="subscription-hero">
      <div className="subscription-hero-glow subscription-hero-glow-right"></div>
      <div className="subscription-hero-glow subscription-hero-glow-left"></div>

      <div className="subscription-hero-container">
        <h1 className="subscription-hero-title">
          <span className="subscription-hero-title-white">
            Your Ginger Ritual,
          </span>{" "}
          <span className="subscription-hero-title-orange">
            Delivered
          </span>
        </h1>

        <p className="subscription-hero-description">
          Convenient, flexible, and rewarding — subscribe to GingerNoxx
          <br />
          for beverages, snacks, and spice blends straight to your door,
          every time.
        </p>

        <div className="subscription-hero-buttons">
          <button
            className="subscription-hero-btn subscription-hero-btn-primary"
            onClick={() => document.getElementById('subscription-plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Subscribe Now
          </button>

          <button
            className="subscription-hero-btn subscription-hero-btn-outline"
            onClick={() => document.getElementById('subscription-plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Plans
          </button>
        </div>

        <div className="subscription-hero-stats">
          {stats.map((item, index) => (
            <div className="subscription-hero-stat" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionHero;