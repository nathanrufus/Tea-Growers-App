import React from "react";
import video from "../Assets/video2.mp4";
import "./Home.css";
function Home() {
  return (
    <div>
      <section className="home">
        <div className="video">
          <video src={video} muted autoPlay loop type="video/mp4"></video>
        </div>
        <div className="overlay"></div>
        <div className="content">
          <h1>Tea is the Leading export crop in Kenya </h1>
          <h2>
            Tea reduces the risk of premature death, heart disease, <br />{" "}
            stroke, and type 2 diabetes.
          </h2>
          <span className="teatruth">
            Lets grow Tea. Lets keep our health okay
          </span>
        </div>
      </section>
    </div>
  );
}

export default Home;
