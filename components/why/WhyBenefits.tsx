import Image from "next/image";

const benefits = [
  {
    image: "/Image/icon-energy.png",
    label: "Energy Support",
    title: "Natural Vitality Through the Day",
    description:
      "Traditionally used to help maintain natural vitality throughout the day.",
  },
  {
    image: "/Image/immune.png",
    label: "Immune Support",
    title: "Supporting Your Body's Natural Defence",
    description:
      "Associated with naturally occurring compounds studied for their role in supporting immune function.",
  },
  {
    image: "/Image/clean-design.png",
    label: "Digestive Support",
    title: "Comfort, Naturally",
    description:
      "Widely used across cultures to support digestive comfort.",
  },
  {
    image: "/Image/inflammatory.png",
    label: "Inflammatory Balance",
    title: "Bioactive Compounds at Work",
    description:
      "Contains bioactive compounds studied for their role in normal inflammatory processes.",
  },
];

export default function WhyBenefits() {
  return (
    <section className="why-benefits">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="benefits-heading">
          <span>Naturally Supported. </span>
          <span className="highlight">Thoughtfully Described.</span>
        </h2>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>

              <div className="benefit-icon">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <p className="benefit-label">{item.label}</p>

                <h3 className="benefit-title">
                  {item.title}
                </h3>

                <p className="benefit-description">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        <div className="benefit-note">

  <div className="note-icon">
    <Image
      src="/Image/warning.png"
      alt="Warning"
      width={24}
      height={24}
    />
  </div>

  <p>
    All benefit claims on this page are expressed in compliance with
    FDA, UK ASA, and EU EFSA guidelines. GingerNoxx makes no claims
    to treat, prevent, or cure any medical condition. Individual
    results may vary. These statements have not been evaluated by
    the relevant regulatory authorities.
  </p>

</div>

      </div>
    </section>
  );
}