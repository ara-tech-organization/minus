import React from "react";
import styles from "./BookAppointment.module.css";
import { ChevronDown, Calendar } from "lucide-react";

const BookAppointment = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Book Your <span>Transformation</span>
        </h2>
        <p className={styles.subtitle}>
          Take the next step and schedule an appointment today.
        </p>

        <form className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Service</label>
            <div className={styles.selectWrapper}>
              <select className={styles.input}>
                <option>Select Service</option>
              </select>
              <ChevronDown className={styles.iconRight} size={18} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Specialist</label>
            <div className={styles.selectWrapper}>
              <select className={styles.input}>
                <option>Select Doctor</option>
              </select>
              <ChevronDown className={styles.iconRight} size={18} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Your Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              className={styles.input}
              type="text"
              placeholder="+1(555) 000–0000"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Preferred Date</label>
            <div className={styles.iconInput}>
              <input type="text" placeholder="mm/dd/yyyy" />
              <Calendar className={styles.iconRight} size={18} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Preferred Time</label>
            <div className={styles.selectWrapper}>
              <select className={styles.input}>
                <option>Select Time</option>
              </select>
              <ChevronDown className={styles.iconRight} size={18} />
            </div>
          </div>
        </form>

        <button className={styles.ctaBtn}>Confirm Request</button>
      </div>
    </div>
  );
};

export default BookAppointment;
