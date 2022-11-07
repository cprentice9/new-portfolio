import React from "react";
import "./components/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/About" element={[<Header />, <About />]} />
          <Route path="/Projects" element={[<Header />, <Projects />]} />
          <Route path="/" element={[<Header />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
