import React from "react";
import styles from "../styles/Timeline.module.scss";
import TimelineProps from "../data/Timeline";

console.log(
  TimelineProps,
  TimelineProps[0].startDate.toLocaleString("default", { month: "long" })
);

const timeString = (date: Date) => {
  return `${date.toLocaleString("default", { month: "long" })}
                   ${date.getDate()} , ${date.getFullYear()}`;
};
const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.sectionTitle}>
        <h2>timeline</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.timelineCenter}>
        {TimelineProps.map((item, index) => {
          return (
            <article key={index} className={styles.timelineItem}>
              <h4>
                {item.endDate
                  ? `${timeString(item.startDate)}\xa0\xa0\xa0-\xa0\xa0\xa0${timeString(
                      item.endDate
                    )}`
                  : timeString(item.startDate)}
              </h4>
              <h2>{item.title}</h2>
              {item.description && <p>{item.description}</p>}

              <span className={styles.number}>{index + 1}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
