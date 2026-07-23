import React from 'react';
import './innovation.css';

const caseStudies = [
  {
    tag: 'BEVERAGES · PLATFORM LAUNCH',
    title: 'Sparkling Ginger Lime Infusion',
    desc: 'The first Ginger-Fusion™ RTD beverage — proving that a formulation system, not a flavour trend, could define a new category.',
    rating: '4.9★ · 2,140+ reviews',
    img: '/collective/ginger-beverage.png'
  },
  {
    tag: 'CONDIMENTS · CULINARY EXTENSION',
    title: 'Ginger Fire Sauce',
    desc: 'Applying the platform\'s Ginger-Fusion™ architecture to a culinary condiment — structured heat, layered depth, and clean-label credentials in one format.',
    rating: '4.8★ · 2,184+ reviews',
    img: '/collective/fire-sauce.png'
  },
  {
    tag: 'SPICE BLENDS · CHEF CHANNEL',
    title: 'Master Chef Blend',
    desc: 'Taking professional formulation principles into a retail spice format — restaurant-grade depth made accessible for everyday home cooking.',
    rating: '4.9★ · 2,976+ reviews',
    img: '/collective/master-chef.png'
  }
];

export default function InnovationCaseStudies() {
  return (
    <section className="innov-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="innov-heading">
          Products That<br />
          <span className="innov-heading-orange">Define Their Category</span>
        </h2>

        {/* Subtitle */}
        <p className="innov-subheading">
          Three examples of how the Zoiko Foods Corp Innovation Platform turned a formulation principle into a commercially scalable product reality.
        </p>

        {/* 3 Cards Grid */}
        <div className="innov-case-grid">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="innov-case-card group">
              {/* Header Image Box */}
              <div className="innov-case-img-box">
                <img
                  src={cs.img}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Padding Wrapper */}
              <div className="p-5 flex flex-col justify-between flex-1 w-full">
                <div>
                  <div className="innov-case-tag">{cs.tag}</div>
                  <h3 className="innov-case-title">{cs.title}</h3>
                  <p className="innov-case-desc">{cs.desc}</p>
                </div>
                <div className="innov-case-rating">{cs.rating}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-12 innov-btn-outline !text-[#D4621A] !border-[#D4621A] hover:!bg-[#D4621A] hover:!text-white">
          View All Case Studies
        </button>
      </div>
    </section>
  );
}
