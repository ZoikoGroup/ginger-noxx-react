import React from 'react';
import "./beverages.css";

const beveragesRange = [
  {
    title: "Ginger Lemon Electrolyte",
    tag: "HYDRATION",
    desc: "Post-workout or midday reset — clean hydration with ginger depth.",
    price: "£20.99"
  },
  {
    title: "Ginger Hibiscus Cooler",
    tag: "BOTANICAL",
    desc: "Floral and refreshing with gentle ginger warmth.",
    price: "£19.99"
  },
  {
    title: "Ginger Mint Revival",
    tag: "CALM",
    desc: "Cooling mint meets warming ginger. A genuinely refreshing pairing.",
    price: "£18.99"
  },
  {
    title: "Ginger Orange Burst",
    tag: "CITRUS",
    desc: "Bright citrus energy with a warming ginger kick.",
    price: "£19.99"
  }
];

export default function AllGingerBeverages() {
  return (
    <section className="beverages-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="beverages-tag">
          F U L L &nbsp; R A N G E
        </div>

        {/* Title */}
        <h2 className="beverages-heading">
          All Ginger Beverages
        </h2>

        {/* Line Divider */}
        <div className="beverages-heading-line mb-8" />

        {/* 4 Cards Grid */}
        <div className="beverages-grid-4 justify-items-center">
          {beveragesRange.map((b, idx) => (
            <div key={idx} className="beverages-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="beverages-card-img-ash" />

              {/* Card Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest block mb-1">{b.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-snug mb-1.5">{b.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{b.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{b.price}</span>
                  </div>

                  <button className="w-full h-10 bg-[#ea580c] hover:bg-[#c24413] text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
