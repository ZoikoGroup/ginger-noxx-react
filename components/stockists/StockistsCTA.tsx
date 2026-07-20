import React from 'react';

export default function StockistsCTA() {
  return (
    <section className="relative w-full h-72 bg-gradient-to-tr from-orange-600 to-orange-400 overflow-hidden mx-auto">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_80%,_var(--tw-gradient-stops))] from-orange-600/10 to-orange-600/0 pointer-events-none" />
      
      <div className="relative w-[1440px] h-full mx-auto max-w-full flex flex-col items-center justify-center pt-8">
        <h2 className="text-center flex items-center">
          <span className="text-white text-4xl font-semibold font-['Poppins'] leading-10">Want to Stock GingerNoxx</span>
          <span className="text-white text-3xl font-semibold font-['Poppins'] leading-10">™</span>
          <span className="text-white text-4xl font-semibold font-['Poppins'] leading-10">?</span>
        </h2>
        <p className="text-center text-white text-sm font-normal font-['Poppins'] leading-6 mt-4">
          If you&apos;re a retailer, cafe, wellness shop, or food hall interested in carrying GingerNoxx<br/>products — we&apos;d love to hear from you. Our trade team responds within 2 business days.
        </p>
        
        <div className="flex gap-4 mt-8">
          <button className="w-72 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-orange-400 text-sm font-semibold font-['Poppins']">Apply to Become a Stockist</span>
          </button>
          <button className="w-72 h-12 rounded-full outline outline-1 outline-offset-[-1px] outline-white flex items-center justify-center">
            <span className="text-white text-sm font-semibold font-['Poppins']">Contact Our Trade Team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
