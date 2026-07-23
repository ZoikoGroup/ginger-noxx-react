import React from 'react';
import "./collective.css";

export default function CollectiveGallery() {
  const cards = Array.from({ length: 8 });

  return (
    <section className="coll-section-white flex flex-col items-center px-6">
      <div className="w-full max-w-[1140px] flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="coll-heading">
          What the Collective <span className="coll-heading-orange">Is Making</span>
        </h2>

        {/* 8 Image Cards Grid (4x2) */}
        <div className="coll-gallery-grid">
          {cards.map((_, idx) => (
            <div key={idx} className="coll-gallery-card">
              <span className="coll-gallery-label">Social Media Pics</span>
            </div>
          ))}
        </div>

        {/* Share Button */}
        <button className="coll-gallery-btn">
          Share Your #GingerNoxx Moment
        </button>

      </div>
    </section>
  );
}
