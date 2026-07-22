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
    badge: "ENERGY CHEWS",
    headline: "My desk drawer essential.",
    body: (
      <>
        I keep a pack on my desk at all times. The ginger
        <br />
        gives me a genuine lift without a sugar crash.
        <br />
        Cleaner and more effective than anything
        <br />
        similar I have tried.
      </>
    ),
    author: "Maya L.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "DARK CHOC GINGER BARK",
    headline: "I order this every single month.",
    body: (
      <>
        This bark is genuinely exceptional. The ginger
        <br />
        intensity is exactly right against the dark
        <br />
        chocolate. It has replaced every other after-
        <br />
        dinner treat in our house.
      </>
    ),
    author: "James T.",
    verified: true,
  },
  {
    stars: "★★★★★",
    badge: "SNACK BOX",
    headline: (
      <>
        Built a box on a whim. Reordering
        <br />
        forever.
      </>
    ),
    body: (
      <>
        I used the snack box builder just to try a few
        <br />
        things. Three items later and now I have a
        <br />
        monthly standing order. Every single one was
        <br />
        worth buying.
      </>
    ),
    author: "Aisha K.",
    verified: true,
  },
];

export default function SnacksReviews() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          C u s t o m e r &nbsp; F a v o u r i t e s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Customer Favourites
        </h2>
        <div className="w-11 h-0.5 bg-orange-600 rounded-full" />
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

            {/* Author Footer Row */}
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
