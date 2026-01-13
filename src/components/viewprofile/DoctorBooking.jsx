import React, { useState } from "react";
import styles from "./DoctorBooking.module.css";

const DoctorBooking = () => {
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    phone: "",
    date: getTodayDate(),
    time: getCurrentTime(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {/* Profile Header */}
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              <img src="src/assets/doctor-raj.png" alt="Dr. Rai Palaniappan" />
            </div>
            <div className={styles.profileInfo}>
              <p className={styles.category}> RECEPTION AND PATHWAYS</p>
              <h1 className={styles.doctorName}>Dr. Rai Palaniappan</h1>
              <div className={styles.credentials}>
                <span>MBBS</span>
                <span>FRCS</span>
                <span>FRACS</span>
                <span>FACS</span>
              </div>
              <p className={styles.specialty}>
                National Advisor & Lead Bariatric and Robotic Surgeon
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <span>+91 04343 34567</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <span>info@drraipalani.com</span>
                </div>
              </div>
              <button className={styles.consultBtn}>BOOK A CONSULTATION</button>
            </div>
          </div>

          {/* About Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>About Dr. Rai Palaniappan</h2>
            <p className={styles.aboutText}>
              Dr. Rai Palaniappan is a world-renowned bariatric (metabolic and
              obesity surgery), gastrointestinal, HPB (liver, pancreas, and
              gallbladder) robotic surgeon. With 16 years of robust expertise
              spanning over four decades, he has performed over 12,000 metabolic
              surgeries and close to 8,000 robotic surgeries.
            </p>
            <p className={styles.aboutText}>
              Currently serving as a Senior Consultant and Lead Surgeon at
              Apollo Hospitals, Dr. Rai has been instrumental in introducing the
              forefront of Metabolic, Bariatric & cohort of residency for weight
              loss surgeries. A pioneer in Intuitive Robotic Surgery in India,
              he has demonstrated unmatched expertise in over 5,000 laparoscopic
              procedures—over 3m trim have dedicated 15-year consultant core
              with robotic retention. As a Progressive Trilsher in bariatric &
              global metabolic trends, bringing him insights on the latest
              advancements, Dr Rai continuously elevates patient outcomes and
              redefines surgical excellence.
            </p>
          </div>

          {/* Credentials and Roles */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Credentials and Roles</h2>
            <div className={styles.credentialsList}>
              <div className={styles.credentialItem}>
                <span className={styles.credentialIcon}>🎓</span>
                <span>
                  Director & Lead Consultant, Institute of Bariatric, Robotic
                  Hospital
                </span>
              </div>
              <div className={styles.credentialItem}>
                <span className={styles.credentialIcon}>👨‍⚕️</span>
                <span>Lead Surgeon for Robotic, Bariatric Program</span>
              </div>
              <div className={styles.credentialItem}>
                <span className={styles.credentialIcon}>🎓</span>
                <span>
                  Adjunct Professor, Trai Seed South, No 45, A Medical
                  University
                </span>
              </div>
              <div className={styles.credentialItem}>
                <span className={styles.credentialIcon}>📋</span>
                <span>
                  Certified Proctor for Robotic Surgery (Bariatric Surgery)
                </span>
              </div>
            </div>
          </div>

          {/* Major Achievements */}
          <div className={styles.twoColumn}>
            <div className={styles.columnLeft}>
              <h2 className={styles.sectionTitle}>Major Achievements</h2>
              <ul className={styles.achievementsList}>
                <li>
                  First surgeon to use Robotic Bariatric Surgery in South India.
                </li>
                <li>
                  Successfully completed over 5,000 BARIATRIC surgeries in
                  India.
                </li>
                <li>
                  Establishment of the first performed Advanced Obesity Doctors
                  in country.
                </li>
              </ul>
            </div>
            <div className={styles.columnRight}>
              <h2 className={styles.sectionTitle}>Key Innovations</h2>
              <ul className={styles.achievementsList}>
                <li>
                  Pioneered the Single Minimally Laparoscopic Surgery (SILS)
                  technique for bariatric.
                </li>
                <li>
                  Developed laparoscopic process for BASIC Bariatric Surgery,
                  enhancing patients.
                </li>
                <li>
                  Implement AI-enriched diagnostics for personalized BARIATRIC
                  planning.
                </li>
              </ul>
            </div>
          </div>

          {/* Awards and Honors */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Awards and Honors</h2>
            <div className={styles.awardsList}>
              <div className={styles.awardItem}>
                <strong>Best Doctor Award:</strong> by The Tamil Nadu Dr. AIPG
                Medical university
              </div>
              <div className={styles.awardItem}>
                <strong>
                  International Excellence in Bariatric Surgery (IEB)
                </strong>
              </div>
              <div className={styles.awardItem}>
                <strong>Times Health Icon Award:</strong> for Metabolic Surgery
              </div>
              <div className={styles.awardItem}>
                <strong>
                  Distinguished Physician Award: Silicon Cell of Metabolic
                  Surgeons
                </strong>
              </div>
            </div>
          </div>

          {/* Research and Publications */}
          <div className={styles.twoColumn}>
            <div className={styles.columnLeft}>
              <h2 className={styles.sectionTitle}>Research and Publications</h2>
              <ul className={styles.publicationsList}>
                <li>
                  Publisher of International Digital Research: A comprehensive
                  on Bariatric Surgery standards.
                </li>
                <li>
                  Publisher of "Robotic-The Age of Robotics in next years" in
                  Indian Journal of Metabolic Health.
                </li>
                <li>
                  Published "Implementing AI in Bariatric Outcomes: An
                  ARC-STUDY" in Journal of Medical Robotics.
                </li>
              </ul>
            </div>
            <div className={styles.columnRight}>
              <h2 className={styles.sectionTitle}>Global Memberships</h2>
              <div className={styles.membershipBadges}>
                <span className={styles.badge}>IFSA</span>
                <span className={styles.badge}>OSSII</span>
                <span className={styles.badge}>ASMBS</span>
                <span className={styles.badge}>IBC</span>
                <span className={styles.badge}>AIC</span>
                <span className={styles.badge}>IAGES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Booking Card */}

        <div className={styles.rightSection}>
          {/* Booking Card */}
          <div className={styles.bookingCard}>
            <div className={styles.bookingHeader}>
              <span className={styles.calendarIcon}>📅</span>
              <h3>BOOK ONLINE</h3>
            </div>

            <p className={styles.bookingSubtext}>
              Schedule your consultation with Dr. Raj Palaniappan. Fill out the
              details below.
            </p>

            <form onSubmit={handleSubmit} className={styles.bookingForm}>
              <div className={`${styles.row} ${styles.nameRow}`}>
                <div className={styles.field}>
                  <label>FIRST NAME</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label>FAMILY NAME</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.familyName}
                    onChange={(e) =>
                      setFormData({ ...formData, familyName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+91 90000 00000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label>DATE</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                <div className={styles.field}>
                  <label>TIME</label>

                  <div className={styles.timeWrapper}>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />

                    <span className={styles.clockIcon}>🕒</span>
                  </div>
                </div>
              </div>

              <button type="submit" className={styles.bookBtn}>
                BOOK ONLINE
              </button>
            </form>

            <div className={styles.divider}>
              <span>OR</span>
            </div>
            <p className={styles.bookingSubtext}>Pefer To Call</p>
            <button className={styles.callBtn}>+91 94104 34567</button>
          </div>

          {/* Quote Card */}
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>
              My goal is not just to perform a surgery, but to transform a life.
              Every patient deserves a second chance at health.
            </p>
            <span className={styles.quoteAuthor}>— Dr. Raj Palaniappan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;
