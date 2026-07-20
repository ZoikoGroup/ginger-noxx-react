import Image from "next/image";

const cards = [
  {
    icon: "/Image/shop.png",
    title: "Shop Best Sellers",
    text: "The most trusted GingerNoxx products. Chosen by 10,000+ customers across 5 markets.",
  },
  {
    icon: "/Image/profile.png",
    title: "Find Your Profile",
    text: "AI-powered personalisation. Get matched to your perfect GingerNoxx starting point.",
  },
  {
    icon: "/Image/partner.png",
    title: "Partner With Us",
    text: "Wholesale accounts, distribution partnerships, and retail deck available now.",
  },
  {
    icon: "/Image/platform.png",
    title: "The Innovation Platform",
    text: "Ginger-Fusion explained — the formulation system, the IP, and the category we created.",
  },
];

export default function StoryCTA() {
  return (
    <section className="story-cta">

      <div className="story-cta-container">

        <div className="story-cta-left">

          <h2>
            We Don't Follow Trends
            <br />
            We <span>Root Them in Ginger.</span>
          </h2>

          <p>
            The Ginger-Fusion platform is still expanding — into new products,
            new formats, new regions, and new expressions of the same
            foundational idea. What started as a question is becoming a
            globally scalable system. What started with the root is becoming a
            standard.
          </p>

          <div className="story-cta-buttons">

            <a href="#" className="btn-orange">
              Explore the Innovation Platform →
            </a>

            <a href="#" className="btn-outline">
              Shop Best Sellers
            </a>

          </div>

          <span className="story-note">
            It all starts with the root. But it doesn't end there.
          </span>

        </div>

        <div className="story-cta-right">

          {cards.map((item, index) => (

            <div className="cta-card" key={index}>

              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
              />

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
