import React from 'react';

export default function CareersValues() {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      desc: <>Pushing boundaries with<br/>structured creativity and the<br/>Ginger-Fusion™ system — ideas<br/>that define markets, not follow<br/>them.</>,
      left: '180px'
    },
    {
      icon: '⚖️',
      title: 'Integrity',
      desc: <>Responsible sourcing,<br/>sustainability, and ethical<br/>decision-making in everything we<br/>do — no shortcuts, no<br/>compromises.</>,
      left: '454.50px'
    },
    {
      icon: '🤝',
      title: 'Inclusion',
      desc: <>Diverse teams, inclusive culture,<br/>and equitable opportunities for all<br/>— we build better products when<br/>every perspective is heard.</>,
      left: '729px'
    },
    {
      icon: '🌍',
      title: 'Impact',
      desc: <>Your work drives measurable<br/>change in food, wellness, and<br/>sustainability — here, purpose<br/>and performance are the same<br/>thing.</>,
      left: '1003.50px'
    }
  ];

  return (
    <section className="relative w-full bg-orange-50 mx-auto" style={{ height: '587.84px' }}>
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h2 className="absolute text-center justify-center w-full" style={{ top: '129px' }}>
          <span className="text-stone-900 text-4xl font-bold font-['Poppins'] leading-10">What We </span>
          <span className="text-orange-600 text-4xl font-bold font-['Poppins'] leading-10">Stand For</span>
        </h2>

        {values.map((v, i) => (
          <div key={i} className="absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden" style={{ width: '256px', height: '240px', left: v.left, top: '262.38px' }}>
            <div className="absolute text-center justify-center text-stone-900 text-3xl font-normal font-['Poppins'] leading-10 w-full" style={{ top: '32px' }}>{v.icon}</div>
            <div className="absolute text-center justify-center text-stone-900 text-base font-bold font-['Poppins'] leading-6 w-full" style={{ top: '86.06px' }}>{v.title}</div>
            <div className="absolute text-center justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5 w-full" style={{ top: '116.37px' }}>{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
