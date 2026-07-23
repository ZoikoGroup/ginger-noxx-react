import React from 'react';
import "./bundles.css";

const footerBadges = ["HALAL", "VEGAN", "CLEAN LABEL", "GIFT WRAP INCLUDED"];

export default function BundlesCTA() {
  return (
    <section className="bundles-section-dark flex flex-col items-center justify-center text-center px-6">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-orange-600/70 text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          C h o o s e &nbsp; Y o u r s
        </div>

        {/* Title */}
        <h2 className="bundles-cta-title">
          The Right Bundle Is Already Here
        </h2>

        {/* Subtitle */}
        <p className="bundles-cta-sub">
          Whether you are gifting or treating yourself — every GingerNoxx bundle removes the uncertainty from choosing well.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="h-12 px-8 bg-[#ea580c] hover:bg-[#c24413] text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none">
            Shop All Bundles
          </button>
          <button className="h-12 px-8 border-2 border-white/25 hover:bg-white/10 text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors bg-transparent">
            Need a Gift Fast
          </button>
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {footerBadges.map((badge, idx) => (
            <span key={idx} className="bundles-cta-badge">
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
