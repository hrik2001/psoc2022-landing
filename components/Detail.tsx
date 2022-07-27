import React from "react";
import projects from "../data/Projects";
import styles from "../styles/projects.module.scss";
import Link from "next/link";


function Detail({id}) {
return(

  <section className={styles.projectSection}>
    <section>
      <h2 className={styles.projectHeading}>Projects</h2>
      <div className={styles.projectCardContainer}>


            {projects.filter((item:  ProjectsProps, index) => item.id === id).map((item:  ProjectsProps, index) => {
              return (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectCardImageContainer}>
                    <img src={item.img} alt="work card image" />
                  </div>

                  <h4>{item.name}</h4>

                  <p>{item.descr}</p>
                </div>
              );
            })
          }
      </div>
    </section>
  </section>
);
}

export default Detail;
