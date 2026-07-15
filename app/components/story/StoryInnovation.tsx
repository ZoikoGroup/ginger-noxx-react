import Image from "next/image";

const steps = [
  {
    icon: "/Image/icon1.png",
    number: "01",
    title: "Global Ingredient Scouting",
  },
  {
    icon: "/Image/icon2.png",
    number: "02",
    title: "Clinical & Scientific Review",
  },
  {
    icon: "/Image/icon3.png",
    number: "03",
    title: "Real-World Culinary Testing",
  },
  {
    icon: "/Image/icon4.png",
    number: "04",
    title: "Inclusive Taste Benchmarking",
  },
  {
    icon: "/Image/icon5.png",
    number: "05",
    title: "Production & Launch",
  },
];

export default function StoryInnovation() {
  return (
    <section className="story-innovation">
      <div className="story-innovation-container">

        <div className="story-innovation-heading">
          <h2>
            Innovation <span>at the Core</span>
          </h2>

          <p>
            GingerNoxx teams work across continents with chefs, food scientists,
            nutritionists, and herbalists. Every launch passes through a rigorous,
            repeatable process. The purpose is not novelty for novelty's sake —
            it is repeatable excellence.
          </p>
        </div>

        <div className="innovation-grid">
          {steps.map((step, index) => (
            <div
              className={`innovation-card ${
                index === steps.length - 1 ? "active" : ""
              }`}
              key={index}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={34}
                height={34}
              />

              <span className="step-number">{step.number}</span>

              <h4>{step.title}</h4>

              {index !== steps.length - 1 && (
                <span className="step-arrow">→</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}