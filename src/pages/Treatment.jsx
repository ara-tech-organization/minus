import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import TreatmentsHero from "../components/Treatments/TreatmentsHero";
import StickyTabs from "../components/Treatments/StickyTabs";
import NonInvasiveTreatments from "../components/Treatments/NonInvasiveTreatments";
import MinimallyInvasive from "../components/Treatments/MinimallyInvasive";
import SurgicalProcedures from "../components/Treatments/SurgicalProcedures";
import CompareProcedures from "../components/Treatments/CompareProcedures";

const Treatment = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      <TreatmentsHero />
      <StickyTabs />

      <NonInvasiveTreatments />
      <MinimallyInvasive />
      <SurgicalProcedures />
      <CompareProcedures />
    </>
  );
};

export default Treatment;
