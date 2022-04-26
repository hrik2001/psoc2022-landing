import React from "react";
import styles from "../styles/Hero.module.scss";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default Hero;
