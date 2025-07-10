import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Subscribe from "../Components/Subscribe/Subscribe.jsx";
import Community from "../Components/Community/Community.jsx";

function Home() {
  return (
    <div className="mt-6">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Community />
    </div>
  );
}

export default Home;
