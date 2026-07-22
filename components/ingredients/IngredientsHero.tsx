"use client";

import React from "react";
import Image from "next/image";

export default function IngredientsHero() {
  return (
    <section className="w-full h-72 sm:h-80 md:h-[288px] relative bg-stone-950 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(234,88,12,0.20)_0%,transparent_65%)] pointer-events-none" />

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Image/fresh-ginger-with-leaves.png"
          alt="Ginger Ingredients Background"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="w-96 h-96 absolute left-[1050px] top-[-80px] bg-orange-600/10 rounded-[225px] blur-2xl pointer-events-none z-0" />
      <div className="w-72 h-72 absolute left-[-40px] top-[52.05px] bg-orange-600/5 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Category Pill Tag */}
        <div className="w-44 h-8 bg-orange-600/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600/30 flex items-center justify-center mb-4 backdrop-blur-sm shadow-sm">
          <span className="text-orange-400 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[2.80px]">
            Shop · Ingredients
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight md:leading-[58.75px] tracking-tight mb-3 text-white">
          Ginger <span className="text-orange-600">Ingredients</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base font-normal font-['Poppins'] leading-7 max-w-xl mx-auto">
          Bring bold flavour, warmth, and depth to every dish with real ginger.
        </p>
      </div>
    </section>
  );
}
