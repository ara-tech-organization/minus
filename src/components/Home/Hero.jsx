import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Decorative geometric elements */}
        <div className={styles.decorCircle}></div>
        <div className={styles.decorLine}></div>

        {/* Main content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Advanced Aesthetic Care
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineTop}>Treatment-Focused</span>
            <span className={styles.headlineMain}>Slimming &</span>
            <span className={styles.headlineBottom}>Body Contouring</span>
          </h1>

          <p className={styles.subtext}>
            Experience scientific, non-invasive solutions designed to reshape, tone, 
            and restore balance. Personalized slimming, contouring, and holistic 
            wellness treatments tailored for visible and lasting results.
          </p>

          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              <span>Book a Consultation</span>
              <svg
                className={styles.arrow}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Side element */}
        <div className={styles.sideElement}>
          <div className={styles.sideNumber}>01</div>
          <div className={styles.sideText}>
            <div className={styles.sideTextLine}></div>
            <span>Your transformation starts here</span>
          </div>
        </div>

      </div>

      {/* Background pattern */}
      <div className={styles.bgPattern}></div>
    </section>
  );
};

export default Hero;
