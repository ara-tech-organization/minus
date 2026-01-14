import React from "react";
import styles from "./MinimallyInvasive.module.css";

import { useNavigate } from "react-router-dom";
import DeoxycholicAcid from "@/assets//mini-invasive-1.png";
import InjectionLipolysis from "@/assets/mini-invasive-2.png";
import LaserLipo from "@/assets/mini-invasive-3.png";

const TreatmentCard = ({
  image,
  title,
  description,
  features,
  delay,
  onClick,
}) => {
  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.bullet}>●</span>
              {feature}
            </li>
          ))}
        </ul>
        <button onClick={onClick} className={styles.consultBtn}>
          Details
        </button>
      </div>
    </div>
  );
};

const MinimallyInvasive = () => {
  const treatments = [
    {
      id: "Deoxycholic",
      image: DeoxycholicAcid,
      title: "Deoxycholic Acid Double Chin Reduction",
      description:
        "Excess fat beneath the chin can be difficult to eliminate through diet and exercise ....",
      features: ["30-45 Minute Procedure", "Permanent Results"],
    },
    {
      id: "Injection",
      image: InjectionLipolysis,
      title: "Injection Lipolysis",
      description:
        "Some areas of fat just don’t respond to diet and exercise, no matter how much effort is put in ....",
      features: ["Local Anesthesia", "Minimal Downtime"],
    },
    {
      id: "Laser",
      image: LaserLipo,
      title: "Laser-Assisted Lipo",
      description:
        "Uses laser energy to liquefy fat before removal, making it easier to remove and stimulating collagen production for tighter skin.",
      features: ["Skin Tightening Effect", "Precise Contouring"],
    },
  ];

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/treatment/${id}`);
  };

  return (
    <section id="minimally-invasive" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Minimally Invasive</h2>
            <p className={styles.subtitle}>
              Effective procedures bridging the gap between non-invasive and
              surgical
              <br />
              options.
            </p>
          </div>
          <button className={styles.compareBtn}>
            Compare Options <span className={styles.arrow}>→</span>
          </button>
        </div>
        <div className={styles.grid}>
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              image={treatment.image}
              title={treatment.title}
              description={treatment.description}
              features={treatment.features}
              delay={index * 0.15}
              onClick={() => handleDetails(treatment.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimallyInvasive;
