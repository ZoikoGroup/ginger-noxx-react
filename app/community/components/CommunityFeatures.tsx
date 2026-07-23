import React from 'react';
import './community.css';

const features = [
  {
    icon: "🌶️",
    title: "Flavour Exploration",
    description: "Discover new product launches, limited editions, and seasonal drops before anyone else — collective members get first access, always.",
  },
  {
    icon: "🍳",
    title: "Recipe Community",
    description: "Share your recipes, discover culinary inspiration from fellow members, and collaborate on new ways to bring ginger into everyday cooking.",
  },
  {
    icon: "💡",
    title: "Wellness Insights",
    description: "Members-only content from the GingerNoxx R&D team — science-informed, practical, useful, and always honest about what ginger can and can't do.",
  },
  {
    icon: "🎁",
    title: "Exclusive Offers",
    description: "Subscriber discounts, early bundle drops, and access to GingerNoxx Collective product packs not available in any retail channel.",
  },
  {
    icon: "🌐",
    title: "Global Community",
    description: "Connect with 12,000+ members across New York, London, Tokyo, Singapore, and beyond — a global flavour conversation, always free.",
  },
  {
    icon: "✦",
    title: "Member Spotlights",
    description: "Your story, your recipes, and your creativity featured on our channels — the collective is about the people who make it extraordinary.",
  },
];

export default function CommunityFeatures() {
  return (
    <section className="community-features-section">
      <div className="w-full max-w-[1250px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-4xl font-semibold font-['Poppins'] leading-10 mb-[40px]">
          <span className="text-stone-900">A Community Built </span>
          <span className="text-[#D9531E]">Around Ginger</span>
        </h2>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {features.map((feature, idx) => (
            <div key={idx} className="community-feature-card">
              <div className="community-feature-icon">
                {feature.icon}
              </div>
              <h3 className="community-feature-title">
                {feature.title}
              </h3>
              <p className="community-feature-desc">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
