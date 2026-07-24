import React from 'react';
import "./sustainability.css";

export default function SustainabilityCTA() {
  return (
    <section className="sustain-section-orange flex flex-col items-center justify-center text-center px-4">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="sustain-cta-heading">
          Make an Impact with Every Choice
        </h2>

        {/* Subtitle */}
        <p className="sustain-cta-sub">
          Every GingerNoxx purchase supports ethical sourcing, clean-label formulation, and planet-positive practices. Shopping well is the simplest form of action.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
         <button className="inline-flex items-center justify-center h-[48px] px-[px] bg-white hover:bg-stone-100 text-[#D9531E] text-sm font-bold rounded-full shadow-md transition-all duration-300 cursor-pointer border-none whitespace-nowrap">
  Shop GingerNoxx
</button>
          <button className="sustain-btn-outline">
            Learn More About Our Practices
          </button>
        </div>

      </div>
    </section>
  );
}
