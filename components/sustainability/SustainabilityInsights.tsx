export default function SustainabilityInsights() {
  const insights = [
    {
      icon: "📊",
      tag: "Research & Reports",
      title: "Annual Sustainability Report",
      desc: "Our annual impact report covering sourcing, packaging, emissions, and social outcomes across all markets."
    },
    {
      icon: "📋",
      tag: "Best Practices",
      title: "Clean Label Standards",
      desc: "How we define and apply clean-label principles across every GingerNoxx SKU — a model for transparent food formulation."
    },
    {
      icon: "🗂️",
      tag: "Case Studies",
      title: "Farm-to-Shelf Traceability",
      desc: "Inside our ginger sourcing journey — from regenerative farms in Peru to finished products in our distribution centres."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
        <h2 className="text-stone-950 text-4xl font-semibold font-['Poppins'] leading-10">
          Insights on Sustainable<br/>
          <span className="text-orange-600">Food Innovation</span>
        </h2>
        <div className="w-12 h-0.5 bg-orange-600 mt-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-[1050px]">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-orange-50 p-6 rounded-lg border border-orange-100/50 flex flex-col items-start text-left h-52 shadow-sm">
              <div className="text-2xl mb-4">{item.icon}</div>
              <span className="text-orange-600/70 text-[10px] font-semibold font-['Poppins'] uppercase tracking-widest mb-1">
                {item.tag}
              </span>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] mb-2">{item.title}</h3>
              <p className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
