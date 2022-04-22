import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>What is PSoC?</h1>
                <p className={styles.description}>
                Pclub Summer of Code is a two-month-long open-source programme conducted by Pclub UIET every summer. PSoC has completed two years of educating young minds through robust initiatives and real world projects. We strive to be a community where students can polish and grow their technical skills, as well as a place where beginners can get started with open source development while encouraging diversity.
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
                <div className={styles.stat} id={styles.stat2}>
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
