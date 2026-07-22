"use client";

import React from "react";
import Link from "next/link";

export default function WellnessCTA() {
  return (
    <section className="w-full min-h-[464px] bg-stone-950 overflow-hidden relative flex flex-col items-center justify-center text-center text-white py-16 px-4">
      {/* Ambient Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(234,88,12,0.20)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Overline */}
        <span className="text-orange-600/70 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px] mb-3">
          S t a r t &nbsp; S i m p l y
        </span>

        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Poppins'] leading-[47.84px] tracking-tight mb-3">
          One Step Into Daily Ginger
          <br />
          Wellness
        </h2>

        {/* Subtitle */}
        <p className="text-white/40 text-base font-normal font-['Poppins'] leading-6 max-w-[652px] mx-auto mb-8">
          No protocols. No extremes. Just real ginger, every day, in the format that works for you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-9">
          <Link
            href="#easiest-way"
            className="w-36 h-12 bg-orange-600 hover:bg-orange-700 rounded-[999px] flex items-center justify-center text-white text-sm font-bold font-['Poppins'] transition-all duration-300 shadow-lg shadow-orange-600/20 cursor-pointer"
          >
            Start Simple
          </Link>
          <Link
            href="#daily-rhythm"
            className="w-44 h-12 rounded-[999px] outline outline-2 outline-offset-[-2px] outline-white/25 hover:outline-white flex items-center justify-center text-white text-sm font-bold font-['Poppins'] transition-all duration-300 cursor-pointer"
          >
            Build Your Rhythm
          </Link>
        </div>

        {/* Guarantee Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          <span className="px-[10px] py-1 bg-white/5 rounded-[999px] text-white/30 text-[10px] font-bold font-['Poppins'] leading-4 tracking-wide uppercase">
            HALAL
          </span>
          <span className="px-[10px] py-1 bg-white/5 rounded-[999px] text-white/30 text-[10px] font-bold font-['Poppins'] leading-4 tracking-wide uppercase">
            VEGAN
          </span>
          <span className="px-[10px] py-1 bg-white/5 rounded-[999px] text-white/30 text-[10px] font-bold font-['Poppins'] leading-4 tracking-wide uppercase">
            CLEAN LABEL
          </span>
          <span className="px-[10px] py-1 bg-white/5 rounded-[999px] text-white/30 text-[10px] font-bold font-['Poppins'] leading-4 tracking-wide uppercase">
            ISO 22000
          </span>
        </div>
      </div>
    </section>
  );
}
