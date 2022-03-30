import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>What is PSoC?</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <h1>
                        100+
                        <br />
                        Participants
                    </h1>
                    <h1>
                        90+
                        <br />
                        Mentees
                    </h1>
                </div>
                {/* <br /> */}
                <div className={styles.stat}>
                    <h1>
                        19+
                        <br />
                        Institutes
                    </h1>
                    <h1>
                        12+
                        <br />
                        States
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;
