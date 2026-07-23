"use client";

const whatsOut = [
  "Artificial additives & flavourings",
  "Synthetic fillers & bulking agents",
  "Unnecessary preservatives",
  "Low-grade extract-only ginger",
];

const whatsIn = [
  "Real spices, sourced with integrity",
  "Ginger-led formulation foundation",
  "Clean-label, transparent declaration",
  "Everything earns its place",
];

export default function CleanStandard() {
  return (
    <section className="spice-blends-clean-standard-section">

      <div className="spice-blends-clean-standard-container">

        <div className="spice-blends-clean-standard-heading">
          <h2>
            Clean Isn't a Claim{" "}
            <span>It's a Standard</span>
          </h2>
        </div>


        <div className="spice-blends-clean-standard-grid">


          {/* WHAT'S OUT */}

          <div className="spice-blends-clean-standard-card spice-blends-clean-standard-out">

            <p className="spice-blends-clean-standard-label">
              What's OUT
            </p>


            <div className="spice-blends-clean-standard-list">

              {whatsOut.map((item, index) => (

                <div
                  className="spice-blends-clean-standard-item"
                  key={index}
                >

                  <div className="spice-blends-clean-standard-icon spice-blends-clean-standard-icon-out">
                    ✕
                  </div>


                  <p className="spice-blends-clean-standard-out-text">
                    {item}
                  </p>


                </div>

              ))}

            </div>


          </div>
                    {/* WHAT'S IN */}

          <div className="spice-blends-clean-standard-card spice-blends-clean-standard-in">


            <p className="spice-blends-clean-standard-label spice-blends-clean-standard-label-in">
              What's IN
            </p>


            <div className="spice-blends-clean-standard-list">


              {whatsIn.map((item, index) => (

                <div
                  className="spice-blends-clean-standard-item"
                  key={index}
                >

                  <div className="spice-blends-clean-standard-icon spice-blends-clean-standard-icon-in">
                    ✓
                  </div>


                  <p className="spice-blends-clean-standard-in-text">
                    {item}
                  </p>


                </div>

              ))}


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}