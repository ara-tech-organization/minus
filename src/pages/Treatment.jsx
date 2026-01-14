import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TreatmentsHero from "../components/Treatments/TreatmentsHero";
import NonInvasiveTreatments from "../components/Treatments/NonInvasiveTreatments";
import MinimallyInvasive from "../components/Treatments/MinimallyInvasive";
import SurgicalProcedures from "../components/Treatments/SurgicalProcedures";
import CompareProcedures from "../components/Treatments/CompareProcedures";

const Treatment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div id="treatments">
      <div data-aos="fade-up">
        <TreatmentsHero />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <NonInvasiveTreatments />
      </div>
      <div data-aos="fade-left" data-aos-delay="300">
        <MinimallyInvasive />
      </div>
      <div data-aos="fade-right" data-aos-delay="400">
        <SurgicalProcedures />
      </div>
      <div data-aos="zoom-in" data-aos-delay="500">
        <CompareProcedures />
      </div>
    </div>
  );
};

export default Treatment;
