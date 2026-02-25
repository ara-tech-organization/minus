import React from "react";
import styles from "./TreatmentsHero.module.css";
import Treatmenthero from "@/assets/treatment-hero.png";

const TreatmentsHero = () => {
  return (
    <div id="treatments" className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <img src={Treatmenthero} alt="Treatments" className={styles.heroImage} />

      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.badge}>CLINICAL EXCELLENCE</div>
          <h1 className={styles.title}>Treatments</h1>
          <p className={styles.description}>
            Explore a wide range of advanced slimming and body contouring
            <br />
            solutions tailored to your unique physiology. From non-invasive
            <br />
            sculpting to surgical transformations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsHero;
