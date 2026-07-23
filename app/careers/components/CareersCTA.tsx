import React from 'react';
import "./careers.css";

export default function CareersCTA() {
  return (
    <section className="careers-section-orange flex flex-col items-center justify-center text-center px-4">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="careers-cta-title">
          Join a Team That Values<br />Purpose and Precision
        </h2>

        {/* Subtitle */}
        <p className="careers-cta-sub">
          Be part of creating products that set global standards in functional food, clean-label formulation, and sustainable impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="h-[48px] px-[32px] bg-white hover:bg-stone-100 text-[#D4621A] text-sm font-bold rounded-full shadow-md transition-all duration-300 cursor-pointer border-none hover:-translate-y-0.5 font-['Poppins']">
            Apply Now →
          </button>
          <button className="careers-btn-outline">
            Learn More About Culture
          </button>
        </div>

      </div>
    </section>
  );
}
