import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import WorkSection from "../components/WorkSection";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WorkSection />
    </div>
  );
};

export default Home;
