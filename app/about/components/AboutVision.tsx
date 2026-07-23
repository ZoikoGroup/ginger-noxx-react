import React from "react";

export default function AboutVision() {
  return (
    <section className="about-vision">
      <div className="about-vision-container">

        <div className="about-vision-badge">
          Vision &amp; Mission
        </div>

        <h2 className="about-vision-title">
          Built to <span>Shape</span> a Category
        </h2>

        <p className="about-vision-subtitle">
          Not merely to participate in fast-moving consumer categories but to define one.
        </p>

        <div className="vision-card">

          {/* Vision */}

          <div className="vision-column">

            <span className="vision-label">
              OUR VISION
            </span>

            <h3>
              Establish ginger-fusion as a
              <br />
              globally recognised category in
              <br />
              food, drink, and wellness.
            </h3>

            <p>
              The ambition is not merely to participate in fast-moving
              consumer categories. It is to shape one — with the
              discipline, creativity, and technological support to do it
              at scale.
            </p>

          </div>

          {/* Divider */}

          <div className="vision-divider"></div>

          {/* Mission */}

          <div className="vision-column">

            <span className="vision-label">
              OUR MISSION
            </span>

            <h3>
              Deliver flavour-forward, clean-
              <br />
              label products that merge
              <br />
              cultural depth with commercial
              <br />
              scalability.
            </h3>

            <p>
              Executed through disciplined product development,
              strong formulation ownership, multi-market readiness,
              and an operating model designed for growth without
              unnecessary fixed-asset drag.
            </p>

          </div>

          <div className="vision-circle"></div>

        </div>

      </div>
    </section>
  );
}
