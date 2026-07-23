import React from 'react';
import "./careers.css";

export default function CareersTestimonial() {
  return (
    <section className="careers-section-dark flex flex-col items-center justify-center px-6">
      <div className="careers-testimonial-card">
        
        {/* Stars */}
        <div className="careers-testimonial-stars">
          ★★★★★
        </div>
        
        {/* Quote */}
        <blockquote className="careers-testimonial-quote">
          &quot;Joining Zoiko Foods Corp meant joining something that was being built with real intention. The pace is fast, the work is meaningful, and you can see the direct impact of your decisions in the products on shelf.&quot;
        </blockquote>
        
        {/* Author */}
        <div className="text-white/80 text-sm font-semibold font-['Poppins'] text-center">
          Senior Product Developer
        </div>
        
        {/* Subtitle */}
        <div className="text-white/40 text-xs font-normal font-['Poppins'] mt-1 text-center">
          Zoiko Foods Corp · GingerNoxx™ Team
        </div>

      </div>
    </section>
  );
}
