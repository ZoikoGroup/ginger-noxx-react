import React from 'react';
import "./bundles.css";

export default function NeedGiftFast() {
  return (
    <section className="bundles-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="bundles-tag">
          N e e d &nbsp; a &nbsp; G i f t &nbsp; F a s t
        </div>

        {/* Title */}
        <h2 className="bundles-heading">
          Need a Gift Fast?
        </h2>

        {/* Divider */}
        <div className="bundles-heading-line" />

        {/* Subtitle */}
        <p className="bundles-subheading">
          Start with a popular choice — ready in seconds.
        </p>

        {/* Dark Highlight Box */}
        <div className="bundles-fast-box">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left max-w-[480px]">
            <div className="px-3 py-1 bg-orange-600/20 border border-orange-600/30 rounded-full mb-3">
              <span className="text-[#fb923c] text-[10px] font-bold uppercase tracking-wider">Most Gifted This Month</span>
            </div>
            
            <h3 className="text-white text-xl font-bold font-['Poppins'] leading-8 mb-2">
              Two bundles. Zero hesitation.
            </h3>

            <p className="text-white/40 text-sm font-normal font-['Poppins'] leading-5 mb-6">
              These are the two most gifted GingerNoxx bundles — chosen for their versatility, premium presentation, and broad appeal across tastes and lifestyles.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs font-bold font-['Poppins']">Ready to Gift</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs font-bold font-['Poppins']">Fast Checkout</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs font-bold font-['Poppins']">Popular Choice</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs font-bold font-['Poppins']">Low Risk</span>
            </div>
          </div>

          {/* Right Column: 2 Quick-Select Cards */}
          <div className="flex flex-col gap-4 w-full max-w-[512px]">
            {/* Card 1 */}
            <div className="w-full h-16 bg-orange-600/20 border border-orange-600 rounded-lg px-4 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎁</span>
                <div className="flex flex-col text-left">
                  <span className="text-white text-sm font-bold font-['Poppins']">Gift Set Deluxe</span>
                  <span className="text-white/40 text-xs font-normal font-['Poppins']">Full assortment · Premium packaging</span>
                </div>
              </div>
              <span className="text-[#ea580c] text-sm font-bold font-['Poppins']">£79.99</span>
            </div>

            {/* Card 2 */}
            <div className="w-full h-16 bg-white/5 border border-white/10 rounded-lg px-4 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">💚</span>
                <div className="flex flex-col text-left">
                  <span className="text-white text-sm font-bold font-['Poppins']">Wellness Pack</span>
                  <span className="text-white/40 text-xs font-normal font-['Poppins']">6 beverages + shots + botanical tea</span>
                </div>
              </div>
              <span className="text-[#ea580c] text-sm font-bold font-['Poppins']">£34.99</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
