import React from 'react';
import "./careers.css";

const roles = [
  {
    icon: '🔬',
    title: 'Culinary Innovation & R&D',
    desc: 'Formulating the future of ginger — product\nscientists, food technologists, and culinary\ndevelopers.',
    openRoles: '2 Open',
  },
  {
    icon: '📢',
    title: 'Marketing & Brand',
    desc: 'Brand strategy, digital marketing, content,\npartnerships, and go-to-market execution\nacross global markets.',
    openRoles: '3 Open',
  },
  {
    icon: '🏭',
    title: 'Supply Chain & Operations',
    desc: 'Sourcing, procurement, logistics, and\nproduction planning across our multi-region\nmanufacturing network.',
    openRoles: '1 Open',
  },
  {
    icon: '🌱',
    title: 'Sustainability & ESG',
    desc: 'Driving our environmental and social impact\nagenda — from farmer partnerships to\npackaging innovation.',
    openRoles: null,
  },
  {
    icon: '💻',
    title: 'Technology & Digital',
    desc: 'Engineering, data, e-commerce, and the digital\ninfrastructure that powers GingerNoxx globally.',
    openRoles: '2 Open',
  },
  {
    icon: '🤝',
    title: 'Commercial & Partnerships',
    desc: 'Sales, wholesale, retail partnerships, and\ndistribution development across our\nexpanding global markets.',
    openRoles: '1 Open',
  }
];

export default function CareersRoles() {
  return (
    <section className="careers-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="careers-heading">
          Explore Roles Across<br />
          <span className="careers-heading-orange">Every Discipline</span>
        </h2>

        {/* Subtitle */}
        <p className="careers-subheading mb-12">
          A cross-disciplinary ecosystem where culinary art and science meet brand strategy, engineering, and sustainable supply chain.
        </p>

        {/* 6 Cards Grid (3x2) */}
        <div className="careers-roles-grid justify-items-center">
          {roles.map((r, idx) => (
            <div key={idx} className="careers-role-card">
              <div className="text-2xl leading-none mb-3">{r.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 mb-1">{r.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 whitespace-pre-line mb-4">{r.desc}</p>
              
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-[#D4621A] text-xs font-semibold font-['Poppins']">View Roles</span>
                {r.openRoles && (
                  <span className="px-2 py-0.5 bg-[#D4621A] text-white text-[9px] font-bold rounded-full">
                    {r.openRoles}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
