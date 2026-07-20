import React from 'react';

export default function CommunityCTA() {
  return (
    <section className="relative w-full bg-orange-600 overflow-hidden" style={{ height: '384px' }}>
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_80%,_var(--tw-gradient-stops))] from-black/20 to-transparent to-60% pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-center text-white text-5xl font-semibold font-['Poppins']" style={{ marginTop: '39px', width: '514.84px', lineHeight: '50.18px' }}>
          Be Part of a Movement<br/>Built Around Ginger
        </h2>
        <p className="text-center text-white/60 text-base font-normal font-['Poppins']" style={{ marginTop: '21px', width: '615.06px', lineHeight: '28px' }}>
          Free to join. Instantly rewarding. A community of people who believe good taste<br/>and real ingredients are worth celebrating.
        </p>
        <button className="bg-white rounded-[999px] flex items-center justify-center text-orange-600 text-sm font-bold font-['Poppins'] hover:bg-stone-100 transition-colors" style={{ marginTop: '23px', width: '240px', height: '48px' }}>
          Join the Collective Now
        </button>
      </div>
    </section>
  );
}
