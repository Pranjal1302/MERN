import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import React from "react";
import {  Route, Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import Registration from "./components/registration";
import Errorpage from "./components/errorpage";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
    </div>
  );
}

export default App;
