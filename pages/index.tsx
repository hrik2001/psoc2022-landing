import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <WorkSection />
    </div>
  );
};

export default Home;
