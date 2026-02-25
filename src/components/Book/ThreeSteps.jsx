import React from "react";
import { ClipboardCheck, Sparkles, Zap } from "lucide-react";
import styles from "./ThreeSteps.module.css";

const ThreeSteps = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: <ClipboardCheck size={32} />,
      title: "Book Your Body Analysis",
      description:
        "Schedule a free consultation at our Velachery clinic. Our specialists will assess your body composition and target areas.",
    },
    {
      id: 2,
      number: "02",
      icon: <Sparkles size={32} />,
      title: "Get Your Custom Plan",
      description:
        "Receive a personalized slimming protocol designed around your body type, target areas, and lifestyle goals.",
    },
    {
      id: 3,
      number: "03",
      icon: <Zap size={32} />,
      title: "Start Your Transformation",
      description:
        "Begin your sessions with our advanced technology. See visible results within weeks — no surgery, no downtime.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>3 Steps to Your New Body</h2>
        <p className={styles.subtitle}>
          A simple, science-backed approach to achieving your dream figure.
        </p>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={styles.stepCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
