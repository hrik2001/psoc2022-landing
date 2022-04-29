import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss"
import AboutIntro from "../components/AboutIntro";
import AboutInfo from "../components/AboutInfo";
import TeamSection from "../components/teamsection";
import Footer from "../components/Footer";


function about() {
  return (
    <div>
      <Navbar />
      <AboutIntro />
      <AboutInfo />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default about;
