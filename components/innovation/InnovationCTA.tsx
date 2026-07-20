import React from 'react';

export default function InnovationCTA() {
  return (
    <section className="relative w-full bg-orange-600 overflow-hidden" style={{ height: '288px' }}>
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_80%,_var(--tw-gradient-stops))] from-black/20 to-transparent to-60% pointer-events-none" />
      
      <div className="relative w-[1440px] max-w-full mx-auto h-full">
        <h2 className="absolute text-center text-white text-5xl font-semibold font-['Poppins'] leading-[50.18px] w-full" style={{ top: '63px' }}>
          Bring Your Ideas to Life
        </h2>
        
        <div className="w-auto h-12 absolute text-center justify-center text-white text-base font-normal font-['Poppins'] leading-7 whitespace-nowrap" style={{ left: '50%', transform: 'translateX(-50%)', top: '125.34px' }}>
          Whether you&apos;re a brand, a retailer, or a researcher — the Zoiko Foods Corp<br/>Innovation Platform is the infrastructure your next product needs.
        </div>

        {/* Buttons */}
        <div className="absolute flex items-center gap-[11px]" style={{ left: '50%', transform: 'translateX(-50%)', top: '208.09px' }}>
          <button className="bg-white rounded-[999px] flex items-center justify-center text-orange-600 text-base font-bold font-['Poppins'] hover:bg-stone-100 transition-colors" style={{ width: '208px', height: '56px' }}>
            Request a Demo →
          </button>
          <button className="rounded-[999px] outline outline-2 outline-offset-[-2px] outline-white/25 flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-white/10 transition-colors" style={{ width: '176px', height: '56px' }}>
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
