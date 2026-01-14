import React from "react";
import Hero from "../components/About/HeroSection";
import MissionVision from "../components/About/MissionVision";
import SpecialtyAreas from "../components/About/SpecialtyCard";
import PatientTestimonials from "../components/Home/PatientTestimonials";
import BookAppointment from "../components/Home/BookAppointment";

const About = () => {
  return (
    <div id="about">
      <Hero />
      <MissionVision />
      <SpecialtyAreas />
      <PatientTestimonials />
      <BookAppointment />
    </div>
  );
};

export default About;
