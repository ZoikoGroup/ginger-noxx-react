import React from 'react';
import './blog.css';

export default function BlogHero() {
  return (
    <section className="blog-hero-section relative w-full h-[384px] bg-[#1C0A03] overflow-hidden">
      {/* Background Image */}
      <img
        src="/collective/one.png"
        alt="Hero background"
        className="absolute left-0 top-[-335px] w-[1440px] h-[960px] object-cover opacity-40 mix-blend-overlay pointer-events-none"
      />
      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_40%,rgba(217,83,30,0.20),transparent_65%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[72px] px-4">
        {/* Title */}
        <h1 className="blog-hero-title">
          <span className="text-white text-5xl">Insights &amp; </span>
          <span className="text-[#D9531E] text-5xl">Inspiration</span>
        </h1>

        {/* Description */}
        <p className="blog-hero-desc">
          Stories, wellness tips, recipes, and behind-the-scenes innovations from GingerNoxx. Discover new ways to enjoy ginger and stay inspired by our culinary experiments and functional formulations.
        </p>
      </div>
    </section>
  );
}
