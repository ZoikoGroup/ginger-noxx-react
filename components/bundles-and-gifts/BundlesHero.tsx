"use client";

import React from "react";
import Image from "next/image";

export default function BundlesHero() {
  return (
    <section className="w-full h-80 sm:h-96 md:h-[320px] relative bg-stone-950 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(234,88,12,0.20)_0%,transparent_65%)] pointer-events-none" />

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Image/fresh-ginger-with-leaves.png"
          alt="Ginger Background"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="w-96 h-96 absolute left-[1050px] top-[-80px] bg-orange-600/10 rounded-[225px] blur-2xl pointer-events-none z-0" />
      <div className="w-72 h-72 absolute left-[-40px] top-[70.05px] bg-orange-600/5 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Category Tag Badge */}
        <div className="w-60 h-8 bg-orange-600/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600/30 flex items-center justify-center mb-[18px]">
          <span className="text-orange-400 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[2.80px]">
            Shop · Bundles and Gifts
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight md:leading-[58.75px] tracking-tight mb-[14px] text-white">
          Bundles <span className="text-orange-600">and</span> Gifts
        </h1>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base font-normal font-['Poppins'] leading-7 max-w-xl mx-auto">
          Thoughtfully curated ginger experiences — ready to give or enjoy.
        </p>
      </div>
    </section>
  );
}
