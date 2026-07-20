import "./why.css";

const reviews = [
  {
    title: "You can actually taste the ginger.",
    text: `I've tried every ginger drink on the market.
Most are just sugar water with a hint of
ginger. GingerNoxx is genuinely different —
you can feel it working and taste the real
ingredient. It's become a non-negotiable part
of my morning.`,
    name: "Amara J.",
    tag: "Daily Wellness",
  },
  {
    title: "Digestive difference from week one.",
    text: `I started using the ginger shots for digestive
support after a recommendation from a
nutritionist. The difference in my routine was
noticeable within the first week. The clean
label was important to me — no hidden
additives, exactly what it says.`,
    name: "Sarah O.",
    tag: "Digestive Support",
  },
  {
    title: `Finally a ginger product that's
serious.`,
    text: `As a chef I'm obsessive about where my
ingredients come from. I use GingerNoxx
spice blends in my professional kitchen
because the quality is consistent and the
formulation is honest. The Master Chef Blend
is extraordinary — it just works.`,
    name: "Marcus T.",
    tag: "Culinary Quality",
  },
];

export default function WhyTestimonials() {
  return (
    <section className="why-testimonials">
      <div className="container">

        <div className="testimonial-top">

          <h2>
            Trusted Globally for Taste,
            <br />
            <span>Quality, and Consistency</span>
          </h2>

          <div className="rating-box">

            <div className="rating-number">
              4.8
            </div>

            <div className="rating-stars">
              ★★★★★
            </div>

            <p className="rating-text">
              12,400+ verified reviews
            </p>

            <div className="divider"></div>

            <h3>
              Customers return for a reason.
            </h3>

            <p className="rating-description">
              A 95% repeat purchase rate isn't an accident — it's what happens when a product delivers exactly what it promises, every time. No artificial flavours. No compromised ingredients. Real ginger, real results.
            </p>

          </div>

        </div>

        <div className="testimonial-grid">

          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="testimonial-stars">
                ★★★★★
              </div>

              <div className="testimonial-title">
                {item.title}
              </div>

              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="testimonial-footer">

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.tag}</span>
                </div>

                <p className="verified">
                  ✓ Verified Purchase
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}