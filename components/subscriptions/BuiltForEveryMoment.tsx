const moments = [
  {
    id: "AM",
    image: "/subscription/morning.png",
    eyebrow: "Morning Ritual",
    title: "Start With Intention",
    description:
      "Kick off your day with a Ginger Fire Shot — concentrated functional ginger in 60 seconds.",
    tag: "→ Try: Wellness Ginger Shot",
    bg: "dark",
  },
  {
    id: "PM",
    image: "/subscription/post-meal.png",
    eyebrow: "Post-Meal Refresh",
    title: "After You Eat",
    description:
      "Enjoy a sparkling ginger beverage for a natural, refreshing digestive companion after meals.",
    tag: "→ Try: Original Sparkling",
    bg: "brown",
  },
  {
    id: "EV",
    image: "/subscription/family.png",
    eyebrow: "Family Moments",
    title: "Share the Ritual",
    description:
      "Share snacks and beverages with loved ones — clean-label, family-friendly, household-approved.",
    tag: "→ Try: Family Subscription",
    bg: "orange",
  },
  {
    id: "GF",
    image: "/subscription/gift.png",
    eyebrow: "Gift Delivery",
    title: "The Gift That Repeats",
    description:
      "Schedule deliveries as gifts for friends and family — an ongoing premium experience, not a one-off.",
    tag: "→ Gift a Subscription",
    bg: "black",
  },
];

const BuiltForEveryMoment = () => {
  return (
    <section className="built-moment">
      <div className="built-moment-container">
        <div className="built-moment-heading">
          <h2>
            Built for Every <br />
            <span>Moment of Your Day</span>
          </h2>
        </div>

        <div className="moment-grid">
          {moments.map((item, index) => (
            <div
              key={index}
              className={`moment-card moment-${item.bg}`}
            >
              <div className="moment-content">
                <div className="moment-top">
                  <img
                    src={item.image}
                    alt={item.eyebrow}
                    className="moment-icon"
                  />

                  <span className="moment-eyebrow">
                    {item.eyebrow}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="moment-tag">
                  {item.tag}
                </div>

                <span className="moment-watermark">
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="moment-btn">
          Discover Recipes &amp; Pairings →
        </button>
      </div>
    </section>
  );
};

export default BuiltForEveryMoment;