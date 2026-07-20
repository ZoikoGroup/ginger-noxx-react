import React from 'react';

const caseStudies = [
  {
    category: 'Beverages · Platform Launch',
    catClassName: "absolute text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest whitespace-nowrap",
    title: 'Sparkling Ginger Lime Infusion',
    titleClassName: "absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap",
    desc: <>The first Ginger-Fusion™ RTD beverage — proving<br/>that a formulation system, not a flavour trend,<br/>could define a new category.</>,
    descClassName: "absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    rating: '4.9★ · 2,140+ reviews',
    ratingClassName: "absolute text-orange-600 text-sm font-bold font-['Poppins'] leading-5 whitespace-nowrap",
    ratingTop: '286.08px'
  },
  {
    category: 'Condiments · Culinary Extension',
    catClassName: "absolute text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest whitespace-nowrap",
    title: 'Ginger Fire Sauce',
    titleClassName: "absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap",
    desc: <>Applying the platform&apos;s Ginger-Fusion™<br/>architecture to a culinary condiment —<br/>structured heat, layered depth, and clean-label<br/>credentials in one format.</>,
    descClassName: "absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    rating: '4.8★ · 2,184+ reviews',
    ratingClassName: "absolute text-orange-600 text-sm font-bold font-['Poppins'] leading-5 whitespace-nowrap",
    ratingTop: '305.42px'
  },
  {
    category: 'Spice Blends · Chef Channel',
    catClassName: "absolute text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase leading-4 tracking-widest whitespace-nowrap",
    title: 'Master Chef Blend',
    titleClassName: "absolute text-stone-900 text-sm font-bold font-['Poppins'] leading-6 whitespace-nowrap",
    desc: <>Taking professional formulation principles into a<br/>retail spice format — restaurant-grade depth<br/>made accessible for everyday home cooking.</>,
    descClassName: "absolute text-stone-600 text-xs font-normal font-['Poppins'] leading-5",
    rating: '4.9★ · 2,976+ reviews',
    ratingClassName: "absolute text-orange-600 text-sm font-bold font-['Poppins'] leading-5 whitespace-nowrap",
    ratingTop: '286.08px'
  }
];

export default function InnovationCaseStudies() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center" style={{ height: '738px' }}>
      
      {/* Title */}
      <h2 className="text-center font-semibold font-['Poppins'] leading-10 absolute" style={{ top: '62px' }}>
        <span className="text-stone-900 text-4xl">Products That<br/></span>
        <span className="text-orange-600 text-4xl">Define Their Category</span>
      </h2>
      
      {/* Description */}
      <p className="text-center text-stone-600 text-base font-normal font-['Poppins'] leading-7 absolute" style={{ top: '177.37px' }}>
        Three examples of how the Zoiko Foods Corp Innovation Platform turned<br/>a formulation principle into a commercially scalable product reality.
      </p>

      {/* Cards */}
      <div className="absolute flex" style={{ top: '253.65px', gap: '46px' }}>
        {caseStudies.map((item, idx) => (
          <div key={idx} className="size-80 bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden relative">
            <div className="w-80 h-36 bg-zinc-400 absolute" style={{ left: '1px', top: '1px' }} />
            <div className={item.catClassName} style={{ left: '21px', top: '169px' }}>
              {item.category}
            </div>
            <div className={item.titleClassName} style={{ left: '21px', top: '190px' }}>
              {item.title}
            </div>
            <div className={item.descClassName} style={{ left: '21px', top: '218.05px' }}>
              {item.desc}
            </div>
            <div className={item.ratingClassName} style={{ left: '21px', top: item.ratingTop }}>
              {item.rating}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="rounded-[999px] outline outline-2 outline-offset-[-2px] outline-orange-600 flex items-center justify-center text-orange-600 text-sm font-semibold font-['Poppins'] absolute hover:bg-orange-50 transition-colors" style={{ top: '627px', width: '288px', height: '48px' }}>
        View All Case Studies
      </button>

    </section>
  );
}
