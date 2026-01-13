import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatment from "./pages/Treatment";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import DetailsPage from "./components/TreatmentDetails/Details";

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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
