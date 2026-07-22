"use client";

const filters = [
  "All Stores",
  "In Stock Only",
  "Beverages",
  "Condiments",
  "Snacks",
  "Full Range",
  "Online Only",
];

const stores = [
  {
    name: "Natural Kitchen — Shoreditch",
    distance: "0.4 mi",
    address: "14 Hoxton Square, London E1 6QT",
    badge: "In Stock",
    badgeClass: "green",
    subtitle: "Premium Retailer",
    categories: [
      "🥤 Beverages",
      "🌶️ Condiments",
      "🧂 Spices",
      "🍪 Snacks",
    ],
    call: true,
  },
  {
    name: "Planet Organic — Westbourne Grove",
    distance: "1.2 mi",
    address: "42 Westbourne Grove, London W2 5SH",
    badge: "Limited",
    badgeClass: "yellow",
    subtitle: "Organic Specialty",
    categories: [
      "🥤 Beverages",
      "⚡ Wellness Shots",
    ],
    call: false,
  },
  {
    name: "Whole Foods Market — Kensington",
    distance: "1.8 mi",
    address: "63-97 Kensington High St, London W8 5SE",
    badge: "In Stock",
    badgeClass: "green",
    subtitle: "National Chain",
    categories: [
      "🥤 Beverages",
      "🌶️ Condiments",
    ],
    call: false,
  },
  {
    name: "Sourced Market — King's Cross",
    distance: "2.1 mi",
    address: "St Pancras International, London N1C 4QP",
    badge: "In Stock",
    badgeClass: "green",
    subtitle: "Food Hall",
    categories: [
      "🥤 Beverages",
      "🍪 Snacks",
    ],
    call: false,
  },
  {
    name: "Waitrose — Canary Wharf",
    distance: "3.4 mi",
    address: "Canada Place, London E14 5EW",
    badge: "Varies",
    badgeClass: "gray",
    subtitle: "National Supermarket",
    categories: [
      "🥤 Beverages",
    ],
    call: true,
  },
];

export default function FindUsLocator() {
  return (
    <section className="findus-locator-section">

      <div className="findus-locator-container">

        <div className="findus-locator-heading">
          <h2>
            Find GingerNoxx <span>Near You</span>
          </h2>
        </div>

        <div className="findus-search-wrapper">

          <div className="findus-search-box">

            <input
              type="text"
              placeholder="Enter ZIP, postcode, or city…"
            />

            <button className="findus-search-btn">
              Search
            </button>

          </div>

          <button className="findus-location-btn">
            📍 Use my location
          </button>

        </div>

        <div className="findus-filter-row">

          {filters.map((filter, index) => (

            <button
              key={index}
              className={
                index === 0
                  ? "findus-filter active"
                  : "findus-filter"
              }
            >
              {filter}
            </button>

          ))}

        </div>

        <div className="findus-results">

          <div className="findus-map">

            <div className="findus-map-placeholder">
              Google Maps
            </div>

          </div>

          <div className="findus-store-list">

            <div className="findus-store-header">

              <span>
                9 stockists found · within 5 miles
              </span>

              <button>
                Sort: Distance ▾
              </button>

            </div>

            {stores.map((store, index) => (

              <div
                className={index === 0 ? "findus-store-card active" : "findus-store-card"}
                key={index}
              >
                                <div className="findus-store-top">

                  <div>

                    <h3>{store.name}</h3>

                    <p className="findus-store-address">
                      {store.address}
                    </p>

                  </div>

                  <span className="findus-store-distance">
                    {store.distance}
                  </span>

                </div>

                <div className="findus-store-meta">

                  <span
                    className={`findus-store-badge ${store.badgeClass}`}
                  >
                    {store.badge}
                  </span>

                  <span className="findus-store-subtitle">
                    {store.subtitle}
                  </span>

                </div>

                <div className="findus-store-categories">

                  {store.categories.map((category, i) => (

                    <span
                      key={i}
                      className="findus-store-category"
                    >
                      {category}
                    </span>

                  ))}

                </div>

                <div className="findus-store-actions">

                  <button className="findus-store-link">
                    Get Directions →
                  </button>

                  {store.call && (

                    <button className="findus-store-call">
                      📞 Call Store
                    </button>

                  )}

                </div>

              </div>

            ))}
                      </div>

        </div>

      </div>

    </section>
  );
}