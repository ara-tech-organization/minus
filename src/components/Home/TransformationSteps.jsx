import React from "react";
import styles from "./TransformationSteps.module.css";

const TransformationSteps = () => {
  const steps = [
    { id: 1, text: "EXPLORE TREATMENT PROTOCOLS" },
    { id: 2, text: "CONSULT WITH A SPECIALIST" },
    { id: 3, text: "SCHEDULE YOUR INITIAL ASSESSMENT" },
    { id: 4, text: "REVIEW OUR FACILITY" },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Actionable Steps to Your Transformation
        </h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <button
              key={step.id}
              className={styles.stepButton}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {step.text}
            </button>
          ))}
        </div>

        <p className={styles.subtitle}>
          Empower your journey with MMUS, grounded in precision and results.
        </p>
      </div>
    </section>
  );
};

export default TransformationSteps;


