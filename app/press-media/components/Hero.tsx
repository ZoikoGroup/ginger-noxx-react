import Image from "next/image";
import "./press-media.css";

export default function Hero() {
  return (
    <section className="press-hero-section relative w-full h-[384px] bg-[#1C0A03] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/press/one.png"
        width={1440}
        height={960}
        className="absolute left-0 top-[-335px] w-full min-w-[1440px] object-cover pointer-events-none"
        alt="Press Background"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_40%,rgba(217,83,30,0.20),transparent_65%)] pointer-events-none" />

      {/* Content — centered inside section */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-[56px] px-4">

        {/* Title */}
        <h1 className="press-hero-title">
          <span className="press-hero-title-white">Press </span>
          <span className="press-hero-title-orange">&amp; Media</span>
        </h1>

        {/* Description */}
        <p className="press-hero-desc">
          Media coverage and updates about Zoiko Foods Corp and<br />
          GingerNoxx™ will appear here soon. We are building our press and media resources.
        </p>

        {/* Input + Button pill row */}
        <div className="flex items-center w-full max-w-[480px] h-[48px] rounded-full overflow-hidden mt-[28px]">
          <input
            type="email"
            placeholder="Enter your email address.."
            className="flex-1 h-full bg-white outline-none text-stone-900 text-sm font-normal font-['Poppins'] placeholder-stone-400 px-5 border-none"
          />
          <button className="h-full px-6 bg-[#D9531E] hover:bg-[#c24413] text-white text-xs font-semibold font-['Poppins'] flex items-center justify-center transition-colors cursor-pointer border-none whitespace-nowrap">
            Subscribe for Updates
          </button>
        </div>

        {/* Spam notice */}
        <p className="press-disclaimer">
          No spam. Unsubscribe anytime. We'll only send press &amp; media updates.
        </p>
      </div>
    </section>
  );
}
