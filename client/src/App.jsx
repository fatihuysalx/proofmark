import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import QRScanner from "./pages/QRScanner";
import Blockchain from "./pages/Blockchain";
import Contact from "./pages/Contact";
import AddProductButton from "./components/AddProductButton";



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
          <Route path="/qr" element={<QRScanner />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/contact" element={<Contact />} />       
        </Routes>
      </div>

      {/* Footer Her Sayfada Gösterilecek */}
      <Footer />
    </Router>
  );
}

export default App;