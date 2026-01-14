import React from "react";
import { Dumbbell, Scale, Scissors, Sparkles } from "lucide-react";
import styles from "./SpecialtyCard.module.css";
import Calf from "@/assets/Calf-Muscle-Reduction.png";
import Bariatric from "@/assets/Bariatric-Surgery.png";
import Abdominoplasty from "@/assets/Abdominoplasty.png";
import BodyLift from "@/assets/Body-Lift-Surgery.png";

const SpecialtyCard = ({ icon: Icon, image, title, description, delay }) => {
  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.iconBadge}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button
          className={styles.learnMoreBtn}
          onClick={() => {
            window.location.href = "/#treatments";
          }}
        >
          LEARN MORE <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

const SpecialtyAreas = () => {
  const specialties = [
    {
      icon: Dumbbell,
      image: Calf,
      title: "Calf Muscle Reduction",
      description:
        "Non-surgical slimming of the lower leg for a more defined, elegant contour.",
    },
    {
      icon: Scale,
      image: Bariatric,
      title: "Bariatric Surgery",
      description:
        "Comprehensive surgical solutions for significant and sustained weight loss.",
    },
    {
      icon: Scissors,
      image: Abdominoplasty,
      title: "Abdominoplasty",
      description:
        "Flatten and shape the abdomen by removing excess skin and tightening muscles.",
    },
    {
      icon: Sparkles,
      image: BodyLift,
      title: "Body Lift Surgery",
      description:
        "Improve the tone and underlying tissue that supports skin and fat.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Areas of <span className={styles.highlight}>Specialty</span>
          </h2>
          <p className={styles.subtitle}>
            Targeted treatments designed for every part of your body.
          </p>
        </div>
        <div className={styles.grid}>
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              icon={specialty.icon}
              image={specialty.image}
              title={specialty.title}
              description={specialty.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyAreas;
