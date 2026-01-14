import React, { useState } from "react";
import styles from "./DoctorBooking.module.css";
import icon1 from "../../assets/kicon1.png";
import icon2 from "../../assets/kicon2.png";
import icon3 from "../../assets/kicon3.png";
import icon4 from "../../assets/kicon4.png";

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
  const credentials = [
    {
      icon: <img src={icon1} alt="icon" />,
      title:
        "Director & Lead Consultant, Institute of Bariatrics, Apollo Hospitals",
    },
    {
      icon: <img src={icon2} alt="icon" />,
      title: "Adjunct Professor, The Tamil Nadu Dr. M.G.R. Medical University",
    },
    {
      icon: <img src={icon3} alt="icon" />,
      title: "Lead Surgeon for Robotic Bariatric Program",
    },
    {
      icon: <img src={icon4} alt="icon" />,
      title: "Certified Proctor for Robotic Surgery (Intuitive Surgical)",
    },
  ];
  const achievements = [
    {
      text: "First surgeon to perform Robotic Bariatric Surgery in South India.",
    },
    {
      text: "Successfully completed over 5,000 bariatric and metabolic procedures.",
    },
    {
      text: "Established one of the first dedicated Adolescent Obesity Clinics in the country.",
    },
  ];

  const innovations = [
    {
      text: "Pioneered the Single Incision Laparoscopic Surgery (SILS) technique for bariatrics.",
    },
    {
      text: "Developed proprietary protocols for ERAS (Enhanced Recovery After Surgery) in obese patients.",
    },
    {
      text: "Implemented AI-assisted diagnostics for metabolic syndrome screening.",
    },
  ];

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
              <p className={styles.category}> Accepting New Patients</p>
              <h1 className={styles.doctorName}>Dr. Rai Palaniappan</h1>
              <div className={styles.credentials}>
                <span>MBBS</span>
                <span>MS</span>
                <span>MCh</span>
                <span>FRACS</span>
                <span>FACS</span>
                <span>FMAS</span>
                <span>FRCS (Edin)</span>
              </div>
              <p className={styles.specialty}>
                Medical Advisor & Lead Bariatric and Robotic Surgeon
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <span>+91 94104 34567</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <span>info@minusclinic.com</span>
                </div>
              </div>
              <button className={styles.consultBtn}>BOOK A CONSULTATION</button>
            </div>
          </div>

          {/* About Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>About Dr. Rai Palaniappan</h2>
            <p className={styles.aboutText}>
              Dr. Raj Palaniappan is a world-renowned pioneer in metabolic and
              bariatric surgery, celebrated for his precision and
              patient-centric approach. With an illustrious career spanning over
              two decades, he has been at the forefront of introducing advanced
              robotic surgical techniques to South India.
            </p>
            <p className={styles.aboutText}>
              Currently serving as a Senior Consultant and Lead Surgeon at
              Apollo Hospitals, Dr. Raj has been instrumental in establishing
              the Institute of Bariatrics, making it a center of excellence for
              weight-loss surgery. His international acclaim stems not only from
              his surgical volume—having performed over 5,000 successful
              procedures—but also from his dedication to post-operative care and
              holistic wellness. He is frequently invited to lecture at global
              medical forums, sharing his insights on the future of minimally
              invasive body contouring and metabolic health.
            </p>
          </div>

          {/* Credentials and Roles */}
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.accent}></div>
              <h2 className={styles.title}>Key Credentials and Roles</h2>
            </div>

            <div className={styles.grid}>
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className={styles.card}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.iconWrapper}>
                    <div className={styles.icon}>{item.icon}</div>
                  </div>
                  <p className={styles.description}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Major Achievements */}
          <div className={styles.dbContainer}>
            <div className={styles.dbGrid}>
              {/* Left Column */}
              <div className={styles.dbSection}>
                <div className={styles.dbHeader}>
                  <div className={styles.dbAccent}></div>
                  <h2 className={styles.dbTitle}>Major Achievements</h2>
                </div>

                <ul className={styles.dbList}>
                  {achievements.map((item, index) => (
                    <li
                      key={index}
                      className={styles.dbListItem}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className={styles.dbSection}>
                <div className={styles.dbHeader}>
                  <div className={styles.dbAccent}></div>
                  <h2 className={styles.dbTitle}>Key Innovations</h2>
                </div>

                <ul className={styles.dbList}>
                  {innovations.map((item, index) => (
                    <li
                      key={index}
                      className={styles.dbListItem}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Awards and Honors */}
          <div className={styles.awardsSection}>
            <div className={styles.awardsHeader}>
              <div className={styles.awardsAccent}></div>
              <h2 className={styles.awardsTitle}>
                <span className={styles.trophyIcon}>🏆</span>
                Awards and Honors
              </h2>
            </div>
            <div className={styles.awardsGrid}>
              <div className={styles.awardCard}>
                <p className={styles.awardText}>
                  "Best Doctor Award" by The Tamil Nadu Dr. M.G.R. Medical
                  University
                </p>
              </div>
              <div className={styles.awardCard}>
                <p className={styles.awardText}>
                  International Excellence in Bariatric Surgery (IEF)
                </p>
              </div>
              <div className={styles.awardCard}>
                <p className={styles.awardText}>
                  Times Health Icon Award for Metabolic Surgery
                </p>
              </div>
              <div className={styles.awardCard}>
                <p className={styles.awardText}>
                  Distinguished Service Award, Rotary Club of Chennai
                </p>
              </div>
            </div>
          </div>
          {/* Research and Publications */}
          <div className={styles.researchMembershipsSection}>
            {/* Research and Publications */}
            <div className={styles.researchColumn}>
              <div className={styles.researchHeader}>
                <div className={styles.researchAccent}></div>
                <h2 className={styles.researchTitle}>
                  Research and Publications
                </h2>
              </div>
              <ul className={styles.publicationsList}>
                <li className={styles.publicationItem}>
                  <span className={styles.publicationIcon}>📄</span>
                  <p className={styles.publicationText}>
                    "Robotic vs. Laparoscopic Gastric Bypass: A Comparative
                    Study" - Published in Obesity Surgery Journal.
                  </p>
                </li>
                <li className={styles.publicationItem}>
                  <span className={styles.publicationIcon}>📄</span>
                  <p className={styles.publicationText}>
                    "Metabolic Surgery for Type 2 Diabetes in Low BMI Patients"
                    - Journal of Minimal Access Surgery.
                  </p>
                </li>
                <li className={styles.publicationItem}>
                  <span className={styles.publicationIcon}>📚</span>
                  <p className={styles.publicationText}>
                    Author of the chapter "Complications in Bariatric Surgery"
                    in the Textbook of Surgical Gastroenterology.
                  </p>
                </li>
              </ul>
            </div>

            {/* Global Memberships */}
            <div className={styles.membershipsColumn}>
              <div className={styles.membershipsHeader}>
                <div className={styles.membershipsAccent}></div>
                <h2 className={styles.membershipsTitle}>Global Memberships</h2>
              </div>
              <div className={styles.membershipBadges}>
                <span className={styles.membershipBadge}>IFSO</span>
                <span className={styles.membershipBadge}>OSSI</span>
                <span className={styles.membershipBadge}>ASMBS</span>
                <span className={styles.membershipBadge}>FACS</span>
                <span className={styles.membershipBadge}>ASI</span>
                <span className={styles.membershipBadge}>IAGES</span>
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
            <span className={styles.quoteIcon}>“</span>

            <p className={styles.quoteText}>
              My goal is not just to perform a surgery, but to transform a life.
              Every patient deserves a second chance at health.
            </p>

            <span className={styles.quoteAuthor}>— DR. RAJ PALANIAPPAN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;
