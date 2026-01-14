import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/About/HeroSection";
import MissionVision from "../components/About/MissionVision";
import SpecialtyAreas from "../components/About/SpecialtyCard";
import PatientTestimonials from "../components/Home/PatientTestimonials";
import BookAppointment from "../components/Home/BookAppointment";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="about">
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <MissionVision />
      </div>
      <div data-aos="fade-left" data-aos-delay="300">
        <SpecialtyAreas />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400">
        <PatientTestimonials />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <BookAppointment />
      </div>
    </div>
  );
};

export default About;
