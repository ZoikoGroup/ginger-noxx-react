"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center bg-white z-50 relative h-[104px]">
      <div style={{ width: '1440px', height: '104px' }} className="absolute overflow-hidden">
        {/* Top Announcement Bar */}
        <div className="w-full h-10 absolute left-0 top-0 bg-amber-700 border-b border-amber-700/20 flex items-center justify-center gap-1.5">
          <span className="text-white text-lg font-normal font-['Poppins'] leading-5 tracking-tight">✦</span>
          <span className="text-white text-xs font-normal font-['Poppins'] leading-5 tracking-tight">
            Your Ginger Profile Not set <Link href="/find-profile" className="font-bold underline cursor-pointer">Find yours</Link> →
          </span>
          <button style={{ left: '1406px', top: '10px' }} className="absolute opacity-40 text-center justify-center text-white text-xs font-normal font-['Poppins'] leading-5 tracking-tight hover:opacity-100">
            ✕
          </button>
        </div>

        {/* Navbar */}
        <div style={{ width: '1440px', height: '64px', top: '40px' }} className="absolute left-0 bg-stone-50/90 shadow-[0px_8px_32px_0px_rgba(100,60,20,0.12)] border-b border-yellow-700/10 backdrop-blur-[10px]">
          {/* Logo */}
          <Link href="/Home" style={{ left: '144px', top: '16px', width: '206px', height: '32px' }} className="absolute flex items-center cursor-pointer">
            <Image src="/Image/ginger-logo.png" alt="GingerNoxx" width={206} height={32} priority className="object-contain" />
          </Link>

          {/* Links */}
          <div style={{ width: '595px', height: '36px', left: '427px', top: '14px' }} className="absolute">
            <Link href="/best-sellers" style={{ left: '54px', top: '1px' }} className="absolute w-16 h-9 rounded-lg hover:bg-black/5 transition-colors">
              <div style={{ left: '8px', top: '8px' }} className="absolute text-stone-700 text-xs font-semibold font-['Poppins'] leading-5">Shop ▾</div>
            </Link>
            <Link href="/why" style={{ left: '131px', top: '1px' }} className="absolute w-24 h-9 rounded-lg hover:bg-black/5 transition-colors">
              <div style={{ left: '12px', top: '7px' }} className="absolute text-stone-700 text-xs font-semibold font-['Poppins'] leading-5">Why Ginger</div>
            </Link>
            <Link href="/innovation" style={{ left: '248px', top: '1px' }} className="absolute w-24 h-9 rounded-lg hover:bg-black/5 transition-colors">
              <div style={{ left: '10px', top: '7px' }} className="absolute text-stone-700 text-xs font-semibold font-['Poppins'] leading-5">Innovation</div>
            </Link>
            <Link href="/story" style={{ left: '345px', top: '1px' }} className="absolute w-20 h-9 rounded-lg hover:bg-black/5 transition-colors">
              <div style={{ left: '8px', top: '7px' }} className="absolute text-stone-700 text-xs font-semibold font-['Poppins'] leading-5">Our Story</div>
            </Link>
            <Link href="/where-to-buy" style={{ left: '438px', top: '1px' }} className="absolute w-24 h-9 rounded-lg hover:bg-black/5 transition-colors">
              <div style={{ left: '-5px', top: '7px' }} className="absolute text-stone-700 text-xs font-semibold font-['Poppins'] leading-5">Where to Buy</div>
            </Link>
          </div>

          {/* Wholesale Button */}
          <Link href="/wholesale">
            <div style={{ left: '1030px', top: '17px' }} className="absolute w-32 h-7 bg-amber-700 rounded-[100px] shadow-[0px_2px_10px_0px_rgba(184,74,6,0.25)] hover:bg-amber-800 transition-colors cursor-pointer">
              <div style={{ left: '16px', top: '8px' }} className="absolute text-center justify-center text-white text-xs font-bold font-['Arial'] tracking-tight">Wholesale Portal</div>
            </div>
          </Link>

          {/* Icons */}
          <div style={{ left: '1178px', top: '15px' }} className="absolute w-8 h-8 rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
            <div style={{ left: '8px', top: '8px' }} className="absolute w-4 h-4 flex items-center justify-center">
              <Image src="/faqs/search.svg" alt="Search" width={16} height={16} />
            </div>
          </div>

          <div style={{ left: '1220px', top: '15px' }} className="absolute w-8 h-8 rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
            <div style={{ left: '8px', top: '8px' }} className="absolute w-4 h-4 flex items-center justify-center">
              <Image src="/faqs/user.svg" alt="User" width={16} height={16} />
            </div>
          </div>

          <div style={{ left: '1262px', top: '15px' }} className="absolute w-8 h-8 rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
            <div style={{ left: '8px', top: '8px' }} className="absolute w-4 h-4 flex items-center justify-center">
              <Image src="/faqs/cart.svg" alt="Cart" width={16} height={16} />
            </div>
            <div style={{ left: '18px', top: '2px' }} className="absolute w-3.5 h-3.5 bg-amber-700 rounded-md">
              <div style={{ left: '4px', top: '1.5px' }} className="absolute text-center justify-center text-white text-[9px] font-bold font-['Arial'] leading-[9px]">0</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
