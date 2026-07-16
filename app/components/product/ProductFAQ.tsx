"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does it taste like?",
    answer:
"GingerNoxx products are built around authentic ginger flavor: bright, aromatic, warming, and clean rather than artificial or one-dimensional. Depending on the product, the profile may be crisp and refreshing, smooth and gently spiced, citrus-forward, sweet, savory, or boldly ginger-led. Check the flavor notes and Ginger Intensity on the product page, or use Find Your Ginger Profile to discover the best match for your palate.",
  },
  {
    question: "Is it spicy?",
    answer:
"Some GingerNoxx products have a noticeable ginger kick, but ginger warmth is different from chile-pepper heat. Intensity varies by recipe—from mellow and approachable to bold, peppery, and lingering—so you can choose the level that suits you. The product page and package should identify the flavor profile or intensity where applicable.",
  },
  {
    question: "Does it contain sugar?",
    answer:
"Sugar content varies by product. GingerNoxx offers low-sugar choices, while other recipes may contain naturally occurring sugars or added sweeteners to achieve the intended flavor, texture, or format. For the exact amount, review the Nutrition Facts panel for total sugars, added sugars, serving size, and calories, and check the ingredient list for the sweetener used.",
  },
  {
    question: "How often should I drink it?",
    answer:
"Enjoy GingerNoxx beverages in the serving size shown on the label and as part of a varied, balanced diet. The right frequency depends on the specific drink, its sugar or caffeine content, your total diet, and your personal tolerance for ginger. If you are pregnant, have a medical condition, take medication, or are choosing a product for a child, ask a qualified healthcare professional for individualized guidance.",
  },
  {
    question: "How should it be stored?",
    answer:
"Follow the storage instructions on the exact GingerNoxx package. Unless the label says otherwise, keep unopened shelf-stable products in a cool, dry place away from direct sunlight and heat; refrigerate after opening when directed, reseal securely, and consume within the stated period. Do not use a product if the tamper seal is broken or the package is swollen, leaking, or otherwise damaged.",
  },
  {
    question: "Is it suitable for children?",
    answer:
"Some GingerNoxx foods and drinks may be suitable for children, but suitability depends on the product, the child’s age, serving size, spice intensity, sugar or caffeine content, ingredients, and allergies. Check the label and product page, choose an age-appropriate portion, and avoid giving concentrated or caffeinated products to children unless the product is specifically presented as suitable. Ask a pediatric healthcare professional when choosing for an infant, a very young child, or a child with dietary or medical needs.",
  },
  {
    question: "Is it vegan and halal-friendly?",
    answer:
"GingerNoxx offers vegan and halal-friendly products across its range. Because ingredients, production sites, and certification status can vary by SKU and market, verify the relevant vegan statement or halal certification mark on the package before purchase. Review the allergen statement as well, and contact GingerNoxx Customer Care with the product name and country if you need written confirmation.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          Your Questions,<br />
          <span>Answered</span>
        </h2>

        <div className="faq-search">
          <img src="/Image/search.png" alt="" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="faq-list">
          {filtered.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}