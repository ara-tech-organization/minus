import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SupplementsHero from "../components/Supplements/SupplementsHero";
import ProteinBars from "../components/Supplements/ProteinBars";

const Supplements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div id="supplements">
      <div data-aos="fade-up">
        <SupplementsHero />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <ProteinBars />
      </div>
    </div>
  );
};

export default Supplements;
