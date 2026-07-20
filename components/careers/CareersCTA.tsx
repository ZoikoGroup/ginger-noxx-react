import React from 'react';

export default function CareersCTA() {
  return (
    <section className="relative w-full bg-orange-600 overflow-hidden mx-auto" style={{ height: '384px' }}>
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_80%,_var(--tw-gradient-stops))] from-black/20 to-black/0 pointer-events-none" />
      
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h2 className="absolute text-center justify-center text-white text-5xl font-bold font-['Poppins'] leading-[50.18px] w-full" style={{ top: '109px' }}>
          Join a Team That Values<br/>Purpose and Precision
        </h2>
        
        <p className="absolute text-center justify-center text-white/60 text-base font-normal font-['Poppins'] leading-7 w-full" style={{ top: '230.34px' }}>
          Build products that define categories. Work with people who care about what they<br/>create. Grow in an environment that rewards ambition and integrity.
        </p>
        
        <div className="absolute flex gap-[18px] justify-center w-full" style={{ top: '313.09px' }}>
          <button className="bg-white rounded-[999px] flex items-center justify-center text-orange-600 text-sm font-bold font-['Poppins'] hover:bg-orange-50 transition-colors" style={{ width: '144px', height: '48px' }}>
            Apply Now →
          </button>
          
          <button className="rounded-[999px] outline outline-2 outline-offset-[-2px] outline-white/25 flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-white/10 transition-colors" style={{ width: '224px', height: '48px' }}>
            Learn More About Zoiko
          </button>
        </div>
      </div>
    </section>
  );
}
