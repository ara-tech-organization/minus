import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ClientSuccessHero from "../components/Testimonials/ClientSuccessHero";
import ClientJourneys from "../components/Testimonials/ClientJourneys";
import ClientTestimonials from "../components/Testimonials/Testimonials";
import JourneySection from "../components/Testimonials/JourneySection";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="testimonial">
      <div data-aos="fade-up">
        <ClientSuccessHero />
      </div>
      <div data-aos="fade-right" data-aos-delay="200">
        <ClientJourneys />
      </div>
      <div data-aos="zoom-in" data-aos-delay="300">
        <ClientTestimonials />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <JourneySection />
      </div>
    </div>
  );
};

export default Testimonial;
