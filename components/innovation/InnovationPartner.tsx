import React from 'react';

const partners = [
  {
    icon: '🏢',
    title: 'CPG Brands',
    desc: <>Accelerate category entry or product line expansion using our<br/>formulation infrastructure and Ginger-Fusion™ system.</>,
    titleClassName: "w-auto h-5 absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6",
    descClassName: "w-[440px] h-auto absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    top: '80px'
  },
  {
    icon: '🏪',
    title: 'Retail Partners',
    desc: <>Private label development at innovation-grade quality — our platform<br/>scales to retail volume without sacrificing differentiation.</>,
    titleClassName: "w-auto h-5 absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6",
    descClassName: "w-[440px] h-auto absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    top: '195.46px'
  },
  {
    icon: '🔬',
    title: 'Research Institutions',
    desc: <>Joint research into functional ingredients, ginger bioactives, and clean-<br/>label food science with real commercial application.</>,
    titleClassName: "w-auto h-5 absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6",
    descClassName: "w-[440px] h-auto absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    top: '310.91px'
  }
];

export default function InnovationPartner() {
  return (
    <section className="relative w-full bg-orange-50 mx-auto" style={{ height: '494.36px' }}>
      
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        {/* Left Column Text */}
        <div className="absolute text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-[3.20px]" style={{ left: '180px', top: '81.55px' }}>
          P a r t n e r &nbsp; W i t h &nbsp; U s
        </div>
        
        <div className="absolute border-l-[3px] border-orange-600" style={{ width: '512px', height: '110px', left: '180px', top: '109.55px' }}>
          <div className="absolute text-stone-900 text-xl md:text-[22px] font-bold font-['Poppins'] leading-8" style={{ width: '100%', left: '21px', top: '0px' }}>
            &quot;Brands, retailers, and research partners<br/>can leverage Zoiko Foods Corp&apos;s platform<br/>to accelerate innovation.&quot;
          </div>
        </div>

        <div className="w-auto h-24 absolute justify-center text-stone-600 text-base font-normal font-['Poppins'] leading-7 whitespace-nowrap" style={{ left: '180px', top: '233.38px' }}>
          We open our platform to qualified partners — CPG brands looking<br/>to extend into new categories, retailers developing private label,<br/>and research institutions exploring functional food systems. Our<br/>infrastructure is your shortcut.
        </div>

        {/* Buttons */}
        <button className="absolute bg-orange-600 rounded-[999px] flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-orange-700 transition-colors" style={{ width: '224px', height: '48px', left: '180px', top: '363.82px' }}>
          Start a Collaboration →
        </button>
        <button className="absolute rounded-[999px] outline outline-2 outline-offset-[-2px] outline-orange-600 flex items-center justify-center text-orange-600 text-sm font-semibold font-['Poppins'] hover:bg-orange-100 transition-colors" style={{ width: '176px', height: '48px', left: '408.08px', top: '363.82px' }}>
          Request a Demo
        </button>

        {/* Right Column Cards */}
        {partners.map((partner, idx) => (
          <div key={idx} className="absolute bg-orange-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-100" style={{ width: '512px', height: '96px', left: '748px', top: partner.top }}>
            <div className="absolute text-stone-900 text-xl font-normal font-['Poppins'] leading-8" style={{ left: '15px', top: '11.09px' }}>
              {partner.icon}
            </div>
            <div className={partner.titleClassName} style={{ left: '40.8px', top: '18px' }}>
              {partner.title}
            </div>
            <div className={partner.descClassName} style={{ left: '40.8px', top: '43px' }}>
              {partner.desc}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
