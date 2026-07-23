import React from 'react';
import "./wellness.css";

const footerBadges = ["HALAL", "VEGAN", "CLEAN LABEL", "ISO 22000"];

export default function WellnessCTA() {
  return (
    <section className="wellness-section-dark relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Radial Warm Glow Effect in Center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 60%, rgba(234, 88, 12, 0.18) 0%, rgba(12, 10, 9, 0) 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-[#ea580c] text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          B E G I N &nbsp; T O D A Y
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-tight mb-3">
          One Step Into Daily Ginger Wellness
        </h2>

        {/* Subtitle */}
        <p className="text-[#A8A29E] text-[15px] font-normal font-['Poppins'] leading-6 max-w-[620px] mb-8">
          Start with a 7-day trial or discover your daily rhythm recommendation with our routine builder.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="h-11 px-7 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none shadow-md">
            Start 7-Day Trial
          </button>
          <button className="h-11 px-7 border border-white/25 hover:bg-white/10 text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors bg-transparent">
            Select Your Rhythm
          </button>
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {footerBadges.map((badge, idx) => (
            <span key={idx} className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-stone-400 text-[10px] font-medium uppercase tracking-wider">
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
