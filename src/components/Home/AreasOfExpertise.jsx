import React, { useState } from "react";
import styles from "./AreasOfExpertise.module.css";
import {
  User,
  Dumbbell,
  AlignCenterVertical,
  StretchVertical,
} from "lucide-react";

const AreasOfExpertise = () => {
  const [activeArea, setActiveArea] = useState("face");

const expertiseAreas = [
  {
    id: "face",
    label: "Face & Neck",
    icon: <User size={20} strokeWidth={1.8} />,
  },
  {
    id: "arms",
    label: "Arms",
    icon: <Dumbbell size={20} strokeWidth={1.8} />,
  },
  {
    id: "abdomen",
    label: "Abdomen",
    icon: <AlignCenterVertical size={20} strokeWidth={1.8} />,
  },
  {
    id: "thighs",
    label: "Thighs & Buttocks",
    icon: <StretchVertical size={20} strokeWidth={1.8} />,
  },
];



  const contentData = {
    face: {
      title: "Face & Neck Contouring",
      description:
        "Our facial contouring procedures address concerns like double chin, sagging jowls, and loss of jawline definition. We use a combination of AI-Robotic Sonic Slim and injection lipolysis to reveal your natural bone structure.",
      image: "/src/assets/Facial-contouring.png",
      benefits: [
        "No downtime required",
        "Visible results in 2-4 sessions",
        "Safe, FDA-approved technology",
      ],
    },
    arms: {
      title: "Arm Sculpting",
      description:
        "Target stubborn arm fat and achieve toned, defined arms with our advanced body contouring treatments. Perfect for addressing concerns in the upper arm area that resist diet and exercise.",
      image: "/src/assets/Facial-contouring.png",
      benefits: [
        "Non-invasive treatment",
        "Results visible in 3-5 sessions",
        "Minimal recovery time",
      ],
    },
    abdomen: {
      title: "Abdomen Contouring",
      description:
        "Sculpt and define your midsection with targeted abdominal treatments. Our procedures help reduce stubborn belly fat and create a more toned, contoured appearance.",
      image: "/src/assets/Facial-contouring.png",
      benefits: [
        "Target specific problem areas",
        "Visible results in 4-6 sessions",
        "Clinically proven methods",
      ],
    },
    thighs: {
      title: "Thighs & Buttocks Shaping",
      description:
        "Achieve smoother, more contoured thighs and buttocks with our specialized treatments. Address cellulite, unwanted fat deposits, and skin laxity for a more sculpted lower body.",
      image: "/src/assets/Facial-contouring.png",
      benefits: [
        "Comprehensive lower body treatment",
        "Results in 4-6 sessions",
        "Safe and effective procedures",
      ],
    },
  };

  const currentContent = contentData[activeArea];

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            Areas of <span className={styles.italicText}>Expertise</span>
          </h2>
          <p className={styles.subtitle}>
            Targeted treatments for every part of your body.
          </p>
        </div>

        <div className={styles.content}>
          {/* Left Menu */}
          <div className={styles.menuList}>
            {expertiseAreas.map((area) => (
              <button
                key={area.id}
                className={`${styles.menuItem} ${
                  activeArea === area.id ? styles.active : ""
                }`}
                onClick={() => setActiveArea(area.id)}
              >
                <span className={styles.menuIcon}>{area.icon}</span>
                <span className={styles.menuLabel}>{area.label}</span>
              </button>
            ))}
          </div>

          {/* Right Content Card */}
          <div className={styles.contentCard} key={activeArea}>
            <div className={styles.cardInner}>
              <div className={styles.textContent}>
                <h3 className={styles.contentTitle}>{currentContent.title}</h3>
                <p className={styles.contentDescription}>
                  {currentContent.description}
                </p>

                <ul className={styles.benefitsList}>
                  {currentContent.benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      <svg
                        className={styles.checkIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className={styles.ctaButton}>Explore Procedure</button>
              </div>

              <div className={styles.imageContent}>
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className={styles.contentImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;

