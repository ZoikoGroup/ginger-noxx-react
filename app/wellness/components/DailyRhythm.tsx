import React from 'react';
import "./wellness.css";

const rhythmMoments = [
  {
    icon: "🌅",
    time: "7:00 AM",
    title: "Morning Start",
    desc: "Awaken digestion and mental clarity before your first meal.",
    btnText: "Shop Morning"
  },
  {
    icon: "☀️",
    time: "1:00 PM",
    title: "Midday Reset",
    desc: "Overcome afternoon slumps without caffeine or sugar spikes.",
    btnText: "Shop Reset"
  },
  {
    icon: "⚡",
    time: "5:00 PM",
    title: "Gut Support",
    desc: "Comforting ginger before or after meals to support natural digestion.",
    btnText: "Shop Digest"
  },
  {
    icon: "🌙",
    time: "9:00 PM",
    title: "Night Calm",
    desc: "Soothing warm ritual to settle the stomach before sleep.",
    btnText: "Shop Evening"
  }
];

export default function DailyRhythm() {
  return (
    <section className="wellness-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Tag */}
        <div className="wellness-tag">
          D A I L Y &nbsp; R H Y T H M
        </div>

        {/* Title */}
        <h2 className="wellness-heading">
          Build Your Daily Rhythm
        </h2>

        {/* Line Divider */}
        <div className="wellness-heading-line" />

        {/* Subtitle */}
        <p className="wellness-subheading mb-8">
          Ginger isn't a one-off choice; it's a daily habit built around four core moments.
        </p>

        {/* Single Dark Orange Banner Container with 4 Columns */}
        <div className="w-full bg-gradient-to-r from-[#c24413] via-[#b45309] to-[#9a3412] rounded-3xl p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {rhythmMoments.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-between text-white p-4 border-r last:border-r-0 border-white/15">
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <span className="px-2.5 py-0.5 bg-white/10 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {item.time}
                  </span>
                  <h3 className="text-white text-base font-bold font-['Poppins'] mb-2">{item.title}</h3>
                  <p className="text-white/80 text-xs font-normal font-['Poppins'] leading-5 mb-4 max-w-[200px]">{item.desc}</p>
                </div>

                <button className="h-9 px-5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold font-['Poppins'] rounded-full cursor-pointer transition-colors border-none">
                  {item.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
