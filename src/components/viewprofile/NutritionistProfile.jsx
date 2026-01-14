import React, { useState } from 'react';
import styles from './nutritionistProfile.module.css';
import profileimg from '../../assets/Maariya Siam.png';
const NutritionistLanding = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    familyName: '',
    phone: '',
    date: '',
    time: '08:30'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.profileCard}>
          <img 
            src={profileimg}
            alt="Ms. Maariya Siam" 
            className={styles.profileImage}
          />
          <div className={styles.profileInfo}>
            <p className={styles.subtitle}>WELLNESS NUTRITIONIST</p>
            <h1 className={styles.name}>Ms. Maariya Siam</h1>
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
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>fb</a>
              <a href="#" className={styles.socialIcon}>ig</a>
              <a href="#" className={styles.socialIcon}>yt</a>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.philosophySection}>
            <h2 className={styles.sectionTitle}>Philosophy on Sustainable Weight Management</h2>
            <p className={styles.description}>
              Ms. Maariya Siam believes that true wellness is not just about the number on 
              the scale, but about cultivating a sustainable relationship with food and one's 
              body. Her approach moves beyond restrictive dieting, focusing instead on 
              metabolic restoration and intuitive nourishment.
            </p>
            <p className={styles.description}>
              By integrating clinical nutritional science with behavioral psychology, she 
              empowers clients to make lasting lifestyle changes. Her philosophy centers on 
              "addition over subtraction"—adding nutrient-dense foods that fuel the body 
              rather than purely subtracting calories, ensuring that weight loss is a byproduct 
              of improved health rather than a stressful pursuit.
            </p>
          </div>

          <div className={styles.programsSection}>
            <h2 className={styles.sectionTitle}>Customized Nutrition Programs</h2>
            <p className={styles.description}>
              Every individual's metabolic profile is unique. Ms. Maariya designs highly 
              personalized nutrition programs that cater to specific needs, whether it's 
              managing insulin resistance, optimizing gut health, or preparing for bariatric 
              procedures.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Metabolic profiling and analysis</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Personalized meal planning for busy lifestyles</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Post-procedure nutritional support</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Continuous monitoring and adjustment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.bookingCard}>
          <div className={styles.bookingHeader}>
            <span className={styles.calendarIcon}>📅</span>
            <h3 className={styles.bookingTitle}>Book a Consultation</h3>
          </div>

          <div className={styles.bookingForm}>
            <div className={`${styles.formRow} ${styles.nameRow}`}>
              <div className={styles.formGroup}>
                <label className={styles.label}>FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>FAMILY NAME</label>
                <input
                  type="text"
                  name="familyName"
                  placeholder="Doe"
                  value={formData.familyName}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>YOUR PHONE</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 99999 99999"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>SELECT DATE</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>TIME</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="08:30">08:30</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
              </select>
            </div>

            <button onClick={handleSubmit} className={styles.bookButton}>
              BOOK ONLINE →
            </button>

            <p className={styles.termsText}>
              By booking, you agree to our Terms & Conditions.
            </p>
          </div>
        </div>

        <div className={styles.assistanceCard}>
          <h3 className={styles.assistanceTitle}>Need immediate assistance?</h3>
          <p className={styles.assistanceText}>
            Call our front desk directly for urgent inquiries.
          </p>
          <button className={styles.callButton}>
            <span className={styles.phoneIcon}>📞</span>
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionistLanding;