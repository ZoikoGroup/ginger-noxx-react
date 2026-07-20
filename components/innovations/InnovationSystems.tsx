const InnovationSystems = () => {
  return (
    <section className="innovation-systems">
      <div className="innovation-systems-container">
        <div className="innovation-systems-box">

          <h2 className="innovation-systems-title">
            The Future Is Not Ingredients.
            <span> It's Systems.</span>
          </h2>

          <p className="innovation-systems-description">
            The next generation of products will not be defined by what they
            contain — but by how those components are structured, balanced,
            and experienced together. This is the shift from ingredient-based
            thinking to formulation systems.
          </p>

          <div className="innovation-systems-cards">

            <div className="system-card old-card">
              <p className="system-label">
                Old Paradigm
              </p>

              <h3 className="system-title">
                Ingredient-Based
                <br />
                Thinking
              </h3>
            </div>

            <div className="system-arrow">
              →
            </div>

            <div className="system-card new-card">
              <p className="system-label">
                New Standard
              </p>

              <h3 className="system-title">
                Formulation
                <br />
                Systems
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationSystems;