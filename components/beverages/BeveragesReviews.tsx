"use client";

import React from "react";

interface Review {
  stars: string;
  badge: string;
  headline: React.ReactNode;
  body: React.ReactNode;
  author: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    stars: "★★★★★",
    badge: "SPARKLING GINGER LIME",
    headline: "Finally a drink that does what it says.",
    body: (
      <>
        I have tried every ginger drink on the market and
        <br />
        nothing comes close. The ginger is real, the
        <br />
        flavour is clean, and it is my morning non-
        <br />
        negotiable.
      </>
    ),
    author: "Sarah M.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "GINGER FIRE SHOT",
    headline: "Better than coffee for getting started.",
    body: (
      <>
        Three weeks in and I do not miss coffee. The shot
        <br />
        wakes me up properly and there is no crash that
        <br />
        follows espresso.
      </>
    ),
    author: "Daniel K.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "BOTANICAL ICED TEA",
    headline: (
      <>
        The evening ritual I did not know I
        <br />
        needed.
      </>
    ),
    body: (
      <>
        I drink this every night after dinner. Calming
        <br />
        without being boring and the ginger warmth is
        <br />
        gentle enough for evenings.
      </>
    ),
    author: "Priya R.",
    verified: true,
  },
];

export default function BeveragesReviews() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          R e v i e w s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-2">
          Loved by Customers
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full mb-3" />
        <p className="text-orange-600 text-base font-semibold font-['Poppins'] leading-7 text-center">
          4.9 average · 6,200+ verified reviews
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="w-full max-w-[384px] h-[256px] bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            <div>
              {/* Stars */}
              <div className="text-orange-600 text-xs font-normal font-['Poppins'] leading-5 mb-2">
                {rev.stars}
              </div>

              {/* Tag Pill */}
              <div className="inline-flex items-center bg-orange-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-200 px-3 py-[3px] mb-3">
                <span className="text-amber-700 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wide">
                  {rev.badge}
                </span>
              </div>

              {/* Quote Headline with Left Accent Line */}
              <div className="border-l-[3px] border-orange-600 pl-3 mb-3">
                <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6">
                  {rev.headline}
                </h3>
              </div>

              {/* Review Body Text */}
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                {rev.body}
              </p>
            </div>

            {/* Author Footer Row (Aligned perfectly across all cards) */}
            <div className="flex items-center justify-between pt-3 border-t border-orange-50/60">
              <span className="text-stone-900 text-xs font-bold font-['Poppins'] leading-5">
                {rev.author}
              </span>
              {rev.verified && (
                <span className="text-stone-500 text-xs font-normal font-['Poppins'] leading-4">
                  ✓ Verified
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
