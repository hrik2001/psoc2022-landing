import Image from "next/image";
import React from "react";
import worksArray from "../data/Works";
import styles from "../styles/Work.module.scss";

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      <section>
        <h2 className={styles.workHeading}>How does it work ? </h2>
        <div className={styles.workCardContainer}>
          {worksArray.map((item: WorksProps, index) => {
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
