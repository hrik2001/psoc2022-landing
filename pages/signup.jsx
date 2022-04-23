import Head from 'next/head'
import styles from "../styles/signup.module.css";
import Link from "next/link";
import Image from 'next/image'
import { Button } from 'bootstrap';

const SignUp = () => {
    return(
        <div className={styles.container}>
            <div className={styles.navcontainer}>
                <Image
                    src="/img/psoc-logo-1.png"
                    width="70px"
                    height="70px"
                    layout="fixed"
                    alt=""
                    className={styles.navlogo}
                />
                <ul className={styles.list} id={styles.introlist}>
                    <li className={styles.listItem}>
                        <Link href="/Team">Team</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/Timeline">Timeline</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/login">LogIn</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.signupcontent}>
                <div className={styles.card}>
                    <h1 className={styles.title}>World of open source awaits you.</h1>
                </div>
                <div className={styles.card} id={styles.idek}>
                <div className={styles.signup}>
                        <h1 className={styles.heading}>Sign Up</h1>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Name"
                            className={styles.form}
                        />
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Email"
                            className={styles.form}
                        />
                        <input
                            type="password"
                            id="fname"
                            name="fname"
                            placeholder='Password'
                            className={styles.form}
                        />
                        <Link href="/dashboard">Already a member?</Link>
                        <button className={styles.signupbutton}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp