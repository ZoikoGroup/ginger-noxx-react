"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    image: "/spice-blends/Culinary Blends.png",
    badge: "Most Popular",
    badgeClass: "popular",
    category: "Spice Blends · Chef Grade",
    title: "Master Chef Blend",
    description:
      "Complex, layered, and restaurant-grade — built for serious cooking that demands real depth.",
    reviews: "2,976 reviews",
    price: "$12.99 /jar",
  },
  {
    image: "/spice-blends/Culinary Blends.png",
    badge: "New",
    badgeClass: "new",
    category: "Spice Blends · Everyday",
    title: "Ginger-Garlic Seasoning",
    description:
      "A bold, everyday essential — clean, savory, and versatile across cuisines from breakfast to dinner.",
    reviews: "1,843 reviews",
    price: "$10.99 /jar",
  },
  {
    image: "/spice-blends/Culinary Blends.png",
    badge: "",
    badgeClass: "",
    category: "Spice Blends · Grill & Rub",
    title: "Ginger-Citrus Rub",
    description:
      "Bright, aromatic, and perfectly balanced for grilling, roasting, and pan-searing across proteins.",
    reviews: "1,204 reviews",
    price: "$12.99 /jar",
  },
  {
    image: "/spice-blends/Culinary Blends.png",
    badge: "Best Value",
    badgeClass: "value",
    category: "Spice Blends · Global Fusion",
    title: "Fusion Dry Mixes",
    description:
      "Global flavour systems in a jar — fast, consistent, and powerful across multiple cuisines.",
    reviews: "987 reviews",
    price: "$9.99 /jar",
  },
];

const filters = [
  "All Blends",
  "Everyday",
  "Grill & Rub",
  "Chef Grade",
  "Global Fusion",
];

export default function SpiceBlendsProducts() {
  return (
    <section className="spice-products-section">
      <div className="spice-products-container">
        {/* Heading */}

        <div className="spice-products-heading">
          <h2>
            <span>Our Best Loved </span>
            <span className="orange">Culinary Blends</span>
          </h2>

          <p>
            Every blend built around ginger. Every ingredient chosen with
            purpose.
            <br />
            Chef-grade quality for everyday cooking.
          </p>
        </div>

        {/* Filter Buttons */}

        <div className="spice-filter-buttons">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${index === 0 ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Cards */}

        <div className="spice-products-grid">
          {products.map((product, index) => (
            <div className="spice-product-card" key={index}>
              {/* Badge */}

              {product.badge && (
                <div className={`product-badge ${product.badgeClass}`}>
                  {product.badge}
                </div>
              )}

              {/* Product Image */}

              <div className="product-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="product-image"
                />
              </div>

              {/* Product Content */}

              <div className="product-content">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-review">
                  <span className="stars">★★★★★</span>

                  <span className="review-count">
                    {product.reviews}
                  </span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    {product.price}
                  </div>

                  <Link href="#" className="add-btn">
                    + Add
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
                {/* View All Button */}

        <div className="spice-products-action">
          <Link href="#" className="view-all-btn">
            View All Spice Blends
          </Link>
        </div>
      </div>
    </section>
  );
}