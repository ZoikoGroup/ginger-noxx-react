import React from 'react';
import './blog.css';

const cards = [
  {
    category: "WELLNESS · DAILY RITUAL",
    title: "5 Ways to Build a Daily Ginger Ritual That Actually Sticks",
    desc: "From morning shots to post-meal refreshment — practical ways to make ginger a consistent, enjoyable part of everyday life.",
    date: "Mar 2026",
    tag: "WELLNESS",
    img: "/blog/wellness-ritual.png",
  },
  {
    category: "RECIPES · CULINARY",
    title: "Ginger Fire Sauce Marinade: Restaurant Depth in Under 5 Minutes",
    desc: "A simple three-ingredient marinade using our Ginger Fire Sauce that transforms ordinary proteins into something genuinely memorable.",
    date: "Feb 2026",
    tag: "RECIPES",
    img: "/blog/recipes-culinary.png",
  },
  {
    category: "LAB NOTES · FORMULATION",
    title: "What Gingerol Concentration Actually Means for Flavour and Function",
    desc: "A non-technical explanation of the science behind why GingerNoxx products taste different from every other ginger product on the market.",
    date: "Feb 2026",
    tag: "LAB NOTES",
    img: "/blog/lab-notes-chopping.png",
  },
  {
    category: "BEHIND THE SCENES",
    title: "Inside Our Ginger Sourcing Journey — From Peru to Your Door",
    desc: "How we select our ginger farms, what regenerative sourcing means in practice, and why origin traceability matters for every product we make.",
    date: "Jan 2026",
    tag: "BEHIND SCENES",
    img: "/blog/behind-the-scenes.png",
  },
  {
    category: "RECIPES · BEVERAGES",
    title: "The Perfect Sparkling Ginger Mocktail: 3 Ingredients, Zero Compromise",
    desc: "Using the Sparkling Ginger Lime Infusion as a base, three mocktail recipes that perform as well at a dinner table as at a wellness morning.",
    date: "Jan 2026",
    tag: "RECIPES",
    img: "/blog/recipes-beverages.png",
  },
  {
    category: "STORIES · BRAND",
    title: "Why We Said No to Extract-Only Ginger — And What That Cost Us",
    desc: "An honest look at the formulation decisions that made GingerNoxx more expensive to make but more credible to taste — and why we wouldn't change them.",
    date: "Dec 2025",
    tag: "STORIES",
    img: "/blog/stories.png",
  }
];

export default function PostGrid() {
  return (
    <section className="blog-grid-section flex justify-center px-6">
      <div className="w-full max-w-[1080px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="blog-post-card group">
              
              {/* Image Container */}
              <div className="blog-post-img-box">
                {/* Tag Badge */}
                <div className="blog-post-tag">
                  {card.tag}
                </div>
                {/* Image */}
                <img 
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500" 
                  src={card.img} 
                  alt={card.tag} 
                />
              </div>

              {/* Body Content */}
              <div className="blog-post-body">
                <div>
                  {/* Category Label */}
                  <div className="blog-post-category">
                    {card.category}
                  </div>

                  {/* Title */}
                  <h3 className="blog-post-title">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="blog-post-desc">
                    {card.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="blog-post-footer">
                  <span className="blog-post-date">
                    {card.date}
                  </span>
                  <span className="blog-post-link">
                    Read More →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
