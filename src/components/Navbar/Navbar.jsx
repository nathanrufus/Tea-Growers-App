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
          <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} duration={500}  className="navitem">Home</Link>
          <Link activeClass="active" to='quality' spy={true} smooth={true} offset={-100} duration={500}  className="navitem">Quality</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500}  className="navitem">About</Link>
        </div>
        <button className="registerbtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>CONTACT US</button>
      </nav>
    </div>
  );
}

export default Navbar;
