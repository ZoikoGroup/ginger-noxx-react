import Image from "next/image";

const innovations = [
  {
    number: "01",
    icon: "/Image/Responsible-Sourcing.png",
    title: "Ingredient Integrity",
    description:
      "Carefully sourced ginger from established supply partners with full traceability. Origin integrity is non-negotiable across all SKUs.",
  },
  {
    number: "02",
    icon: "/Image/Ingredient-Integrity.png",
    title: "Functional Formulation",
    description:
      "A structured blending approach—ginger as architecture, not additive. Every product is built through the same four-layer Ginger-Fusion™ system.",
  },
  {
    number: "03",
    icon: "/Image/inflammatory.png",
    title: "Flavour + Function Balance",
    description:
      "No compromise between taste and purpose. GingerNoxx products deliver real ginger experience AND functional relevance in every format.",
  },
  {
    number: "04",
    icon: "/Image/global-inclusive.png",
    title: "Scalable Quality Control",
    description:
      "Consistent output across five manufacturing regions. The same formulation standard applies whether the product ships from London or Delhi.",
  },
];

export default function WhyInnovation() {
  return (
    <section className="why-innovation">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="innovation-title">
          <span>A New Standard in </span>
          <span className="highlight">Ginger Innovation</span>
        </h2>

        <p className="innovation-subtitle">
          GingerNoxx is built on a formulation-first approach — combining
          ingredient integrity, structured blending, and sensory design to
          create a balanced experience across flavour and function.
        </p>

        <div className="innovation-grid">
          {innovations.map((item) => (
            <div className="innovation-card" key={item.number}>

              <span className="innovation-number">
                {item.number}
              </span>

              <div className="innovation-icon">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

        <p className="innovation-footer">
          Every product in the GingerNoxx range is built through the same
          system — ensuring consistency you can taste, every time.
        </p>

      </div>
    </section>
  );
}