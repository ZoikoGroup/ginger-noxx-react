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
    badge: "MASTER CHEF BLEND",
    headline: (
      <>
        A genuinely professional-tasting result
        <br />
        at home.
      </>
    ),
    body: (
      <>
        I bought this skeptically — spice blends are
        <br />
        usually disappointing. This one immediately
        <br />
        changed how my food tastes. The layering is
        <br />
        clearly well-thought and it elevates everything I
        <br />
        add it to.
      </>
    ),
    author: "Omar S.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "GINGER FIRE SAUCE",
    headline: (
      <>
        This sauce has replaced everything else
        <br />
        in my fridge door.
      </>
    ),
    body: (
      <>
        I use it as a marinade, a cooking sauce, a
        <br />
        finishing sauce, and a dipping sauce. It works at
        <br />
        every stage of cooking and the ginger heat is
        <br />
        genuinely balanced rather than just hot.
      </>
    ),
    author: "Laura M.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "RECIPE GUIDE",
    headline: (
      <>
        The recipe guide made me cook things I
        <br />
        never would have tried.
      </>
    ),
    body: (
      <>
        I used the stir fry recipe shown on the page and
        <br />
        it was genuinely good. I then bought three more
        <br />
        products. The cooking guide approach is exactly
        <br />
        what I needed to feel confident with new
        <br />
        ingredients.
      </>
    ),
    author: "Keiko T.",
    verified: true,
  },
];

export default function RealKitchensReviews() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          U s e d &nbsp; i n &nbsp; R e a l &nbsp; K i t c h e n s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Used in Real Kitchens
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] w-full justify-items-center">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="w-full max-w-[384px] h-[288px] bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
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
