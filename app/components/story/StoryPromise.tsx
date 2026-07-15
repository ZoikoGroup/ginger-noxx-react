import Image from "next/image";

const promises = [
  {
    icon: "/Image/flavour-first.png",
    title: "Bold, Global Flavor",
  },
  {
    icon: "/Image/clean.png",
    title: "Clean, Functional Ingredients",
  },
  {
    icon: "/Image/Ingredient-Integrity.png",
    title: "Culinary Innovation",
  },
  {
    icon: "/Image/global-inclusive.png",
    title: "Planet-Positive Values",
  },
  {
    icon: "/Image/ginger.png",
    title: "Unmistakable Ginger Foundation",
  },
];

export default function StoryPromise() {
  return (
    <section className="story-promise">
      <div className="story-promise-container">

        <span className="story-promise-tag">
          THE PROMISE
        </span>

        <h2>
          Every GingerNoxx Product Carries
          <br />
          <span>the Same Commitment</span>
        </h2>

        <div className="promise-grid">

          {promises.map((item, index) => (
            <div className="promise-card" key={index}>

              <Image
                src={item.icon}
                alt={item.title}
                width={28.8}
                height={40}
              />

              <h4>{item.title}</h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}