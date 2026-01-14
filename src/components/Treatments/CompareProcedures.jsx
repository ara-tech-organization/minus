import React from "react";
import styles from "./CompareProcedures.module.css";

const CompareProcedures = () => {
  const comparisonData = [
    {
      feature: "Pain Level",
      nonInvasive: "None to Mild",
      minimallyInvasive: "Mild Discomfort",
      surgical: "Moderate",
    },
    {
      feature: "Downtime",
      nonInvasive: "Zero / Immediate",
      minimallyInvasive: "2-5 Days",
      surgical: "2-4 Weeks",
    },
    {
      feature: "Results Visibility",
      nonInvasive: "Gradual (4-12 weeks)",
      minimallyInvasive: "Visible within 2 weeks",
      surgical: "Immediate",
    },
    {
      feature: "Procedure Time",
      nonInvasive: "30 - 60 Mins",
      minimallyInvasive: "45 - 90 Mins",
      surgical: "2 - 5 Hours",
    },
    {
      feature: "Longevity",
      nonInvasive: "Maintenance Required",
      minimallyInvasive: "Long-lasting",
      surgical: "Permanent",
    },
    {
      feature: "Example Treatments",
      nonInvasive: "CryoSculpt, EMS, RF",
      minimallyInvasive: "Laser Lipo, Injections",
      surgical: "Liposuction, Tummy Tuck",
    },
  ];

  return (
    <section id="compare" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Compare Our Procedures</h2>
          <p className={styles.subtitle}>
            Find the right treatment for your body goals
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th className={styles.headerCell}>Features</th>
                <th className={styles.headerCell}>Non-Invasive</th>
                <th className={styles.headerCell}>Minimally Invasive</th>
                <th className={styles.headerCell}>Surgical</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={styles.dataRow}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className={`${styles.dataCell} ${styles.featureCell}`}>
                    {row.feature}
                  </td>
                  <td className={styles.dataCell}>{row.nonInvasive}</td>
                  <td className={styles.dataCell}>{row.minimallyInvasive}</td>
                  <td className={styles.dataCell}>{row.surgical}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.buttonRow}>
            <button className={styles.bookBtn}>Book Consultation</button>
            <button className={styles.bookBtn}>Book Consultation</button>
            <button className={styles.bookBtn}>Book Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareProcedures;
