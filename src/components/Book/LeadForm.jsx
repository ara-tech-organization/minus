import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import styles from "./LeadForm.module.css";

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    targetArea: "",
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!formData.targetArea) {
      setError("Please select a target area.");
      return;
    }
    if (!formData.captchaAnswer) {
      setError("Please answer the verification question.");
      return;
    }
    if (parseInt(formData.captchaAnswer) !== captcha.a + captcha.b) {
      setError("Incorrect answer. Please try again.");
      generateCaptcha();
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
      return;
    }

    console.log("Lead form submitted:", formData);
    navigate("/thank-you");
  };

  return (
    <section id="lead-form-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Book Your Free Body Analysis</h2>
          <p className={styles.formSubtitle}>
            Fill in your details and our team will contact you within 24 hours.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
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
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Mail ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Target Area</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="targetArea"
                    value={formData.targetArea}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select Target Area</option>
                    <option value="Abdomen">Abdomen</option>
                    <option value="Arms">Arms</option>
                    <option value="Thighs">Thighs</option>
                    <option value="Face">Face</option>
                    <option value="Full Body">Full Body</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className={styles.selectIcon} size={18} />
                </div>
              </div>
            </div>

            <div className={styles.captchaGroup}>
              <label className={styles.label}>
                Verification: What is {captcha.a} + {captcha.b}?
              </label>
              <input
                type="number"
                name="captchaAnswer"
                placeholder="Your answer"
                value={formData.captchaAnswer}
                onChange={handleInputChange}
                className={styles.captchaInput}
              />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button type="submit" className={styles.submitButton}>
              Submit My Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
