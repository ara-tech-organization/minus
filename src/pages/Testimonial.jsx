import React from "react";
import ClientSuccessHero from "../components/Testimonials/ClientSuccessHero";
import ClientJourneys from "../components/Testimonials/ClientJourneys";

import ClientTestimonials from "../components/Testimonials/Testimonials";
import JourneySection from "../components/Testimonials/JourneySection";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <ClientSuccessHero />
      <ClientJourneys />
      <ClientTestimonials />
      <JourneySection />
    </div>
  );
};

export default Testimonial;
