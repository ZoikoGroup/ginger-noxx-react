import React from 'react';

export default function CareersIntro() {
  return (
    <section className="relative w-full bg-white mx-auto" style={{ height: '498.95px' }}>
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        {/* Left Column */}
        <div className="absolute border-l-[3px] border-orange-600" style={{ width: '508px', height: '100px', left: '180px', top: '125.25px' }}>
          <div className="absolute justify-center text-stone-900 text-xl md:text-2xl font-bold font-['Poppins'] leading-9" style={{ width: '100%', left: '23px', top: '1px' }}>
            &quot;We offer a collaborative environment<br/>where talent meets purpose.&quot;
          </div>
        </div>
        
        <div className="absolute justify-center text-stone-600 text-base font-normal font-['Poppins'] leading-7 w-auto whitespace-nowrap" style={{ left: '180px', top: '224.25px' }}>
          From product development to operations, marketing, and research<br/>— your work at Zoiko Foods Corp contributes to a global mission<br/>rooted in flavour, function, and responsibility. We don&apos;t hire for<br/>roles, we hire for impact.
        </div>
        
        <button className="absolute bg-orange-600 rounded-[999px] flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] hover:bg-orange-700 transition-colors" style={{ width: '208px', height: '48px', left: '180px', top: '354.69px' }}>
          Explore Open Roles →
        </button>

        {/* Right Column Cards */}
        <div className="absolute bg-orange-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-100" style={{ width: '508px', height: '112px', left: '752px', top: '80px' }}>
          <div className="absolute justify-center text-stone-900 text-xl font-normal font-['Poppins'] leading-8" style={{ left: '23px', top: '21px' }}>🎓</div>
          <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap" style={{ left: '50px', top: '20px' }}>Continuous Learning</div>
          <div className="absolute justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5 w-auto" style={{ left: '50px', top: '46.05px' }}>
            Mentorship programmes, cross-functional exposure, and learning<br/>budgets for every team member.
          </div>
        </div>
        
        <div className="absolute bg-orange-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-100" style={{ width: '508px', height: '112px', left: '752px', top: '196.99px' }}>
          <div className="absolute justify-center text-stone-900 text-xl font-normal font-['Poppins'] leading-8" style={{ left: '23px', top: '21px' }}>🌐</div>
          <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap" style={{ left: '50px', top: '20px' }}>Global Perspective</div>
          <div className="absolute justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5 w-auto" style={{ left: '50px', top: '46.04px' }}>
            Work across markets and disciplines with a team that spans<br/>continents and cultures.
          </div>
        </div>
        
        <div className="absolute bg-orange-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-100" style={{ width: '508px', height: '112px', left: '752px', top: '313.97px' }}>
          <div className="absolute justify-center text-stone-900 text-xl font-normal font-['Poppins'] leading-8" style={{ left: '23px', top: '21px' }}>⚡</div>
          <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap" style={{ left: '50px', top: '20px' }}>Move Fast, Build Right</div>
          <div className="absolute justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5 w-auto" style={{ left: '50px', top: '46.05px' }}>
            Agile teams with the infrastructure of Zoiko Group behind them —<br/>speed without sacrifice.
          </div>
        </div>
      </div>
    </section>
  );
}
