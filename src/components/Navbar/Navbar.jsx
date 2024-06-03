import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { MdRealEstateAgent } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="intro">
        <div className="navicons">
          <MdRealEstateAgent className="icon" />
          <span className="title">Tea Growers</span>
        </div>
        <div className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navitem"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="quality"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navitem"
            onClick={() => setIsMenuOpen(false)}
          >
            Quality
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navitem"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <button
          className="registerbtn"
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACT US
        </button>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
