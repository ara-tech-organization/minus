import React from "react";
import { Play } from "lucide-react";
import styles from "./ClientSuccessHero.module.css";
import testimonial from "@/assets/testi.png";
const ClientSuccessHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <img
        src={testimonial}
        alt="Client Success"
        className={styles.heroImage}
      />

      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.badge}>CLIENT SUCCESS</div>
          <h1 className={styles.title}>
            Real Stories,
            <br />
            Real Transformations
          </h1>
          <p className={styles.description}>
            Discover how our personalized treatments have helped our clients
            <br />
            reclaim their confidence and achieve their body goals.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              <Play size={18} strokeWidth={2.5} fill="currentColor" />
              Watch Stories
            </button>
            <button className={styles.secondaryBtn}>Read Reviews</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessHero;
