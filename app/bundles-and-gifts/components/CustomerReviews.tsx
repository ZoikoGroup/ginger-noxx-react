import React from 'react';
import "./bundles.css";

const reviews = [
  {
    tag: "GIFT SET DELUXE",
    quoteTitle: "Made gifting effortless. Everyone loved it.",
    reviewText: "I ordered the Deluxe set for a colleague who is into wellness. The packaging was impressive and the product variety was exactly right. She reordered for herself the following week.",
    author: "A.J."
  },
  {
    tag: "WELLNESS PACK",
    quoteTitle: "A wellness gift that is actually useful.",
    reviewText: "I am tired of gifting candles. The Wellness Pack is functional, beautiful, and the recipient actually uses it every day. That is what makes it a genuinely good gift. Ordered it twice already.",
    author: "M.T."
  },
  {
    tag: "FAMILY PACK",
    quoteTitle: "The whole family is on a GingerNoxx ritual now.",
    reviewText: "We received the Family Pack as a birthday gift and it became a household ritual. The recipe cards were a thoughtful touch. My kids specifically ask when the next delivery is coming.",
    author: "L.F."
  }
];

export default function CustomerReviews() {
  return (
    <section className="bundles-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="bundles-tag">
          C u s t o m e r &nbsp; R e v i e w s
        </div>

        {/* Title */}
        <h2 className="bundles-heading">
          People Who Gifted GingerNoxx
        </h2>

        {/* Divider */}
        <div className="bundles-heading-line" />

        {/* 3 Review Cards Grid */}
        <div className="bundles-grid-3 justify-items-center mt-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bundles-review-card">
              <div>
                <div className="text-[#ea580c] text-xs font-normal font-['Poppins'] mb-2">★★★★★</div>
                <span className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-[#b45309] text-[10px] font-bold uppercase rounded-full tracking-wide inline-block mb-3">
                  {rev.tag}
                </span>

                <div className="pl-3 border-l-4 border-[#ea580c] mb-3">
                  <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6">{rev.quoteTitle}</h3>
                </div>

                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{rev.reviewText}</p>
              </div>

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
