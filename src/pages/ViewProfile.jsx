import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import DoctorBooking from "../components/viewprofile/DoctorBooking";

const ViewProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div id="supplements">
      <div data-aos="fade-up">
        <DoctorBooking />
      </div>
    </div>
  );
};

export default ViewProfile;
