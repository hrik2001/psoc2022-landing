import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import styles from "../styles/Timeline.module.scss";

function timeline() {
  return (
    <section className={styles.gradient}>
      <Navbar></Navbar>
      <Timeline />
    </section>
  );
}

export default timeline;
