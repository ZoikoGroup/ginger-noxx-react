import React from 'react';

export default function StockistsHero() {
  return (
    <section className="relative w-full bg-stone-950 overflow-hidden" style={{ height: '384px' }}>
      <img className="absolute inset-0 w-full h-full object-cover object-bottom" src="/stockist/one.png" alt="Stockists Hero" />
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_60%,_var(--tw-gradient-stops))] from-orange-600/10 via-orange-600/0 to-transparent pointer-events-none" />
      
      <div className="relative w-[1440px] h-full mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-center" style={{ marginTop: '48px' }}>
          <span className="text-white text-5xl font-semibold font-['Poppins'] leading-[51.84px]">Find GingerNoxx </span>
          <span className="text-orange-600 text-5xl font-semibold font-['Poppins'] leading-[51.84px]">Near You</span>
        </h1>
        <p className="text-center text-white/50 text-base font-normal font-['Poppins'] leading-7 mt-4" style={{ width: '888px', maxWidth: '100%' }}>
          Locate authorised retailers, cafes, and wellness shops carrying GingerNoxx™ products. Our stockists are carefully selected to ensure quality, freshness, and an authentic Ginger-Fusion experience.
        </p>
      </div>
    </section>
  );
}
