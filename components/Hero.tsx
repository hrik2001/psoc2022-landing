import React, {useRef} from 'react'
import styles from '../styles/Hero.module.scss'
import Navbar from './Navbar'
import axios from 'axios';

function Hero() {
    const emailInput = useRef(null);

    function submission(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // @ts-ignore: Object is possibly 'null'.
        if(emailInput.current.value){
            // @ts-ignore: Object is possibly 'null'.
            //alert(emailInput.current.value);
            axios.post(
                "https://psoc2022-07d7.restdb.io/rest/email?apikey=0bd7016f40c009a912e69058e25bc811f8d07",
                {
                    // @ts-ignore: Object is possibly 'null'.
                    email: emailInput.current.value
                }
            ).then(
                console.log
            ).catch(
                console.error
            )
        }
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.introContainer}>
                <div className={styles.introtxt}>
                    <h1>PClub Summer Of Code</h1>
                    <p>
                        Your first open source contribution is on us.
                    </p>
                    <form onSubmit={submission} action="submit">
                        <input  type="email" ref={emailInput} placeholder='Enter your Email' required />
                        <button type="submit">GO!</button>
                    </form>
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
