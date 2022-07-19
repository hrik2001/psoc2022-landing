import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import ProjectSection from "../components/ProjectSection";
import Timeline from "../components/Timeline";
import TestamonialSection from "../components/TestamonialSection";
import Stats from "../components/Stats";
import Data from "../data/Stats";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
     <Head>
     <link rel="shortcut icon" href="/favicon.ico" />
        <title>PSoC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className={styles.container}>
      <Hero />
      <div className={styles.stats}>
        {Data.map((data, index) => {
          return <Stats key={index} {...data} />;
        })}
      </div>
      <WorkSection />
      <ProjectSection />
      <TestamonialSection />
      <Footer/>
    </div>
        </>
  );
};

export default Home;
