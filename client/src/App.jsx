import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar Her Sayfada Gösterilecek */}
      <Navbar />

      {/* Sayfanın İçeriği */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qr" element={<h1>QR Doğrulama</h1>} />
          <Route path="/blockchain" element={<h1>Blockchain</h1>} />
          <Route path="/contact" element={<h1>İletişim</h1>} />
        </Routes>
      </div>

      {/* Footer Her Sayfada Gösterilecek */}
      <Footer />
    </Router>
  );
}

export default App;
