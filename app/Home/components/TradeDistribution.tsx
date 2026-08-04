"use client";

import Image from "next/image";

export default function TradeDistribution() {
  return (
    <section className="trade">
      <div className="trade-container">

        {/* Left Side */}

        <div className="trade-left">

          <div className="trade-badge">
            TRADE & DISTRIBUTION
          </div>

          <h2>
            Stock GingerNoxx —
            <br />
            <span>The Category That Converts</span>
          </h2>

          <p>
            Functional beverages and ginger-adjacent food categories are
            <br />
            among the fastest-growing segments in global retail.
            GingerNoxx
            <br />
            gives you a proven brand, margin-friendly economics, and
            retail-ready support.
          </p>

          <div className="trade-buttons">

            <button
              className="trade-btn-primary"
              onClick={() => window.location.href = "/stockists"}
            >
              Become a Stockist
            </button>

            <button
              className="trade-btn-secondary"
              onClick={() => window.location.href = "/wholesale"}
            >
              Download Retail Deck
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="trade-right">

          <div className="trade-map-card">

            <h4>Find GingerNoxx Near You</h4>

            <Image
              src="/Image/trade-map.png"
              alt="Trade Map"
              width={546}
              height={320}
              className="trade-map"
            />

            <div className="trade-tags">

              <span>Sacramento</span>
              <span>London</span>
              <span>Austin</span>
              <span>Delhi</span>
              <span>Nairobi</span>
              <span>Kingston</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
