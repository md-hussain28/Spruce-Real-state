import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
