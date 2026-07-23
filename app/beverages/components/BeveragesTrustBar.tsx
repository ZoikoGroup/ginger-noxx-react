import React from 'react';
import "./beverages.css";

const items = [
  { text: "Real Ginger", font: "font-bold" },
  { text: "No Artificial Additives", font: "font-bold" },
  { text: "Halal & Vegan Certified", font: "font-bold" },
  { text: "4.9 Stars · 6,200+ Reviews", font: "font-semibold" },
  { text: "Free UK Delivery Over £35", font: "font-semibold" }
];

export default function BeveragesTrustBar() {
  return (
    <div className="beverages-trust-bar">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <div className="w-1.5 h-1.5 bg-orange-600 rounded-xs shrink-0" />}
          <span className={`text-stone-600 text-xs font-['Poppins'] ${item.font}`}>
            {item.text}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
