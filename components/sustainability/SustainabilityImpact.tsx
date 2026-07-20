export default function SustainabilityImpact() {
  return (
    <section className="w-full bg-orange-600 py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
        <h2 className="text-white text-4xl font-semibold font-['Poppins']">
          Our Impact <span className="text-rose-100">in Numbers</span>
        </h2>
        <p className="mt-4 text-white/60 text-base font-normal font-['Poppins'] max-w-[720px]">
          Zoiko Foods Corp tracks and reports on its environmental and social impact, ensuring transparency and accountability across all markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-[1050px]">
          <div className="bg-white p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col items-center h-52 justify-center">
            <div className="text-orange-600 text-[40px] font-extrabold font-['Poppins'] mb-3">3+</div>
            <h3 className="text-orange-600 text-sm font-semibold font-['Poppins'] mb-2">Regenerative Farm Partnerships</h3>
            <p className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-5">Directly supporting ginger cooperatives in Peru,<br/>India, and Nigeria with fair-trade<br/>commitments.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col items-center h-52 justify-center">
            <div className="text-orange-600 text-[40px] font-extrabold font-['Poppins'] mb-3">80%</div>
            <h3 className="text-orange-600 text-sm font-semibold font-['Poppins'] mb-2">Recyclable Packaging Target</h3>
            <p className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-5">Current packaging portfolio on track toward<br/>our 2027 fully recyclable or compostable<br/>commitment.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col items-center h-52 justify-center">
            <div className="text-orange-600 text-[40px] font-extrabold font-['Poppins'] mb-3">0</div>
            <h3 className="text-orange-600 text-sm font-semibold font-['Poppins'] mb-2">Artificial Additives Used</h3>
            <p className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-5">Across every SKU in every market — no artificial<br/>preservatives, colourings, or synthetic<br/>flavourings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
