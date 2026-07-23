import React from "react";

const testimonials = [
  {
    title: `"Subscription is so convenient — never worry about running out!"`,
    description:
      "I resisted subscribing for ages thinking it would be a hassle to manage. It's the opposite. I pick my delivery frequency, it arrives, I never have to think about reordering. The 15% saving adds up quickly too.",
    author: "A.J.",
    plan: "Beverage Sub",
  },
  {
    title: `"My family loves getting the Wellness Pack every month."`,
    description:
      "We signed up for the Family Subscription and haven't looked back. The packaging is premium, the recipe cards are a nice touch, and my kids actually get excited when the box arrives. Excellent product and experience.",
    author: "M.T.",
    plan: "Family Sub",
  },
  {
    title: `"The delivery is perfect, and the products are always fresh."`,
    description:
      "I've been on the Wellness Subscription for four months. The shots have become a non-negotiable part of my morning. I've skipped two deliveries when travelling — dead easy. Exactly what a subscription service should feel like.",
    author: "L.F.",
    plan: "Wellness Sub",
  },
];

const SubscriptionTestimonials = () => {
  return (
    <section className="subscription-testimonials-section">
      <div className="subscription-testimonials-container">
        <div className="subscription-testimonials-header">
          <h2 className="subscription-testimonials-title">
            What Our Subscribers{" "}
            <span className="highlight">Say About Us</span>
          </h2>
        </div>

        <div className="subscription-testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="subscription-testimonial-card" key={index}>
              <div className="subscription-stars">★★★★★</div>

              <div className="subscription-quote">
                <h3>{item.title}</h3>
              </div>

              <p className="subscription-description">
                {item.description}
              </p>

              <div className="subscription-footer">
                <div>
                  <h4>{item.author}</h4>
                  <span>{item.plan}</span>
                </div>

                <p className="subscription-verified">
                  ✓ Verified Subscriber
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTestimonials;