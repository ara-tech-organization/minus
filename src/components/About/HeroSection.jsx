import React from "react";
import styles from "./HeroSection.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <p className={styles.subtitle}>PREMIUM CLINICAL CARE</p>
        <h1 className={styles.title}>
          Choose the <span className={styles.highlight}>Right Path</span>
          <br />
          for Your Body
          <br />
          Transformation
        </h1>
        <p className={styles.description}>
          Experience world-class infrastructure and cutting-edge technology
          <br />
          designed to sculpt your silhouette. We combine medical expertise with
          <br />
          aesthetic artistry to deliver results that redefine your confidence.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.primaryBtn}
            onClick={() => {
              window.location.href = "/#contact";
            }}
          >
            Book an Appointment
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={() => {
              window.location.href = "/#treatments";
            }}
          >
            Learn More <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
