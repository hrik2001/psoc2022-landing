import styles from "../styles/how.module.css";
import Link from "next/link";
import Image from "next/image";

const how_it_works = [
    {
        id: 1,
        name: "Apply",
        title: "Apply",
        desc: "Interested mentees propose a project.",
        photo: "form.png",
    },
    {
        id: 2,
        name: "Code",
        title: "Code",
        desc: "Selected mentees, work on their project. mentees propose a project.",
        photo: "code.png",
    },
    {
        id: 3,
        name: "Contribute",
        title: "Contribute",
        desc: "Contribute your work with the Open-Source community. mentees propose a project.",
        photo: "earth.png",
    },
];

const How = ({ how }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>How does it work?</h1>
            <div className={styles.how}>
                {how_it_works.map((element) => (
                    <div className={styles.element}>
                        <div className={styles.media}>
                            <img
                                src={`/img/${element.photo}`}
                                alt=""
                                width="52.71px"
                                height="50px"
                                className={styles.pic}
                            />
                            <br />
                            <span className={styles.cat}>{element.title}</span>
                            <div className={styles.catInfo}>{element.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#">
                <h1 className={styles.know}>Know more{" >"}</h1>
            </a>
        </div>
    );
};

export default How;
