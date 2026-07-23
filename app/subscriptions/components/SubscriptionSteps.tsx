import Image from "next/image";

const steps = [
  {
    number: "01",
    image: "/subscription/step-plan.png",
    title: "Choose Your Plan",
    description:
      "Pick the subscription that matches your lifestyle — Beverage, Wellness, or Family.",
  },
  {
    number: "02",
    image: "/subscription/step-frequency.png",
    title: "Set Your Frequency",
    description:
      "Choose delivery every 2, 4, or 6 weeks based on your consumption pace.",
  },
  {
    number: "03",
    image: "/subscription/step-delivery.png",
    title: "We Deliver",
    description:
      "Your GingerNoxx subscription arrives fresh, on time, and in premium packaging.",
  },
  {
    number: "04",
    image: "/subscription/step-control.png",
    title: "Full Control, Always",
    description:
      "Swap products, skip deliveries, pause, or cancel — all from your account dashboard.",
  },
];

const SubscriptionSteps = () => {
  return (
    <section className="subscription-steps">
      <div className="subscription-steps-container">
        <h2 className="subscription-steps-heading">
          Four Steps to <span>Your Ritual</span>
        </h2>

        <div className="subscription-steps-grid">
          {steps.map((step) => (
            <div className="subscription-step-card" key={step.number}>
              <div className="subscription-step-number">
                {step.number}
              </div>

              <Image
                src={step.image}
                alt={step.title}
                width={40}
                height={40}
                className="subscription-step-icon"
              />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSteps;