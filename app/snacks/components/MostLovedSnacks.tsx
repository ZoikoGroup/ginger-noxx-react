import React from 'react';
import "./snacks.css";

const lovedSnacks = [
  {
    title: "Crystallised Ginger Chews",
    tag: "SNACKS",
    desc: "A classic. Real crystallised ginger with a sugar-dusted coating.",
    price: "£2.99"
  },
  {
    title: "Mango Ginger Strips",
    tag: "SNACKS",
    desc: "Tropical mango with a ginger warmth finish. Light and refreshing.",
    price: "£3.49"
  },
  {
    title: "Ginger Seed Mix",
    tag: "SNACKS",
    desc: "Pumpkin, sunflower, and sesame with ginger seasoning. Snack better.",
    price: "£3.99"
  },
  {
    title: "Ginger Protein Balls",
    tag: "SNACKS",
    desc: "High protein, real ginger, oat base. Post-workout or anytime snack.",
    price: "£4.49"
  }
];

export default function MostLovedSnacks() {
  return (
    <section className="snacks-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="snacks-tag">
          M O S T &nbsp; L O V E D
        </div>

        {/* Title */}
        <h2 className="snacks-heading">
          Most Loved Snacks
        </h2>

        {/* Line Divider */}
        <div className="snacks-heading-line" />

        {/* Subtitle */}
        <p className="snacks-subheading mb-8">
          Tried and loved by customers.
        </p>

        {/* 4 Cards Grid */}
        <div className="snacks-grid-4 justify-items-center">
          {lovedSnacks.map((s, idx) => (
            <div key={idx} className="snacks-card-white flex flex-col justify-between">
              
              {/* Ash Color Image Box */}
              <div className="snacks-card-img-ash" />

              {/* Card Body */}
              <div className="p-5 flex flex-col items-start text-left flex-1 justify-between w-full">
                <div className="w-full">
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest block mb-1">{s.tag}</span>
                  <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-1.5">{s.title}</h3>
                  <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mb-3 min-h-[40px]">{s.desc}</p>
                </div>

                {/* Price + Button (Pinned to Bottom) */}
                <div className="w-full flex flex-col gap-3 mt-auto pt-2">
                  <div className="flex items-center h-7">
                    <span className="text-[#ea580c] text-xl font-bold font-['Poppins']">{s.price}</span>
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
