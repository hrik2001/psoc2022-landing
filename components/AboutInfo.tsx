import React from "react";
import styles from "../styles/aboutInfo.module.scss";
import infoAbout from "../data/aboutInfo";

function AboutInfo() {
  return (
    <div className={styles.container}>
      {infoAbout.map((item: InfoProps, index) => {
        return (
          <div key={index} className={styles.infoCard}>
            <h4>{item.title}</h4>

            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AboutInfo;
