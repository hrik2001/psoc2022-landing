import React from "react";
import styles from "../styles/Timeline.module.scss";

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.sectionTitle}>
        <h2>timeline</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.timelineCenter}>
        {[1, 2, 3, 4, 6, 7].map((item, index) => {
          return (
            <article key={index} className={styles.timelineItem}>
              <h4>2020</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur
                voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.
              </p>
              <span className={styles.number}>{index + 1}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
