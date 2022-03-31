import styles from "../styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

const socials = [
    {
        src: "/img/twitter.png",
        title: "Twitter",
        href: "twitter.com/pclubuiet",
    },
    {
        src: "/img/instagram.png",
        title: "Instagram",
        href: "instagram.com/pclubuiet",
    },
    {
        src: "/img/email.png",
        title: "Email",
        href: "pclubuiet@gmail.com",
    },
    {
        src: "/img/linkedin.png",
        title: "Linkedin",
        href: "linkedin.com/pclubuiet",
    },
];

const Footer = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Connect With us!</h4>
            <ul className={styles.list}>
                {socials.map((item) => (
                    <li className={styles.listItem}>
                        <Link passHref href={item.href}>
                            <div className={styles.socials_item}>
                                <Image
                                    src={item.src}
                                    width="30px"
                                    height="30px"
                                    layout="fixed"
                                    alt=""
                                    // className={styles.socials_image}
                                />
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <h5 className={styles.pclub}>
                Made with ♥️ by{" "}
                <Image
                    src="/img/pclub-logo.png"
                    height="50px"
                    width="50px"
                    layout="fixed"
                    alt=""
                />{" "}
                .
            </h5>
        </div>
    );
};

export default Footer;
