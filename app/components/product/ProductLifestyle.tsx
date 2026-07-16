import React from "react";

const ProductLifestyle = () => {
  return (
    <section className="product-lifestyle">

      <div className="lifestyle-container">

        <h2 className="lifestyle-title">
          When It <span>Fits</span>
        </h2>

        <div className="lifestyle-grid">

          {/* Card 1 */}
          <div className="lifestyle-card card-1">

            <span className="lifestyle-label">
              Morning Reset
            </span>

            <h3>Start With Intent</h3>

            <p>
              Replace your morning routine with something that's functional,
              refreshing, and actually tastes like what it claims to be.
            </p>

            <div className="lifestyle-tag">
              → Instead of sugary juice
            </div>

          </div>

          {/* Card 2 */}
         <div className="lifestyle-card card-2">

            <span className="lifestyle-label">
              Post-Meal Refresh
            </span>

            <h3>After You Eat</h3>

            <p>
              The natural digestive properties of ginger make this an ideal
              post-meal companion — refreshing, purposeful, and clean.
            </p>

            <div className="lifestyle-tag">
              → After lunch or dinner
            </div>

          </div>

          {/* Card 3 */}
          <div className="lifestyle-card card-3">

            <span className="lifestyle-label">
              Midday Lift
            </span>

            <h3>When Focus Matters</h3>

            <p>
              Skip the afternoon crash. The structured ginger heat and citrus
              brightness deliver a clean sensory lift without sugar or caffeine
              dependency.
            </p>

            <div className="lifestyle-tag">
              → Instead of afternoon coffee
            </div>

          </div>

          {/* Card 4 */}
          <div className="lifestyle-card card-4">

            <span className="lifestyle-label">
              Workout Recovery
            </span>

            <h3>After Movement</h3>

            <p>
              A clean, functional recovery alternative to sugary sports drinks
              — hydrating, refreshing, and free from anything your body doesn't
              need.
            </p>

            <div className="lifestyle-tag">
              → Post-workout refresh
            </div>

          </div>

        </div>

        <p className="lifestyle-note">
          It fits into your life — not the other way around.
        </p>

      </div>

    </section>
  );
};

export default ProductLifestyle;