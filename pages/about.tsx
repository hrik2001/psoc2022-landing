import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss"
import AboutIntro from "../components/AboutIntro";
import AboutInfo from "../components/AboutInfo";
import TeamSection from "../components/teamsection";
import Footer from "../components/Footer";
import Head from "next/head"


function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <AboutIntro />
      <AboutInfo />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default about;
