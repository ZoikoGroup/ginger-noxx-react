import React from 'react';
import "./careers.css";

const benefits = [
  {
    icon: '🎓',
    title: 'Continuous Learning',
    desc: 'Mentorship programmes, cross-functional exposure, and learning\nbudgets for every team member.'
  },
  {
    icon: '🌐',
    title: 'Global Perspective',
    desc: 'Work across markets and disciplines with a team that spans\ncontinents and cultures.'
  },
  {
    icon: '⚡',
    title: 'Move Fast, Build Right',
    desc: 'Agile teams with the infrastructure of Zoiko Group behind them —\nspeed without sacrifice.'
  }
];

export default function CareersIntro() {
  return (
    <section className="careers-section-cream flex justify-center px-6">
      <div className="careers-intro-grid">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          {/* Quote Block */}
          <div className="careers-intro-quote-box">
            <h2 className="text-stone-900 text-2xl font-bold font-['Poppins'] leading-snug">
              &quot;We offer a collaborative environment<br />where talent meets purpose.&quot;
            </h2>
          </div>
          
          <p className="text-stone-600 text-base font-normal font-['Poppins'] leading-relaxed max-w-[500px] mb-8">
            From product development to operations, marketing, and research — your work at Zoiko Foods Corp contributes to a global mission rooted in flavour, function, and responsibility. We don&apos;t hire for roles, we hire for impact.
          </p>

          <button className="careers-btn-primary">
            Explore Open Roles →
          </button>
        </div>

        {/* Right Column Cards */}
        <div className="flex flex-col gap-4 w-full">
          {benefits.map((b, idx) => (
            <div key={idx} className="careers-benefit-card">
              <div className="text-2xl leading-none shrink-0 pt-0.5">{b.icon}</div>
              <div className="flex flex-col text-left">
                <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1">{b.title}</h3>
                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 whitespace-pre-line">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
