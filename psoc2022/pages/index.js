import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PSOC 2022</title>
        <meta name="description" content="PClub Summer Of Code" />
      </Head>
      
      <h1 className= {styles.title}>This is homepage.</h1>
      
    </div>
  )
}
