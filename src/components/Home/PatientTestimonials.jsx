import React, { useState } from "react";
import styles from "./PatientTestimonials.module.css";
import FacialContouring from "@/assets/Facial-contouring.png";

const PatientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: FacialContouring,
      patient: "Patient A",
      duration: "12 Weeks",
      treatment: "Targeted Abdominal Sculpting",
      type: "double",
    },
    {
      id: 2,
      image: FacialContouring,
      patient: "Patient B",
      duration: "8 Weeks",
      treatment: "Lower Body Contouring",
      type: "single",
    },
    {
      id: 3,
      image: FacialContouring,
      patient: "Patient C",
      duration: "16 Weeks",
      treatment: "Full Body Transformation",
      type: "single",
    },
    {
      id: 4,
      image: FacialContouring,
      patient: "Patient D",
      duration: "10 Weeks",
      treatment: "Facial Contouring",
      type: "single",
      },
    {
      id: 5,
      image: FacialContouring,
      patient: "Patient D",
      duration: "10 Weeks",
      treatment: "Facial Contouring",
      type: "single",
      },
    {
      id: 6,
      image: FacialContouring,
      patient: "Patient D",
      duration: "10 Weeks",
      treatment: "Facial Contouring",
      type: "single",
    },
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleCards = () => {
    const cards = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % testimonials.length;
    cards.push(testimonials[index]);
  }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            Real People,{" "}
            <span className={styles.titleItalic}>Real Results</span>
          </h2>
          <p className={styles.subtitle}>
            Verified patient transformations from our clinic.
          </p>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.arrowButton}
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={styles.arrowButton}
            onClick={handleNext}
            disabled={isAnimating}
            aria-label="Next"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {visibleCards.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${currentIndex}-${idx}`}
              className={`${styles.card} ${
                testimonial.type === "double"
                  ? styles.cardDouble
                  : styles.cardSingle
              }`}
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {testimonial.type === "double" ? (
                <div className={styles.doubleImageWrapper}>
                  <div className={styles.imageContainer}>
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.patient} before`}
                      className={styles.image}
                    />
                  </div>
                  {/* <div className={styles.imageContainer}>
                    <img
                      src={testimonial.imageAfter}
                      alt={`${testimonial.patient} after`}
                      className={styles.image}
                    />
                  </div> */}
                </div>
              ) : (
                <div className={styles.imageContainer}>
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.patient} before`}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.patientName}>
                  {testimonial.patient} - {testimonial.duration}
                </h3>
                <p className={styles.treatment}>{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;