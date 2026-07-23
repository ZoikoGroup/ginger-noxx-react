import React from 'react';
import './community.css';

export default function CommunityCTA() {
  return (
    <section className="community-cta-section flex flex-col items-center justify-center text-center">
      {/* Radial dark overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_80%,rgba(0,0,0,0.20),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center px-4">

        {/* Title */}
        <h2 className="community-cta-title">
          Be Part of a Movement<br />Built Around Ginger
        </h2>

        {/* Description */}
        <p className="community-cta-desc">
          Free to join. Instantly rewarding. A community of people who believe good taste and real ingredients are worth celebrating.
        </p>

        {/* Button */}
        <button className="community-cta-btn">
          Join the Collective Now
        </button>

      </div>
    </section>
  );
}
