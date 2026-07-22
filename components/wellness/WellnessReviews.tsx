"use client";

import React from "react";

interface Review {
  stars: string;
  badge: string;
  headline: React.ReactNode;
  body: React.ReactNode;
  author: string;
  verified: string;
}

const reviews: Review[] = [
  {
    stars: "★★★★★",
    badge: "MORNING SHOT · 4 MONTHS",
    headline: (
      <>
        It replaced my morning coffee and I feel
        <br />
        better for it.
      </>
    ),
    body: (
      <>
        I was skeptical about any wellness product but
        <br />
        the shot just works. Four months in and I cannot
        <br />
        imagine starting my day without it. Simple and
        <br />
        honest ingredients that actually do something.
      </>
    ),
    author: "Rachel H.",
    verified: "✓ Verified · Daily User",
  },
  {
    stars: "★★★★★",
    badge: "BOTANICAL TEA · EVENING RITUAL",
    headline: (
      <>
        My new end-of-day ritual. Nothing else
        <br />
        comes close.
      </>
    ),
    body: (
      <>
        I drink it every evening after dinner. The ginger is
        <br />
        present but gentle — it supports digestion
        <br />
        without any sharpness. It has become the thing I
        <br />
        look forward to most at the end of the day.
      </>
    ),
    author: "Thomas B.",
    verified: "✓ Verified · Daily User",
  },
  {
    stars: "★★★★★",
    badge: "WELLNESS SET · 2 MONTHS",
    headline: (
      <>
        I bought the wellness set on a whim. I
        <br />
        am on my third reorder.
      </>
    ),
    body: (
      <>
        I was not a wellness person before this. The set
        <br />
        made it easy to try a few things without
        <br />
        overcomplicating it. Now I have a genuine daily
        <br />
        routine and genuinely feel the difference.
      </>
    ),
    author: "Leila M.",
    verified: "✓ Verified · Daily User",
  },
];

export default function WellnessReviews() {
  return (
    <section className="w-full py-16 md:py-[80px] px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
        <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-2">
          P a r t &nbsp; o f &nbsp; D a i l y &nbsp; R o u t i n e s
        </span>
        <h2 className="text-stone-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10 tracking-tight mb-3">
          Part of Daily Routines
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
                <span className="text-amber-700 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-wide">
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
              <span className="text-stone-500 text-xs font-normal font-['Poppins'] leading-4">
                {rev.verified}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
