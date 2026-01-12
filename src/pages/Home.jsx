import React from "react";
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
  return (
    <div>
      {/* <Hero /> */}
      <BodyContouringHero />
      <ServicesSection />
      <HeroVideo />
      <BookAppointment />
      <AreasOfExpertise />
      <BodyTreatment />
      <HolisticApproach />
      <PatientTestimonials />
      <FAQ />
      <TransformationSteps/>
    </div>
  );
};

export default Home;
