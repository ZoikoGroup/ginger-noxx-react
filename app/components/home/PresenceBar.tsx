import Image from "next/image";

export default function PresenceBar() {
  return (
    <section className="presence">
      <div className="presence-container">

        {/* Manufacturing */}

        <div className="presence-group">

          <span className="presence-title">
            MANUFACTURING
          </span>

          <div className="presence-tags">

            <div className="presence-pill">
              <Image
                src="/Image/us.png"
                alt="USA"
                width={18}
                height={18}
                className="presence-flag"
              />
              <span>USA</span>
            </div>

            <div className="presence-pill">
              <Image
                src="/Image/gb.png"
                alt="UK"
                width={18}
                height={18}
                 className="presence-flag"
              />
              <span>UK</span>
            </div>

            <div className="presence-pill">
              <Image
                src="/Image/ca.png"
                alt="Canada"
                width={18}
                height={18}
                 className="presence-flag"
              />
              <span>Canada</span>
            </div>

            <div className="presence-pill">
              <Image
                src="/Image/cn.png"
                alt="China"
                width={18}
                height={18}
                 className="presence-flag"
              />
              <span>China</span>
            </div>

            <div className="presence-pill">
              <Image
                src="/Image/in.png"
                alt="India"
                width={18}
                height={18}
                 className="presence-flag"
              />
              <span>India</span>
            </div>

          </div>

        </div>

        <div className="presence-divider"></div>

        {/* Offices */}

        <div className="presence-group">

          <span className="presence-title">
            OFFICES
          </span>

          <div className="presence-tags">

            <span className="presence-pill">Sacramento</span>

            <span className="presence-pill">London</span>

            <span className="presence-pill">Austin</span>

            <span className="presence-pill">Delhi</span>

            <span className="presence-pill">Nairobi</span>

            <span className="presence-pill">Kingston</span>

          </div>

        </div>

      </div>
    </section>
  );
}