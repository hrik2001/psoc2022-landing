import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import styles from "../styles/Timeline.module.scss";
import Footer from "../components/Footer";
import Head from 'next/head'

function timeline() {
  return (
    <>
    <Head>
        <title>Timeline</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <section className={styles.gradient}>
      <Navbar></Navbar>
      <Timeline />
      <Footer />
    </section>
    </>
  );
}

export default timeline;
