import React from "react";
import OurSpecialists from "../components/Specialists/HeroSection";
import LeadSpecialist from "../components/Specialists/DoctorProfile";
import ExpertTeam from "../components/Specialists/ExpertTeam";
import ConsultationCTA from "../components/Specialists/ConsultationCTA";


const About = () => {
  return (
    <div id="specialists">
      <OurSpecialists />
      <LeadSpecialist />
      <ExpertTeam />
      <ConsultationCTA />
    </div>
  );
};

export default About;
