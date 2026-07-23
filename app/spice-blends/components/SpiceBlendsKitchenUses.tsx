"use client";

import Image from "next/image";

const kitchenUses = [
  {
    icon: "/spice-blends/proteins-icon.png",
    title: "Proteins",
    description:
      "Chicken, fish, beef, tofu — versatile across every protein format.",
  },
  {
    icon: "/spice-blends/vegetables-icon.png",
    title: "Vegetables",
    description:
      "Roasting, sautéing, grilling — unlocks natural sweetness and depth.",
  },
  {
    icon: "/spice-blends/rice-icon.png",
    title: "Rice & Grains",
    description:
      "Instant flavour elevation for rice, quinoa, couscous, and more.",
  },
  {
    icon: "/spice-blends/sauces-icon.png",
    title: "Sauces & Marinades",
    description:
      "Build depth quickly — mix with oil for instant marinades.",
  },
  {
    icon: "/spice-blends/mealprep-icon.png",
    title: "Meal Prep",
    description:
      "Consistent, repeatable flavour for weekly meal preparation.",
  },
];

export default function SpiceBlendsKitchenUses() {
  return (
    <section className="spice-kitchen-section">
      <div className="spice-kitchen-container">

        <div className="spice-kitchen-heading">
          <h2>
            How These Blends Work <span className="orange">in Your Kitchen</span>
          </h2>
        </div>

        <div className="spice-kitchen-grid">

          {kitchenUses.map((item, index) => (

            <div className="spice-kitchen-card" key={index}>

              <div className="spice-kitchen-icon">

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="spice-kitchen-icon-img"
                />

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
                          </div>

          ))}

        </div>

      </div>
    </section>
  );
}