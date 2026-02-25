import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.checkmark}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.subtitle}>
          Your booking request has been received. Our team will contact you
          within 24 hours to confirm your body analysis appointment.
        </p>
        <button className={styles.homeButton} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
