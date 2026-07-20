import React from 'react';

export default function CareersRoles() {
  const roles = [
    {
      icon: '🔬',
      title: 'Culinary Innovation & R&D',
      desc: <>Formulating the future of ginger — product<br/>scientists, food technologists, and culinary<br/>developers.</>,
      openRoles: '2 Open',
      left: '180px',
      top: '357.80px'
    },
    {
      icon: '📢',
      title: 'Marketing & Brand',
      desc: <>Brand strategy, digital marketing, content,<br/>partnerships, and go-to-market execution<br/>across global markets.</>,
      openRoles: '3 Open',
      left: '545.33px',
      top: '357.80px'
    },
    {
      icon: '🏭',
      title: 'Supply Chain & Operations',
      desc: <>Sourcing, procurement, logistics, and<br/>production planning across our multi-region<br/>manufacturing network.</>,
      openRoles: '1 Open',
      left: '910.66px',
      top: '357.80px'
    },
    {
      icon: '🌱',
      title: 'Sustainability & Ethics',
      desc: <>Driving our environmental and social impact<br/>agenda — from farmer partnerships to<br/>packaging innovation.</>,
      openRoles: null,
      left: '180px',
      top: '592.78px'
    },
    {
      icon: '💻',
      title: 'Technology & Digital',
      desc: <>Engineering, data, e-commerce, and the digital<br/>infrastructure that powers GingerNoxx globally.</>,
      openRoles: '2 Open',
      left: '545.33px',
      top: '592.78px'
    },
    {
      icon: '🤝',
      title: 'Commercial & Partnerships',
      desc: <>Sales, wholesale, retail partnerships, and<br/>distribution development across our<br/>expanding global markets.</>,
      openRoles: '1 Open',
      left: '910.66px',
      top: '592.78px'
    }
  ];

  return (
    <section className="relative w-full bg-white mx-auto" style={{ height: '891.77px' }}>
      <div className="relative w-[1440px] h-full mx-auto max-w-full">
        <h2 className="absolute text-center justify-center w-full" style={{ top: '102px' }}>
          <span className="text-stone-900 text-4xl font-bold font-['Poppins'] leading-10">Explore Roles Across<br/></span>
          <span className="text-orange-600 text-4xl font-bold font-['Poppins'] leading-10">Every Discipline</span>
        </h2>
        
        <p className="absolute text-center justify-center text-stone-600 text-base font-normal font-['Poppins'] leading-7 w-full" style={{ top: '231.37px' }}>
          We&apos;re building across multiple functions — from culinary innovation and<br/>product development to marketing, supply chain, sustainability, and<br/>global operations.
        </p>

        {roles.map((r, i) => (
          <div key={i} className="absolute bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 transition-shadow hover:shadow-lg cursor-pointer" style={{ width: '320px', height: '224px', left: r.left, top: r.top }}>
            <div className="absolute justify-center text-stone-900 text-2xl font-normal font-['Poppins'] leading-10" style={{ left: '23px', top: '27px' }}>{r.icon}</div>
            <div className="absolute justify-center text-stone-900 text-sm font-bold font-['Poppins'] leading-6" style={{ left: '23px', top: '74.39px' }}>{r.title}</div>
            <div className="absolute justify-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5" style={{ left: '23px', top: '103.18px' }}>{r.desc}</div>
            
            <div className="absolute justify-center text-orange-600 text-xs font-semibold font-['Poppins'] leading-4" style={{ left: '23px', top: r.openRoles ? '175.98px' : '175.59px' }}>View Roles</div>
            
            {r.openRoles && (
              <div className="absolute bg-orange-600 rounded-[999px] flex items-center justify-center" style={{ width: '44px', height: '20px', left: '86.48px', top: '175.59px' }}>
                <span className="text-white text-[9px] font-bold font-['Poppins'] leading-4">{r.openRoles}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
