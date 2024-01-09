import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Quality from "./components/Quality/Quality";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Quality />
      <About />
    </div>
  );
}

export default App;
