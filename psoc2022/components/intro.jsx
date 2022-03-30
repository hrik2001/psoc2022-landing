import styles from "../styles/intro.module.css";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navcontainer}>
                <Image
                    src="/img/psoc-logo-1.png"
                    width="40px"
                    height="40px"
                    layout="fixed"
                    alt=""
                />
                <Link href="/">PClub Summer Of Code</Link>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/product/Team">Team</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/product/Timeline">Timeline</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>PClub Summer Of Code</h1>
                <p className={styles.description}>
                    Your first open source contribution is on us.
                </p>
                <p className={styles.sponsors}>Previous PSoC sponsors</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Image
                            src="/img/girl-script.png"
                            height="60px;"
                            width="60px;"
                            layout="fixed"
                            alt=""
                        />
                    </li>
                    <li className={styles.listItem}>
                        <Image
                            src="/img/balsamiq.png"
                            height="60px;"
                            width="60px;"
                            layout="fixed"
                            alt=""
                        />
                    </li>
                    <li className={styles.listItem}>
                        <Image
                            src="/img/bugsee.png"
                            height="60px;"
                            width="60px;"
                            layout="fixed"
                            alt=""
                        />
                    </li>
                    <li className={styles.listItem}>
                        <Image
                            src="/img/internwell.png"
                            height="60px;"
                            width="60px;"
                            layout="fixed"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div className={styles.card}>
                <Image
                    src="/img/pair-programming.svg"
                    width="100%"
                    height="100%"
                    layout="fill"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Intro;
