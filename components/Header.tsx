"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/** The header is designed at exactly 1440x104. Below that we scale it down
 *  proportionally so it stays pixel-faithful to the design, down to 1100px
 *  (the `min-[1100px]:` breakpoint below), where it would get too small to
 *  read and the compact layout takes over. */
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 104;

const NAV_LINKS = [
  { href: "/best-sellers", label: "Shop ▾" },
  { href: "/why", label: "Why Ginger" },
  { href: "/innovation", label: "Innovation" },
  { href: "/story", label: "Our Story" },
  { href: "/where-to-buy", label: "Where to Buy" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      // clientWidth excludes the scrollbar, unlike window.innerWidth
      const width = document.documentElement.clientWidth;
      setScale(width >= DESIGN_WIDTH ? 1 : width / DESIGN_WIDTH);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* ============================================================
          DESKTOP (>= 1100px) — the 1440 design, scaled to fit
      ============================================================ */}
      <div
        className="w-full hidden min-[1100px]:block bg-white z-50 relative overflow-hidden"
        style={{ height: `${DESIGN_HEIGHT * scale}px` }}
      >
        <div
          style={{
            width: '1440px',
            height: '104px',
            left: '50%',
            transformOrigin: 'top center',
            transform: `translateX(-50%) scale(${scale})`,
          }}
          className="absolute overflow-hidden"
        >
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

      {/* ============================================================
          TABLET / MOBILE (< 1100px) — compact layout
      ============================================================ */}
      <header className="w-full bg-white z-50 relative min-[1100px]:hidden">
        {/* Top Announcement Bar */}
        <div className="relative w-full min-h-10 px-8 py-2 sm:px-10 bg-amber-700 border-b border-amber-700/20 flex items-center justify-center gap-1.5 text-center">
          <span className="text-white text-lg font-normal font-['Poppins'] leading-5 tracking-tight">✦</span>
          <span className="text-white text-xs font-normal font-['Poppins'] leading-5 tracking-tight">
            Your Ginger Profile Not set <Link href="/find-profile" className="font-bold underline cursor-pointer">Find yours</Link> →
          </span>
          <button className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 opacity-40 text-center justify-center text-white text-xs font-normal font-['Poppins'] leading-5 tracking-tight hover:opacity-100">
            ✕
          </button>
        </div>

        {/* Navbar */}
        <div className="w-full bg-stone-50/90 shadow-[0px_8px_32px_0px_rgba(100,60,20,0.12)] border-b border-yellow-700/10 backdrop-blur-[10px]">
          <nav className="mx-auto flex h-16 w-full items-center gap-2 px-5 sm:gap-3 sm:px-6">
            {/* Logo — allowed to shrink so the row never overflows its padding */}
            <Link href="/Home" className="flex min-w-0 shrink items-center cursor-pointer">
              <Image
                src="/Image/ginger-logo.png"
                alt="GingerNoxx"
                width={206}
                height={32}
                priority
                className="h-6 w-auto max-w-full object-contain sm:h-8"
              />
            </Link>

            {/* Actions */}
            <div className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-2.5">
              <button aria-label="Search" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
                <Image src="/faqs/search.svg" alt="" width={16} height={16} />
              </button>

              <button aria-label="Account" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
                <Image src="/faqs/user.svg" alt="" width={16} height={16} />
              </button>

              <button aria-label="Cart" className="relative flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
                <Image src="/faqs/cart.svg" alt="" width={16} height={16} />
                <span className="absolute left-[18px] top-[2px] flex h-3.5 w-3.5 items-center justify-center bg-amber-700 rounded-md text-center text-white text-[9px] font-bold font-['Arial'] leading-[9px]">
                  0
                </span>
              </button>

              {/* Menu toggle */}
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-700 hover:bg-black/5 transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {menuOpen ? (
                    <>
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full flex flex-col gap-1 px-5 py-3 bg-stone-50/95 shadow-[0px_8px_32px_0px_rgba(100,60,20,0.12)] border-b border-yellow-700/10 backdrop-blur-[10px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-stone-700 text-sm font-semibold font-['Poppins'] leading-5 hover:bg-black/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/wholesale" onClick={() => setMenuOpen(false)} className="mt-1">
              <div className="flex h-9 w-full items-center justify-center bg-amber-700 rounded-[100px] shadow-[0px_2px_10px_0px_rgba(184,74,6,0.25)] hover:bg-amber-800 transition-colors cursor-pointer">
                <span className="text-center text-white text-xs font-bold font-['Arial'] tracking-tight">Wholesale Portal</span>
              </div>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
