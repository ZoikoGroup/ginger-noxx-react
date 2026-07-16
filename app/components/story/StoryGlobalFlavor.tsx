import Image from "next/image";

const markets = [
  {
    flag: "/Image/us.png",
    city: "New York, USA",
    text: "The health-conscious millennial building a daily wellness ritual",
  },
  {
    flag: "/Image/gh.png",
    city: "Accra, Ghana",
    text: "The flavour explorer with deep cultural roots in ginger tradition",
  },
  {
    flag: "/Image/sg.png",
    city: "Singapore",
    text: "The foodie family that demands both taste and functional purpose",
  },
  {
    flag: "/Image/br.png",
    city: "Rio de Janeiro",
    text: "The athlete who needs real nutrition with real flavour, every day",
  },
];

export default function StoryGlobalFlavor() {
  return (
    <section className="story-global">
      <div className="story-global-container">

        {/* Heading */}
        <div className="story-global-heading">
          <h2>
            A Global Language <span>of Flavor</span>
          </h2>
        </div>

        {/* Content */}
        <div className="story-global-top">

          {/* Left */}
          <div className="story-global-left">

            <p>
              Ginger does not belong to one geography, one cuisine, or one
              consumer group. It moves across cultures with unusual fluency.
              It adapts. It connects. It belongs everywhere because it has
              always belonged to people.
            </p>

            <p>
              That is why GingerNoxx is built for global palates and modern
              lifestyles. This global orientation is not a slogan. It is built
              into the development process itself — through inclusive taste
              benchmarking across diverse palates, culturally respectful
              flavour mapping, and multi-region manufacturing infrastructure.
              GingerNoxx is made for the health-conscious millennial in New
              York, the flavour explorer in Accra, the foodie family in
              Singapore, and the athlete in Rio.
            </p>

            <div className="story-global-quote">
              <h3>
                "Different lives. Different tastes. One foundation."
              </h3>
            </div>

          </div>

          {/* Right */}
          <div className="story-global-right">
            <Image
              src="/Image/world-map.png"
              alt="World Map"
              fill
              className="world-map"
            />
          </div>

        </div>

        {/* Cards */}
        <div className="story-global-cards">
          {markets.map((item, index) => (
            <div className="market-card" key={index}>

              <Image
                src={item.flag}
                alt={item.city}
                width={48}
                height={48}
              />

              <h4>{item.city}</h4>

              <p>{item.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}