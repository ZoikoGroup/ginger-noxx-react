import React from 'react';

export default function CareersCulture() {
  const cards = [
    {
      bg: 'bg-gradient-to-tr from-stone-950 to-stone-900',
      icon: '🔬',
      cat: 'Innovation Labs',
      title: 'Where Ideas Become Products',
      desc: <>Our R&amp;D team works in collaborative lab<br/>environments across Sacramento, London, and<br/>remote — prototyping, testing, and refining with<br/>real ingredients and real ambition.</>,
      left: '180px'
    },
    {
      bg: 'bg-gradient-to-tr from-orange-600 to-orange-400',
      icon: '🌍',
      cat: 'Global Teams',
      title: 'Cross-Cultural, Cross-Functional',
      desc: <>We operate across multiple markets and time<br/>zones. Your work connects directly to<br/>customers in New York, London, Accra,<br/>Singapore, and beyond.</>,
      left: '546px'
    },
    {
      bg: 'bg-gradient-to-tr from-green-800 to-green-900',
      icon: '🌱',
      cat: 'Purpose & Growth',
      title: 'Mentorship and Momentum',
      desc: <>From day one, you have a mentor, a clear<br/>growth path, and the freedom to take<br/>ownership. We promote from within and invest<br/>in the people who build with us.</>,
      left: '912px'
    }
  ];

  return (
    <section className="relative w-full bg-white mx-auto" style={{ height: '670.30px' }}>
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h2 className="absolute text-center justify-center w-full" style={{ top: '102px' }}>
          <span className="text-stone-900 text-4xl font-bold font-['Poppins'] leading-10">Culture, Growth,<br/></span>
          <span className="text-orange-600 text-4xl font-bold italic font-['Poppins'] leading-10">and Meaning</span>
        </h2>

        {cards.map((c, i) => (
          <div key={i} className="absolute bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden" style={{ width: '320px', height: '320px', left: c.left, top: '262.38px' }}>
            <div className={`absolute left-[1px] top-[1px] ${c.bg}`} style={{ width: '320px', height: '160px' }}>
              <div className="absolute text-center justify-center text-stone-900 text-6xl font-normal font-['Poppins'] leading-[102.40px] w-full" style={{ top: '34.79px' }}>
                {c.icon}
              </div>
            </div>
            
            <div className="absolute justify-center text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest" style={{ left: '21px', top: '179px' }}>{c.cat}</div>
            <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap" style={{ left: '21px', top: '200px' }}>{c.title}</div>
            <div className="absolute justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5" style={{ left: '21px', top: '228.04px' }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
