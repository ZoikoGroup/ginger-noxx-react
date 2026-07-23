import React from 'react';
import './community.css';

export default function CommunityGallery() {
  return (
    <section className="community-gallery-section">
      <div className="w-full max-w-[1250px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-4xl font-semibold font-['Poppins'] leading-10 mb-[40px]">
          <span className="text-zinc-800">What the Collective </span>
          <span className="text-[#D9531E]">Is Making</span>
        </h2>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[22px]">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="community-gallery-card group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="community-gallery-label">
                Social Media Pics
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-[44px]">
          <button className="bg-[#D9531E] hover:bg-[#c24413] text-white text-xs font-semibold font-['Poppins'] rounded-full border border-white/20 transition-colors cursor-pointer h-[46px] px-[28px]">
            Share Your #GingerNoxx Moment
          </button>
        </div>

      </div>
    </section>
  );
}
