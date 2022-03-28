import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <div className={styles.container}>
            <h4 className={styles.title}>Stay up to date.</h4>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                <Link href='twitter.com/pclubuiet'><Image src='/img/twitter.png' width='50px' height='50px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link href='instagram.com/pclubuiet'><Image src='/img/instagram.png' width='50px' height='50px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link href='pclubuiet@gmail.com'><Image src='/img/email.png' width='50px' height='50px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link href='linkedin.com/pclubuiet'><Image src='/img/linkedin.png' width='50px' height='50px' layout='fixed' alt=''/></Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer