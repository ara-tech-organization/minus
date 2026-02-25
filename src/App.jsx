import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatment from "./pages/Treatment";
import Testimonial from "./pages/Testimonial";

import DetailsPage from "./components/TreatmentDetails/Details";

import Specialists from "./pages/Specialists";
// import Supplements from "./pages/Supplements";
import ViewProfile from "./pages/ViewProfile";
import NutritionistProfile from "./components/viewprofile/NutritionistProfile";
import CalfReduction from "./components/TreatmentDetails/CalfReduction";
import Abdominoplasty from "./components/TreatmentDetails/Abdominoplasty";
import ScrollToTop from "./components/ScrollToTop";
import Book from "./pages/Book";
import ThankYou from "./pages/ThankYou";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatment />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Book />} />
        <Route path="/treatment/:id" element={<DetailsPage />} />
        <Route path="/treatment/calfReduction" element={<CalfReduction />} />
        <Route path="/treatment/abdominoplasty" element={<Abdominoplasty />} />
        <Route path="/specialists" element={<Specialists />} />
        {/* <Route path="/supplements" element={<Supplements />} /> */}
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/nutritionist-profile" element={<NutritionistProfile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;
