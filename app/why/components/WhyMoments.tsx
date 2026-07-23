import Image from "next/image";

const moments = [
  {
    id: "01",
    period: "Morning",
    title: "Start with intention",
    description:
      "Start your day with a naturally inspired routine that aligns with your lifestyle and wellness goals. A Wellness Ginger Shot or Immunity Sparkling makes the perfect functional beginning.",
    button: "→ Try: Wellness Ginger Shot",
    icon: "/Image/morning.png",
    className: "morning",
  },
  {
    id: "02",
    period: "Midday",
    title: "Stay balanced",
    description:
      "Maintain balance and refresh your senses throughout the day. GingerNoxx sparkling drinks and snacks are designed for exactly this — real flavour, genuine function, no compromise.",
    button: "→ Try: Original Sparkling",
    icon: "/Image/midday.png",
    className: "midday",
  },
  {
    id: "03",
    period: "Evening",
    title: "Wind down mindfully",
    description:
      "Support a calm and mindful wind-down as part of your evening routine. Ginger's traditionally calming properties make it a natural companion for the end of an active day.",
    button: "→ Try: Digestive Ginger Chews",
    icon: "/Image/evening.png",
    className: "evening",
  },
];

export default function WhyMoments() {
  return (
    <section className="why-moments">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="moments-title">
          <span>Ginger, at Every</span><br />
          <span className="highlight">Moment of Your Day</span>
        </h2>

        <div className="moments-grid">

          {moments.map((item) => (
            <div className={`moment-card ${item.className}`} key={item.id}>

              <div className="moment-top">

                <Image
                  src={item.icon}
                  alt={item.period}
                  width={19.2}
                  height={30.72}
                />

                <span>{item.period}</span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button>{item.button}</button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}