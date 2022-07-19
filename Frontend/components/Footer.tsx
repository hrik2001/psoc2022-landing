import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import contactData from "../data/contacts";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Contact us!</h1>
      <div className={styles.contactinfo}>
        {contactData.map((item) => (
          <a className={styles.contacts} key={item.name} href={item.src}>
            {/* <img src={item.img} alt="contact image" srcset="" height='40px' width='40px'/> */}
            <Image src={item.img} height="40px" width="40px"></Image>
            <p className={styles.contactTitle}>{item.name}</p>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
