import React from "react";
import "./About.css";
import tea from "../Assets/tea.avif";

function About() {
  return (
    <div>
      <section className="about">
        <h1>About</h1>
        <div className="aboutcontent">
          <img src={tea} alt="" />
          <div className="aboutea">
            <h2>Importance of Tea</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vel illum! Omnis deserunt porro cupiditate officia. Excepturi
              consectetur in aliquid, dolores odit adipisci perspiciatis natus
              aut officia rem? Ratione, ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
