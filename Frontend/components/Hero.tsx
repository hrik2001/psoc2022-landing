import React, { useRef } from "react";
import styles from "../styles/Hero.module.scss";
import Navbar from "./Navbar";
import Link from "next/link";

function Hero() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.introContainer}>
        <div className={styles.introtxt}>
          <h1>PClub Summer Of Code</h1>
          <p>Your first open source contribution is on us.</p>
          {/* <form action="submit">
                        <input type="email" placeholder='Enter your Email' required />
                    <form onSubmit={submission} action="submit">
                        <input  type="email" ref={emailInput} placeholder='Enter your Email' required />
                        <button type="submit">GO!</button>
                    </form> */}
          <p className={styles.link}>
            <Link href={"https://form.jotform.com/221604448619054"} passHref>
              Mentor Registration
            </Link>
          </p>
          {/* <p className={styles.linkSubtle}>
            <a href="pdf/Proposal.pdf" download>
              Mentor Example Proposal
            </a>
          </p> */}
        </div>
        <div className={styles.introAi}>
          <img src="/img/pair-programming.svg" alt="illustrations" />
        </div>
      </div>
      <div className={styles.arrowDown}>
        <img src="/img/arrow-down.svg" alt="arrow down" />
      </div>
    </div>
  );
}

export default Hero;
