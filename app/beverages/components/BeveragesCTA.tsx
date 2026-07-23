import React from 'react';
import "./beverages.css";

const footerBadges = ["HALAL", "VEGAN", "CLEAN LABEL", "ISO 22000"];

export default function BeveragesCTA() {
  return (
    <section className="beverages-section-dark overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Radial Glow Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 80%, rgba(234, 88, 12, 0.20) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-orange-600/70 text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          S T A R T &nbsp; T O D A Y
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-[47.84px] mb-3">
          The Right Ginger Drink Is Waiting
        </h2>

        {/* Subtitle */}
        <p className="text-white/40 text-base font-normal font-['Poppins'] leading-6 max-w-[631px] mb-8">
          Start with a bestseller, follow our guide, or build your own routine. Every option is the right one.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="h-12 px-7 bg-[#ea580c] hover:bg-[#c24413] text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none shadow-md">
            Shop Best Sellers
          </button>
          <button className="h-12 px-7 border-2 border-white/25 hover:bg-white/10 text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors bg-transparent">
            Find Your Drink
          </button>
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {footerBadges.map((badge, idx) => (
            <span key={idx} className="px-3.5 py-1 rounded-full bg-white/5 text-white/30 text-[10px] font-bold uppercase tracking-wide">
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
