import React from "react";
import styles from "./MissionVision.module.css";
import misionImage from "@/assets/mision.png";
import visionImage from "@/assets/vision.png";

const MissionVision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {/* Mission Card */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={misionImage} alt="Our Mission" className={styles.image} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Our Mission</h3>
            <p className={styles.description}>
              To provide safe, effective, evidence-based support ensuring a
              positive, comfortable and luxurious experience for our clients by
              offering services that enhance overall physical and mental
              well-being both in their offices at work.
            </p>
            <div className={styles.footer}>
              <span className={styles.icon}>✓</span>
              <span className={styles.footerText}>
                Evidence-based treatments
              </span>
            </div>
            <div className={styles.footer}>
              <span className={styles.icon}>✓</span>
              <span className={styles.footerText}>
                Evidence-based treatments
              </span>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={visionImage} alt="Our Vision" className={styles.image} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Our Vision</h3>
            <p className={styles.description}>
              To be one of the leading pain wellness care clinics providing body
              transformation with our client-centered, fully clinical
              excellence. We envision offering better care where families'
              problems are associated, it empowers and treated holistically.
            </p>
            <div className={styles.footer}>
              <span className={styles.icon}>✓</span>
              <span className={styles.footerText}>
                Holistic wellness Integration
              </span>
            </div>
            <div className={styles.footer}>
              <span className={styles.icon}>✓</span>
              <span className={styles.footerText}>
                Holistic wellness Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
