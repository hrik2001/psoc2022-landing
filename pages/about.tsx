import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss"
import AboutIntro from "../components/AboutIntro";
import AboutInfo from "../components/AboutInfo";



function about() {
  return (
    <div>
      <Navbar />
      <AboutIntro />
      <AboutInfo />
    </div>
  );
}

export default about;
