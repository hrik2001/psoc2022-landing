import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
function Navbar() {
  const [colorChange,setColorChange]=useState(false);
  return (
    <nav className={styles.nav}>
        <div className={styles.imgcontainer}>
          <Link href ="/">
              <img src="./img/psoc-logo-1.png" alt="<P>Club logo" />
          </Link>
        </div>
        <div className={styles.linkcontainer}>
            <Link  href="/" passHref><p className={styles.link}>Home</p></Link>
            <Link  href="/timeline" passHref><p className={styles.link}>Timeline</p></Link>
            <Link  href="/about" passHref><p className={styles.link}>About</p></Link>
            {/* <Link  href="/logsign" passHref><p className={styles.link}>Login/Signup</p></Link> */}
        </div>
    </nav>
  )
}

export default Navbar
