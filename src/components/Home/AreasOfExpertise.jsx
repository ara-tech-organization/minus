import React, { useState } from "react";
import styles from "./AreasOfExpertise.module.css";
import {
  User,
  Dumbbell,
  AlignCenterVertical,
  StretchVertical,
} from "lucide-react";
import FaceImg from "../../assets/Face.png";
import NeckImg from "../../assets/Neck.png";
import ArmsImg from "../../assets/arms.png";
import AbdomenImg from "../../assets/Abdomen.png";
import ThighsImg from "../../assets/Thighs.png";
import ButtocksImg from "../../assets/Buttocks.png";

const AreasOfExpertise = () => {
  const [activeArea, setActiveArea] = useState("face");

  const expertiseAreas = [
    {
      id: "face",
      label: "Face ",
      icon: <User size={20} strokeWidth={1.8} />,
    },
    {
      id: "neck",
      label: "Neck",
      icon: <AlignCenterVertical size={20} strokeWidth={1.8} />,
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
      label: "Thighs",
      icon: <StretchVertical size={20} strokeWidth={1.8} />,
    },

    {
      id: "buttocks",
      label: "Buttocks",
      icon: <User size={20} strokeWidth={1.8} />,
    },
  ];

  const contentData = {
    face: {
      title: "Face",
      description:
        "Our facial contouring procedures address concerns like double chin, sagging jowls, and loss of jawline definition.",
      image: FaceImg,
      benefits: [
        "No downtime required",
        "Visible results in 2-4 sessions",
        "Safe, FDA-approved technology",
      ],
    },

    arms: {
      title: "Arm Sculpting",
      description:
        "Target stubborn arm fat and achieve toned, defined arms with advanced contouring treatments.",
      image: ArmsImg,
      benefits: [
        "Non-invasive treatment",
        "Results visible in 3-5 sessions",
        "Minimal recovery time",
      ],
    },

    abdomen: {
      title: "Abdomen Contouring",
      description:
        "Sculpt and define your midsection with targeted abdominal treatments.",
      image: AbdomenImg,
      benefits: [
        "Target specific problem areas",
        "Visible results in 4-6 sessions",
        "Clinically proven methods",
      ],
    },

    thighs: {
      title: "Thighs",
      description:
        "Achieve smoother, more contoured thighs and buttocks with specialized treatments.",
      image: ThighsImg,
      benefits: [
        "Lower body sculpting",
        "Results in 4-6 sessions",
        "Safe & effective",
      ],
    },

    neck: {
      title: "Neck Contouring",
      description:
        "Refine and tighten the neck area by targeting stubborn fat and improving skin firmness for a more youthful profile.",
      image: NeckImg,
      benefits: [
        "Reduces double chin appearance",
        "Non-surgical & painless",
        "Visible tightening in 3-5 sessions",
      ],
    },

    buttocks: {
      title: "Buttocks Sculpting",
      description:
        "Enhance shape and smoothness of the buttocks with advanced body contouring treatments.",
      image: ButtocksImg,
      benefits: [
        "Improves contour & firmness",
        "Targets localized fat deposits",
        "Safe, non-invasive procedure",
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

                <button
                  className={styles.ctaButton}
                  onClick={() => {
                    window.location.href = "/#treatments";
                  }}
                >
                  Explore Procedure
                </button>
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
