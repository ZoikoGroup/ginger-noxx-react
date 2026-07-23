// app/components/faq/FAQHero.tsx
export default function FAQHero() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div style={{ width: '1440px', height: '384px' }} className="relative bg-amber-950 overflow-hidden">
        {/* Background Image and Gradient */}
        <img style={{ width: '1440px', height: '960px', left: '0', top: '-335px' }} className="absolute opacity-60" src="/faqs/hero-bg.png" alt="FAQ Background" />
        <div style={{ width: '1440px', height: '224px', left: '0', top: '154px' }} className="absolute bg-radial-[at_68%_40%] from-orange-600/20 to-orange-600/0 to 65%"></div>
        
        {/* Text Content */}
        <div style={{ left: '472px', top: '109px' }} className="absolute text-center justify-center">
          <span className="text-white text-5xl font-semibold font-['Poppins'] leading-[50.18px]">Questions </span>
          <span className="text-orange-600 text-5xl font-semibold font-['Poppins'] leading-[50.18px]">Answered</span>
        </div>
        
        <div style={{ width: '804px', left: '305px', top: '166px' }} className="absolute text-center justify-center text-gray-200 text-base font-normal font-['Poppins'] leading-7">
          Everything you need to know about GingerNoxx products, usage,<br/>and sourcing. We make it simple for you to enjoy your ginger ritual with confidence.
        </div>
        
        {/* Search Bar */}
        <div style={{ width: '681px', height: '48px', left: '367px', top: '249px' }} className="absolute bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden">
          <div style={{ width: '619px', height: '20px', left: '22px', top: '14px' }} className="absolute overflow-hidden">
            <input 
              type="text" 
              placeholder="Search questions…" 
              className="w-full h-full bg-transparent outline-none text-neutral-500 text-sm font-normal font-['Poppins'] placeholder:text-neutral-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

