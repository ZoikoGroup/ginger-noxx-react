export default function SustainabilityStages() {
  const stages = [
    {
      num: "01",
      tag: "SOURCING",
      title: "Ethical Ingredient Selection",
      desc: "Every ingredient is traced to its source. We prioritise partnerships with regenerative farms, co-operatives, and suppliers who share our values around land care and fair wages."
    },
    {
      num: "02",
      tag: "FORMULATION",
      title: "Clean-Label Development",
      desc: "Our formulation teams apply a strict no-shortcuts standard. If it doesn't naturally serve the product, it doesn't belong in it — no exceptions."
    },
    {
      num: "03",
      tag: "PRODUCTION",
      title: "Responsible Manufacturing",
      desc: "We work with ISO 22000 certified contract manufacturers who meet our environmental and quality standards across every production jurisdiction."
    },
    {
      num: "04",
      tag: "PACKAGING",
      title: "Planet-First Materials",
      desc: "We are systematically replacing single-use plastics with recyclable, compostable, and refillable alternatives — with a 2027 target for full portfolio compliance."
    },
    {
      num: "05",
      tag: "DISTRIBUTION",
      title: "Efficient Global Logistics",
      desc: "Route optimisation, consolidated shipments, and regional warehousing reduce our transport emissions while supporting faster, more reliable delivery for customers."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex justify-center">
      <div className="w-full max-w-[800px] flex flex-col items-center">
        <h2 className="text-stone-900 text-4xl font-semibold font-['Poppins'] text-center">
          Sustainability at <span className="text-orange-600">Every Stage</span>
        </h2>
        <p className="mt-4 text-stone-600 text-base font-normal font-['Poppins'] max-w-[600px] text-center mb-16">
          Sustainability informs every stage of product development — from ingredient selection to production, packaging, and logistics.
        </p>

        <div className="relative w-full flex flex-col gap-12">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-orange-100 hidden md:block" />
          
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start relative z-10 gap-8">
              <div className="w-10 h-10 shrink-0 bg-orange-600 rounded-[20px] flex items-center justify-center text-white text-sm font-bold font-['Poppins']">
                {stage.num}
              </div>
              <div className="flex flex-col">
                <span className="text-orange-600 text-[10px] font-semibold font-['Poppins'] uppercase tracking-widest mb-1">
                  {stage.tag}
                </span>
                <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-2">
                  {stage.title}
                </h3>
                <p className="text-stone-600 text-sm font-normal font-['Poppins'] leading-6">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
