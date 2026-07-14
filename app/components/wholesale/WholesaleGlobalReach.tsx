import "./wholesale.css";

const countries = [
  {
    flag: "/Image/us.png",
    country: "USA",
    city: "Sacramento · Austin",
  },
  {
    flag: "/Image/gb.png",
    country: "UK",
    city: "London",
  },
  {
    flag: "/Image/ca.png",
    country: "Canada",
    city: "National",
  },
  {
    flag: "/Image/cn.png",
    country: "China",
    city: "Guangdong",
  },
  {
    flag: "/Image/in.png",
    country: "India",
    city: "Delhi",
  },
];

const features = [
  {
    icon: "/Image/rapid-sku.png",
    title: "Rapid SKU Development",
    description:
      "From concept to shelf-ready formulation in weeks, not quarters. Platform-native speed enables fast response to market signals and seasonal demand.",
  },
  {
    icon: "/Image/ready-support.png",
    title: "Export-Ready Compliance",
    description:
      "HALAL, VEGAN, ISO 22000, and clean-label certifications in place across all five markets. Full regulatory documentation available on request.",
  },
  {
    icon: "/Image/supply.png",
    title: "Supply Resilience",
    description:
      "Multi-country manufacturing ensures no single point of supply failure. Warehouse availability visible in real time within the wholesale portal.",
  },
  {
    icon: "/Image/tracking.png",
    title: "Real-Time Tracking",
    description:
      "Full shipment tracking from warehouse dispatch to delivery confirmation, visible within your account dashboard with carrier integration.",
  },
];

export default function WholesaleGlobalReach() {
  return (
    <section className="wholesale-global">
      <div className="wholesale-container">

        <div className="global-heading">
          <h2>
            Five Manufacturing Hubs.
            <br />
            <span>Global Reach.</span>
          </h2>
        </div>

        <div className="global-wrapper">

          {/* Left Side */}

          <div className="network-card">

            <h4>Manufacturing & Distribution Network</h4>

            <div className="network-map">
              <img
                src="/Image/manufacturing-map.png"
                alt="Manufacturing Network"
                className="network-map-image"
              />
            </div>

            < div className="country-list">
                          {countries.map((country, index) => (
                <div className="country-item" key={index}>

                  <img
                    src={country.flag}
                    alt={country.country}
                    className="country-flag"
                  />

                  <h5>{country.country}</h5>

                  <p>{country.city}</p>

                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="global-features">

            {features.map((feature, index) => (
              <div className="global-feature-card" key={index}>

                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-icon"
                />

                <div className="feature-content">

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}