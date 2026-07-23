"use client";

import { useState } from "react";
import "./bestsellers.css";

const faqs = [
  {
    question: "Which best seller should I start with?",
    answer:
      "Start with the product that matches how you want to use ginger. Choose a GingerNoxx beverage for refreshment, ginger tea or shots for a simple daily routine, ginger chews, cookies, or lozenges for quick snacking, and ginger powder, pastes, sauces, or spice blends for cooking. If you are unsure, start with a Best Seller Starter Bundle. It gives you a balanced introduction to GingerNoxx without overthinking.",
  },
  {
    question: "What is the most popular first purchase?",
    answer:
      "Most first-time customers start with easy-entry products: ginger drinks, ginger tea, ginger chews, ginger cookies, ginger lozenges, or a curated starter bundle. These products let you experience GingerNoxx flavor, warmth, and quality without needing a recipe, routine, or complicated choice.",
  },
  {
    question: "Which best sellers are lowest in sugar?",
    answer:
      "Lower-sugar choices are typically found in unsweetened or lightly sweetened teas, ginger powder, spice blends, and selected beverages where clearly labeled. Products such as honey, cookies, chews, and lozenges may contain more natural or added sugars, depending on the formulation. Always check the nutrition panel on the product page or packaging for the most accurate sugar information.",
  },
  {
    question: "Which are best for everyday use?",
    answer:
      "The best everyday choices are products that fit easily into a normal routine: ginger tea, selected ginger beverages, ginger shots, ginger powder, and versatile cooking ingredients such as pastes, sauces, oils, and spice blends. For easy carry or occasional use, ginger lozenges, chews, and snack packs are practical options.",
  },
  {
    question: "Which are giftable?",
    answer:
      "The strongest giftable choices are curated bundles, gift boxes, ginger honey, ginger tea selections, ginger cookies, ginger chews, lozenges, snack packs, and mixed discovery sets. For the safest choice, select a GingerNoxx gift bundle because it offers variety, feels complete, and works well for birthdays, thank-you gifts, holidays, corporate gifting, and first-time discovery.",
  },
  {
    question: "Which are vegan or halal-friendly?",
    answer:
      "Suitability depends on the exact formulation, ingredients, processing method, and certification status of each product. Some GingerNoxx products may be vegan or halal-friendly, while others, such as honey-based products, are not vegan. Always check the product page, packaging, allergen statement, and certification details before purchase.",
  },
  {
    question: "Can I subscribe to best sellers?",
    answer:
      "Yes. Selected GingerNoxx best sellers may be available for subscription where repeat use makes sense, including teas, beverages, powders, wellness-friendly daily-use products, lozenges, chews, and pantry staples. Subscription options should make it easy to save, reorder, adjust delivery frequency, pause, or cancel.",
  },
  {
    question: "Do best sellers change by season?",
    answer:
      "Yes. Best sellers may change as new flavors launch, seasonal bundles arrive, limited-edition products sell through, and customer preferences shift. Core favorites may remain available year-round, while holiday gift sets, seasonal flavors, and special discovery packs may be available for a limited time.",
  },
];

export default function BestSellersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-heading">
          <h2>Your Questions Answered</h2>
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div className="faq-item-wrapper" key={index}>
              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
              >
                <h3>{faq.question}</h3>

                <button
                  type="button"
                  className={`faq-btn ${
                    openIndex === index ? "active" : ""
                  }`}
                  aria-label="Toggle FAQ"
                  aria-expanded={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                >
                  {openIndex === index ? "−" : "+"}
                </button>
              </div>

              <div
                className={`faq-answer ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
