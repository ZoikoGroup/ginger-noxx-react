import React from 'react';

const processSteps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Research & Insight',
    desc: <>Consumer data, trend<br/>intelligence, cultural mapping</>
  },
  {
    num: '02',
    icon: '💡',
    title: 'Ideation & Concept',
    desc: <>Structured creativity within the<br/>Ginger-Fusion™ framework</>
  },
  {
    num: '03',
    icon: '🧪',
    title: 'Formulation & Test',
    desc: <>Lab development, clinical<br/>review, iterative refinement</>
  },
  {
    num: '04',
    icon: '📦',
    title: 'Design & Package',
    desc: <>Premium, sustainable, globally<br/>scalable presentation</>
  },
  {
    num: '05',
    icon: '🌍',
    title: 'Launch & Scale',
    desc: <>Multi-market distribution, DTC<br/>+ retail + wholesale</>
  }
];

export default function InnovationProcess() {
  return (
    <section className="relative w-full bg-orange-50 flex flex-col items-center" style={{ height: '577px' }}>
      
      {/* Title */}
      <h2 className="text-center font-semibold font-['Poppins'] leading-10 absolute" style={{ top: '64px' }}>
        <span className="text-neutral-800 text-4xl">From Insight to </span>
        <span className="text-orange-600 text-4xl">Market Leadership</span>
      </h2>
      
      {/* Description */}
      <p className="text-center text-zinc-800 text-base font-normal font-['Poppins'] leading-7 absolute" style={{ top: '123.37px' }}>
        Every product begins with disciplined research and insight-driven<br/>ideation. We engineer solutions that define markets instead of following them.
      </p>

      {/* Steps */}
      <div className="absolute flex overflow-hidden rounded-3xl" style={{ top: '222px', gap: '8px' }}>
        {processSteps.map((step, idx) => (
          <div key={idx} className="bg-orange-600 relative overflow-hidden flex flex-col items-center" style={{ width: '208px', height: '224px' }}>
            <div className="text-white/20 text-4xl font-extrabold font-['Poppins'] leading-10 absolute" style={{ top: '36px' }}>
              {step.num}
            </div>
            <div className="text-stone-900 text-xl font-normal font-['Poppins'] leading-8 absolute" style={{ top: '86px' }}>
              {step.icon}
            </div>
            <div className="text-center text-white text-sm font-bold font-['Poppins'] leading-5 absolute w-full" style={{ top: '126.27px' }}>
              {step.title}
            </div>
            <div className="text-center text-white/50 text-xs font-normal font-['Poppins'] leading-4 absolute w-[176px]" style={{ top: '150.27px' }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-orange-600 rounded-[999px] text-white text-sm font-semibold font-['Poppins'] absolute flex items-center justify-center outline outline-2 outline-offset-[-2px] outline-white/25 hover:bg-orange-700 transition-colors" style={{ top: '488px', width: '224px', height: '48px' }}>
        Learn Our Full Process →
      </button>

    </section>
  );
}
