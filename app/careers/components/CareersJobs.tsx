import "./careers.css";

const jobs = [
  {
    department: "Marketing & Brand",
    title: "Senior Brand Manager — GingerNoxx™",
    location: "📍 Remote / UK",
    type: "⏰ Full-Time",
    extra: "💰 Competitive",
    badge: "New",
  },
  {
    department: "Culinary Innovation & R&D",
    title: "Food Scientist — Beverage Formulation",
    location: "📍 Sacramento, CA",
    type: "⏰ Full-Time",
    extra: "🔬 R&D",
    badge: "New",
  },
  {
    department: "Technology & Digital",
    title: "E-Commerce Manager — International Markets",
    location: "📍 London, UK",
    type: "⏰ Full-Time",
    extra: "💻 Digital",
  },
  {
    department: "Marketing & Brand",
    title: "Content & Social Media Lead",
    location: "📍 Remote",
    type: "⏰ Full-Time",
    extra: "✍️ Creative",
  },
];

export default function CareersJobs() {
  return (
    <section className="careers-jobs-section">
      <div className="careers-jobs-container">
        {/* Heading */}
        <h2 className="careers-jobs-heading">
          <span className="careers-jobs-title">
            Current
            <br />
          </span>
          <span className="careers-jobs-highlight">
            Opportunities
          </span>
        </h2>

        {/* Job Cards */}
        <div className="careers-jobs-list">
          {jobs.map((job) => (
            <div className="career-job-card" key={job.title}>
              <div className="career-job-left">
                <div className="career-job-category">
                  {job.department}
                </div>

                <h3>{job.title}</h3>

                <div className="career-job-meta">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.extra}</span>
                </div>
              </div>

              <div className="career-job-right">
                {job.badge && (
                  <div className="career-job-badge">
                    {job.badge}
                  </div>
                )}

                <a href="#" className="career-job-apply">
                  Apply →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="careers-jobs-footer">
          <a href="#" className="careers-jobs-button">
            View All Open Positions →
          </a>
        </div>
      </div>
    </section>
  );
}