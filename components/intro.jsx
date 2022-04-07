import styles from "../styles/intro.module.css";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
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
            <div className={styles.introcontent}>
                <div className={styles.card}>
                    <h1 className={styles.title}>PClub Summer Of Code</h1>
                    <p className={styles.description}>
                        Your first open source contribution is on us.
                    </p>
                    <div className={styles.emailgroup}>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            className={styles.email}
                        />
                        <button className={styles.emailbutton}>Go!</button>
                    </div>
                    <p className={styles.sponsors}>Previous PSoC sponsors</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Image
                                src="/img/girl-script.png"
                                height="100px;"
                                width="100px;"
                                layout="fixed"
                                alt=""
                            />
                        </li>
                        <li className={styles.listItem}>
                            <Image
                                src="/img/balsamiq.png"
                                height="100px;"
                                width="100px;"
                                layout="fixed"
                                alt=""
                            />
                        </li>
                        <li className={styles.listItem}>
                            <Image
                                src="/img/bugsee.png"
                                height="100px;"
                                width="100px;"
                                layout="fixed"
                                alt=""
                            />
                        </li>
                        <li className={styles.listItem}>
                            <Image
                                src="/img/internwell.png"
                                height="100px;"
                                width="100px;"
                                layout="fixed"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div className={styles.card} id={styles.idek}>
                    <Image
                        src="/img/pair-programming.svg"
                        width="100%"
                        height="100%"
                        layout="fill"
                        alt=""
                        className={styles.pairimage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
