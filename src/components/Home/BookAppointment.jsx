import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookAppointment.module.css";
import { ChevronDown, RefreshCw } from "lucide-react";

const BookAppointment = () => {
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
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
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
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Book Your <span>Transformation</span>
        </h2>
        <p className={styles.subtitle}>
          Take the next step and schedule an appointment today.
        </p>

        <form className={styles.formGrid} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Your Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="+91"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Target Area</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.input}
                name="targetArea"
                value={formData.targetArea}
                onChange={handleInputChange}
              >
                <option value="">Select Target Area</option>
                <option value="FULL BODY">FULL BODY</option>
                <option value="FULL BODY WEIGHT LOSS">FULL BODY WEIGHT LOSS</option>
                <option value="POST-PREGNANCY WEIGHT LOSS">POST-PREGNANCY WEIGHT LOSS</option>
              </select>
              <ChevronDown className={styles.iconRight} size={18} />
            </div>
          </div>

          <div className={styles.captchaGroup}>
            <label>Enter the code below:</label>
            <div className={styles.captchaRow}>
              <div className={styles.captchaWrapper}>
                <div className={styles.captchaCode}>{captcha}</div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className={styles.reloadButton}
                  aria-label="Reload captcha"
                >
                  <RefreshCw size={16} />
                </button>
              </div>
              <input
                type="text"
                name="captchaAnswer"
                placeholder="Enter code"
                value={formData.captchaAnswer}
                onChange={handleInputChange}
                className={styles.input}
                maxLength="6"
              />
            </div>
          </div>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <button
          className={styles.ctaBtn}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "BOOK MY BODY ANALYSIS"}
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
