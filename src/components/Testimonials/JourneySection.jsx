import React from "react";
import styles from "./JourneySection.module.css";

const JourneySection = () => {
  return (
    <section className={styles.section}>
      {/* Background Blurs */}
      <div className={styles.blurLeft}></div>
      <div className={styles.blurRight}></div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Ready to Start Your Journey?</h2>
        <p className={styles.subtitle}>
          Join hundreds of satisfied clients who have transformed their bodies
          and their confidence with MINUS Wellness.
        </p>

        <div className={styles.buttonGroup}>
          <button className={`${styles.btn} ${styles.primaryBtn}`}>
            Book Consultation
          </button>

          <button className={`${styles.btn} ${styles.outlineBtn}`}>
            View Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
