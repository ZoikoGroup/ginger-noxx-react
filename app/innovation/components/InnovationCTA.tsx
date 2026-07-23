import React from 'react';
import './innovation.css';

export default function InnovationCTA() {
  return (
    <section className="innov-section-orange px-4 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="innov-cta-heading">
          Bring Your Ideas to Life
        </h2>

        {/* Subtitle */}
        <p className="innov-cta-sub">
          Whether you&apos;re a brand, a retailer, or a researcher, the Zoiko Foods Corp Innovation Platform is the infrastructure your next product needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="h-[48px] px-[32px] bg-white hover:bg-stone-100 text-[#D4621A] text-[15px] font-bold rounded-full shadow-md transition-all duration-300 cursor-pointer border-none hover:-translate-y-0.5">
            Request a Demo
          </button>
          <button className="innov-btn-outline">
            View Case Studies
          </button>
        </div>

      </div>
    </section>
  );
}
