import React, { useState, useEffect } from "react";
import "./NutritionistLanding.css";
import Bgimage from "../../assets/Maariya Siam.png";
const NutritionistLanding = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    phone: "",
    date: "",
    time: "08:30",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", formData);
    alert("Consultation booked successfully!");
  };

  return (
    <div className="container">
      <div className="leftSection">
        <div className="profileCard">
          <div className="profileImageWrapper">
            <img
              src={Bgimage}
              alt="Ms. Maariya Siam"
              className="profileImage"
            />
          </div>
          <div className="profileInfo">
            <p className="subtitle">WELLNESS NUTRITIONIST</p>
            <h1 className="name">Ms. Maariya Siam</h1>
            <div className="contactInfo">
              <div className="contactItem">
                <span className="icon">📞</span>
                <span>+91 94104 34567</span>
              </div>
              <div className="contactItem">
                <span className="icon">✉️</span>
                <span>info@minusclinic.com</span>
              </div>
            </div>
            <div className="socialLinks">
              <a href="#" className="socialIcon">
                fb
              </a>
              <a href="#" className="socialIcon">
                ig
              </a>
              <a href="#" className="socialIcon">
                yt
              </a>
            </div>
          </div>
        </div>

        <div className="contentSection">
          <div className="philosophySection">
            <h2 className="sectionTitle">
              Philosophy on Sustainable Weight Management
            </h2>
            <p className="description">
              Ms. Maariya Siam believes that true wellness is not just about the
              number on the scale, but about cultivating a sustainable
              relationship with food and one's body. Her approach moves beyond
              restrictive dieting, focusing instead on metabolic restoration and
              intuitive nourishment.
            </p>
            <p className="description">
              By integrating clinical nutritional science with behavioral
              psychology, she empowers clients to make lasting lifestyle
              changes. Her philosophy centers on "addition over
              subtraction"—adding nutrient-dense foods that fuel the body rather
              than purely subtracting calories, ensuring that weight loss is a
              byproduct of improved health rather than a stressful pursuit.
            </p>
          </div>

          <div className="programsSection">
            <h2 className="sectionTitle">Customized Nutrition Programs</h2>
            <p className="description">
              Every individual's metabolic profile is unique. Ms. Maariya
              designs highly personalized nutrition programs that cater to
              specific needs, whether it's managing insulin resistance,
              optimizing gut health, or preparing for bariatric procedures.
            </p>
            <ul className="featureList">
              <li className="featureItem">
                <span className="checkmark">✓</span>
                <span>Metabolic profiling and analysis</span>
              </li>
              <li className="featureItem">
                <span className="checkmark">✓</span>
                <span>Personalized meal planning for busy lifestyles</span>
              </li>
              <li className="featureItem">
                <span className="checkmark">✓</span>
                <span>Post-procedure nutritional support</span>
              </li>
              <li className="featureItem">
                <span className="checkmark">✓</span>
                <span>Continuous monitoring and adjustment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightSection">
        <div className="bookingCard">
          <div className="bookingHeader">
            <span className="calendarIcon">📅</span>
            <h3 className="bookingTitle">Book a Consultation</h3>
          </div>

          <div className="bookingForm">
            <div className="formRow nameRow">
              <div className="formGroup">
                <label className="label">FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              <div className="formGroup">
                <label className="label">FAMILY NAME</label>
                <input
                  type="text"
                  name="familyName"
                  placeholder="Doe"
                  value={formData.familyName}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>

            <div className="formGroup">
              <label className="label">YOUR PHONE</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 99999 99999"
                value={formData.phone}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div className="formGroup">
              <label className="label">SELECT DATE</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="input"
              />
            </div>

            <div className="formGroup">
              <label className="label">TIME</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="select"
              >
                <option value="08:30">08:30</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
              </select>
            </div>

            <button onClick={handleSubmit} className="bookButton">
              BOOK ONLINE →
            </button>

            <p className="termsText">
              By booking, you agree to our Terms & Conditions.
            </p>
          </div>
        </div>

        <div className="assistanceCard">
          <h3 className="assistanceTitle">Need immediate assistance?</h3>
          <p className="assistanceText">
            Call our front desk directly for urgent inquiries.
          </p>
          <button className="callButton">
            <span className="phoneIcon">📞</span>
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionistLanding;
