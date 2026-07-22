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
    badge: "GIFT SET DELUXE",
    headline: (
      <>
        Made gifting effortless. Everyone loved
        <br />
        it.
      </>
    ),
    body: (
      <>
        I ordered the Deluxe set for a colleague who is
        <br />
        into wellness. The packaging was impressive
        <br />
        and the product variety was exactly right. She
        <br />
        reordered for herself the following week.
      </>
    ),
    author: "A.J.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "WELLNESS PACK",
    headline: "A wellness gift that is actually useful.",
    body: (
      <>
        I am tired of gifting candles. The Wellness Pack is
        <br />
        functional, beautiful, and the recipient actually
        <br />
        uses it every day. That is what makes it a
        <br />
        genuinely good gift. Ordered it twice already.
      </>
    ),
    author: "M.T.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "FAMILY PACK",
    headline: (
      <>
        The whole family is on a GingerNoxx
        <br />
        ritual now.
      </>
    ),
    body: (
      <>
        We received the Family Pack as a birthday gift
        <br />
        and it became a household ritual. The recipe
        <br />
        cards were a thoughtful touch. My kids
        <br />
        specifically ask when the next delivery is
        <br />
        coming.
      </>
    ),
    author: "L.F.",
    verified: true,
  },
];

export default function CustomerReviews() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-orange-50 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          C u s t o m e r &nbsp; R e v i e w s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          People Who Gifted GingerNoxx
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="w-full max-w-[384px] h-[288px] bg-white rounded-lg shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            <div>
              {/* Stars */}
              <div className="text-orange-600 text-xs font-normal font-['Poppins'] leading-5 mb-2">
                {rev.stars}
              </div>

              {/* Tag Pill */}
              <div className="inline-block bg-orange-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-200 px-3 py-[3px] mb-3">
                <span className="text-amber-700 text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wide">
                  {rev.badge}
                </span>
              </div>

              {/* Quote Headline */}
              <div className="border-l-[3px] border-orange-600 pl-3 mb-3">
                <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6">
                  {rev.headline}
                </h3>
              </div>

              {/* Body */}
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">
                {rev.body}
              </p>
            </div>

            {/* Author Row */}
            <div className="flex items-center justify-between pt-3 border-t border-orange-50">
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
