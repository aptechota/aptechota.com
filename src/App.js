import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "animate.css/animate.css";

import Nav from "./partials/Navbar";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="App ">
      <Nav />
      <div className="mt-16">
        <Routes forceRefresh>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
