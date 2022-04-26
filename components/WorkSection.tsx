import Image from "next/image";
import React from "react";
import styles from "../styles/Work.module.scss";
import { worksArray } from "../constants";

const arrMap = [
  {
    img: "/img/form.png",
    heading: "Apply",
    sub: "Interested mentees propose a project.",
  },
];

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      <section>
        <h2 className={styles.workHeading}>How does it works ? </h2>
        <div className={styles.workCardContainer}>
          {worksArray.map((item, index) => {
            return (
              <div key={index} className={styles.workCard}>
                <div className={styles.workCardImageContainer}>
                  <img src={item.photo} alt="work card image" />
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <a href="" className={styles.workLink}>
          to learn more &gt;
        </a>
      </section>
    </section>
  );
};

export default WorkSection;
