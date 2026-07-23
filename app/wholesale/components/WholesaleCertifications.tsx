import Image from "next/image";

export default function WholesaleCertifications() {
  const cards = [
    {
      icon: "/Image/halal.png",
      title: "HALAL Certified",
      text: `Full HALAL certification across the
entire GingerNoxx range, enabling
access to Islamic market
channels globally.`,
    },
    {
      icon: "/Image/vegan.png",
      title: "VEGAN Certified",
      text: `100% plant-based formulations
certified vegan across all SKUs —
no animal derivatives at any
production stage.`,
    },
    {
      icon: "/Image/clean-label.png",
      title: "Clean Label Standard",
      text: `Internal ingredient integrity
standard applied to every
product — no unnecessary
additives, full declaration, no
hidden compromises.`,
    },
    {
      icon: "/Image/iso.png",
      title: "ISO 22000",
      text: `Food Safety Management System
certification across all
manufacturing partners, ensuring
consistent quality control at
global scale.`,
    },
  ];

  return (
    <section className="wholesale-certifications">
      <div className="certifications-container">

        <h2>
          Built for Every
          <br />
          <span>Market and Channel</span>
        </h2>

        <div className="certification-grid">
          {cards.map((card, index) => (
            <div className="certification-card" key={index}>

              <div className="certification-icon">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={25}
                  height={25}
                />
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
