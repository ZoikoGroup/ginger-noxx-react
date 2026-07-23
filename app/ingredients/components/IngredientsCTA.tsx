import React from 'react';
import "./ingredients.css";

const footerBadges = ["HALAL", "VEGAN", "CLEAN LABEL", "ISO 22000"];

export default function IngredientsCTA() {
  return (
    <section className="ingred-section-dark relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Radial Warm Glow Effect in Center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 60%, rgba(234, 88, 12, 0.18) 0%, rgba(24, 10, 3, 0) 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

        {/* Tag */}
        <div className="text-[#ea580c] text-[10px] font-semibold uppercase tracking-[3.20px] mb-3">
          C O O K &nbsp; W I T H &nbsp; G I N G E R
        </div>

        {/* Title */}
        <h2 className="text-white font-['Poppins'] text-4xl font-bold leading-tight mb-3">
          The Kitchen Starts With Ginger
        </h2>

        {/* Subtitle */}
        <p className="text-stone-400 text-[14px] font-normal font-['Poppins'] leading-6 max-w-[620px] mb-8">
          Every dish you cook with GingerNoxx Ingredients gets a layer of depth that changes the meal completely. Start with one product.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="h-11 px-7 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none shadow-md">
            Cook This Tonight
          </button>
          <button className="h-11 px-7 border border-white/25 hover:bg-white/10 text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors bg-transparent">
            Shop Best Sellers
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
