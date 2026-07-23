export default function StoryProblem() {
  return (
    <section className="story-problem">

      <div className="story-number">03</div>

      <div className="story-problem-container">

        {/* LEFT SIDE */}

        <div className="problem-left">

          <h2>
            The Problem Was
            <br />
            Never <span>Ginger</span>
          </h2>

          <p>
            The limitation was never the root itself.
            The limitation was the way the industry
            approached it.
          </p>

          <p>
            Too often, products relied on surface-level innovation —
            new packaging, trend-led positioning, incremental flavor
            tweaks, or generic wellness language. What was missing was
            formulation discipline: a structured way of thinking about
            how ginger should interact with botanicals, fruits, spices,
            superfoods, and culinary systems.
          </p>

          <p>
            What many companies called innovation was often just
            variation. Different labels. Different combinations.
            The same underlying approach.
          </p>

          <div className="problem-quote">
            <h3>
              "The problem was not the ingredient. It was the way it was handled."
            </h3>
          </div>

          <p className="problem-end">
            Ginger deserved more than novelty.
            It deserved architecture.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="problem-right">

          <h2>
            A Deliberate <span>Shift</span>
          </h2>

          <p>
            The path forward did not emerge as a marketing insight.
            It emerged as a design principle.
          </p>

          <p>
            At some point, the thinking became clear and irreversible:
            ginger should not be added. It should be structured around.
          </p>

          <p>
            That line became more than a point of view.
            It became the operating logic behind GingerNoxx.
          </p>

          <div className="shift-card-row">

            <div className="shift-card old">

              <span>Old Approach</span>

              <h3>Add Ginger</h3>

            </div>

            <div className="shift-arrow">
              →
            </div>

            <div className="shift-card new">

              <span>GingerNoxx</span>

              <h3>
                Build Around
                <br />
                Ginger
              </h3>

            </div>

          </div>

          <p className="problem-end">
            From that point on, everything changed.
            The ambition was no longer to make another ginger product.
            It was to redefine the role of ginger itself.
          </p>

        </div>

      </div>

    </section>
  );
}
