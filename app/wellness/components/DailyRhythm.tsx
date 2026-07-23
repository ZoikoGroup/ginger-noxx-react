import "./wellness.css";

const dailyRhythm = [
  {
    id: 1,
    time: "Morning",
    image: "/wellness/morning.png",
    title: "Wake Up Shot",
    description:
      "Start before coffee or food for best effect. 60ml, done in seconds.",
    tag: "Ginger Fire Shot",
  },
  {
    id: 2,
    time: "Midday",
    image: "/wellness/midday.png",
    title: "Midday Reset",
    description:
      "Replace a second coffee with something that won't cause a 3pm crash.",
    tag: "Sparkling Ginger Lime",
  },
  {
    id: 3,
    time: "Afternoon",
    image: "/wellness/afternoon.png",
    title: "Gut Support",
    description:
      "A warm ginger drink post-lunch helps settle and support digestion naturally.",
    tag: "Ginger Turmeric Blend",
  },
  {
    id: 4,
    time: "Evening",
    image: "/wellness/evening.png",
    title: "Wind Down",
    description:
      "Gentle botanical ginger tea to transition from the day without stimulation.",
    tag: "Botanical Iced Tea",
  },
];

const DailyRhythm = () => {
  return (
    <section className="daily-rhythm-section">
      <div className="daily-rhythm-container">
        <span className="daily-rhythm-subtitle">
          DAILY RHYTHM
        </span>

        <h2 className="daily-rhythm-title">
          Build Your Daily Rhythm
        </h2>

        <div className="daily-rhythm-divider"></div>

        <p className="daily-rhythm-description">
          Ginger works best as a daily habit. Here is how real customers
          structure
          <br />
          their GingerNoxx day.
        </p>

        <div className="daily-rhythm-grid">
          {dailyRhythm.map((item) => (
            <div className="daily-rhythm-card" key={item.id}>
              <span className="daily-rhythm-time">
                {item.time}
              </span>

              <img
                src={item.image}
                alt={item.title}
                className="daily-rhythm-icon"
              />

              <h3 className="daily-rhythm-card-title">
                {item.title}
              </h3>

              <p className="daily-rhythm-card-description">
                {item.description}
              </p>

              <div className="daily-rhythm-tag">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyRhythm;