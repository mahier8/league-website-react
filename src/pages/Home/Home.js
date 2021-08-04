import React from "react";
import "./home.css";

import Intro from "../../components/Intro/Intro";
import Teams from "../../components/Teams/Teams";
import Tables from "../../components/Tables/Tables";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Intro />
      <Teams />
      <Tables />
      <Social />
      <Footer />
    </div>
  );
}

export default Home;
