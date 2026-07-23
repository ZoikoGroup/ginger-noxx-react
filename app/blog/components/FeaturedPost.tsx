import React from 'react';
import './blog.css';

export default function FeaturedPost() {
  return (
    <section className="blog-featured-section flex justify-center px-6">
      <div className="blog-featured-card">
        
        {/* Left Image Column */}
        <div className="blog-featured-img-col">
          <img 
            className="w-full h-full object-cover absolute inset-0" 
            src="/blog/featured-article.png" 
            alt="Featured Article" 
          />
        </div>

        {/* Right Content Column */}
        <div className="blog-featured-content-col">
          {/* Tag Badge */}
          <div className="blog-featured-badge">
            ✦ FEATURED · LAB NOTES
          </div>

          {/* Title */}
          <h2 className="blog-featured-title">
            How We Built the Ginger-Fusion™ System From the Ground Up
          </h2>

          {/* Excerpt */}
          <p className="blog-featured-excerpt">
            Inside the formulation philosophy that transformed ginger from a familiar ingredient into the foundational architecture of a new global food category. The full story of how structure, not novelty, became the operating principle.
          </p>

          {/* Meta & Link Row */}
          <div className="blog-featured-meta">
            <span className="font-semibold text-white/90">GingerNoxx R&amp;D Team</span>
            <span>·</span>
            <span>March 2026</span>
            <span>·</span>
            <a href="#" className="text-[#D9531E] hover:text-[#fb923c] transition-colors font-bold">
              Read Article →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
