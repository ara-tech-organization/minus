import React, { useState, useRef } from "react";
import styles from "./BodyTreatment.module.css";
import bg0 from "@/assets/Background.png";
import bg1 from "@/assets/Background (1).png";
import bg2 from "@/assets/Background (2).png";
import bg3 from "@/assets/Background (3).png";
import bg4 from "@/assets/Background (4).png";
import bg5 from "@/assets/Background (5).png";

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
        icon: bg0,
        title: "Therma Wrap",
        description: "Heat therapy for fat loss and skin tightening.",
      },
      {
        icon: bg1,
        title: "Slim Smart",
        description: "Enhances natural curves with targeted fat reduction.",
      },
      {
        icon: bg2,
        title: "Silhouette Refinement",
        description: "Redefines body contours for a sleek, refined look.",
      },
    ],
    "minimally-invasive": [
      {
        icon: bg3,
        title: "Lipo Sculpt",
        description: "Minimally invasive fat removal for precise contouring.",
      },
      {
        icon: bg4,
        title: "Body Lift",
        description: "Tightens and lifts sagging skin areas.",
      },
      {
        icon: bg5,
        title: "Ultra Shape",
        description: "Advanced ultrasound body shaping technology.",
      },
    ],
    surgical: [
      {
        icon: bg3,
        title: "Full Body Lift",
        description: "Comprehensive surgical body transformation.",
      },
      {
        icon: bg4,
        title: "Tummy Tuck",
        description: "Surgical abdomen contouring and tightening.",
      },
      {
        icon: bg5,
        title: "Premium Sculpt",
        description: "Advanced surgical body sculpting procedure.",
      },
    ],
  };

  const rightTreatments = [
    {
      icon: bg3,
      title: "Skin Fusion RF",
      description: "Radiofrequency technology tightens and tones skin.",
    },
    {
      icon: bg4,
      title: "V-Fit Contour",
      description: "Non-invasive body contouring for a sculpted silhouette.",
    },
    {
      icon: bg5,
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
              <img src="src/assets/before.png" alt="Before" />
            </div>
            <div
              className={styles.afterImage}
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src="src/assets/after.png" alt="After" />
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
