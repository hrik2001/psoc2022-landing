import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import styles from "../styles/Timeline.module.scss";
import Footer from "../components/Footer";

function timeline() {
  return (
    <section className={styles.gradient}>
      <Navbar></Navbar>
      <Timeline />
      <Footer />
    </section>
  );
}

export default timeline;
