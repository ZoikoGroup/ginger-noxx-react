import React from 'react';
import "./wellness.css";

const trustItems = [
  "Clean Ingredients",
  "No Artificial Fillers",
  "Holistic Support",
  "Daily Ritual",
  "Halal & Vegan Certified"
];

export default function WellnessTrustBar() {
  return (
    <div className="wellness-trust-bar">
      {trustItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-2">
            <span className="text-[#ea580c] font-bold">•</span>
            <span>{item}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
