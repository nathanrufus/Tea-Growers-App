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
            It is increasingly appreciated that tea contains 
            polyphenols and other components that may reduce 
            the risk of developing chronic diseases such as cancer, 
            cardiovascular diseases, arthritis and diabetes.
            Natural substances called polyphenols are found in both 
            caffeinated and herbal teas. These substances are antioxidants,
             compounds that may help reduce the risk of certain chronic diseases.
            During processing, some polyphenols in tea are destroyed.
             Thus, tea powders, decaffeinated teas and bottled tea drinks 
             may not offer the same health benefits. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
