import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Services/Services.jsx";

function App() {
  return (
    <main className="text-dark overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <Services/>
    </main>
  );
}

export default App;
