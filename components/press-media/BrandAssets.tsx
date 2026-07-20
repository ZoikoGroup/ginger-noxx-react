import Image from "next/image";

export default function BrandAssets() {
  return (
    <section className="relative w-full max-w-[1440px] h-[503.05px] bg-orange-600/10 overflow-hidden">
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-[1440px]">
        {/* Title */}
        <div className="absolute left-[480.50px] top-[56px] text-center">
          <span className="text-stone-900 text-3xl font-semibold font-['Poppins'] leading-9">Brand Assets </span>
          <span className="text-orange-600 text-3xl font-semibold font-['Poppins'] leading-9">Available Soon</span>
        </div>

        {/* Card 1: Brand Logo Pack */}
        <div className="absolute w-80 h-60 left-[210px] top-[121.59px] bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden">
          <div className="absolute w-80 h-36 left-[1px] top-[1px] bg-[#EAEAEA] border-b border-amber-700/20 flex flex-col items-center justify-center">
            <Image src="/Image/ginger-logo.png" alt="GingerNoxx Logo" width={206} height={32} className="object-contain" priority />
          </div>
          
          <div className="absolute w-32 h-5 left-[19px] top-[158px] text-stone-900 text-sm font-bold font-['Poppins'] leading-6 flex items-center">Brand Logo Pack</div>
          <div className="absolute w-60 h-9 left-[19px] top-[183.52px] text-stone-600 text-xs font-normal font-['Poppins'] leading-5 flex items-center">SVG, PNG, EPS — dark, light, and amber<br/>variants</div>
        </div>

        {/* Card 2: Brand Style Guide */}
        <div className="absolute w-80 h-60 left-[555.33px] top-[121.59px] bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden">
          <div 
            className="absolute w-80 h-36 left-[1px] top-[1px]" 
            style={{ background: 'linear-gradient(90deg, #D4621A 50%, #FDF6EE 50%)' }} 
          />
          <div className="absolute w-32 h-5 left-[19px] top-[158px] text-stone-900 text-sm font-bold font-['Poppins'] leading-6 flex items-center">Brand Style Guide</div>
          <div className="absolute w-64 h-9 left-[19px] top-[183.52px] text-stone-600 text-xs font-normal font-['Poppins'] leading-5 flex items-center">Colour tokens, typography, photography<br/>guidelines</div>
        </div>

        {/* Card 3: Media Kit & Fact Sheet */}
        <div className="absolute w-80 h-60 left-[900.66px] top-[121.59px] bg-white rounded-2xl shadow-[0px_2px_12px_0px_rgba(43,18,8,0.07)] outline outline-1 outline-offset-[-1px] outline-orange-100 overflow-hidden">
          <div className="absolute w-80 h-36 left-[1px] top-[1px] bg-zinc-400" />
          <div className="absolute w-40 h-5 left-[19px] top-[158px] text-stone-900 text-sm font-bold font-['Poppins'] leading-6 flex items-center">Media Kit &amp; Fact Sheet</div>
          <div className="absolute w-72 h-5 left-[19px] top-[182.52px] text-stone-600 text-xs font-normal font-['Poppins'] leading-5 flex items-center">Company overview, product specs, key stats</div>
        </div>
      </div>
    </section>
  );
}

