import React from 'react';
import "./collective.css";

const features = [
  {
    icon: "🌶️",
    title: "Flavour Exploration",
    desc: "Discover new product launches, limited editions, and seasonal drops before anyone else — collective members get first access, always."
  },
  {
    icon: "🍳",
    title: "Recipe Community",
    desc: "Share your recipes, discover culinary experiments from fellow members, and collaborate on new ways to bring ginger into everyday cooking."
  },
  {
    icon: "💡",
    title: "Wellness Insights",
    desc: "Members-only content from the GingerNoxx R&D team — science-informed, practically useful, and always honest about what ginger can and can't do."
  },
  {
    icon: "🎁",
    title: "Exclusive Offers",
    desc: "Subscriber discounts, early bundle drops, and access to GingerNoxx Collective product packs not available in any retail channel."
  },
  {
    icon: "🌍",
    title: "Global Community",
    desc: "Connect with 12,000+ members across New York, London, Accra, Singapore, and beyond — a global flavour conversation, always live."
  },
  {
    icon: "✦",
    title: "Member Spotlights",
    desc: "Your story, your recipes, and your creativity featured on our channels — the collective is about the people who make it extraordinary."
  }
];

export default function CollectiveFeatures() {
  return (
    <section className="coll-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="coll-heading">
          A Community Built <span className="coll-heading-orange">Around Ginger</span>
        </h2>

        {/* 6 Cards Grid (3x2) */}
        <div className="coll-features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="coll-feature-card">
              <div className="coll-feature-icon">{feat.icon}</div>
              <h3 className="coll-feature-title">{feat.title}</h3>
              <p className="coll-feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
