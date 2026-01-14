import React, { useState } from "react";
import styles from "./Abdominoplasty.module.css";
import abdomino from "@/assets/abdomino.png";
const Abdominoplasty = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

 const faqs = [
  {
    id: 1,
    question: "How long does the recovery take?",
    answer:
      "Most people resume light activities within 2 weeks and return to normal routines within 6–8 weeks, depending on individual healing.",
  },
  {
    id: 2,
    question: "Is a tummy tuck a weight-loss procedure?",
    answer:
      "No, a tummy tuck is a body contouring surgery, not a weight-loss method. It is best suited for those at or near their ideal weight.",
  },
  {
    id: 3,
    question: "Can pregnancy affect the results?",
    answer:
      "Yes, future pregnancies can re-stretch the skin and muscles, so it’s best to consider the procedure after completing your family.",
  },
  {
    id: 4,
    question: "How long will the results last?",
    answer:
      "Results are long-term, provided you maintain a stable weight and healthy lifestyle.",
  },
];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img src={abdomino} alt="Abdominoplasty procedure" />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              ABDOMINOPLASTY
              <br />
              <span className={styles.subtitle}>(TUMMY TUCK)</span>
            </h1>
            <p className={styles.heroDescription}>
              Abdominoplasty, commonly known as a "tummy" tuck, is a body
              contouring procedure designed to remove excess skin and fat from
              the abdomen while tightening weakened or separated muscles. This
              creates a firmer, flatter midsection and a more toned appearance.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>START YOUR JOURNEY</button>
              <button className={styles.btnSecondary}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className={styles.idealSection}>
        <h2 className={styles.sectionTitle}>
          THE PROCEDURE IS IDEAL FOR INDIVIDUALS WHO HAVE
        </h2>
        <div className={styles.idealList}>
          <div className={styles.idealItem}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className={styles.idealText}>
              EXPERIENCED SIGNIFICANT WEIGHT LOSS, LEADING TO LOOSE, SAGGING
              SKIN.
            </p>
          </div>

          <div className={styles.idealItem}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className={styles.idealText}>
              UNDERGONE PREGNANCY, RESULTING IN ABDOMINAL MUSCLE SEPARATION
              (DIASTASIS RECTI).
            </p>
          </div>

          <div className={styles.idealItem}>
            <div className={styles.iconWrapper}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className={styles.idealText}>
              STRUGGLED WITH STUBBORN LOWER BELLY FAT AND SKIN LAXITY.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitleWhite}>WHY CHOOSE ABDOMINOPLASTY?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>
              CORE MUSCLE
              <br />
              STRENGTHENING
            </h3>
            <p className={styles.benefitDescription}>
              Repairs separated abdominal muscles
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>DEFINED MIDSECTION</h3>
            <p className={styles.benefitDescription}>
              Removes excess skin and stubborn fat
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>CONFIDENCE BOOST</h3>
            <p className={styles.benefitDescription}>
              Enhances overall body contour
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>
              SUSTAINABLE
              <br />
              TRANSFORMATION
            </h3>
            <p className={styles.benefitDescription}>
              Long-lasting results with proper care
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitleWhite}>FREQ. ASKED QUESTIONS</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                expandedFaq === index ? styles.faqExpanded : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className={styles.faqQuestion}>
                <span>{faq.question}</span>
                <span className={styles.faqToggle}>
                  {expandedFaq === index ? "-" : "+"}
                </span>
              </div>

              {expandedFaq === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className={styles.bookingSection}>
        <h2 className={styles.sectionTitle}>BOOK A CONSULTATION</h2>
        <div className={styles.bookingForm}>
          <div className={styles.formGrid}>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className={styles.formInput}
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="PHONE"
              className={styles.formInput}
              value={formData.phone}
              onChange={handleInputChange}
            />

            <div className={styles.inputWithIcon}>
              <input
                type="date"
                name="date"
                placeholder="MM/DD/YYYY"
                className={styles.formInput}
                value={formData.date}
                onChange={handleInputChange}
              />
              <span className={styles.inputIcon}></span>
            </div>
            <div className={styles.inputWithIcon}>
              <input
                type="time"
                name="time"
                placeholder="00:00 AM"
                className={styles.formInput}
                value={formData.time}
                onChange={handleInputChange}
              />
              <span className={styles.inputIcon}></span>
            </div>
            <button onClick={handleSubmit} className={styles.btnSubmit}>
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abdominoplasty;
