const InnovationWrongThings = () => {
  return (
    <section className="innovation-wrong-things">
      <div className="background-glow"></div>

      <div className="innovation-wrong-container">
        {/* Left Content */}
        <div className="innovation-content">
          <h2 className="innovation-title">
            The Industry Optimized
            <br />
            the <span className="highlight">Wrong Things</span>
          </h2>

          <p className="innovation-description">
            For decades, the food and wellness industry has focused on
            surface-level innovation — packaging, branding, and isolated
            ingredient trends. What has been largely ignored is how ingredients
            actually work together.
            <br />
            <br />
            The result: fragmented products, inconsistent experiences, and
            limited functional evolution.
          </p>
        </div>

        {/* Right Cards */}
        <div className="innovation-cards">
          <div className="innovation-card">
            <p className="card-label">Failure Mode 01</p>
            <h3 className="card-title">Surface-Level Innovation</h3>
            <p className="card-description">
              The industry cycles through ingredient trends — adaptogens,
              probiotics, superfoods — without building durable formulation
              systems behind them.
            </p>
          </div>

          <div className="innovation-card">
            <p className="card-label">Failure Mode 02</p>
            <h3 className="card-title">
              Fragmented Product Development
            </h3>
            <p className="card-description">
              Products are developed in silos. Flavour, function, and usability
              are rarely structured together. The result is inconsistency at
              scale.
            </p>
          </div>

          <div className="innovation-card">
            <p className="card-label">Failure Mode 03</p>
            <h3 className="card-title">
              Limited Functional Evolution
            </h3>
            <p className="card-description">
              Ginger has existed as a functional ingredient for 5,000 years. The
              industry has treated it as a flavouring. No one built a platform
              around it. Until now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationWrongThings;