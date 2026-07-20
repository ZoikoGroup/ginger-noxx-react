import React from 'react';

export default function StockistsLocator() {
  const stockists = [
    {
      name: 'Natural Kitchen — Shoreditch',
      distance: '0.4 mi',
      address: '14 Hoxton Square, London E1 6QT',
      stockStatus: 'In Stock',
      stockColor: 'text-green-800',
      stockBg: 'bg-green-50',
      type: 'Premium Retailer · Full Range',
      pills: ['Beverages', 'Condiments', 'Spices', 'Snacks'],
      hasCall: true
    },
    {
      name: 'Planet Organic — Westbourne Grove',
      distance: '1.2 mi',
      address: '42 Westbourne Grove, London W2 5SH',
      stockStatus: 'Limited Stock',
      stockColor: 'text-yellow-700',
      stockBg: 'bg-orange-600/10',
      type: 'Organic Specialty',
      pills: ['Beverages', 'Wellness Shots'],
      hasCall: false
    },
    {
      name: 'Whole Foods Market — Kensington',
      distance: '1.8 mi',
      address: '63–97 Kensington High St, W8 5SE',
      stockStatus: 'In Stock',
      stockColor: 'text-green-800',
      stockBg: 'bg-green-50',
      type: 'National Chain · Authorised',
      pills: ['Beverages', 'Condiments'],
      hasCall: true
    },
    {
      name: 'Sourced Market — King\'s Cross',
      distance: '2.1 mi',
      address: 'St Pancras International, London N1C 4QP',
      stockStatus: 'In Stock',
      stockColor: 'text-green-800',
      stockBg: 'bg-green-50',
      type: 'Food Hall · Travel Retail',
      pills: ['Beverages', 'Café Menu'],
      hasCall: false
    },
    {
      name: 'Waitrose — Canary Wharf',
      distance: '3.4 mi',
      address: 'Canada Place, London E14 5EW',
      stockStatus: 'Check Availability',
      stockColor: 'text-gray-600',
      stockBg: 'bg-gray-100',
      type: 'Supermarket · Selected SKUs',
      pills: ['Beverages'],
      hasCall: true
    }
  ];

  return (
    <section className="relative w-full bg-orange-50 flex flex-col items-center pb-[120px]">
      
      {/* Master 1160px Centered Wrapper */}
      <div className="w-[1160px] max-w-full flex flex-col pt-[60px]">
        
        {/* Search Bar Row (Left edge aligned at 40px) */}
        <div className="w-full flex items-center pl-10">
          <div className="flex items-center shrink-0">
            <div className="w-[664px] h-12 bg-white rounded-l-full border-y border-l border-orange-600 overflow-hidden flex items-center px-5 shrink-0">
              <span className="text-neutral-500 text-sm font-normal font-['Poppins']">Enter city, postcode, or country…</span>
            </div>
            <button className="w-32 h-12 bg-orange-600 rounded-r-full text-white text-sm font-semibold font-['Poppins'] shrink-0">Search Now</button>
          </div>
          <button className="w-64 h-12 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-600 text-orange-600 text-base font-semibold font-['Poppins'] ml-8 shrink-0">Near Me</button>
        </div>

        {/* Filter Pills Row (Left edge aligned at 40px) */}
        <div className="w-full flex gap-4 items-center pl-10 mt-7 mb-5 overflow-visible">
          <span className="text-stone-600 text-base font-medium font-['Poppins'] leading-4 shrink-0">Filter by:</span>
          <div className="w-20 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">All</div>
          <div className="w-40 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center text-stone-600 text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">Beverages</div>
          <div className="w-44 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center text-stone-600 text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">Condiments</div>
          <div className="w-44 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center text-stone-600 text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">Full Range</div>
          <div className="w-36 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center text-stone-600 text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">Wellness</div>
          <div className="w-32 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center text-stone-600 text-sm font-semibold font-['Poppins'] cursor-pointer shrink-0">Cafes</div>
        </div>

        {/* Map and List Section with 1160px Top Border (Map at 40px offset, List at 740px offset) */}
        <div className="w-full border-t border-orange-600 flex pl-10 pt-10 gap-6">
          <div className="w-[676px] h-[818px] bg-neutral-400 rounded-2xl border border-orange-100 shrink-0" />

          <div className="w-[384px] h-[819px] bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden flex flex-col shrink-0">
            <div className="w-full h-12 border-b border-orange-100 flex items-center justify-between pl-4 pr-5 shrink-0">
              <span className="text-stone-600 text-xs font-semibold font-['Poppins'] leading-5">5 stockists nearby</span>
              <span className="text-orange-600 text-xs font-semibold font-['Poppins'] leading-5 cursor-pointer">Sort: Distance ▾</span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {stockists.map((s, i) => (
                <div key={i} className={`relative w-full h-40 border-b border-orange-100 flex flex-col pt-4 pl-4 pr-5 border-l-2 ${i === 0 ? 'bg-orange-600/5 border-orange-600' : 'border-transparent'}`}>
                  <div className="flex justify-between items-start">
                    <div className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6 truncate">{s.name}</div>
                    <div className="flex items-center gap-4 shrink-0 mt-0.5">
                      {s.hasCall && (
                        <div className="text-stone-600 text-xs font-bold font-['Arial'] cursor-pointer">📞 Call</div>
                      )}
                      <div className="text-orange-600 text-xs font-semibold font-['Poppins'] leading-4">{s.distance}</div>
                    </div>
                  </div>
                  
                  <div className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5 mt-1">{s.address}</div>
                  
                  <div className="flex items-center gap-3 mt-1">
                    <div className={`px-2.5 h-5 rounded-full ${s.stockBg} flex items-center justify-center`}>
                      <span className={`${s.stockColor} text-[10px] font-bold font-['Poppins'] uppercase leading-4 tracking-wide`}>{s.stockStatus}</span>
                    </div>
                    <div className="text-stone-500 text-[10px] font-normal font-['Poppins'] leading-4">{s.type}</div>
                  </div>

                  <div className="flex items-center gap-2.5 mt-2">
                    {s.pills.map((p, j) => (
                      <div key={j} className="px-2.5 h-5 bg-orange-50 rounded-full outline outline-1 outline-offset-[-1px] outline-orange-100 flex items-center justify-center shrink-0">
                        <span className="text-stone-600 text-[10px] font-normal font-['Poppins'] leading-4">{p}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 text-orange-600 text-xs font-bold font-['Arial'] cursor-pointer">Get Directions →</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
