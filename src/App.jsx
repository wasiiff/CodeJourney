import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Team from "./Pages/Team.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <main className="text-dark overflow-hidden bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
