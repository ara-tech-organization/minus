import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./KeyTreatments.module.css";

import CryoSculptImg from "@/assets/CryoSculpt.png";
import AIRoboticImg from "@/assets/AIRoboticSonicSlim.png";
import RFSkinImg from "@/assets/SkinFusionRFSculpting.png";

import DeoxycholicImg from "@/assets/DeoxycholicAcid.png";
import InjectionImg from "@/assets/InjectionLipolysis.png";
import LaserLipoImg from "@/assets/LaserLipo.png";

import BariatricImg from "@/assets/Bariatric.png";
import AbdominoplastyImg from "@/assets/abdomino.png";
import BodyLiftImg from "@/assets/bodyLift.png";

const KeyTreatments = () => {
  const navigate = useNavigate();

  const handleViewMore = (sectionId) => {
    navigate(`/treatments#${sectionId}`);
  };

  const categories = [
    {
      sectionId: "non-invasive",
      heading: "Non-Invasive Treatments",
      treatments: [
        {
          id: 1,
          image: CryoSculptImg,
          title: "CryoSculpt",
          description:
            "Freeze away stubborn fat cells with controlled cooling technology. Non-invasive and painless.",
          link: "/treatment/CryoSculpt",
        },
        {
          id: 2,
          image: AIRoboticImg,
          title: "AI Robotic Sonic Slim",
          description:
            "AI-powered precision body contouring with robotic sonic technology for targeted results.",
          link: "/treatment/robotic",
        },
        {
          id: 3,
          image: RFSkinImg,
          title: "RF Skin Tightening",
          description:
            "Radiofrequency energy to firm, tone, and tighten skin for a sculpted appearance.",
          link: "/treatment/rf",
        },
      ],
    },
    {
      sectionId: "minimally-invasive",
      heading: "Minimally Invasive Treatments",
      treatments: [
        {
          id: 4,
          image: DeoxycholicImg,
          title: "Deoxycholic Acid Double Chin Reduction",
          description:
            "Injectable treatment to dissolve submental fat and define your jawline permanently.",
          link: "/treatment/Deoxycholic",
        },
        {
          id: 5,
          image: InjectionImg,
          title: "Injection Lipolysis",
          description:
            "Non-surgical chemical fat reduction treatments for a more defined silhouette.",
          link: "/treatment/Injection",
        },
        {
          id: 6,
          image: LaserLipoImg,
          title: "Laser-Assisted Lipo",
          description:
            "Minimally invasive laser technology for precise, targeted fat removal with fast recovery.",
          link: "/treatment/Laser",
        },
      ],
    },
    {
      sectionId: "surgical",
      heading: "Surgical Procedures",
      treatments: [
        {
          id: 7,
          image: BariatricImg,
          title: "Bariatric Surgery",
          description:
            "Life-changing weight loss surgery for those with significant excess weight.",
          link: "/treatment/Bariatric",
        },
        {
          id: 8,
          image: AbdominoplastyImg,
          title: "Abdominoplasty",
          description:
            "Tummy tuck surgery to remove excess skin and fat for a flat, toned abdomen.",
          link: "/treatment/abdominoplasty",
        },
        {
          id: 9,
          image: BodyLiftImg,
          title: "Total Body Lift",
          description:
            "Comprehensive contouring to improve the shape and tone of underlying tissue.",
          link: "/treatment/body",
        },
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Key Treatments</h2>
          <p className={styles.subtitle}>
            Advanced slimming technologies at Velachery's most trusted clinic.
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className={styles.categoryBlock}>
            <div className={styles.categoryHeader}>
              <h3 className={styles.categoryHeading}>{category.heading}</h3>
              <button
                onClick={() => handleViewMore(category.sectionId)}
                className={styles.viewMoreButton}
              >
                View More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={styles.viewMoreArrow}
                >
                  <path
                    d="M4 8L12 8M12 8L8 4M12 8L8 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.treatmentsGrid}>
              {category.treatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  className={styles.treatmentCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className={styles.treatmentImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                    <p className={styles.treatmentDescription}>
                      {treatment.description}
                    </p>
                    <Link to={treatment.link} className={styles.learnMore}>
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={styles.arrow}
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTreatments;
