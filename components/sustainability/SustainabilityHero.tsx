import Image from "next/image";

export default function SustainabilityHero() {
  return (
    <section className="relative w-full h-[540px] bg-amber-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/sustainability/one.png"
        alt="Ginger Farm Background"
        fill
        className="object-cover opacity-60"
        priority
      />
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_40%,rgba(234,88,12,0.2)_0%,transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center mt-12">
        <h1 className="text-white text-5xl md:text-6xl font-semibold font-['Poppins'] leading-tight">
          Rooted in <span className="text-orange-600">Responsibility</span>
        </h1>
        <p className="mt-6 text-white text-base font-normal font-['Poppins'] leading-7 max-w-2xl">
          Sustainability is at the core of Zoiko Foods Corp — from ethical sourcing to planet-positive packaging and regenerative practices that protect what matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="h-12 px-8 bg-orange-600 hover:bg-orange-700 rounded-full text-white text-sm font-semibold font-['Poppins'] transition-colors">
            Explore Our Commitment
          </button>
          <button className="h-12 px-8 rounded-full border-2 border-white/80 hover:bg-white/10 hover:border-white text-white text-sm font-semibold font-['Poppins'] transition-colors">
            Our Practices
          </button>
        </div>

        {/* Metric Cards */}
        <div className="mt-16 w-full max-w-[660px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden hidden md:grid grid-cols-4">
          <div className="py-6 flex flex-col items-center justify-center bg-white/5 border-r border-white/10">
            <span className="text-white text-2xl font-extrabold font-['Poppins']">100%</span>
            <span className="text-white/90 text-[10px] mt-2 text-center px-2">Halal & Vegan<br/>Certified</span>
          </div>
          <div className="py-6 flex flex-col items-center justify-center bg-white/5 border-r border-white/10">
            <span className="text-white text-2xl font-extrabold font-['Poppins']">0</span>
            <span className="text-white/90 text-[10px] mt-2 text-center px-2">Artificial<br/>Preservatives</span>
          </div>
          <div className="py-6 flex flex-col items-center justify-center bg-white/5 border-r border-white/10">
            <span className="text-white text-2xl font-extrabold font-['Poppins']">5+</span>
            <span className="text-white/90 text-[10px] mt-2 text-center px-2">Sourcing<br/>Regions</span>
          </div>
          <div className="py-6 flex flex-col items-center justify-center bg-white/5">
            <span className="text-emerald-400 text-2xl font-extrabold font-['Poppins']">♻️</span>
            <span className="text-white/90 text-[10px] mt-2 text-center px-2">Planet-First<br/>Packaging</span>
          </div>
        </div>
      </div>
    </section>
  );
}
