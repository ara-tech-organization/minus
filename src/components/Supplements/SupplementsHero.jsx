import React from 'react';
import styles from './SupplementsHero.module.css';

const SupplementsHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Supplements</h1>
        <p className={styles.subtitle}>
          Premium nutritional support to complement your body contouring journey.
        </p>
      </div>
    </section>
  );
};

export default SupplementsHero;