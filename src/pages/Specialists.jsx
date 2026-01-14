import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import OurSpecialists from "../components/Specialists/HeroSection";
import LeadSpecialist from "../components/Specialists/DoctorProfile";
import ExpertTeam from "../components/Specialists/ExpertTeam";
import ConsultationCTA from "../components/Specialists/ConsultationCTA";

const Specialists = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="specialists">
      <div data-aos="fade-up">
        <OurSpecialists />
      </div>
      <div data-aos="fade-left" data-aos-delay="200">
        <LeadSpecialist />
      </div>
      <div data-aos="fade-right" data-aos-delay="300">
        <ExpertTeam />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400">
        <ConsultationCTA />
      </div>
    </div>
  );
};

export default Specialists;
