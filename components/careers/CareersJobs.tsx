import React from 'react';

export default function CareersJobs() {
  const jobs = [
    {
      dept: 'Marketing & Brand',
      title: 'Senior Brand Manager — GingerNoxx™',
      location: '📍 Remote / UK',
      type: '⏰ Full-Time',
      extra: '💰 Competitive',
      isNew: true,
      top: '262.38px'
    },
    {
      dept: 'Culinary Innovation & R&D',
      title: 'Food Scientist — Beverage Formulation',
      location: '📍 Sacramento, CA',
      type: '⏰ Full-Time',
      extra: '🔬 R&D',
      isNew: true,
      top: '377.52px'
    },
    {
      dept: 'Technology & Digital',
      title: 'E-Commerce Manager — International Markets',
      location: '📍 London, UK',
      type: '⏰ Full-Time',
      extra: '💻 Digital',
      isNew: false,
      top: '492.66px'
    },
    {
      dept: 'Marketing & Brand',
      title: 'Content & Social Media Lead',
      location: '📍 Remote',
      type: '⏰ Full-Time',
      extra: '✍️ Creative',
      isNew: false,
      top: '607.80px'
    }
  ];

  return (
    <section className="relative w-full bg-orange-50 mx-auto" style={{ height: '869.94px' }}>
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h2 className="absolute text-center justify-center w-full" style={{ top: '102px' }}>
          <span className="text-stone-900 text-4xl font-bold font-['Poppins'] leading-10">Current<br/></span>
          <span className="text-orange-600 text-4xl font-bold font-['Poppins'] leading-10">Opportunities</span>
        </h2>

        {jobs.map((job, i) => (
          <div key={i} className="absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-100 hover:outline-orange-300 transition-all cursor-pointer group" style={{ width: '1080px', height: '112px', left: '180px', top: job.top }}>
            <div className="absolute justify-center text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-wider" style={{ left: '25px', top: '21px' }}>{job.dept}</div>
            <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6" style={{ left: '25px', top: '40px' }}>{job.title}</div>
            
            <div className="absolute flex gap-4" style={{ left: '25px', top: '66.55px' }}>
              <div className="justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-4">{job.location}</div>
              <div className="justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-4">{job.type}</div>
              <div className="justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-4">{job.extra}</div>
            </div>

            {job.isNew && (
              <div className="absolute bg-orange-600 rounded-[999px] flex items-center justify-center" style={{ width: '36px', height: '20px', left: '1018.89px', top: '29.78px' }}>
                <span className="text-white text-[9px] font-bold font-['Poppins'] leading-4">New</span>
              </div>
            )}
            
            <div className="absolute justify-center text-orange-600 text-xs font-bold font-['Poppins'] leading-5 group-hover:translate-x-1 transition-transform" style={{ left: '1004.19px', top: job.isNew ? '57.17px' : '43.97px' }}>
              Apply →
            </div>
          </div>
        ))}

        <button className="absolute rounded-[999px] outline outline-2 outline-offset-[-2px] outline-orange-600 flex items-center justify-center text-orange-600 text-sm font-semibold font-['Poppins'] hover:bg-orange-100 transition-colors" style={{ width: '240px', height: '48px', left: '603.03px', top: '740.94px' }}>
          View All Open Positions →
        </button>
      </div>
    </section>
  );
}
