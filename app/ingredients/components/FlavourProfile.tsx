import "./ingredients.css";

const flavourProfiles = [
  {
    id: 1,
    image: "/ingredients/flavour-1.png",
    title: "Bold and Fiery",
    description: (
      <>
        Strong ginger heat with chili depth.
                Marinades, stir-fries, glazes, hot
              sauces.
      </>
    ),
  },
  {
    id: 2,
    image: "/ingredients/flavour-2.png",
    title: "Aromatic and Herbal",
    description: (
      <>
        Ginger-forward spice complexity with
                earthy undertones. Soups, braises,
                curries.
      </>
    ),
  },
  {
    id: 3,
    image: "/ingredients/flavour-3.png",
    title: "Bright and Citrus",
    description: (
      <>
        Lemon and ginger together.
                Dressings, marinades, light fish and
                grain dishes.
      </>
    ),
  },
  {
    id: 4,
    image: "/ingredients/flavour-4.png",
    title: "Sweet and Warm",
    description: (
      <>
        Ginger with honey warmth. Glazes,
 baking, sweet-savoury crossover dishes.
      </>
    ),
  },
];

const FlavourProfile = () => {
  return (
    <section className="flavour-profile-section">
      <div className="flavour-profile-container">
        <span className="flavour-profile-subtitle">
          FIND YOUR FLAVOUR
        </span>

        <h2 className="flavour-profile-title">
          Find Your Flavour Profile
        </h2>

        <div className="flavour-profile-divider"></div>

        <p className="flavour-profile-description">
          GingerNoxx ingredients span four distinct flavour territories.
                  Find which speaks to your cooking.
        </p>

        <div className="flavour-profile-grid">
          {flavourProfiles.map((item) => (
            <div className="flavour-profile-card" key={item.id}>
              <div className="flavour-profile-icon">
                <img src={item.image} alt={item.title} />
              </div>

              <h3 className="flavour-profile-card-title">
                {item.title}
              </h3>

              <p className="flavour-profile-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavourProfile;