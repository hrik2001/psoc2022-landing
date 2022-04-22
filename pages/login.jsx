import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/login.module.css'

const Login = () => {
    return(
        <div>
            <Head>
                <title>PSOC 2022</title>
                <meta name="description" content="PClub Summer Of Code login page" />
            </Head>
            <h1 className={styles.title}>Coming Soon . . .</h1>
            <Image className={styles.img} src='/img/coding.svg' height="500px" width="500px" layout='fixed' alt=''/>
        </div>
    )
}

export default Login