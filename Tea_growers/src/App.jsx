import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Quality from "./components/Quality/Quality";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Quality />
      <About />
      <Contact />
    </div>
  );
}

export default App;
