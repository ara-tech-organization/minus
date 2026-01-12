import React, { useState, useRef } from "react";
import styles from "./BodyTreatment.module.css";

const BodyTreatment = () => {
  const [activeTab, setActiveTab] = useState("non-invasive");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const tabs = [
    { id: "non-invasive", label: "NON-INVASIVE" },
    { id: "minimally-invasive", label: "MINIMALLY INVASIVE" },
    { id: "surgical", label: "SURGICAL TREATMENTS" },
  ];

  const treatments = {
    "non-invasive": [
      {
        icon: "/src/assets/Background.png",
        title: "Therma Wrap",
        description: "Heat therapy for fat loss and skin tightening.",
      },
      {
        icon: "/src/assets/Background (1).png",
        title: "Slim Smart",
        description: "Enhances natural curves with targeted fat reduction.",
      },
      {
        icon: "/src/assets/Background (2).png",
        title: "Silhouette Refinement",
        description: "Redefines body contours for a sleek, refined look.",
      },
    ],
    "minimally-invasive": [
      {
        icon: "/src/assets/Background (3).png",
        title: "Lipo Sculpt",
        description: "Minimally invasive fat removal for precise contouring.",
      },
      {
        icon: "/src/assets/Background (4).png",
        title: "Body Lift",
        description: "Tightens and lifts sagging skin areas.",
      },
      {
        icon: "/src/assets/Background (5).png",
        title: "Ultra Shape",
        description: "Advanced ultrasound body shaping technology.",
      },
    ],
    surgical: [
      {
        icon: "/src/assets/Background (3).png",
        title: "Full Body Lift",
        description: "Comprehensive surgical body transformation.",
      },
      {
        icon: "/src/assets/Background (4).png",
        title: "Tummy Tuck",
        description: "Surgical abdomen contouring and tightening.",
      },
      {
        icon: "/src/assets/Background (5).png",
        title: "Premium Sculpt",
        description: "Advanced surgical body sculpting procedure.",
      },
    ],
  };

  const rightTreatments = [
    {
      icon: "/src/assets/Background (3).png",
      title: "Skin Fusion RF",
      description: "Radiofrequency technology tightens and tones skin.",
    },
    {
      icon: "/src/assets/Background (4).png",
      title: "V-Fit Contour",
      description: "Non-invasive body contouring for a sculpted silhouette.",
    },
    {
      icon: "/src/assets/Background (5).png",
      title: "CryoSculpt",
      description: "Freeze away fat cells with precision cooling technology.",
    },
  ];

  const handleMouseMove = (e) => {
    if (!isDragging.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.leftTreatments}>
          {treatments[activeTab].map((treatment, index) => (
            <div
              key={index}
              className={styles.treatmentCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.treatmentIcon}>
                <img
                  src={treatment.icon}
                  alt={treatment.title}
                  className={styles.iconImg}
                />
              </div>

              <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
              <p className={styles.treatmentDescription}>
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={styles.imageSlider}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className={styles.sliderContainer}>
            <div className={styles.beforeImage}>
              <img src="/assets/before.png" alt="Before" />
            </div>
            <div
              className={styles.afterImage}
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src="/assets/after.png" alt="After" />
            </div>
            <div
              className={styles.sliderHandle}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={styles.handleCircle}>
                <span className={styles.arrow}>‹</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.handleLine}></div>
            </div>
          </div>

          <button className={styles.navButton} onClick={prevSlide}>
            ‹
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={nextSlide}
          >
            ›
          </button>

          <div className={styles.dots}>
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentSlide === index ? styles.dotActive : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.rightTreatments}>
          {rightTreatments.map((treatment, index) => (
            <div
              key={index}
              className={styles.treatmentCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.treatmentIcon}>
                <img
                  src={treatment.icon}
                  alt={treatment.title}
                  className={styles.iconImg}
                />
              </div>

              <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
              <p className={styles.treatmentDescription}>
                {treatment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





export default BodyTreatment;
