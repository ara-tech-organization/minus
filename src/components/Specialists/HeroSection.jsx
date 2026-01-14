import styles from "./HeroSection.module.css";
import bgImage from "../../assets/Medical Office Background.png";


const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.badge}>WORLD-CLASS EXPERTISE</span>

        <h1 className={styles.title}>Our Specialists</h1>

        <p className={styles.description}>
          Our team of highly qualified specialists is dedicated to guiding you
          through your transformation journey with precision, care, and medical
          excellence.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
