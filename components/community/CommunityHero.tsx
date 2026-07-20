import React from 'react';

export default function CommunityHero() {
  return (
    <section className="relative w-full h-[453px] bg-stone-950 overflow-hidden">
      {/* 1. Background Image (bottom-most layer) */}
      <div className="absolute w-[1440px] h-[960px] left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: '-335px' }}>
        <img 
          src="/collective/one.png" 
          alt="Ginger Background" 
          className="w-full h-full opacity-40 mix-blend-overlay"
        />
      </div>

      {/* 2. Gradients and Blurs (above image) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/20 to-orange-600/0 to-65% pointer-events-none" />
      <div className="absolute size-[600px] bg-orange-600/10 rounded-[300px] blur-2xl pointer-events-none" style={{ left: '940px', top: '-150px' }} />
      <div className="absolute size-96 bg-orange-600/5 rounded-[200px] blur-2xl pointer-events-none" style={{ left: '-80px', top: '133.31px' }} />
      <div className="absolute w-64 h-28 bg-orange-600/5 rounded-[125px] blur-2xl pointer-events-none" style={{ left: '216px', top: '158.55px' }} />

      <div className="relative z-10 w-[1440px] max-w-full mx-auto flex flex-col items-center text-center pt-[84px]">
        {/* Title */}
        <h1 className="text-7xl font-semibold font-['Poppins'] tracking-tight leading-[69.22px]">
          <span className="text-white">Join</span>
          <span className="text-orange-600"> the Collective</span>
        </h1>
        
        {/* Description */}
        <p className="w-full max-w-[953px] text-white/50 text-base font-normal font-['Poppins'] leading-7" style={{ marginTop: '18.5px' }}>
          Connect with a community of flavour explorers, wellness enthusiasts, and culinary innovators. Share your recipes, experiences, and insights while discovering new ways to enjoy GingerNoxx.
        </p>

        {/* Features Checklist - Centered naturally */}
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 text-left px-4" style={{ marginTop: '47px', columnGap: '101px', rowGap: '19px' }}>
          {/* Left Column */}
          <div className="flex flex-col" style={{ gap: '19px' }}>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center size-5 bg-orange-600/20 rounded-[10px] outline outline-1 outline-orange-600/40 shrink-0">
                <span className="text-white/60 text-[10px]">✓</span>
              </div>
              <span className="text-white/60 text-sm font-normal font-['Poppins'] leading-6">Exclusive early access to new flavours and launches</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center size-5 bg-orange-600/20 rounded-[10px] outline outline-1 outline-orange-600/40 shrink-0">
                <span className="text-white/60 text-[10px]">✓</span>
              </div>
              <span className="text-white/60 text-sm font-normal font-['Poppins'] leading-6">Members-only recipes, rituals, and culinary guides</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col" style={{ gap: '19px' }}>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center size-5 bg-orange-600/20 rounded-[10px] outline outline-1 outline-orange-600/40 shrink-0">
                <span className="text-white/60 text-[10px]">✓</span>
              </div>
              <span className="text-white/60 text-sm font-normal font-['Poppins'] leading-6">Community challenges, stories, and user spotlights</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center size-5 bg-orange-600/20 rounded-[10px] outline outline-1 outline-orange-600/40 shrink-0">
                <span className="text-white/60 text-[10px]">✓</span>
              </div>
              <span className="text-white/60 text-sm font-normal font-['Poppins'] leading-6">Subscriber discounts and first-look bundle drops</span>
            </div>
          </div>
        </div>

        {/* Social Proof - Centered naturally */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 space-x-3.5" style={{ marginTop: '44px' }}>
          <div className="flex -space-x-1.5">
            {['AM', 'JK', 'PR', 'LS'].map((initials, i) => (
              <div key={i} className="flex items-center justify-center size-7 bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl outline outline-2 outline-offset-[-2px] outline-stone-950/60 text-white text-[10px] font-bold z-10 relative">
                {initials}
              </div>
            ))}
            <div className="flex items-center justify-center size-7 bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl outline outline-2 outline-offset-[-2px] outline-stone-950/60 text-white text-[10px] font-bold z-10 relative">
              +
            </div>
          </div>

          <div className="text-sm font-normal font-['Poppins'] leading-5">
            <span className="text-orange-600 mr-1.5">★★★★★</span>
            <span className="text-white">12,000+ members worldwide growing daily</span>
          </div>
        </div>
      </div>
    </section>
  );
}
