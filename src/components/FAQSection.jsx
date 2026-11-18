import { useState } from "react";
import "./FAQSection.css";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Theme Drive?",
      answer:
        "Theme Drive is an interactive website where you can switch between different visual themes and experiences.",
    },
    {
      question: "How do I change the theme?",
      answer:
        "Click on the Change Theme button in the navbar and select the theme you want to explore.",
    },
    {
      question: "Will the music change with the theme?",
      answer:
        "Yes. Each theme can have its own dedicated playlist designed to match its atmosphere and vibe.",
    },
    {
      question: "Can I use Theme Drive on mobile?",
      answer:
        "Yes. Theme Drive is designed to provide a smooth experience across desktop, tablet, and mobile devices.",
    },
  
{
  question: "How many themes are available?",
  answer:
    "Currently, Theme Drive features five themes: Deluxe Salon, Bus Driver, Papa's Classics, Fresh Drop, and Bartan & Beats.",
},

    {
      question: "Are more themes coming?",
      answer:
        "Yes. More themes and interactive experiences can be added to Theme Drive in the future.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <div className="faq-heading">
          <div className="faq-badge">✦ FREQUENTLY ASKED QUESTIONS</div>

          <h2>
            Got Questions?
            <span> We've Got Answers.</span>
          </h2>

          <p>
            Everything you need to know about the Theme Drive experience.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "faq-open" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-bottom">
          <span>Still curious?</span>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Explore Theme Drive ✦
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQSection;