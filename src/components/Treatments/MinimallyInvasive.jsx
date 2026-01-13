import React from "react";
import styles from "./MinimallyInvasive.module.css";
import minimalInvasive1 from "@/assets/mini-invasive-1.png"
import minimalInvasive2 from "@/assets/mini-invasive-2.png"
import minimalInvasive3 from "@/assets/mini-invasive-3.png"
const TreatmentCard = ({ image, title, description, features, delay }) => {
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
        <button className={styles.consultBtn}>Book Consultation</button>
      </div>
    </div>
  );
};

const MinimallyInvasive = () => {
  const treatments = [
    {
      image: minimalInvasive1,
      title: "Deoxycholic Acid Injection",
      description:
        "A cytolytic drug which, when injected into tissue, physically destroys the cell membrane of fat cells for double chin reduction.",
      features: ["30-45 Minute Procedure", "Permanent Results"],
    },
    {
      image: minimalInvasive2,
      title: "Injection Lipolysis",
      description:
        "Chemical substances are injected into the subcutaneous tissue layer to break down fat membranes and emulsify fat cells.",
      features: ["Local Anesthesia", "Minimal Downtime"],
    },
    {
      image: minimalInvasive3,
      title: "Laser-Assisted Lipo",
      description:
        "Uses laser energy to liquefy fat before removal, making it easier to remove and stimulating collagen production for tighter skin.",
      features: ["Skin Tightening Effect", "Precise Contouring"],
    },
  ];

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimallyInvasive;
