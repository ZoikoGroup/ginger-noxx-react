import React from 'react';

export default function CareersHero() {
  return (
    <section className="relative w-full bg-stone-950 overflow-hidden" style={{ height: '648.03px' }}>
      
      <img className="absolute inset-0 w-full h-full object-cover object-bottom" src="/carrers/one.png" alt="Careers Hero" />
      <div className="absolute inset-0 bg-[radial-gradient(at_65%_40%,_var(--tw-gradient-stops))] from-orange-600/20 to-orange-600/0 pointer-events-none" />
      
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h1 className="absolute justify-center w-full text-center" style={{ top: '222px' }}>
          <span className="text-white text-6xl font-semibold font-['Poppins'] leading-[63.23px]">Build </span>
          <span className="text-orange-600 text-6xl font-semibold font-['Poppins'] leading-[63.23px]">With Us</span>
        </h1>
        
        <p className="absolute text-center justify-center text-white/80 text-base font-normal font-['Poppins'] leading-7 w-full" style={{ top: '305.44px' }}>
          At Zoiko Foods Corp, we are shaping the future of<br/>food innovation. Join a team where creativity, science, and global impact converge.
        </p>
        
        <div className="absolute flex gap-6 justify-center w-full" style={{ top: '408px' }}>
            <button className="bg-orange-600 rounded-[999px] flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-orange-700 transition-colors" style={{ width: '224px', height: '48px' }}>
              View Open Positions →
            </button>
            
            <button className="rounded-[999px] outline outline-2 outline-offset-[-2px] outline-white/25 flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-white/10 transition-colors" style={{ width: '224px', height: '48px' }}>
              Why Work With Us
            </button>
        </div>

        <div className="absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-600" style={{ width: '384px', height: '64px', left: '550px', top: '501px' }}>
            <div className="absolute justify-center text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6" style={{ width: '28px', height: '24px', left: '51px', top: '13px' }}>6+</div>
            <div className="absolute justify-center text-white/30 text-xs font-normal font-['Poppins'] leading-4 whitespace-nowrap" style={{ width: 'auto', height: '16px', left: '16px', top: '39px' }}>Global Markets</div>
            
            <div className="absolute justify-center text-orange-600 text-2xl font-extrabold font-['Poppins'] leading-6" style={{ width: '48px', height: '24px', left: '174px', top: '13px' }}>40+</div>
            <div className="absolute justify-center text-white/30 text-xs font-normal font-['Poppins'] leading-4 whitespace-nowrap" style={{ width: 'auto', height: '16px', left: '133px', top: '39px' }}>SKUs in Development</div>
            
            <div className="absolute justify-center text-orange-600 text-2xl font-bold font-['Poppins'] leading-6" style={{ width: '16px', height: '24px', left: '317px', top: '13px' }}>∞</div>
            <div className="absolute justify-center text-white/30 text-xs font-normal font-['Poppins'] leading-4 whitespace-nowrap" style={{ width: 'auto', height: '16px', left: '282px', top: '39px' }}>Room to Grow</div>
        </div>
      </div>
    </section>
  );
}
