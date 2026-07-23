import React from 'react';
import "./ingredients.css";

const reviews = [
  {
    tag: "MASTER CHEF BLEND",
    quoteTitle: "A genuinely professional-tasting result at home.",
    reviewText: "I bought this skeptically — spice blends are usually disappointing. This one immediately changed how my food tastes. The layering is clearly well-thought and it elevates everything I add it to.",
    author: "Omar S."
  },
  {
    tag: "GINGER FIRE SAUCE",
    quoteTitle: "This sauce has replaced everything else in my fridge door.",
    reviewText: "I use it as a marinade, a cooking sauce, a finishing sauce, and a dipping sauce. It works at every stage of cooking and the ginger heat is genuinely balanced rather than just hot.",
    author: "Laura M."
  },
  {
    tag: "RECIPE GUIDE",
    quoteTitle: "The recipe guide made me cook things I never would have tried.",
    reviewText: "I used the stir fry recipe shown on the page and it was genuinely good. I then bought three more products. The cooking guide approach is exactly what I needed to feel confident with new ingredients.",
    author: "Keiko T."
  }
];

export default function RealKitchensReviews() {
  return (
    <section className="ingred-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="ingred-tag">
          U S E D &nbsp; I N &nbsp; R E A L &nbsp; K I T C H E N S
        </div>

        {/* Title */}
        <h2 className="ingred-heading">
          Used in Real Kitchens
        </h2>

        {/* Line Divider */}
        <div className="ingred-heading-line" />

        {/* 3 Review Cards Grid */}
        <div className="ingred-grid-3 justify-items-center mt-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="ingred-review-card">
              <div>
                {/* Stars */}
                <div className="text-[#ea580c] text-xs font-normal font-['Poppins'] mb-3">★★★★★</div>
                
                {/* Pill Tag */}
                <span className="px-2.5 py-0.5 border border-[#ea580c]/30 bg-[#FFF7ED] text-[#ea580c] text-[9px] font-bold uppercase rounded-full tracking-wider inline-block mb-3">
                  {rev.tag}
                </span>

                {/* Quote Header with Orange Left Border */}
                <div className="pl-3 border-l-[3px] border-[#ea580c] mb-3">
                  <h3 className="text-stone-900 text-xs font-bold font-['Poppins'] leading-snug">{rev.quoteTitle}</h3>
                </div>

                {/* Review Body Text */}
                <p className="text-stone-600 text-[11px] font-normal font-['Poppins'] leading-5">{rev.reviewText}</p>
              </div>

              {/* Author & Verified Badge */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
                <span className="text-stone-900 text-xs font-bold font-['Poppins']">{rev.author}</span>
                <span className="text-stone-400 text-[10px] font-normal font-['Poppins']">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
