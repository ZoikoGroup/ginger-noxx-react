import React from 'react';

const features = [
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">🌶️</span>,
    title: 'Flavour Exploration',
    description: <>Discover new product launches, limited editions,<br/>and seasonal drops before anyone else —<br/>collective members get first access, always.</>
  },
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">🍳</span>,
    title: 'Recipe Community',
    description: <>Share your recipes, discover culinary<br/>experiments from fellow members, and<br/>collaborate on new ways to bring ginger into<br/>everyday cooking.</>
  },
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">💡</span>,
    title: 'Wellness Insights',
    description: <>Members-only content from the GingerNoxx<br/>R&amp;D team — science-informed, practically<br/>useful, and always honest about what ginger<br/>can and can&apos;t do.</>
  },
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">🎁</span>,
    title: 'Exclusive Offers',
    description: <>Subscriber discounts, early bundle drops, and<br/>access to GingerNoxx Collective product packs<br/>not available in any retail channel.</>
  },
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">🌍</span>,
    title: 'Global Community',
    description: <>Connect with 12,000+ members across New<br/>York, London, Accra, Singapore, and beyond — a<br/>global flavour conversation, always live.</>
  },
  {
    icon: <span className="text-stone-900 text-3xl font-normal font-['Poppins'] leading-10">✦</span>,
    title: 'Member Spotlights',
    description: <>Your story, your recipes, and your creativity<br/>featured on our channels — the collective is<br/>about the people who make it extraordinary.</>
  }
];

export default function CommunityFeatures() {
  return (
    <section className="relative w-full bg-orange-50 overflow-hidden" style={{ height: '656px' }}>
      <div className="absolute opacity-0 bg-orange-600" style={{ left: '696px', top: '232.38px', width: '48px', height: '2px' }} />
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center" style={{ marginTop: '62.69px' }}>
          <h2 className="text-4xl font-semibold font-['Poppins'] leading-10">
            <span className="text-stone-900">A Community Built </span>
            <span className="text-orange-600">Around Ginger</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: '35.69px', gap: '22px' }}>
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-100 flex flex-col items-center text-center overflow-hidden" style={{ width: '384px', height: idx < 3 ? '224px' : '208px' }}>
              <div className="flex items-center justify-center" style={{ marginTop: '32px', height: '40px' }}>
                {feature.icon}
              </div>
              <h3 className="text-stone-900 text-base font-bold font-['Poppins'] leading-6" style={{ marginTop: '14px', height: '20px' }}>
                {feature.title}
              </h3>
              <p className="text-stone-600 text-xs font-normal font-['Poppins'] leading-5" style={{ marginTop: '11px' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
