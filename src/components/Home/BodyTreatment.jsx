import React, { useState, useRef } from "react";
import styles from "./BodyTreatment.module.css";

// Treatment icons
import bg0 from "@/assets/Background.png";
import bg1 from "@/assets/Background (1).png";
import bg2 from "@/assets/Background (2).png";
import bg3 from "@/assets/Background (3).png";
import bg4 from "@/assets/Background (4).png";
import bg5 from "@/assets/Background (5).png";

// Before/After images
import inbefore from "@/assets/in-before.png";
import inafter from "@/assets/in-after.png";
import nonbefore from "@/assets/non-before.png";
import nonafter from "@/assets/non-after.png";
import surgbefore from "@/assets/surg-before.png";
import surgafter from "@/assets/surg-after.png";
const BodyTreatment = () => {
  const [activeTab, setActiveTab] = useState("non-invasive");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Tabs
  const tabs = [
    { id: "non-invasive", label: "NON-INVASIVE" },
    { id: "minimally-invasive", label: "MINIMALLY INVASIVE" },
    { id: "surgical", label: "SURGICAL TREATMENTS" },
  ];

  // Treatments grouped by tab
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
      {
        icon: bg1,
        title: "Skin Removal",
        description: "Removes excess skin for a smoother contour.",
      },
    ],
  };

  // Before/after sets
  const beforeAfterSets = {
    "non-invasive": [{ before: inbefore, after: inafter }],

    "minimally-invasive": [{ before: nonbefore, after: nonafter }],

    surgical: [{ before: surgbefore, after: surgafter }],
  };

  const currentBefore = beforeAfterSets[activeTab][currentSlide].before;
  const currentAfter = beforeAfterSets[activeTab][currentSlide].after;

  // SPLIT logic (auto 3/3, 2/1, 2/2 depending on length)
  const activeTreatments = treatments[activeTab];
  const leftCount = Math.ceil(activeTreatments.length / 2);
  const leftSide = activeTreatments.slice(0, leftCount);
  const rightSide = activeTreatments.slice(leftCount);

  // Slider movement logic
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % beforeAfterSets[activeTab].length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) =>
        (prev - 1 + beforeAfterSets[activeTab].length) %
        beforeAfterSets[activeTab].length
    );

  return (
    <div className={styles.container}>
      {/* Tabs */}
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
        {/* LEFT SIDE LIST */}
        <div className={styles.leftTreatments}>
          {leftSide.map((t, i) => (
            <div
              key={i}
              className={styles.treatmentCard}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.treatmentIcon}>
                <img src={t.icon} alt={t.title} className={styles.iconImg} />
              </div>
              <h3 className={styles.treatmentTitle}>{t.title}</h3>
              <p className={styles.treatmentDescription}>{t.description}</p>
            </div>
          ))}
        </div>

        {/* BEFORE-AFTER SLIDER */}
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
              <img src={currentBefore} alt="Before" />
            </div>

            <div
              className={styles.afterImage}
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src={currentAfter} alt="After" />
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

          {/* <button className={styles.navButton} onClick={prevSlide}>
            ‹
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={nextSlide}
          >
            ›
          </button> */}

          <div className={styles.dots}>
            {beforeAfterSets[activeTab].map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  currentSlide === i ? styles.dotActive : ""
                }`}
                onClick={() => setCurrentSlide(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE LIST */}
        <div className={styles.rightTreatments}>
          {rightSide.map((t, i) => (
            <div
              key={i}
              className={styles.treatmentCard}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.treatmentIcon}>
                <img src={t.icon} alt={t.title} className={styles.iconImg} />
              </div>
              <h3 className={styles.treatmentTitle}>{t.title}</h3>
              <p className={styles.treatmentDescription}>{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyTreatment;
