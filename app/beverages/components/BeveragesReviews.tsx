import React from 'react';
import "./beverages.css";

const reviews = [
  {
    tag: "SPARKLING GINGER LIME",
    quoteTitle: "Finally a drink that does what it says.",
    reviewText: "I have tried every ginger drink on the market and nothing comes close. The ginger is real, the flavour is clean, and it is my morning non-negotiable.",
    author: "Sarah M."
  },
  {
    tag: "GINGER FIRE SHOT",
    quoteTitle: "Better than coffee for getting started.",
    reviewText: "Three weeks in and I do not miss coffee. The shot wakes me up properly and there is no crash that follows espresso.",
    author: "Daniel K."
  },
  {
    tag: "BOTANICAL ICED TEA",
    quoteTitle: "The evening ritual I did not know I needed.",
    reviewText: "I drink this every night after dinner. Calming without being boring and the ginger warmth is gentle enough for evenings.",
    author: "Priya R."
  }
];

export default function BeveragesReviews() {
  return (
    <section className="beverages-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="beverages-tag">
          R E V I E W S
        </div>

        {/* Title */}
        <h2 className="beverages-heading">
          Loved by Customers
        </h2>

        {/* Line Divider */}
        <div className="beverages-heading-line" />

        {/* Subtitle */}
        <p className="text-orange-600 text-base font-semibold font-['Poppins'] mb-8">
          4.9 average · 6,200+ verified reviews
        </p>

        {/* 3 Review Cards Grid */}
        <div className="beverages-grid-3 justify-items-center">
          {reviews.map((rev, idx) => (
            <div key={idx} className="beverages-review-card">
              <div>
                {/* Stars */}
                <div className="text-orange-600 text-xs font-normal font-['Poppins'] mb-3">★★★★★</div>
                
                {/* Pill Tag */}
                <span className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-amber-700 text-[10px] font-bold uppercase rounded-full tracking-wide inline-block mb-3">
                  {rev.tag}
                </span>

                {/* Quote Header with Orange Left Border */}
                <div className="pl-3 border-l-[3px] border-orange-600 mb-3">
                  <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6">{rev.quoteTitle}</h3>
                </div>

                {/* Review Body Text */}
                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{rev.reviewText}</p>
              </div>

              {/* Author & Verified Badge */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-orange-100">
                <span className="text-stone-900 text-xs font-bold font-['Poppins']">{rev.author}</span>
                <span className="text-stone-500 text-xs font-normal font-['Poppins']">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
