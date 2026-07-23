import React from 'react';
import "./careers.css";

const jobs = [
  {
    tag: "SALES & EXPANSION",
    title: "Account Manager — GingerNoxx™",
    location: "London HQ / Hybrid",
  },
  {
    tag: "TECHNICAL R&D",
    title: "Food Scientist — Beverage Formulations",
    location: "London HQ / On-site",
  },
  {
    tag: "E-COMMERCE & DIGITAL",
    title: "E-Commerce Manager — International Markets",
    location: "London HQ / Remote",
  },
  {
    tag: "SUPPLY CHAIN & LOGISTICS",
    title: "Global Supply Chain Lead",
    location: "London HQ / Hybrid",
  }
];

export default function CareersJobs() {
  return (
    <section className="careers-section-cream flex flex-col items-center px-6">
      <div className="w-full max-w-[1080px] flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="careers-heading">
          Current <br />
          <span className="careers-heading-orange">Opportunities</span>
        </h2>

        {/* Jobs List */}
        <div className="careers-jobs-list">
          {jobs.map((job, idx) => (
            <div key={idx} className="careers-job-card">
              <div className="flex flex-col text-left">
                <span className="careers-job-tag">{job.tag}</span>
                <h3 className="careers-job-title">{job.title}</h3>
                <span className="careers-job-location">📍 {job.location}</span>
              </div>
              <button className="careers-apply-btn">
                Apply →
              </button>
            </div>
          ))}
        </div>

        {/* View Open Positions Button */}
        <button className="mt-10 h-12 px-8 rounded-full border-2 border-[#D4621A] text-[#D4621A] hover:bg-[#D4621A] hover:text-white text-sm font-semibold transition-colors cursor-pointer bg-transparent">
          View Open Positions ↓
        </button>

      </div>
    </section>
  );
}
