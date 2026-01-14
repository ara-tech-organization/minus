import React, { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import styles from "./ContactSection.module.css";
import office from "@/assets/office.png";
import silhouette from "@/assets/silhouette.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Chennai - Nungambakkam",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.contactSection}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>GET IN TOUCH</div>
          <h1 className={styles.title}>Contact Us</h1>
          <h2 className={styles.subtitle}>
            Schedule an In-Clinic or Virtual Consultation
          </h2>
          <p className={styles.description}>
            Whether you are ready to book your first appointment or have
            questions about our treatments, our dedicated team is here to guide
            you on your wellness journey.
          </p>
          <button className={styles.callButton}>
            <Phone className={styles.phoneIcon} />
            <div className={styles.callContent}>
              <span className={styles.callLabel}>GIVE US A CALL</span>
              <span className={styles.callNumber}>+91 94403 34567</span>
            </div>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          {/* Left Side - Image Card */}
          <div className={styles.imageCard}>
            <img
              src={silhouette}
              alt="MINUS Clinic"
              className={styles.clinicImage}
            />
            <div className={styles.imageOverlay}>
              <h3 className={styles.imageTitle}>Transform Your Body.</h3>
              <p className={styles.imageText}>
                Experience the science of slimming with Minus.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Slim Down Now</h3>
            <p className={styles.formSubtitle}>
              Fill out the form below and our specialists will reach out to you
              within 24 hours.
            </p>

            <div className={styles.formContainer}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Location</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option>Chennai - Nungambakkam</option>
                      <option>Chennai - Adyar</option>
                      <option>Chennai - T Nagar</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                    </select>
                    <ChevronDown className={styles.selectIcon} />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="4"
                />
              </div>

              <button onClick={handleSubmit} className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
