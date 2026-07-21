"use client";

import Image from "next/image";

const onlineStores = [
  {
    image: "/find-us/official-store.png",
    alt: "Official Store",
    title: "GingerNoxx.com",
    description: (
      <>
        The official GingerNoxx store. Full product
        <br />
        range, every SKU, best brand selection, and
        <br />
        direct access to bundles, subscriptions, and
        <br />
        limited editions.
      </>
    ),
    highlight: "🚚 Best brand selection · Subscribe & Save",
    button: "Shop Official Store →",
    featured: true,
  },
  {
    image: "/find-us/amazon.png",
    alt: "Amazon",
    title: "Amazon",
    description: (
      <>
        Available on Amazon with Prime eligibility.
        <br />
        Fast national delivery and marketplace
        <br />
        convenience for everyday orders. Selected
        <br />
        SKUs available.
      </>
    ),
    highlight: "⚡ Fast national delivery · Prime eligible",
    button: "Shop on Amazon →",
    featured: false,
  },
  {
    image: "/find-us/partner-sites.png",
    alt: "Retail Partner",
    title: "Retail Partner Sites",
    description: (
      <>
        Selected GingerNoxx products are available
        <br />
        through retail partner online stores — Whole
        <br />
        Foods, Planet Organic, and others. Availability
        <br />
        varies.
      </>
    ),
    highlight: "🏪 Partner marketplace availability",
    button: "Find Partner Links →",
    featured: false,
  },
];

export default function BuyOnlineCards() {
  return (
    <section className="buy-online-section">
      <div className="buy-online-container">

        <div className="buy-online-heading">

          <h2>
            Buy Online <span>Guaranteed Selection</span>
          </h2>

          <p>
            Online is the fastest path to the full GingerNoxx range.
            No distance, no
            <br />
            stock uncertainty, no compromise.
          </p>

        </div>

        <div className="buy-online-grid">

          {onlineStores.map((store, index) => (
            <div
              key={index}
              className={
                store.featured
                  ? "buy-online-card featured"
                  : "buy-online-card"
              }
            >

              <div className="buy-online-icon">

                <Image
                  src={store.image}
                  alt={store.alt}
                  width={40}
                  height={40}
                />

              </div>

              <h3>{store.title}</h3>

              <p className="buy-online-description">
                {store.description}
              </p>
                            <div
                className={
                  store.featured
                    ? "buy-online-highlight featured"
                    : "buy-online-highlight"
                }
              >
                {store.highlight}
              </div>

              <button
                className={
                  store.featured
                    ? "buy-online-btn featured"
                    : "buy-online-btn"
                }
              >
                {store.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}