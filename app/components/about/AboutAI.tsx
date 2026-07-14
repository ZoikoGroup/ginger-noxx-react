import Image from "next/image";

export default function AboutAI() {
  return (
    <section className="about-ai-section">

      <div className="about-ai-container">

        {/* Left Content */}

        <div className="about-ai-content">

          <div className="about-ai-badge">
            AI-Assisted Development
          </div>

          <h2 className="about-ai-title">
            Technology as a <span>Core Capability</span>
          </h2>

          <p className="about-ai-subtitle">
            AI isn't a marketing label here. It's a practical operational tool that
            improves speed, precision, and product-market fit across the
            development cycle.
          </p>

          <p className="about-ai-text">
            AI-supported workflows help the business analyse flavour trends,
            identify emerging consumer patterns, test ingredient pairings,
            and accelerate the early stages of concept refinement.
            These capabilities are complemented by real-world validation,
            culinary testing, and market-facing iteration.
          </p>

          <p className="about-ai-text">
            The result is a development system that is more responsive than
            legacy CPG models and more disciplined than intuition-led trend
            chasing. In strategic terms, AI strengthens GingerNoxx's ability
            to turn insight into formulation, formulation into product,
            and product into scalable commercial opportunity.
          </p>

          <a href="#" className="about-ai-btn">
            Explore the Innovation Platform →
          </a>

        </div>

        {/* Right Image */}

        <div className="about-ai-image">

          <Image
            src="/Image/about-ai.png"
            alt="AI Development"
            width={764}
            height={509}
          />

        </div>

      </div>

    </section>
  );
}
