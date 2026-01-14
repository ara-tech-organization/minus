import React from "react";
import { Briefcase } from "lucide-react";
import styles from "./SurgicalProcedures.module.css";
import calf from "@/assets/Calf-Muscle-Reduction.png";
import bariatric from "@/assets/Bariatric-Surgery.png";
import abdominoplasty from "@/assets/Abdominoplasty.png";
import totalBodyLift from "@/assets/Body-Lift-Surgery.png";
import { useNavigate } from "react-router-dom";

const ProcedureCard = ({
  image,
  badge,
  title,
  size = "normal",
  delay,
  hasButton = true,
  description = null,
  onClick
}) => {
  return (
    <div
      className={`${styles.card} ${size === "large" ? styles.cardLarge : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}></div>
        {badge && <span className={styles.badge}>{badge}</span>}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          {description && (
            <p className={styles.cardDescription}>{description}</p>
          )}
          {hasButton && (
            <button onClick={onClick} className={styles.learnMoreBtn}>
              LEARN MORE <span className={styles.arrow}>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, description, delay, onClick }) => {
  return (
    <div className={styles.infoCard} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.infoIcon}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className={styles.infoTitle}>{title}</h3>
      <p className={styles.infoDescription}>{description}</p>
      <button onClick={onClick} className={styles.viewDetailsBtn}>
        View Details
      </button>
    </div>
  );
};


const SurgicalProcedures = () => {
   const navigate = useNavigate();

   const handleDetails = (id) => {
     navigate(`/treatment/${id}`);
   };
  return (
    <section id="surgical" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLine}></div>
          <div className={styles.headerContent}>
            <span className={styles.headerLabel}>PREMIUM TRANSFORMATIONS</span>
            <h2 className={styles.title}>Surgical Procedures</h2>
            <p className={styles.subtitle}>
              Definitive solutions delivered by world-class surgeons in our
              state-of-the-art
              <br />
              sterile facilities.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridTop}>
            <ProcedureCard
              image={calf}
              badge="LEGS"
              title="Calf Muscle Reduction"
              delay={0.1}
              onClick={() => handleDetails("calfReduction")}
            />

            <ProcedureCard
              image={bariatric}
              badge="WEIGHT LOSS"
              title="Bariatric Surgery"
              delay={0.2}
              onClick={() => handleDetails("Bariatric")}
            />

            <ProcedureCard
              image={abdominoplasty}
              badge="TORSO"
              title="Abdominoplasty"
              delay={0.3}
              onClick={() => handleDetails("abdominoplasty")}
            />
          </div>

          <div className={styles.gridBottom}>
            <ProcedureCard
              image={totalBodyLift}
              badge="FULL BODY"
              title="Total Body Lift"
              size="large"
              delay={0.4}
              onClick={() => handleDetails("body")}
            />
            <InfoCard
              icon={Briefcase}
              title="Liposuction"
              description="Traditional suction-assisted lipectomy for large volume fat removal."
              delay={0.5}
              onClick={() => handleDetails("liposuction")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgicalProcedures;
