"use client";
import React, { useState } from 'react';
import './blog.css';

const categories = [
  "All Posts",
  "Lab Notes",
  "Wellness",
  "Recipes",
  "Behind the Scenes",
  "Stories"
];

export default function BlogNavigation() {
  const [active, setActive] = useState("All Posts");
  
  return (
    <section className="blog-nav-section flex justify-center px-6">
      <div className="w-full max-w-[1080px] flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`blog-category-pill ${isActive ? 'blog-category-active' : 'blog-category-inactive'}`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
}
