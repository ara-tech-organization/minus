import React, { useState } from "react";
import styles from "./CalfReduction.module.css";
import { Compass, Droplet, Scale } from "lucide-react";
import calf from "@/assets/calf.png"
const CalfReduction = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img src={calf} alt="Calf muscle reduction procedure" />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              CALF MUSCLE
              <br />
              REDUCTION
            </h1>
            <p className={styles.heroDescription}>
              Calf muscle reduction is designed to reduce the fullness of the
              calf muscles, particularly in individuals who feel their lower
              legs are disproportionately large or bulky.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>LASER PROCEDURE</span>
              <span className={styles.metaDivider}>|</span>
              <span className={styles.metaItem}>30 SESSIONS</span>
              <span className={styles.metaDivider}>|</span>
              <span className={styles.metaItem}>WEEKLY ONCE</span>
            </div>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>START YOUR JOURNEY</button>
              <button className={styles.btnSecondary}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Indications and Contraindications */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>⊕</span>
              <h3 className={styles.cardTitle}>INDICATIONS</h3>
            </div>
            <ul className={styles.cardList}>
              <li>
                Bulky or muscular calves (Botulinum toxin to the rest of the
                body)
              </li>
              <li>
                Proportional aesthetic due to the appearance of over-large
              </li>
              <li>
                Desire for a more feminine or proportional body hip-to-thigh
              </li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>⊖</span>
              <h3 className={styles.cardTitle}>CONTRAINDICATIONS</h3>
            </div>
            <ul className={styles.cardList}>
              <li>Neuromuscular disorders affecting the lower limbs</li>
              <li>Active pregnancy or breastfeeding</li>
              <li>Recent surgery or infections in the calf area</li>
              <li>Severe tissue cutting disorders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Procedure Step by Step */}
      <section className={styles.procedureSection}>
        <h2 className={styles.sectionTitle}>PROCEDURE STEP-BY-STEP</h2>
        <div className={styles.stepGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h4 className={styles.stepTitle}>BTM MASSAGES</h4>
            <p className={styles.stepDescription}>
              Initial consultation for right the selection of treatment area
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h4 className={styles.stepTitle}>SKIN FUSION RF</h4>
            <p className={styles.stepDescription}>
              Clean then area proides the smallest Skin fusion in cream
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h4 className={styles.stepTitle}>MANUAL LYMPH DETOX</h4>
            <p className={styles.stepDescription}>
              Manual lymphatic drainage and tissue tonification after RF
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <h4 className={styles.stepTitle}>THERMA PACK</h4>
            <p className={styles.stepDescription}>
              Final infrared pack slimming of the calf with bandaging
            </p>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <h2 className={styles.sectionTitle}>CLINICAL RESULTS</h2>

        <div className={styles.resultsGrid}>
          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>
              <Compass size={28} strokeWidth={1.5} />
            </div>
            <h4 className={styles.resultTitle}>SCULPTED CALF MUSCLE</h4>
            <p className={styles.resultDescription}>
              Enhanced contours and better muscle definition
            </p>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>
              <Scale size={28} strokeWidth={1.5} />
            </div>
            <h4 className={styles.resultTitle}>CIRCUMFERENTIAL LOSS</h4>
            <p className={styles.resultDescription}>
              Measurable reduction in calf size and bulkiness
            </p>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>
              <Droplet size={28} strokeWidth={1.5} />
            </div>
            <h4 className={styles.resultTitle}>FAT/FLUID REDUCTION</h4>
            <p className={styles.resultDescription}>
              Improved lymphatic drainage and reduced puffiness
            </p>
          </div>
        </div>

        <p className={styles.resultsNote}>
          <span className={styles.noteIcon}>ⓘ</span>
          Note: Results typically noticeable in 6–8 weeks with a gradual
          whitening effect. Avoid high-level brunette pants treatment to
          optimize again or toxin.
        </p>
      </section>

      {/* Booking Section */}
      <section className={styles.bookingSection}>
        <h2 className={styles.sectionTitle}>BOOK A CONSULTATION</h2>
        <div className={styles.bookingForm}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className={styles.formInput}
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="PHONE"
              className={styles.formInput}
              value={formData.phone}
              onChange={handleInputChange}
            />

            <input
              type="date"
              name="date"
              placeholder="DATE"
              className={styles.formInput}
              value={formData.date}
              onChange={handleInputChange}
            />
            <input
              type="time"
              name="time"
              placeholder="TIME"
              className={styles.formInput}
              value={formData.time}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit} className={styles.btnSubmit}>
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalfReduction;
