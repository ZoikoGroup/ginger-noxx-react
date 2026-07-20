export default function SustainabilityCommitments() {
  const commitments = [
    {
      icon: "🌱",
      title: "Ethical Sourcing",
      desc: "Supporting ginger farmers, cooperatives, and local communities worldwide through transparent and fair supply chain practices."
    },
    {
      icon: "✓",
      title: "Clean Ingredients",
      desc: "No artificial preservatives, hidden sugars, or chemical shortcuts. Everything in our formulations earns its place."
    },
    {
      icon: "♻️",
      title: "Planet-First Packaging",
      desc: "Recyclable, compostable, and lower-plastic innovations across all categories — moving toward our zero-waste packaging commitment."
    },
    {
      icon: "🤝",
      title: "Inclusive Nutrition",
      desc: "Products designed for vegan, halal, and family-friendly diets — because responsible food should be accessible to everyone."
    }
  ];

  return (
    <section className="w-full bg-orange-50 py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
        <h2 className="text-stone-900 text-4xl font-semibold font-['Poppins']">
          Our Sustainability <span className="text-orange-600">Commitments</span>
        </h2>
        <p className="mt-4 text-stone-600 text-base font-normal font-['Poppins'] max-w-[600px]">
          Four pillars guide every decision we make — from the farm to your table, and every step in between.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-[1100px]">
          {commitments.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-orange-100 shadow-sm flex flex-col items-center h-64 overflow-hidden">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-stone-900 text-base font-bold font-['Poppins'] mb-3">{item.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
