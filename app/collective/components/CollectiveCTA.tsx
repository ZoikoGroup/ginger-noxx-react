import React from 'react';
import "./collective.css";

export default function CollectiveCTA() {
  return (
    <section className="coll-section-orange flex flex-col items-center justify-center text-center px-6">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="coll-cta-title">
          Be Part of a Movement<br />Built Around Ginger
        </h2>

        {/* Subtitle */}
        <p className="coll-cta-sub">
          Free to join. Instantly rewarding. A community of people who believe good taste and real ingredients are worth celebrating.
        </p>

        {/* Button */}
        <button className="coll-cta-btn">
          Join the Collective Now
        </button>

      </div>
    </section>
  );
}
