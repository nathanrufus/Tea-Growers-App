import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { MdRealEstateAgent } from "react-icons/md";
function Navbar() {
  return (
    <div>
      <nav className="intro">
        <div className="navicons">
          <MdRealEstateAgent className="icon" />
          <span className="title">Tea Growers. </span>
        </div>
        <div className="nav">
          <Link className="navitem">Home</Link>
          <Link className="navitem">Quality</Link>
          <Link className="navitem">About</Link>
        </div>
        <button className="registerbtn">CONTACT US</button>
      </nav>
    </div>
  );
}

export default Navbar;
