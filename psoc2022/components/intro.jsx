import styles from '../styles/intro.module.css'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>PClub Summer Of Code</h1>
                    <p className={styles.description}>Your first open source contribution is on us.</p>
                </div>
                <div className={styles.card}>
                    <Image src="/img/pair-programming.svg" width="80%" height="80%" layout='fill' alt=""/>
                </div>
        </div>
    )
}

export default Intro