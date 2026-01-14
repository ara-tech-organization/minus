import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Home/Hero";
import BodyContouringHero from "../components/Home/HomeHero";
import ServicesSection from "../components/Home/ServicesSection";
import HeroVideo from "../components/Home/HeroVideo";
import BookAppointment from "../components/Home/BookAppointment";
import AreasOfExpertise from "../components/Home/AreasOfExpertise";
import BodyTreatment from "../components/Home/BodyTreatment";
import HolisticApproach from "../components/Home/HolisticApproach";
import PatientTestimonials from "../components/Home/PatientTestimonials";
import FAQ from "../components/Home/FAQ";
import TransformationSteps from "../components/Home/TransformationSteps";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      offset: 80, // how far from viewport
      once: true, // whether animation happens only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="home">
      <div data-aos="fade-up">
        <BodyContouringHero />
      </div>
      <div data-aos="fade-up">
        <ServicesSection />
      </div>
      <div data-aos="fade-down">
        <HeroVideo />
      </div>
      <div data-aos="fade-up">
        <BookAppointment />
      </div>
      <div data-aos="fade-left">
        <AreasOfExpertise />
      </div>
      <div data-aos="fade-right">
        <BodyTreatment />
      </div>
      <div data-aos="fade-up">
        <HolisticApproach />
      </div>
      <div data-aos="zoom-in">
        <PatientTestimonials />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
      <div data-aos="fade-up">
        <TransformationSteps />
      </div>
    </div>
  );
};

export default Home;
