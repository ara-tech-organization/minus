import React from "react";
import styles from "./TrustProof.module.css";
import PatientA from "@/assets/r1.png";
import PatientB from "@/assets/r2.png";
import PatientC from "@/assets/r3.png";

const TrustProof = () => {
  const stats = [
    { number: "5000+", label: "Success Stories" },
    { number: "15+", label: "Advanced Technologies" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9", label: "Google Rating" },
  ];

  const results = [
    {
      id: 1,
      image: PatientA,
      patient: "Patient A",
      duration: "12 Weeks",
      treatment: "Targeted Abdominal Sculpting",
    },
    {
      id: 2,
      image: PatientB,
      patient: "Patient B",
      duration: "8 Weeks",
      treatment: "Lower Body Contouring",
    },
    {
      id: 3,
      image: PatientC,
      patient: "Patient C",
      duration: "16 Weeks",
      treatment: "Full Body Transformation",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Real Results. <span className={styles.titleItalic}>Real People.</span>
        </h2>
        <p className={styles.subtitle}>
          Verified transformations from our Velachery clinic.
        </p>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.resultsGrid}>
          {results.map((result) => (
            <div key={result.id} className={styles.resultCard}>
              <div className={styles.resultImageWrapper}>
                <img
                  src={result.image}
                  alt={`${result.patient} transformation`}
                  className={styles.resultImage}
                />
              </div>
              <div className={styles.resultInfo}>
                <h3 className={styles.resultPatient}>
                  {result.patient} — {result.duration}
                </h3>
                <p className={styles.resultTreatment}>{result.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
