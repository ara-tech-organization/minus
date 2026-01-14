import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactSection from "../components/Contact/ContactSection";
import ClinicLocations from "../components/Contact/ClinicLocations.jsx";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div id="contact">
      <div data-aos="fade-up">
        <ContactSection />
      </div>
      <div data-aos="fade-right" data-aos-delay="200">
        <ClinicLocations />
      </div>
    </div>
  );
};

export default Contact;
