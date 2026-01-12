import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is body slimming safe?",
      answer:
        "Yes, our treatments like CryoSculpt and AI-Robotic Sonic Slim are non-invasive and performed by trained professionals using FDA-approved technology.",
    },
    {
      question: "How long do the results last?",
      answer:
        "Results can last for several months to years, depending on your lifestyle and maintenance. We recommend following a healthy diet and exercise routine to maintain optimal results.",
    },
    {
      question: "How Soon will I get Result?",
      answer:
        "Most clients begin to see noticeable results within 2-4 weeks after their first treatment. Full results typically appear after 8-12 weeks as your body naturally processes the targeted fat cells.",
    },
    {
      question: "Can I combine different treatments?",
      answer:
        "Absolutely! Many clients achieve better results by combining complementary treatments. Our specialists will create a personalized treatment plan tailored to your specific goals and body type.",
    },
    {
      question: "Does Treatment Hurt?",
      answer:
        "Most of our treatments are painless or involve only minimal discomfort. You may experience mild sensations like cooling, warming, or tingling during the procedure, but these are generally well-tolerated.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndex === index ? styles.faqItemOpen : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                className={`${styles.icon} ${
                  openIndex === index ? styles.iconOpen : ""
                }`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              className={`${styles.faqAnswer} ${
                openIndex === index ? styles.faqAnswerOpen : ""
              }`}
            >
              <div className={styles.faqAnswerContent}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


