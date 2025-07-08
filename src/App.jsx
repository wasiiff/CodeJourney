import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Services/Services.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Subscribe from "./Components/Subscribe/Subscribe.jsx";

function App() {
  return (
    <main className="text-dark overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <Services/>
      <Banner/>
      <Subscribe/>
    </main>
  );
}

export default App;
