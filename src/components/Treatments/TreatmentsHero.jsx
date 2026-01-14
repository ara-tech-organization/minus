import React, { useState, useEffect } from "react";
import styles from "./TreatmentsHero.module.css";
import Treatmenthero from "@/assets/treatment-hero.png";

const TreatmentsHero = () => {
  const [activeTab, setActiveTab] = useState("non-invasive");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(
        `.${styles.heroSection}`
      ).offsetHeight;
      setIsSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "non-invasive", label: "NON-INVASIVE" },
    { id: "minimally-invasive", label: "MINIMALLY INVASIVE" },
    { id: "surgical", label: "SURGICAL PROCEDURES" },
    { id: "compare", label: "COMPARE" },
  ];
useEffect(() => {
  const handleScroll = () => {
    const hero = document.querySelector(`.${styles.heroSection}`);
    const heroBottom = hero.offsetHeight;

    if (window.scrollY >= heroBottom - 70) {
      setIsSticky(true); // fix under navbar
    } else {
      setIsSticky(false); // keep at bottom of hero
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <>
    <div id="treatments" className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <img src={Treatmenthero} alt="Treatments" className={styles.heroImage} />

      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.badge}>CLINICAL EXCELLENCE</div>
          <h1 className={styles.title}>Treatments</h1>
          <p className={styles.description}>
            Explore a wide range of advanced slimming and body contouring
            <br />
            solutions tailored to your unique physiology. From non-invasive
            <br />
            sculpting to surgical transformations.
          </p>
        </div>
      </div>
    </div>

    {/* TABS MOVED OUTSIDE HERO */}
    <div
      className={`${styles.tabsContainer} ${isSticky ? styles.fixedTabs : ""}`}
    >
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.tabActive : ""
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              document
                .getElementById(tab.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  </>
);

};

export default TreatmentsHero;
