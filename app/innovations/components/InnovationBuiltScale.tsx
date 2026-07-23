const features = [
  {
    title: "Multi-Country Manufacturing",
    description:
      "Contract manufacturing partners across five countries — USA, UK, Canada, China, India — ensuring supply resilience and market-proximate production.",
    image: "/Image/production.png",
  },
  {
    title: "Export-Ready Compliance",
    description:
      "HALAL, VEGAN, ISO 22000, and clean-label certifications in place. Regulatory frameworks structured for all five active markets.",
    image: "/Image/ready-support.png",
  },
  {
    title: "Scalable Supply Chain",
    description:
      "Rapid SKU development capability — from concept to shelf-ready formulation in weeks, not quarters. Designed for fast response to market signals.",
    image: "/Image/icon-energy.png",
  },
];

const InnovationBuiltScale = () => {
  return (
    <section className="innovation-built-scale">
      <div className="innovation-container">

        <h2 className="innovation-built-title">
          Built for Global Scale
        </h2>

        <div className="innovation-built-wrapper">

          {/* Left Side */}

          <div className="innovation-built-left">

            <p className="innovation-built-intro">
              GingerNoxx is designed for multi-channel deployment — from
              direct-to-consumer to global retail, food service, and private
              label partnerships. Its formulation system enables consistent
              production across regions while maintaining product integrity.
              The same Ginger-Fusion standard applies whether a product is
              manufactured in Sacramento, London, or Delhi.
            </p>

            <div className="innovation-built-features">

              {features.map((item, index) => (

                <div
                  className="innovation-built-feature"
                  key={index}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="innovation-built-icon"
                  />

                  <div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>
                    {/* Right Side */}

          <div className="innovation-built-right">

            <div className="innovation-built-card">

              <img
                src="/Image/partner.png"
                alt="Partner With GingerNoxx"
                className="innovation-built-card-icon"
              />

              <h3>Partner With GingerNoxx</h3>

              <p>
                For retail buyers, distributors, and food service operators
                interested in carrying or co-developing with the
                Ginger-Fusion platform.
              </p>

              <a
                href="#"
                className="innovation-built-btn innovation-built-btn-primary"
              >
                Start a Partnership Conversation
              </a>

            </div>

            <div className="innovation-built-card">

              <img
                src="/Image/commercial-deck.png"
                alt="Request Commercial Deck"
                className="innovation-built-card-icon"
              />

              <h3>Request Commercial Deck</h3>

              <p>
                Full commercial overview including market sizing,
                formulation IP summary, manufacturing network, and
                financial positioning data.
              </p>

              <a
                href="#"
                className="innovation-built-btn innovation-built-btn-outline"
              >
                Download Commercial Deck
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InnovationBuiltScale;