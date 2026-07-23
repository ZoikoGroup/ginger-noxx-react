"use client";

import { useState } from "react";

const faqData = [
  {
    category: "Taste & Flavour",
    questions: [
      { q: "What does GingerNoxx taste like?", a: "GingerNoxx has a rich, earthy, and spicy ginger flavor with natural sweetness and aromatic undertones." },
      { q: "Is it spicy?", a: "Yes, it has a pleasant, warm spice characteristic of high-quality ginger, but it is well-balanced." },
      { q: "How are the flavours different across product categories?", a: "Our different categories emphasize varying profiles, from robust and spicy to mild and soothing, depending on the blend." }
    ]
  },
  {
    category: "How to Use",
    questions: [
      { q: "How do I use GingerNoxx products?", a: "Our products can be enjoyed directly, mixed with warm water, or added to your favorite beverages and recipes." },
      { q: "Is it suitable for kids?", a: "While ginger is generally safe, we recommend consulting a pediatrician for children under 5 due to the spicy flavor profile." },
      { q: "When is the best time to drink GingerNoxx beverages?", a: "It can be enjoyed any time, but many prefer it in the morning for a refreshing start or after meals to aid digestion." }
    ]
  },
  {
    category: "Dietary & Lifestyle",
    questions: [
      { q: "Are GingerNoxx products vegan and halal?", a: "Yes, all our products are 100% vegan and halal certified." },
      { q: "Do products contain added sugar or artificial ingredients?", a: "We use only natural ingredients with no artificial preservatives. Sweetened varieties use natural sweeteners." },
      { q: "Are products gluten-free?", a: "Yes, all GingerNoxx products are inherently gluten-free." }
    ]
  },
  {
    category: "Storage & Shelf Life",
    questions: [
      { q: "How long do GingerNoxx products last?", a: "Unopened products have a shelf life of up to 12 months. Once opened, please consume within 30 days." },
      { q: "How should GingerNoxx products be stored?", a: "Store in a cool, dry place away from direct sunlight. Refrigeration is recommended after opening." }
    ]
  },
  {
    category: "Orders & Delivery",
    questions: [
      { q: "Where can I buy GingerNoxx?", a: "You can purchase directly from our website or at select retail partners listed on our 'Where to Buy' page." },
      { q: "How long does delivery take?", a: "Standard delivery typically takes 3-5 business days within the continental US." },
      { q: "What is your returns policy?", a: "We offer a 30-day satisfaction guarantee. If you're not happy, contact us for a full refund." }
    ]
  },
  {
    category: "Sourcing & Ethics",
    questions: [
      { q: "Where does your ginger come from?", a: "We ethically source our ginger from certified organic farms in Peru and India." },
      { q: "Is GingerNoxx environmentally responsible?", a: "Yes, we are committed to sustainable farming practices and use eco-friendly, recyclable packaging." }
    ]
  }
];

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  const scrollToCategory = (categoryName: string) => {
    setActiveCategory(categoryName);
    const element = document.getElementById(`category-${categoryName.replace(/\s+/g, '-')}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex justify-center bg-orange-50">
      <div 
        style={{ width: '1440px', paddingLeft: '210px', paddingTop: '148px', paddingBottom: '96px' }} 
        className="flex"
      >
        
        {/* Sidebar Categories */}
        <div style={{ width: '224px' }} className="flex-shrink-0">
          <div className="sticky top-24">
            <h3 style={{ letterSpacing: '2.5px' }} className="text-orange-600 text-sm font-semibold font-['Poppins'] uppercase leading-4 mb-6">
              Categories
            </h3>
            <div className="flex flex-col space-y-2">
              {faqData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => scrollToCategory(cat.category)}
                  style={{ width: '224px', height: '36px' }}
                  className={`rounded-lg relative transition-colors duration-200 ${
                    activeCategory === cat.category
                      ? "bg-orange-600/10"
                      : "hover:bg-orange-600/5"
                  }`}
                >
                  <div 
                    style={{ left: '14px', top: '7px' }}
                    className={`absolute text-base font-['Poppins'] leading-5 ${
                      activeCategory === cat.category 
                        ? "text-orange-600 font-semibold" 
                        : "text-stone-600 font-medium"
                    }`}
                  >
                    {cat.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gap between sidebar and content */}
        <div style={{ width: '52px' }} className="flex-shrink-0"></div>

        {/* FAQ List */}
        <div style={{ width: '744px' }}>
          {faqData.map((section) => (
            <div 
              key={section.category} 
              id={`category-${section.category.replace(/\s+/g, '-')}`}
              className="mb-14 scroll-mt-24"
            >
              <div 
                style={{ width: '744px', height: '44px' }} 
                className="border-b-2 border-orange-600 relative mb-4 flex items-center"
              >
                <div style={{ gap: '22px' }} className="flex items-center absolute inset-0">
                   <div className="text-stone-900 text-base font-bold font-['Poppins'] leading-7">{section.category}</div>
                   <div className="text-stone-500 text-sm font-medium font-['Poppins'] leading-4">{section.questions.length} questions</div>
                </div>
              </div>
              
              <div className="flex flex-col">
                {section.questions.map((item) => (
                  <div key={item.q} style={{ width: '744px' }} className="border-b border-orange-100 flex flex-col">
                    <button
                      onClick={() => toggleQuestion(item.q)}
                      style={{ width: '744px', height: '64px' }}
                      className="relative focus:outline-none"
                    >
                      <div style={{ left: '0', top: '17.5px' }} className="absolute text-stone-900 text-base font-medium font-['Poppins'] text-left pr-12">
                        {item.q}
                      </div>
                      <div style={{ left: '720px', top: '18px' }} className="absolute text-orange-600 text-lg font-semibold font-['Poppins']">
                        {openQuestion === item.q ? "−" : "+"}
                      </div>
                    </button>
                    
                    {/* Answer Area */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openQuestion === item.q ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-stone-600 font-['Poppins'] text-sm leading-relaxed pr-8">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

