import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../components/intro'
import How from '../components/how-it-works'
import { how_it_works } from '../how_it_works'
import Testimonial from '../components/testimonials'


export default function Home({how}) {
  return (
    <div>
      <Head>
        <title>PSOC 2022</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="PClub Summer Of Code" />
      </Head>
      <Intro/>
      <How how={how}/>
      <Testimonial/>
    </div>
  )
}


export const getStaticProps = async () => {
  const how = how_it_works;
  return {
    props: { how },
  }
}