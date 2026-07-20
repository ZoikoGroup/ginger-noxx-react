export default function SustainabilityCollaborations() {
  const collaborations = [
    {
      icon: "🌾",
      title: "Farmer Cooperatives",
      desc: "Direct partnerships with ginger farming communities in Peru, India, and Nigeria — fair pricing, technical support, and long-term commitment."
    },
    {
      icon: "🌍",
      title: "NGO Collaborations",
      desc: "Working with food security and environmental NGOs to extend our impact into the communities where our ingredients are grown."
    },
    {
      icon: "🔬",
      title: "Research Networks",
      desc: "Engaging with food science and sustainability research institutions to inform better practices and measure our environmental footprint."
    }
  ];

  return (
    <section className="w-full bg-orange-50 py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
        <h2 className="text-stone-900 text-4xl font-semibold font-['Poppins']">
          Collaborating for <span className="text-orange-600">a Better Future</span>
        </h2>
        <p className="mt-4 text-stone-600 text-base font-normal font-['Poppins'] max-w-[700px]">
          Partnering with NGOs, local cooperatives, and global sustainability networks to amplify impact beyond our own operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-[1050px]">
          {collaborations.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-orange-100 shadow-sm flex flex-col items-center h-56 justify-center">
              <div className="text-[32px] mb-4">{item.icon}</div>
              <h3 className="text-stone-900 text-sm font-bold font-['Poppins'] mb-2">{item.title}</h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="h-12 px-8 rounded-full border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 text-sm font-semibold font-['Poppins'] transition-colors">
            Join Our Initiatives
          </button>
        </div>
      </div>
    </section>
  );
}
