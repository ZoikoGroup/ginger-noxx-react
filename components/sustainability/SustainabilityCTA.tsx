export default function SustainabilityCTA() {
  return (
    <section className="w-full bg-orange-600 py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
        <h2 className="text-white text-[40px] md:text-5xl font-bold font-['Poppins'] leading-tight">
          Make an Impact with Every Choice
        </h2>
        <p className="mt-6 text-white/80 md:text-white/60 text-base font-normal font-['Poppins'] max-w-[700px] leading-7">
          Every GingerNoxx purchase supports ethical sourcing, clean-label formulation, and planet-positive practices. Shopping well is the simplest form of action.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="h-12 px-8 bg-white hover:bg-gray-100 rounded-full text-orange-600 text-sm font-bold font-['Poppins'] transition-colors">
            Shop GingerNoxx
          </button>
          <button className="h-12 px-8 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 text-white text-sm font-semibold font-['Poppins'] transition-colors">
            Learn More About Our Practices
          </button>
        </div>
      </div>
    </section>
  );
}
