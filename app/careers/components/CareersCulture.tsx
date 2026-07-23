import React from 'react';
import "./careers.css";

const cards = [
  {
    bg: 'bg-gradient-to-tr from-stone-950 to-stone-900',
    icon: '🔬',
    cat: 'Innovation Labs',
    title: 'Where Ideas Become Products',
    desc: 'Our R&D team works in collaborative lab\nenvironments across Sacramento, London, and\nremote — prototyping, testing, and refining with\nreal ingredients and real ambition.'
  },
  {
    bg: 'bg-gradient-to-tr from-orange-600 to-orange-400',
    icon: '🌍',
    cat: 'Global Teams',
    title: 'Cross-Cultural, Cross-Functional',
    desc: 'We operate across multiple markets and time\nzones. Your work connects directly to\ncustomers in New York, London, Accra,\nSingapore, and beyond.'
  },
  {
    bg: 'bg-gradient-to-tr from-green-800 to-green-900',
    icon: '🌱',
    cat: 'Purpose & Growth',
    title: 'Mentorship and Momentum',
    desc: 'From day one, you have a mentor, a clear\ngrowth path, and the freedom to take\nownership. We promote from within and invest\nin the people who build with us.'
  }
];

export default function CareersCulture() {
  return (
    <section className="careers-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="careers-heading mb-12">
          Culture, Growth,<br />
          <span className="text-[#D4621A] italic font-semibold">and Meaning</span>
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center">
          {cards.map((c, idx) => (
            <div key={idx} className="w-full max-w-[320px] h-[340px] bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden flex flex-col items-start text-left">
              {/* Header Gradient Box */}
              <div className={`w-full h-[140px] ${c.bg} flex items-center justify-center shrink-0`}>
                <span className="text-5xl">{c.icon}</span>
              </div>
              
              {/* Text Padding Wrapper */}
              <div className="p-5 flex flex-col text-left">
                <span className="text-[#D4621A] text-[10px] font-semibold font-['Poppins'] uppercase tracking-widest mb-1">{c.cat}</span>
                <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1">{c.title}</h3>
                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 whitespace-pre-line">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
