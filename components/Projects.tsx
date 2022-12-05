import React from "react";
import projects from "../data/Projects";
import styles from "../styles/projects.module.scss";
import Link from "next/link";

function Projects() {
  return(
    <section className={styles.projectSection}>
      <section>
        <h2 className={styles.projectHeading}>Projects</h2>
        <div className={styles.projectCardContainer}>
          {projects.map((item:  ProjectsProps, index) => {
            return (
              <Link href={`/projects/${encodeURIComponent(item.id)}`}>
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectCardImageContainer}>
                  <img src={item.img} alt="work card image" />
                </div>

                <h4>{item.name}</h4>

                <p>{item.descr}</p>
              </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Projects;
