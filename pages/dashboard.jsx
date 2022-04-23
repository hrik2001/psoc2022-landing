import Head from 'next/head'
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Image from 'next/image'
import { Button } from 'bootstrap';

const dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Image
                        src="/img/psoc-logo-1.png"
                        width="70px"
                        height="70px"
                        layout="fixed"
                        alt=""
                        className={styles.navlogo}
                />
                <Image
                    src="/img/profile.png"
                    width="70px"
                    height="70px"
                    layout="fixed"                            
                    alt=""
                    className={styles.profilelogo}
                />
            </div>
            <h1 className={styles.title}>Dashboard</h1>
        </div>
    )
}

export default dashboard