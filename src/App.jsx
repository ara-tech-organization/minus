import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Specialists from "./pages/Specialists";
import Supplements from "./pages/Supplements";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/supplements" element={<Supplements />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
