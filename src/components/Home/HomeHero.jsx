import React, { useState } from "react";
import styles from "./HomeHero.module.css";
import model from "@/assets/model-image.png";
const BodyContouringHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["content-wrapper"]}>
        {/* Left Content Section */}
        <div className={styles["left-content"]}>
          <div className={styles["clinic-badge"]}>
            <span className={styles.bullet}>●</span>
            <span className={styles["badge-text"]}>
              Premier Body Contouring Clinic
            </span>
          </div>

          <h1 className={styles["main-heading"]}>
            Treatment-
            <br />
            Focused
          </h1>

          <h2 className={styles["sub-heading"]}>
            <span className={styles["italic-text"]}>Slimming</span> &{" "}
            <span className={styles["italic-text"]}>Wellness</span>
          </h2>

          <p className={styles.description}>
            Achieve your dream physique with science-backed slimming solutions.
            We partner with you on your body transformation journey, helping you
            achieve the shape and confidence you desire.
          </p>

          <div className={styles["button-group"]}>
            <button
              className={styles["cta-button"]}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started Today
            </button>

            <button className={styles["services-button"]}>
              Our Services
              <svg
                className={styles["arrow-icon"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles["right-content"]}>
          <div className={styles["image-card"]}>
            <img
              src={model}
              alt="Body transformation success"
              className={styles["hero-image"]}
            />

            <div className={styles["success-badge"]}>
              <div className={styles["badge-number"]}>5k+</div>
              <div className={styles["badge-label"]}>SUCCESS STORIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContouringHero;
