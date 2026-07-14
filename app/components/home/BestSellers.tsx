import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="container">

       <div className="section-heading">
  <span className="badge">FEATURED PRODUCTS</span>

  <h2>
    Our Best <span className="sellers-text">Sellers</span>
  </h2>
</div>
        <div className="categories">
          <button className="active">All</button>
          <button>Energy</button>
          <button>Immunity</button>
          <button>Family</button>
          <button>Cooking</button>
          <button>Low Sugar</button>
        </div>

        <div className="products">

          <ProductCard
            image="/Image/product1.png.png"
            category="BEVERAGES"
            title="Original Sparkling"
            price="$12.99"
            unit="/can"
          />

          <ProductCard
            image="/Image/product2.png.png"
            category="CONDIMENTS"
            title="Ginger Fire Sauce"
            price="$9.99"
            unit="/bti"
          />

          <ProductCard
            image="/Image/product3.png.png"
            category="SNACKS"
            title="Ginger Energy Chews"
            price="$14.99"
            unit="/pack"
          />

          <ProductCard
            image="/Image/product4.png.png"
            category="SPICES"
            title="Master Chef Blend"
            price="$16.99"
            unit="/jar"
          />

        </div>

        <button className="view-range">
          View Full Range →
        </button>

      </div>
    </section>
  );
}