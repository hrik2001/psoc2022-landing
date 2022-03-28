import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/psoc-logo-1.png' width='40px' height='40px' layout='fixed' alt=''/> 
            <Link href='/'>PClub Summer Of Code</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                <Link href='/product/Team'>Team</Link>
                </li>
                <li className={styles.listItem}>
                <Link href='/product/Timeline'>Timeline</Link>
                </li>
                <li className={styles.listItem}>
                <Link href='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar