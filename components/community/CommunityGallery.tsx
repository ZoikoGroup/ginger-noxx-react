import React from 'react';

export default function CommunityGallery() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ height: '803px', paddingTop: '51px' }}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/10 to-transparent to-65% pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center" style={{ marginBottom: '39px' }}>
          <h2 className="text-4xl font-semibold font-['Poppins'] leading-10">
            <span className="text-zinc-800">What the Collective </span>
            <span className="text-orange-600">Is Making</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '22px' }}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="bg-neutral-500 rounded-2xl relative overflow-hidden group" style={{ width: '256px', height: '256px' }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute left-0 right-0 text-center" style={{ top: '228.4px' }}>
                <span className="text-white text-base font-semibold font-['Poppins'] leading-none">
                  Social Media Pics
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center" style={{ marginTop: '42px' }}>
          <button className="bg-orange-600 text-white text-xs font-semibold font-['Poppins'] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/20 hover:bg-orange-700 transition-colors" style={{ width: '288px', height: '44px' }}>
            Share Your #GingerNoxx Moment
          </button>
        </div>
      </div>
    </section>
  );
}
