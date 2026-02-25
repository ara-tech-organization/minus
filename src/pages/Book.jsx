import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookHero from "../components/Book/BookHero";
import BookVideo from "../components/Book/BookVideo";
import KeyTreatments from "../components/Book/KeyTreatments";
import TrustProof from "../components/Book/TrustProof";

const Book = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 80,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="book">
      <BookHero />
      <div data-aos="fade-down">
        <BookVideo />
      </div>
      <div data-aos="fade-up">
        <KeyTreatments />
      </div>
      <div data-aos="fade-up">
        <TrustProof />
      </div>
    </div>
  );
};

export default Book;
