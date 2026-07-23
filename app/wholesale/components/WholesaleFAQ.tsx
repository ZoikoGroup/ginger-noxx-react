"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are the minimum order quantities?",
    answer:
      "GingerNoxx wholesale products may be ordered by the case, while pallet orders, custom packaging, private-label products, and made-to-order items may require higher minimum volumes. The applicable minimum order quantity will be confirmed in your quotation before you commit to an order.",
  },
  {
    question: "How does GingerNoxx wholesale pricing work?",
    answer:
      "GingerNoxx wholesale pricing is based on the product, case configuration, order volume, purchase frequency, delivery destination, and any customization required. Larger or recurring orders may qualify for preferential commercial terms. Freight, taxes, customs duties, development fees, and other destination costs are identified separately unless the quotation states that they are included.",
  },
  {
    question: "How do I apply for a GingerNoxx wholesale account?",
    answer:
      "Submit the wholesale application with your business details, sales channels, estimated purchasing volume, product interests, and delivery market. GingerNoxx may also request business-registration, resale, tax, import, or credit information where applicable. Approved buyers receive the relevant product, pricing, ordering, and account-support information."
    },
  {
    question: "How long does wholesale account approval take?",
    answer:
      "GingerNoxx aims to review complete wholesale applications within three business days. Applications involving international trade, credit terms, regulated products, private-label development, or additional verification may take longer. Supplying complete and accurate information at the time of application helps avoid delays.",
  },
  {
    question: "Which GingerNoxx products are available for wholesale?",
    answer:
      "Wholesale availability may include GingerNoxx beverages and tea, ginger ingredients, spices and blends, confectionery and snacking products, health and functional wellness products, bundles, gifts, and seasonal collections. Availability, case quantities, packaging formats, shelf life, and market eligibility may differ by product and destination.",
  },
  {
    question: "Can I request product samples before placing a wholesale order?",
    answer:
      "Qualified wholesale buyers may request samples before placing a larger order. Sample availability, product selection, charges, shipping costs, and any credit toward a future purchase are confirmed by the GingerNoxx wholesale team. Custom or private-label prototypes follow a separate development and approval process.",
  },
  {
    question: "Does GingerNoxx offer private-label or white-label ginger products?",
    answer:
         "Yes. GingerNoxx considers private-label, white-label, co-branded, and custom product partnerships for qualified businesses. Opportunities may include selected formulations, packaging formats, labeling, gift collections, and ginger-based product concepts. Feasibility depends on minimum production volume, regulatory requirements, development cost, lead time, target market, and commercial fit.",
  },
  {
    question: "Which markets does GingerNoxx supply?",
    answer:
         "GingerNoxx evaluates wholesale supply opportunities in the United States, the United Kingdom, and selected international markets. Supply is subject to product availability, shipping feasibility, destination-country regulations, customs requirements, labeling rules, and any applicable import restrictions. Market eligibility is confirmed during quotation and order review.",
  },
  {
    question: "What are the shipping and delivery times for wholesale orders?",
    answer:
         "Wholesale lead times depend on stock availability, order size, packaging, production requirements, and destination. In-stock case orders generally move faster than pallet, export, custom, or private-label orders. GingerNoxx will provide an estimated dispatch window and delivery basis before the order is finalized; carrier transit times remain subject to the selected service and destination conditions.",
  },
  {
    question: "How do I place a wholesale order or request a quotation?",
    answer:
         "Complete the wholesale inquiry or account application and include your company details, product interests, quantities, destination, and required delivery timing. An approved GingerNoxx representative will confirm availability, minimums, pricing, shipping terms, payment requirements, and next steps in a written quotation or pro forma invoice.",
  },
];

export default function WholesaleFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="wholesale-faq">
      <div className="faq-container">
        <h2>
          Wholesale Questions Answered
        </h2>

        <div className="faq-line"></div>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
