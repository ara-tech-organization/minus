import React from "react";
import styles from "./DoctorProfile.module.css";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img
              src="src\assets\doctor-raj.png"
              alt="Dr. Raj Palaniappan"
              className={styles.doctorImage}
            />
            <div className={styles.geometricPattern}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.header}>
            <span className={styles.label}>LEAD SPECIALIST</span>
          </div>

          <h1 className={styles.name}>Dr. Raj Palaniappan</h1>

          <p className={styles.subtitle}>
            MEDICAL ADVISOR & LEAD BARIATRIC AND ROBOTIC SURGEON
          </p>

          <p className={styles.description}>
            Dr. Raj Palaniappan is a pioneer in the field of metabolic and
            bariatric surgery. With over two decades of experience, he leads our
            clinical team with a focus on integrating advanced robotic
            technology with compassionate patient care.
          </p>

          <p className={styles.expertise}>
            His expertise extends to complex body contouring procedures,
            ensuring that every patient achieves their desired aesthetic goals
            safely and effectively. He is a frequent speaker at international
            medical conferences and a mentor to aspiring surgeons.
          </p>

          <button
            className={styles.button}
            onClick={() => navigate("/viewprofile")}
          >
            View Full Profile
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
