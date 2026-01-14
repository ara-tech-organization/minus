import React from "react";
import TreatmentsHero from "../components/Treatments/TreatmentsHero";
import NonInvasiveTreatments from "../components/Treatments/NonInvasiveTreatments";
import MinimallyInvasive from "../components/Treatments/MinimallyInvasive";
import SurgicalProcedures from "../components/Treatments/SurgicalProcedures";
import CompareProcedures from "../components/Treatments/CompareProcedures";


const Treatment = () => {
    return <div>
        <TreatmentsHero />
        <NonInvasiveTreatments />
        <MinimallyInvasive />
        <SurgicalProcedures />
        <CompareProcedures/>
        
  </div>;
};

export default Treatment;
