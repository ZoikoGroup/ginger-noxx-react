import React from 'react';
import './blog.css';

export default function BlogNewsletter() {
  return (
    <section className="blog-newsletter-section flex justify-center px-6">
      <div className="blog-newsletter-card">

        {/* Heading */}
        <h2 className="text-white text-2xl md:text-[26px] font-bold font-['Poppins'] leading-tight mb-[12px] text-center">
          Get Lab Notes in Your Inbox
        </h2>

        {/* Subtitle */}
        <p className="w-full max-w-[740px] text-white/90 text-sm md:text-[15px] font-normal font-['Poppins'] leading-relaxed mb-[26px] text-center">
          New recipes, formulation insights, and stories from the GingerNoxx team — delivered when it's worth reading.
        </p>

        {/* Input & Button Pill Group (Unified rounded-full overflow-hidden container) */}
        <div className="flex items-center w-full max-w-[460px] h-[48px] rounded-full overflow-hidden mb-[18px]">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 h-full bg-white outline-none text-stone-900 text-sm font-normal font-['Poppins'] placeholder-[#a1a1aa] px-6 border-none"
          />
          <button className="h-full px-7 bg-[#FAF3EA] hover:bg-white text-[#D9531E] text-sm font-bold font-['Poppins'] flex items-center justify-center transition-colors cursor-pointer border-none whitespace-nowrap">
            Subscribe
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-white/80 text-xs font-normal font-['Poppins'] leading-4 text-center">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}
