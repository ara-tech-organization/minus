import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Specialists from "./pages/Specialists";
import Supplements from "./pages/Supplements";
import ViewProfile from "./pages/ViewProfile";
import NutritionistProfile from "./components/viewprofile/NutritionistProfile";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
