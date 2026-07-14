import Image from "next/image";

export default function InnovationPlatform() {
  return (
    <section className="innovation">
      <div className="innovation-container">

        {/* LEFT SIDE */}
        <div className="innovation-left">

          <div className="badge">
            INNOVATION PLATFORM
          </div>

          <h2>
            The GingerNoxx <br />
            <span className="innovation-highlight">Innovation</span> Platform
          </h2>

          <p>
            We're not simply a brand with packaging. We're an IP-led
            formulation company with AI-assisted product development and
            globally distributed manufacturing capability.
          </p>

          <div className="feature-list">

            <div className="feature-card">
             <div className="feature-icon">
  <Image
    src="/Icons/ai.svg"
    alt="AI"
    width={22}
    height={22}
  />
</div>
              <div>
                <h4>AI-Assisted Formulation</h4>
                <p>
                  Machine learning-powered flavour mapping accelerates SKU
                  development while reducing reformulation risk.
                </p>
              </div>
            </div>

            <div className="feature-card">
             <div className="feature-icon">
  <Image
    src="/Icons/globle.svg"
    alt="Globe"
    width={22}
    height={22}
  />
</div>
              <div>
                <h4>Multi-Region Flavour Mapping</h4>
                <p>
                  Flavour profiles tuned for local palate preferences across
                  five markets without losing brand coherence.
                </p>
              </div>
            </div>

            <div className="feature-card">
             <div className="feature-icon">
  <Image
    src="/Icons/mingcute.svg"
    alt="Rapid SKU Development"
    width={22}
    height={22}
  />
</div>
              <div>
                <h4>Rapid SKU Development</h4>
                <p>
                  From concept to shelf-ready formulation in weeks, not quarters —
enabling faster response to market signals.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
  <Image
    src="/Icons/lock.svg"
    alt="Lock"
    width={22}
    height={22}
  />
</div>
              <div>
                <h4>Proprietary IP Library</h4>
                <p>
                  Owned formulations, not commodity blends. Our IP is the moat that
underpins sustainable category leadership.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="innovation-right">

          <div className="network-card">

            <h3>Manufacturing Network</h3>

            <p>
              Contract manufacturing partners across five countries,
              ensuring supply resilience and market-proximate production.
            </p>

            <Image
              src="/Image/manufacturing-network.png.png"
              alt="Manufacturing Network"
              width={526}
              height={419}
              className="network-image"
            />

            {/* USA */}
            {/* USA */}
<div className="usa-card">
  <Image
    src="/Image/us.png"
    alt="USA"
    width={40}
    height={40}
  />
  <h5>USA</h5>
  <span>Sacramento · Austin</span>
</div>

            {/* Countries */}
            <div className="country-grid">

              <div className="country-card">
               <Image
  src="/Image/cn.png"
  alt="China"
  width={32}
  height={32}
/>

                <h5>China</h5>
                <span>Guangdong</span>
              </div>

              <div className="country-card">
                <Image
  src="/Image/in.png"
  alt="India"
  width={32}
  height={32}
/>
                <h5>India</h5>
                <span>Delhi</span>
              </div>

              <div className="country-card">
                <Image
  src="/Image/gb.png"
  alt="UK"
  width={32}
  height={32}
/>
                <h5>UK</h5>
                <span>London</span>
              </div>

              <div className="country-card">
               <Image
  src="/Image/ca.png"
  alt="Canada"
  width={32}
  height={32}
/>
                <h5>Canada</h5>
                <span>National</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}