import React, { useState, useEffect } from "react";
import styles from "./HolisticApproach.module.css";

const HolisticApproach = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Expert Professionals",
      description:
        "Our treatments are administered by experienced slimming and healthcare specialists.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Safe Environment",
      description:
        "We offer high-quality treatments in a modern, sterile, and safe environment.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      title: "Tailored Treatments",
      description:
        "Each treatment plan is customized to meet your specific body goals and needs.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${isVisible ? styles.fadeIn : ""}`}>
        <div className={styles.leftSection}>
          <h1 className={styles.mainTitle}>A Holistic Approach to</h1>
          <h2 className={styles.subtitle}>
            Slimming & Body
            <br />
            Contouring
          </h2>

          <p className={styles.description}>
            At Mirius, your wellbeing is our top priority. We are committed to
            providing exceptional care through advanced, personalized treatments
            designed to transform your body and boost your confidence.
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.ctaButton}>Learn More</button>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.imageCard}>
            <img
              src="/src/assets/Holistic.png"
              alt="Body measurement consultation"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default HolisticApproach;
