import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] h-[384px] bg-amber-950 overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/press/one.png" 
        width={1440} 
        height={960} 
        className="absolute left-0 top-[-335px] max-w-none pointer-events-none object-cover" 
        alt="Press Background" 
        priority 
      />
      
      {/* Overlay glow */}
      <div className="absolute w-[1440px] h-56 left-0 top-[154px] bg-[radial-gradient(ellipse_at_68%_40%,rgba(234,88,12,0.2),transparent_65%)] pointer-events-none" />
      
      {/* Content wrapper to position elements exactly as per design */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-[1440px]">
        {/* Title */}
        <div className="absolute left-[483.53px] top-[56px] text-center w-[473px]">
          <span className="text-white text-6xl font-semibold font-['Poppins'] leading-[64.45px]">Press </span>
          <span className="text-orange-600 text-6xl font-semibold font-['Poppins'] leading-[64.45px]">&amp; Media</span>
        </div>
        
        {/* Description */}
        <div className="absolute w-[818px] h-20 left-[311px] top-[121px] text-center text-white text-base font-normal font-['Poppins'] leading-7">
          Media coverage and updates about Zoiko Foods Corp and<br/>
          GingerNoxx™ will appear here soon. We are building our press and media resources.
        </div>
        
        {/* Newsletter Input */}
        <div className="absolute w-80 h-12 left-[488px] top-[239px] bg-white rounded-tl-full rounded-bl-full border-l border-t border-b border-white/10 overflow-hidden">
          <div className="w-64 h-5 left-[19px] top-[14px] absolute overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email address…" 
              className="w-full h-full bg-transparent outline-none text-neutral-400 text-sm font-normal font-['Poppins'] placeholder-neutral-400" 
            />
          </div>
        </div>
        
        {/* Subscribe Button */}
        <button className="absolute w-52 h-12 left-[797px] top-[239px] bg-orange-600 rounded-tr-full rounded-br-full hover:bg-orange-700 transition-colors cursor-pointer">
          <div className="w-40 h-5 left-[22px] top-[14.50px] absolute text-center text-white text-xs font-semibold font-['Poppins'] flex items-center justify-center">
            Subscribe for Updates
          </div>
        </button>
        
        {/* Spam Notice */}
        <div className="absolute w-96 h-4 left-[502.47px] top-[302px] text-center text-white/30 text-xs font-normal font-['Poppins'] leading-4">
          No spam. Unsubscribe anytime. We'll only send press &amp; media updates.
        </div>
      </div>
    </section>
  );
}

