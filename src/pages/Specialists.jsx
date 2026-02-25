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
    <>
      <OurSpecialists />
      <LeadSpecialist />
      <ExpertTeam />
      <ConsultationCTA />
    </>
  );
};

export default Specialists;
