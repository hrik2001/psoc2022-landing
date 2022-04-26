<<<<<<< HEAD
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import WorkSection from "../components/WorkSection";
import styles from "../styles/Home.module.scss";
=======
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
>>>>>>> 91c1a891b4cd958cd731d134e513fc2e1808400a

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <WorkSection />
=======
      <Hero />
>>>>>>> 91c1a891b4cd958cd731d134e513fc2e1808400a
    </div>
  );
};

export default Home;
