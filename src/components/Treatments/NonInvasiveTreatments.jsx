import React from "react";
import {
  Link,
  Snowflake,
  Target,
  Layers,
  Zap,
  Smile,
  Sun,
  Droplet,
} from "lucide-react";
import styles from "./NonInvasiveTreatments.module.css";
import tabs from "@/assets/tabs.png"

import cryo from "@/assets/CryoSculpt-Procedure.png";
import Robotic from "@/assets/Robotic-Tech.png";
import RF from "@/assets/RF-Skin-Tightening.png";
import EMS from "@/assets/EMS-Muscle-Stimulation.png";
import Lymphatic from "@/assets/Lymphatic-Drainage.png";
import RedLight from "@/assets/Red-Light-Therapy.png";
import IV from "@/assets/IV-Vitamin-Drip.png";
import { useNavigate } from "react-router-dom";
import slim2 from "@/assets/slim-(2).png";
import lymph from "@/assets/Lymph-Detoxify.png";
import Silhouette from "@/assets/Silhouette-Refinement.png";
import JawDefineContour from "@/assets/JawDefine-Contour.png"
import LipoContour from "@/assets/Lipo-Contour.png";
import SlimSmartTreatment from "@/assets/SlimSmartTreatment.png";
import CryoSculpt from "@/assets/CryoSculpt.png";
import CryoFlash from "@/assets/CryoFlash.png";
const TreatmentCard = ({
  image,
  icon: Icon,
  title,
  description,
  delay,
  onClick,
}) => {
  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon size={20} strokeWidth={2} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        <button className={styles.detailsBtn} onClick={onClick}>
          DETAILS <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};


const NonInvasiveTreatments = () => {
  const treatments = [
    {
      id: "slimtrim",
      image: slim2,
      icon: Link,
      title: "SlimTrim Capsule",
      description:
        "Metabolism-boosting oral supplement designed to support fat oxidation and appetite control.",
    },
    {
      id: "CryoFlash",
      image: CryoFlash,
      icon: Snowflake,
      title: "CryoFlash",
      description:
        "CryoFlash is an advanced cryotherapy treatment that uses extreme cold exposure to .....",
    },
    {
      id: "CryoMax",
      image: cryo,
      icon: Snowflake,
      title: "CryoMax Sculpting",
      description:
        "CryoMax Sculpting combines cutting-edge 10D Maxlipo technology with cryotherapy to ....",
    },
    {
      id: "CryoSphere360°",
      image: cryo,
      icon: Snowflake,
      title: "CryoSphere 360°",
      description:
        "If stubborn fat and sagging skin have been holding you back, it’s time to meet CryoSphere ....",
    },
    {
      id: "CryoSculpt",
      image: CryoSculpt,
      icon: Snowflake,
      title: "CryoSculpt",
      description:
        "If stubborn fat refuses to budge, despite your best efforts, it is time to introduce ....",
    },
    {
      id: "robotic",
      image: Robotic,
      icon: Target,
      title: "AI Robotic Sonic Slim",
      description:
        "Robotic ultrasound technology for precise, automated fat reduction in targeted zones.",
    },
    {
      id: "rf",
      image: RF,
      icon: Layers,
      title: "RF Skin Tightening",
      description:
        "Radiofrequency energy to stimulate collagen production and tighten loose skin post-weight loss.",
    },
    {
      id: "LymphDetoxify",
      image: lymph,
      icon: Zap,
      title: "Lymph Detoxify",
      description:
        "Ever feel like your body is holding on to extra weight, puffiness, or just general sluggishnes ....",
    },
    {
      id: "Silhouette",
      image: Silhouette,
      icon: Smile,
      title: "Silhouette Refinement",
      description:
        "Fat, bloating, and sagging skin can sometimes blur your body’s details. Silhouette ....",
    },
    {
      id: "JawDefine",
      image: JawDefineContour,
      icon: Sun,
      title: "JawDefine Contour",
      description:
        "JawDefine Contour is here to reshape, refine, and redefine your jawline with cutting-edge ....",
    },
    {
      id: "Lipo",
      image: LipoContour,
      icon: Droplet,
      title: "Lipo Contour",
      description:
        "Even with consistent workouts and a disciplined diet, some areas of stubborn fat refuse ....",
    },
    {
      id: "Slim",
      image: SlimSmartTreatment,
      icon: Droplet,
      title: "Slim Smart Treatment",
      description:
        "Everyday stress, poor circulation, and stubborn fat can leave the body feeling sluggish and unbalanced ....",
    },
  ];

  const navigate = useNavigate();

const handleDetails = (id) => {
  navigate(`/treatment/${id}`);
};


  return (
    <section id="non-invasive" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Non-Invasive Treatments</h2>
          <p className={styles.subtitle}>
            Advanced technology for fat reduction and body sculpting with zero
            downtime.
          </p>
        </div>
        <div className={styles.grid}>
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              image={treatment.image}
              icon={treatment.icon}
              title={treatment.title}
              description={treatment.description}
              delay={index * 0.1}
              onClick={() => handleDetails(treatment.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonInvasiveTreatments;
