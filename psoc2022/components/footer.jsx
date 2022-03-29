import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <div className={styles.container}>
            <h4 className={styles.title}>Stay up to date</h4>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                <Link passHref href='twitter.com/pclubuiet'><Image src='/img/twitter.png' width='40px' height='40px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link passHref href='instagram.com/pclubuiet'><Image src='/img/instagram.png' width='40px' height='40px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link passHref href='pclubuiet@gmail.com'><Image src='/img/email.png' width='40px' height='40px' layout='fixed' alt=''/></Link>
                </li>
                <li className={styles.listItem}>
                <Link passHref href='linkedin.com/pclubuiet'><Image src='/img/linkedin.png' width='40px' height='40px' layout='fixed' alt=''/></Link>
                </li>
            </ul>
            <h5 className={styles.pclub}>Made by <Image src='/img/pclub-logo.png' height='25px' width='25px' layout='fixed' alt='' /> with love ♥️.</h5>
        </div>
    )
}

export default Footer