import React from 'react';
import "./wellness.css";

const reviews = [
  {
    tag: "MORNING SHOTS",
    quoteTitle: "I replace my morning coffee with this and feel amazing.",
    reviewText: "I used to rely on 3 cups of coffee. Switching to the Ginger Fire Shot gave me a cleaner energy boost without the midday jitters. My stomach feels so much better too.",
    author: "Elena R."
  },
  {
    tag: "RELAXED GUT TEA",
    quoteTitle: "My gut bloating is drastically gone in just a few days.",
    reviewText: "I drink the Relaxed Gut Tea every night after dinner. It tastes warm and soothing, and the bloating I used to experience has completely disappeared. Highly recommend!",
    author: "Marcus V."
  },
  {
    tag: "GUT SUPPORT SET",
    quoteTitle: "I buy this set every month without fail. What a gamechanger.",
    reviewText: "The combination of turmeric shots and evening tea has transformed my daily routine. My digestion is smooth and I feel lighter throughout the day. Excellent quality!",
    author: "Sarah P."
  }
];

export default function WellnessReviews() {
  return (
    <section className="wellness-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          D A I L Y &nbsp; R O U T I N E S
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          Part of Daily Routines
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* 3 Review Cards Grid */}
        <div className="wellness-grid-3 justify-items-center mt-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="w-full max-w-[360px] min-h-[288px] bg-white rounded-xl border border-orange-100 shadow-sm p-6 flex flex-col justify-between text-left transition-transform hover:-translate-y-1">
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
