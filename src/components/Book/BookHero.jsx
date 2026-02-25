import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, RefreshCw } from "lucide-react";
import styles from "./BookHero.module.css";

const BookHero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    targetArea: "",
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
    if (successMessage) setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Validation
    if (!formData.name.trim()) { setError("Please enter your name."); return; }
    if (!formData.phone.trim()) { setError("Please enter your phone number."); return; }
    if (!formData.email.trim()) { setError("Please enter your email address."); return; }
    if (!formData.targetArea) { setError("Please select a target area."); return; }
    if (!formData.captchaAnswer) { setError("Please enter the verification code."); return; }
    if (formData.captchaAnswer.toUpperCase() !== captcha) {
      setError("Incorrect verification code. Please try again.");
      generateCaptcha();
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/freeBodyAnalysis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            service: formData.targetArea,
            message: `Target Area: ${formData.targetArea}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && !data.error) {
        setSuccessMessage(data.message || "Form submitted successfully!");
        setTimeout(() => {
          navigate("/thank-you");
        }, 1500);
      } else {
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form-section" className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        {/* Left - Content */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Lose Inches with Minus Velachery Slimming Technology.
          </h1>
          <p className={styles.subheadline}>
            No Surgery. No Heavy Exercise. No Crash Diet. Scientific weight loss
            at Velachery's most advanced clinic.
          </p>
          <a href="tel:+919150001089" className={styles.mobilePhone}>
             Call Now: +91 91500 01089
          </a>
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>&#10003;</span>
              Non-Invasive Treatments
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>&#10003;</span>
              Visible Results in Weeks
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>&#10003;</span>
              Expert Medical Team
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Book Your Free Body Analysis</h3>
          <p className={styles.formSubtitle}>
            Our team will contact you within 24 hours.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
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
              <input
                type="tel"
                name="phone"
                placeholder="Phone number (+91)"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <div className={styles.selectWrapper}>
                <select
                  name="targetArea"
                  value={formData.targetArea}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Select Target Area</option>
                  <option value="FULL BODY">FULL BODY</option>
                  <option value="FULL BODY WEIGHT LOSS">FULL BODY WEIGHT LOSS</option>
                  <option value="POST-PREGNANCY WEIGHT LOSS">POST-PREGNANCY WEIGHT LOSS</option>
                </select>
                <ChevronDown className={styles.selectIcon} size={18} />
              </div>
            </div>
            <div className={styles.captchaGroup}>
              <label className={styles.captchaLabel}>
                Enter the code below:
              </label>
              <div className={styles.captchaWrapper}>
                <div className={styles.captchaCode}>{captcha}</div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className={styles.reloadButton}
                  aria-label="Reload captcha"
                >
                  <RefreshCw size={18} />
                </button>
              </div>
              <input
                type="text"
                name="captchaAnswer"
                placeholder="Enter code"
                value={formData.captchaAnswer}
                onChange={handleInputChange}
                className={styles.captchaInput}
                maxLength="6"
              />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "BOOK MY BODY ANALYSIS"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookHero;
