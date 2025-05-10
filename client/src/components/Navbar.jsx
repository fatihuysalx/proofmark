import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Web3 SupplyChain Logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          { to: "/", label: "Ana Sayfa" },
          { to: "/about", label: "Hakkımızda" },
          { to: "/qr", label: "QR Doğrulama" },
          { to: "/blockchain", label: "Blockchain" },
          { to: "/contact", label: "İletişim" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? "active" : ""}
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;