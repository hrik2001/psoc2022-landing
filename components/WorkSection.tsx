import React from "react";
import styles from "../styles/Work.module.scss";

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      <section>
        <h2 className={styles.workHeading}>How does it works ? </h2>
        <div className={styles.workCardContainer}>
          {[1, 2, 3].map((item, index) => {
            return <div key={index}></div>;
          })}
        </div>
      </section>
    </section>
  );
};

export default WorkSection;
