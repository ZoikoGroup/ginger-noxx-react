import React from 'react';
import "./stockists.css";

export default function StockistsCTA() {
  return (
    <section className="stockists-cta-section px-4">
      <div className="w-full max-w-[888px] mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="stockists-cta-title">
          Want to Stock GingerNoxx<span>™</span>?
        </h2>

        {/* Subtitle */}
        <p className="stockists-cta-sub">
          If you&apos;re a retailer, cafe, wellness shop, or food hall interested in carrying GingerNoxx products — we&apos;d love to hear from you. Our trade team responds within 2 business days.
        </p>

        {/* Buttons */}
        <div className="stockists-cta-buttons">
          <button className="stockists-cta-btn-white">
            Apply to Become a Stockist
          </button>
          <button className="stockists-cta-btn-outline">
            Contact Our Trade Team
          </button>
        </div>

      </div>
    </section>
  );
}
