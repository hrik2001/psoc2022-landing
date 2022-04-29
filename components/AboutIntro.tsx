import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import styles from "../styles/aboutIntro.module.scss";
import Data from "../data/Stats";

function AboutIntro() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.psocLogo}>
        <img src="/img/psoc-logo-2.png" alt="logo" />
      </div>
      <div className={styles.stats}>
        {Data.map((data: statsProps, index) => {
          return <Stats key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default AboutIntro;
