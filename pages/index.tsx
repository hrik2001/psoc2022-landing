import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Data from '../data/Stats'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.stats}>
        {Data.map((data, index)=>{
          return (<Stats key={index} {...data} />)
        })}
      </div>
    </div>
  )
}

export default Home
