"use client";

import Image from "next/image";

const statusCards = [
  {
    image: "/find-us/in-stock.png",
    alt: "In Stock",
    badge: "In Stock",
    badgeClass: "findus-status-badge green",
    title: "Available Now",
    description: (
      <>
        Product is confirmed available at
        this location. You can visit or order
        with confidence.
      </>
    ),
    note: (
      <>
        Availability confirmed within the last update
        <br />
        cycle. We recommend calling ahead for
        <br />
        specific SKUs.
      </>
    ),
  },
  {
    image: "/find-us/limited-availability.png",
    alt: "Limited Availability",
    badge: "Limited Availability",
    badgeClass: "findus-status-badge yellow",
    title: "Act Soon",
    description: (
      <>
        Low stock at this location. Product
        <br />
        is present but may not remain
        <br />
        available for long.
      </>
    ),
    note: (
      <>
        Recommend visiting soon or choosing online
        <br />
        delivery for guaranteed availability.
      </>
    ),
  },
  {
    image: "/find-us/availability-varies.png",
    alt: "Availability Varies",
    badge: "Availability Varies",
    badgeClass: "findus-status-badge gray",
    title: "Check Locally",
    description: (
      <>
        This retailer stocks GingerNoxx but
        <br />
        live inventory cannot be
        <br />
        confirmed. Please call ahead.
      </>
    ),
    note: (
      <>
        Selected SKUs may be available. Best to call
        <br />
        the store or order online to be certain.
      </>
    ),
  },
  {
    image: "/find-us/coming-soon.png",
    alt: "Coming Soon",
    badge: "Coming Soon",
    badgeClass: "findus-status-badge blue",
    title: "Expanding Here",
    description: (
      <>
        GingerNoxx is coming to this
        <br />
        location or market. Sign up to be
        <br />
        notified when it arrives.
      </>
    ),
    note: (
      <>
        Distribution is expanding. Use our demand
        <br />
        capture form to register your interest and
        <br />
        get notified.
      </>
    ),
  },
];

export default function FindUsStatusGuide() {
  return (
    <section className="findus-status-section">
      <div className="findus-status-container">

        <div className="findus-status-heading">
          <h2>
            What Each Status
            <br />
            <span>Actually Means</span>
          </h2>

          <p>
            Availability insights are updated by location and channel so
            you can
            <br />
            make faster, more informed decisions. No guesswork.
          </p>
        </div>

        <div className="findus-status-grid">

          {statusCards.map((card, index) => (
            <div
              className="findus-status-card"
              key={index}
            >

              <div className="findus-status-icon">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={36}
                  height={36}
                />
              </div>

              <div className={card.badgeClass}>
                {card.badge}
              </div>

              <h3>{card.title}</h3>

              <p className="findus-status-description">
                {card.description}
              </p>

              {/* Note text */}
              <p className="findus-status-note">
                {card.note}
              </p>

            </div>
          ))}

        </div>

        <div className="findus-status-footer">
          <p>
            Tap any card to expand. Availability claims are indicative,
            not guaranteed in real time. Always verify with the retailer
            for purchase-critical decisions.
          </p>
        </div>

      </div>
    </section>
  );
}