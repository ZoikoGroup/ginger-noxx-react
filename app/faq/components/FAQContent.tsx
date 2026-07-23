"use client";

import { useState } from "react";
import "./faq.css";

const faqSections = [
  {
    title: "Taste & Flavour",
    count: 3,
    questions: [
      "What does GingerNoxx taste like?",
      "Is it spicy?",
      "How are the flavours different across product categories?",
    ],
  },
  {
    title: "How to Use",
    count: 3,
    questions: [
      "How do I use GingerNoxx products?",
      "Is it suitable for kids?",
      "When is the best time to drink GingerNoxx beverages?",
    ],
  },
  {
    title: "Dietary & Lifestyle",
    count: 3,
    questions: [
      "Are GingerNoxx products vegan and halal?",
      "Do products contain added sugar or artificial ingredients?",
      "Are products gluten-free?",
    ],
  },
  {
    title: "Storage & Shelf Life",
    count: 2,
    questions: [
      "How long do GingerNoxx products last?",
      "How should GingerNoxx products be stored?",
    ],
  },
  {
    title: "Orders & Delivery",
    count: 3,
    questions: [
      "Where can I buy GingerNoxx?",
      "How long does delivery take?",
      "What is your returns policy?",
    ],
  },
  {
    title: "Sourcing & Ethics",
    count: 2,
    questions: [
      "Where does your ginger come from?",
      "Is GingerNoxx environmentally responsible?",
    ],
  },
];

export default function FAQContent() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="faq-content-section">
      <div className="faq-content-container">

        {/* Sidebar */}

        <aside className="faq-sidebar">
          <h4 className="faq-sidebar-heading">
            Categories
          </h4>

          <div className="faq-sidebar-menu">
            {faqSections.map((section, index) => (
              <button
                key={section.title}
                className={`faq-sidebar-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        {/* FAQ */}

        <div className="faq-list">

          {faqSections.map((section) => (
            <div
              className="faq-group"
              key={section.title}
            >
              <div className="faq-group-header">
                <h3>{section.title}</h3>

                <span>
                  {section.count}{" "}
                  {section.count > 1 ? "questions" : "question"}
                </span>
              </div>

              {section.questions.map((question) => {
                const isOpen = openQuestion === question;

                return (
                  <div
                    className="faq-item"
                    key={question}
                  >
                    <button
                      className="faq-question"
                      onClick={() =>
                        setOpenQuestion(
                          isOpen ? null : question
                        )
                      }
                    >
                      <span>{question}</span>

                      <span className="faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>
                          Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                          Replace this with the final FAQ
                          answer from your content team.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}