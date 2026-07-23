import Image from "next/image";

const products = [
  {
    category: "Beverages",
    title: "Immunity Sparkling",
    description: "Daily support for a balanced lifestyle",
    price: "$4.99 /can",
    image: "/Image/green-heart.png",
  },
  {
    category: "Beverages",
    title: "Wellness Ginger Shot",
    description: "Concentrated daily wellness ritual",
    price: "$3.49 /shot",
    image: "/Image/icon-energy.png",
  },
  {
    category: "Snacks",
    title: "Digestive Ginger Chews",
    description: "Portable digestive comfort, anytime",
    price: "$5.99 /pack",
    image: "/Image/snacks.png",
  },
  {
    category: "Beverages",
    title: "Original Sparkling",
    description: "The everyday ginger ritual, balanced and clean",
    price: "$4.99 /can",
    image: "/Image/ginger.png",
  },
];

export default function WhyProducts() {
  return (
    <section className="why-products">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="products-title">
          <span>The Science, in Every </span>
          <span className="highlight">GingerNoxx Product</span>
        </h2>

        <p className="products-subtitle">
          Every product in the range is a direct expression of the Ginger-Fusion™
          formulation system — built for daily use, backed by tradition, and
          designed for modern life.
        </p>

        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.title}>

              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={56}
                  height={79}
                />
              </div>

              <div className="product-content">

                <span className="category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className="price">
                  {product.price}
                </div>

                <button>Add to Cart</button>

              </div>

            </div>
          ))}

        </div>

        <div className="products-btn">
          <button>
            Shop the GingerNoxx Collection →
          </button>
        </div>

      </div>
    </section>
  );
}