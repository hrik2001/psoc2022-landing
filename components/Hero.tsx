import React from 'react'
import styles from '../styles/Hero.module.scss'
import Navbar from './Navbar'
function Hero() {
  return (
    <div className={styles.container}>
        <Navbar />
        <div    className={styles.introContainer}>
            <div className={styles.introtxt}>
                <h1>PClub Summer Of Code</h1>
                <p>
                    Your first open source contribution is on us.
                </p>
                <form action="submit">
                <input type="email" placeholder='Enter your Email to get Subscription' required />
                <button type="submit">GO!</button>
                </form>
            </div>
            <div className={styles.introAi}>
                <img src="/img/pair-programming.svg" alt="illustrations" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
