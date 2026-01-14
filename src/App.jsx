import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatment from "./pages/Treatment";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import DetailsPage from "./components/TreatmentDetails/Details";

import Specialists from "./pages/Specialists";
import Supplements from "./pages/Supplements";
import ViewProfile from "./pages/ViewProfile";
import NutritionistProfile from "./components/viewprofile/NutritionistProfile";
import CalfReduction from "./components/TreatmentDetails/CalfReduction";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatment />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/treatment/:id" element={<DetailsPage />} />
        <Route path="/treatment/calfReduction" element={<CalfReduction />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/nutritionist-profile" element={<NutritionistProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
