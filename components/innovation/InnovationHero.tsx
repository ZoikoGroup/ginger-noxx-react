import React from 'react';

export default function InnovationHero() {
  return (
    <section className="relative w-full h-[642px] bg-stone-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-[1440px] h-[960px] left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: '-318px' }}>
        <img 
          src="/collective/one.png" 
          alt="Innovation Background" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Gradients and Blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/20 to-orange-600/0 to-65% pointer-events-none" />
      <div className="absolute size-96 bg-orange-600/10 rounded-[225px] blur-2xl pointer-events-none" style={{ left: '1050px', top: '-80px' }} />
      <div className="absolute size-72 bg-orange-600/5 rounded-full blur-2xl pointer-events-none" style={{ left: '-40px', top: '381.73px' }} />

      <div className="relative z-10 w-[1440px] max-w-full mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-center text-6xl font-semibold font-['Poppins'] leading-[67.20px]" style={{ marginTop: '117px', width: '654.60px' }}>
          <span className="text-white">Transforming Ideas<br/>into </span>
          <span className="text-orange-600">Market Leaders</span>
        </h1>
        
        {/* Description */}
        <p className="text-center text-white/50 text-base font-normal font-['Poppins'] leading-7" style={{ marginTop: '27.6px', width: '847px' }}>
          Zoiko Foods Corp&apos;s Innovation Platform accelerates innovation by combining proprietary research, global consumer insights, and scalable product development into category-defining outcomes.
        </p>

        {/* Buttons */}
        <div className="flex items-center" style={{ marginTop: '61px', gap: '30px' }}>
          <button className="w-56 h-12 bg-orange-600 rounded-[999px] flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-orange-700 transition-colors">
            Explore the Platform →
          </button>
          <button className="w-56 h-12 rounded-[999px] outline outline-2 outline-offset-[-2px] outline-white/25 flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-white/10 transition-colors">
            Partner With Us
          </button>
        </div>

        {/* Stats Box */}
        <div className="bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/5 flex items-center overflow-hidden" style={{ width: '680px', height: '96px', marginTop: '36px' }}>
          <div className="flex-1 flex flex-col items-center justify-center h-20 border-r border-white/5">
            <span className="text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6">40+</span>
            <span className="text-white text-[10px] font-normal font-['Poppins'] leading-4 mt-[3px]">SKUs Developed</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center h-20 border-r border-white/5">
            <span className="text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6">6</span>
            <span className="text-white text-[10px] font-normal font-['Poppins'] leading-4 mt-[3px]">Global Markets</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center h-20 border-r border-white/5">
            <span className="text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6">5</span>
            <span className="text-white text-[10px] font-normal font-['Poppins'] leading-4 mt-[3px]">Product Categories</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center h-20">
            <span className="text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6">1</span>
            <span className="text-white text-[10px] font-normal font-['Poppins'] leading-4 mt-[3px]">Proprietary System</span>
          </div>
        </div>
      </div>
    </section>
  );
}
