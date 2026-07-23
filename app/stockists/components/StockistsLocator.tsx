'use client';

import React, { useState } from 'react';
import "./stockists.css";

export default function StockistsLocator() {
  const [activeFilter, setActiveFilter] = useState('All');

  const stockists = [
    {
      name: 'Natural Kitchen — Shoreditch',
      distance: '0.4 mi',
      address: '14 Hoxton Square, London E1 6QT',
      stockStatus: 'In Stock',
      badgeClass: 'stockists-badge-instock',
      type: 'Premium Retailer · Full Range',
      pills: ['Beverages', 'Condiments', 'Spices', 'Snacks'],
      hasCall: true,
      isActive: true
    },
    {
      name: 'Planet Organic — Westbourne Grove',
      distance: '1.2 mi',
      address: '42 Westbourne Grove, London W2 5SH',
      stockStatus: 'Limited Stock',
      badgeClass: 'stockists-badge-limited',
      type: 'Organic Specialty',
      pills: ['Beverages', 'Wellness Shots'],
      hasCall: false,
      isActive: false
    },
    {
      name: 'Whole Foods Market — Kensington',
      distance: '1.8 mi',
      address: '63–97 Kensington High St, W8 5SE',
      stockStatus: 'In Stock',
      badgeClass: 'stockists-badge-instock',
      type: 'National Chain · Authorised',
      pills: ['Beverages', 'Condiments'],
      hasCall: true,
      isActive: false
    },
    {
      name: 'Sourced Market — King\'s Cross',
      distance: '2.1 mi',
      address: 'St Pancras International, London N1C 4QP',
      stockStatus: 'In Stock',
      badgeClass: 'stockists-badge-instock',
      type: 'Food Hall · Travel Retail',
      pills: ['Beverages', 'Café Menu'],
      hasCall: false,
      isActive: false
    },
    {
      name: 'Waitrose — Canary Wharf',
      distance: '3.4 mi',
      address: 'Canada Place, London E14 5EW',
      stockStatus: 'Check Availability',
      badgeClass: 'stockists-badge-check',
      type: 'Supermarket · Selected SKUs',
      pills: ['Beverages'],
      hasCall: true,
      isActive: false
    }
  ];

  const filters = ['All', 'Beverages', 'Condiments', 'Full Range', 'Wellness', 'Cafes'];

  return (
    <section className="stockists-locator-section flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-[1160px] mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Search Bar Row */}
        <div className="stockists-search-row">
          <div className="stockists-search-input-box">
            <input
              type="text"
              placeholder="Enter city, postcode, or country…"
              className="stockists-search-input"
            />
            <button className="stockists-search-btn">
              Search Now
            </button>
          </div>
          <button className="stockists-nearme-btn">
            Near Me
          </button>
        </div>

        {/* Filter Pills Row */}
        <div className="stockists-filter-bar">
          <span className="stockists-filter-label">Filter by:</span>
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`stockists-filter-pill ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Split Container: Map Placeholder (Ash Color) & List */}
        <div className="stockists-split-wrapper">
          {/* Left: Ash Color Placeholder Map Box */}
          <div className="stockists-map-box bg-neutral-400 border border-orange-100 rounded-2xl shrink-0" />

          {/* Right: Stockists List */}
          <div className="stockists-list-box">
            <div className="stockists-list-header">
              <span className="text-stone-600 text-xs font-semibold font-['Poppins']">5 stockists nearby</span>
              <span className="text-[#ea580c] text-xs font-semibold font-['Poppins'] cursor-pointer">Sort: Distance ▾</span>
            </div>

            {stockists.map((s, idx) => (
              <div
                key={idx}
                className={`stockists-card ${s.isActive ? 'active-card' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] leading-6">{s.name}</h3>
                  <div className="flex items-center gap-3 shrink-0">
                    {s.hasCall && (
                      <span className="text-stone-600 text-xs font-bold font-['Arial'] cursor-pointer">📞 Call</span>
                    )}
                    <span className="text-[#ea580c] text-xs font-semibold font-['Poppins']">{s.distance}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{s.address}</p>

                <div className="flex items-center gap-2.5 my-1">
                  <span className={s.badgeClass}>{s.stockStatus}</span>
                  <span className="text-stone-500 text-[10px] font-normal font-['Poppins']">{s.type}</span>
                </div>

                <div className="flex items-center gap-2 my-1">
                  {s.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-0.5 bg-orange-50 border border-orange-100 text-stone-600 text-[10px] font-normal rounded-full"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="mt-1 text-[#ea580c] text-xs font-bold font-['Arial'] cursor-pointer">
                  Get Directions →
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
