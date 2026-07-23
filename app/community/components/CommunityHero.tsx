import React from 'react';
import './community.css';

export default function CommunityHero() {
  return (
    <section className="community-hero-section relative w-full h-[453px] bg-[#1C0A03] overflow-hidden">
      {/* Background Image */}
      <img
        src="/collective/one.png"
        alt="Ginger Background"
        className="absolute left-0 top-[-335px] w-full min-w-[1440px] h-[960px] object-cover opacity-40 mix-blend-overlay pointer-events-none"
      />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(217,83,30,0.20),transparent_65%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center text-center pt-[64px] px-4">

        {/* Title */}
        <h1 className="community-hero-title">
          <span className="text-white">Join</span>
          <span className="text-[#D9531E]"> the Collective</span>
        </h1>

        {/* Description */}
        <p className="community-hero-desc">
          Connect with a community of flavour explorers, wellness enthusiasts, and culinary innovators. Share your recipes, experiences, and insights while discovering new ways to enjoy GingerNoxx.
        </p>

        {/* 2×2 Checklist */}
        <div className="community-checklist">
          {[
            "Exclusive early access to new flavours and launches",
            "Community challenges, stories, and user spotlights",
            "Members-only recipes, rituals, and culinary guides",
            "Subscriber discounts and first-look bundle drops",
          ].map((text, i) => (
            <div key={i} className="community-check-item">
              <div className="community-check-icon">
                ✓
              </div>
              <span className="community-check-text">{text}</span>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="community-social-proof">
          <div className="community-avatar-group">
            {['AM', 'JK', 'PR', 'LS', '+'].map((label, i) => (
              <div key={i} className="community-avatar-item">
                {label}
              </div>
            ))}
          </div>
          <div className="community-proof-text">
            <span className="text-[#D9531E] mr-1.5 font-bold">★★★★★</span>
            <span className="text-white">12,000+ members worldwide growing daily</span>
          </div>
        </div>

      </div>
    </section>
  );
}
