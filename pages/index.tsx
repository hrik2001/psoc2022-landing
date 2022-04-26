import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import ProjectSection from "../components/ProjectSection";
import Timeline from "../components/Timeline";
import TestamonialSection from "../components/TestamonialSection";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <WorkSection />
      <ProjectSection />
      <TestamonialSection />
    </div>
  );
};

export default Home;
