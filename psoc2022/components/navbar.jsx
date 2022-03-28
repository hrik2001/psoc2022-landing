import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container}>
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