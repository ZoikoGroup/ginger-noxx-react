import React from 'react';
import "./snacks.css";

const reviews = [
  {
    tag: "ENERGY CHEWS",
    quoteTitle: "My desk drawer essential.",
    reviewText: "I keep a pack on my desk at all times. The ginger gives me a genuine lift without a sugar crash. Cleaner and more effective than anything similar I have tried.",
    author: "Maya L."
  },
  {
    tag: "DARK CHOC GINGER BARK",
    quoteTitle: "I order this every single month.",
    reviewText: "This bark is genuinely exceptional. The ginger intensity is exactly right against the dark chocolate. It has replaced every other after-dinner treat in our house.",
    author: "James T."
  },
  {
    tag: "SNACK BOX",
    quoteTitle: "Built a box on a whim. Reordering forever.",
    reviewText: "I used the snack box builder just to try a few things. Three items later and now I have a monthly standing order. Every single one was worth buying.",
    author: "Aisha K."
  }
];

export default function SnacksReviews() {
  return (
    <section className="snacks-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="snacks-tag">
          C U S T O M E R &nbsp; F A V O U R I T E S
        </div>

        {/* Title */}
        <h2 className="snacks-heading">
          Customer Favourites
        </h2>

        {/* Line Divider */}
        <div className="snacks-heading-line" />

        {/* 3 Review Cards Grid */}
        <div className="snacks-grid-3 justify-items-center mt-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="snacks-review-card">
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
