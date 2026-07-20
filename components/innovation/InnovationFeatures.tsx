import React from 'react';

const features = [
  {
    icon: '📊',
    title: 'Consumer Insights',
    description: <>Real-time data and trend<br/>intelligence informing every<br/>decision — from flavour direction<br/>to format preference and market<br/>timing.</>
  },
  {
    icon: '🔬',
    title: 'Product Formulation',
    description: <>Science-informed, scalable<br/>recipes across multiple<br/>categories — built around the<br/>Ginger-Fusion™ system for<br/>consistency and differentiation.</>
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    description: <>Fast-track concept to shelf with<br/>iterative testing, real-world<br/>culinary benchmarking, and<br/>inclusive taste validation across<br/>markets.</>
  },
  {
    icon: '🎨',
    title: 'Packaging & Design',
    description: <>Premium, sustainable, globally<br/>adaptable — our design system<br/>scales across categories without<br/>losing brand coherence or shelf<br/>impact.</>
  }
];

export default function InnovationFeatures() {
  return (
    <section className="relative w-full bg-orange-50 flex flex-col items-center" style={{ marginTop: '134px', height: '384px' }}>
      
      {/* Title */}
      <h2 className="text-center font-semibold font-['Poppins'] leading-10 absolute" style={{ top: '-71.73px' }}>
        <span className="text-stone-900 text-4xl">Built to </span>
        <span className="text-orange-600 text-4xl">Define Markets</span>
      </h2>
      
      {/* Description */}
      <p className="text-center text-stone-600 text-base font-normal font-['Poppins'] leading-7 absolute" style={{ top: '-17.62px' }}>
        Four integrated capabilities that power every product from concept to<br/>shelf — combining data, science, speed, and design into a single scalable system.
      </p>

      {/* Cards Grid */}
      <div className="flex justify-center absolute" style={{ top: '62.8px', gap: '18.5px' }}>
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col items-center overflow-hidden" style={{ width: '256px', height: '256px' }}>
            <div className="flex items-center justify-center text-stone-900 text-3xl font-normal font-['Poppins'] leading-10" style={{ marginTop: '32px', height: '40px' }}>
              {feature.icon}
            </div>
            <h3 className="text-center text-stone-900 text-base font-bold font-['Poppins'] leading-6" style={{ marginTop: '16px' }}>
              {feature.title}
            </h3>
            <p className="text-center text-stone-600 text-xs font-normal font-['Poppins'] leading-5" style={{ marginTop: '10px' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
