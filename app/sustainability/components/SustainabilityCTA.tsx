import React from 'react';
import Link from 'next/link';
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
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/best-sellers" className="inline-flex items-center justify-center h-[48px] px-7 bg-white hover:bg-stone-100 text-[#D9531E] text-[14px] font-[600] rounded-full shadow-md transition-all duration-300 cursor-pointer border-none whitespace-nowrap no-underline leading-none">
            Shop GingerNoxx
          </Link>
          <Link href="#sustain-stages" className="sustain-btn-outline">
            Learn More About Our Practices
          </Link>
        </div>

      </div>
    </section>
  );
}
