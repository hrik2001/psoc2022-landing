import styles from '../styles/intro.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
    return (
        <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>PClub Summer Of Code</h1>
                    <p className={styles.description}>Your first open source contribution is on us.</p>
                    <p className={styles.sponsors}>Previous PSoC sponsors</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                        <Image src='/img/girl-script.png' height='60px;' width='60px;' layout='fixed' alt=''/>
                        </li>
                        <li className={styles.listItem}>
                        <Image src='/img/balsamiq.png' height='60px;' width='60px;' layout='fixed' alt=''/>
                        </li>
                        <li className={styles.listItem}>
                        <Image src='/img/bugsee.png' height='60px;' width='60px;' layout='fixed' alt=''/>
                        </li>
                        <li className={styles.listItem}>
                        <Image src='/img/internwell.png' height='60px;' width='60px;' layout='fixed' alt=''/>
                        </li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <Image src="/img/pair-programming.svg" width="80%" height="80%" layout='fill' alt=""/>
                </div>
        </div>
    )
}

export default Intro