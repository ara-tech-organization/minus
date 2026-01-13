import React from 'react';
import styles from './ConsultationCTA.module.css';

const ConsultationCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to begin your journey?</h2>
        <p className={styles.subheading}>
          Schedule a consultation with one of our specialists today and take the first
          <br />
          step towards the best version of yourself.
        </p>
        <button className={styles.ctaButton}>
          <span className={styles.calendarIcon}>📅</span>
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default ConsultationCTA;