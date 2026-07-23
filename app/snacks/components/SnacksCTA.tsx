import React from 'react';
import "./snacks.css";

const footerBadges = ["HALAL", "VEGAN", "CLEAN LABEL"];

export default function SnacksCTA() {
  return (
    <section className="snacks-section-dark overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Radial Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 80%, rgba(234, 88, 12, 0.20) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-orange-600/70 text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          T R Y &nbsp; M O R E
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-[47.84px] mb-3">
          Build Your Snack Box Today
        </h2>

        {/* Subtitle */}
        <p className="text-white/40 text-base font-normal font-['Poppins'] leading-6 max-w-[626px] mb-8">
          Pick a few, save more. Every GingerNoxx snack is made with real ginger and honest ingredients.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="h-12 px-7 bg-[#ea580c] hover:bg-[#c24413] text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none shadow-md">
            Build Your Box
          </button>
          <button className="h-12 px-7 border-2 border-white/25 hover:bg-white/10 text-white text-sm font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors bg-transparent">
            Shop by Craving
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
